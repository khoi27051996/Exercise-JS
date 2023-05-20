// Bài 1 : Quản Lý Tuyển sinh
/**
 * Input : Cho Phép người dùng nhập vào Điểm chuẩn , Điểm 3 môn . 
 * 
 * Process: Tạo Function cho từng Loại khu vực , loại đối tượng .. khi họ chọn sẽ tương ứng với điểm ưu tiên loại đó.
 * DOM tới điểm 3 môn
 * Tính Tổng điểm 3 môn so + với điểm ưu tiên so sánh với điểm chuẩn để ra kết quả đậu hay rớt ( thêm điều kiện k có bất kỳ môn nào = 0)
 * 
 * OUTPUT :  Show ra điểm tổng điểm 3 môn người dùng nhập ,
 * hiện ra kết quả họ đậu hay rớt
 */

//Tạo sự kiện điểm ưu tiên tương ứng với từng loại khu vực
function poinArea(area) {
    if (area === 'A') return 2;
    if (area === 'B') return 1;
    if (area === 'C') return 0.5;
    return 0;
    console.log(area)
}
function poinType(type) {
    if (type === '1') return 2.5;
    if (type === '2') return 1.5;
    if (type === '3') return 1;
    return 0;
}


function exercive1() {
    var benchmark = document.getElementById('benchmark').value * 1;
    var subjec1 = document.getElementById('subjec1').value * 1;
    var subjec2 = document.getElementById('subjec2').value * 1;
    var subjec3 = document.getElementById('subjec3').value * 1;

    var area = poinArea(area); // khai báo biến tương ứng với từng event để tham ra tính tổng điểm
    var type = poinType(type);

    var totalPoin = subjec1 + subjec2 + subjec3 + area + type

    var show1 = document.getElementById('show1').innerHTML = totalPoin + '-' + 'Điểm';

    var show2 = document.getElementById('show2');

    if (totalPoin > benchmark && subjec1 !== 0 && subjec2 !== 0 && subjec3 !== 0) {
        show2.innerHTML = 'Đậu'
    } else {
        show2.innerHTML = 'Rớt'
    }
}
var btnEx1 = document.getElementById('btnEx1').onclick = exercive1;

//Bài 2 : Tính tiền điện:
/**
 * Input: Cho Phép người dùng nhập tên sử dụng, số kW tiêu thụ
 * 
 * Process: Dom đến từng Input; 
 * tính tiền theo dưa theo kW tiêu thụ biết rằng :
 * 50kW = 500đ / kW
 * 50kW tiếp = 650đ / kw ( từ kw 50 đến kw 100)
 * 100kW tiếp = 850đ / kW ( từ kw 100 đến kw 200)
 * 150kW tiếp = 1100 đ / kW ( từ kw 200 đến kw 350)
 * còn lại = 1300 đ / kW ( từ kW 350 trở đi)
 * 
 * OUTput: Hiện thị lên thông tin người dùng + số tiền cần thanh toán
 */

function billElectric() {
    var user = document.getElementById('user').value;
    var numberKw = document.getElementById('numberKw').value * 1;
    var bill;
    if (numberKw <= 50) {
        bill = numberKw * 500;
    } else if (numberKw <= 100) {
        bill = (50 * 500) + ((numberKw - 50) * 650);
    } else if (numberKw <= 200) {
        bill = (50 * 500) + (50 * 650) + ((numberKw - 100) * 650)
    } else if (numberKw <= 350) {
        bill = (50 * 500) + (50 * 650) + (100 * 850) + ((numberKw - 200) * 1100);
    } else {
        bill = (50 * 500) + (50 * 650) + (100 * 850) + (150 * 1100) + ((numberKw - 350) * 1300)
    }
    var show3 = document.getElementById('show3').innerHTML = user;
    var show4 = document.getElementById('show4').innerHTML = bill.toLocaleString(); //hiện thị số chuỗi chia cho dễ nhìn
    var result2 = document.getElementById('result2');
    result2.style.display = 'block'
}
document.getElementById('btnEx2').onclick = billElectric;


//Bài 3: Tính thuế thu nhập cá nhân :
/**
 * Input: Cho người dùng nhập vào Tổng thu nhập năm , số người phụ thuộc
 * 
 * Process: Dom tới từng input:
 * biết rằng thu nhập chịu thuê = Tổng thu nhập 1 năm - 4 triệu - ( số người phụ thuộc * 1.600.000)
 * từ đó tính ra số thuế phải đóng
 * 
 * Output: Show ra tên người chịu thuế và thuế phải đóng theo thu nhập.
 */

function tax() {
    var user2 = document.getElementById('user2').value;

    var totalIncome = document.getElementById('totalIncome').value * 1;
    var numberDependents = document.getElementById('numberDependents').value * 1;

    var totalTax;
    if (totalIncome <= 60e+6) {
        totalTax = (totalIncome - 4e+6 - (numberDependents * 1.6e+6)) * 0.05;
    } else if (totalIncome <= 120e+6) {
        totalTax = (totalIncome - 4e+6 - (numberDependents * 1.6e+6)) * 0.1;
    } else if (totalIncome <= 210e+6) {
        totalTax = (totalIncome - 4e+6 - (numberDependents * 1.6e+6)) * 0.15;
    } else if (totalIncome <= 384e+6) {
        totalTax = (totalIncome - 4e+6 - (numberDependents * 1.6e+6)) * 0.2;
    } else if (totalIncome <= 624e+6) {
        totalTax = (totalIncome - 4e+6 - (numberDependents * 1.6e+6)) * 0.25;
    } else if (totalIncome <= 960e+6) {
        totalTax = (totalIncome - 4e+6 - (numberDependents * 1.6e+6)) * 0.3;
    } else {
        totalTax = (totalIncome - 4e+6 - (numberDependents * 1.6e+6)) * 0.35;
    }
    var show6 = document.getElementById('show6');
    show6.innerHTML = user2;
    var show5 = document.getElementById('show5').innerHTML = totalTax.toLocaleString()
    var result3 = document.getElementById('result3').style.display = 'block'
}

document.getElementById('btnEx3').onclick = tax


//Bài 4: Tính tiền cáp

/**
 * Input: Cho người dùng nhập dô mã khách hàng, chọn loại khách hàng, nhập vô số kết nối tiêu thụ
 * 
 * Process: Dom với từng dữ liệu của input
 * xuất ra giá tiền tương đương với loại khách hàng
 * từ đó tính tiền phải đóng theo tổng giá tiền
 * 
 * Output: Show ra MKH và số tiền phải đóng
 */


function selectType() {
    var typeClient = document.getElementById('typeClient').value;
    console.log(typeClient);
    var cardHidden = document.getElementById('cardHidden');
    if (typeClient == 'enterprise') {
        cardHidden.style.display = 'block'
    } else {
        cardHidden.style.display = 'none'
    }
}
function billCable () {
    var user3 = document.getElementById('user3').value;
    var numberChannel = document.getElementById('numberChannel').value*1;
    var numberBasic = document.getElementById('numberBasic').value*1;

    var show7 = document.getElementById('show7');
    show7.style.color = 'red'
    show7.innerHTML = user3
   
    

    var bill = '';
    
    var typeClient = document.getElementById('typeClient').value; 
    
    if (typeClient == 'guest') {
        bill = 4.5 + 20.5 +(numberChannel * 7.5)
    } else if (typeClient == 'enterprise' && numberBasic<=10 ) {
        bill = 15 + 75 + (50 * numberChannel)
    } else if (typeClient == 'enterprise' && numberBasic > 10) {
        bill = 15 + 75 + (5 * (numberBasic - 10)) + (50 * numberChannel)
    }
    var show8 = document.getElementById ('show8');
    show8.style.color = 'red'
    show8.innerHTML = bill.toLocaleString() + '$'
    
}
document.getElementById('btnEx4').onclick = billCable

