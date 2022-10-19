/**
 * Mô hình 3 khối
 * Khối 1: Input
 *      3 số nguyên
 *      num1, num2, num3
 * Khối 2: Các bước xử lý
 *      B1: Nhận giá trị từ form
 *      B2: Tìm số lớn nhất => tiếp tục so sánh để tìm 2 số kế tiếp
 *      B3: Thông báo kết quả
 *          Gắn hàm vào sự kiện onlick của button
 * Khối 3: Output
 *      chuỗi số đã được sắp xếp tăng dần
 */

function sapXepTangDan(){
    var num1 = document.getElementById("number1").value;
    var num2 = document.getElementById("number2").value;
    var num3 = document.getElementById("number3").value;
    var chuoiSoTangDan = "";
    if(Number(num1) >= Number(num2) && Number(num1) >= Number(num3)){
       if(Number(num2) >= Number(num3)){
        chuoiSoTangDan += num3 + ", " + num2 + ", " + num1; 
       } else {
        chuoiSoTangDan += num2 + ", " + num3 + ", " + num1; 
       }
    } else if(Number(num2) >= Number(num1) && Number(num2) >= Number(num3)){
        if(Number(num1) >= Number(num3)){
         chuoiSoTangDan += num3 + ", " + num1 + ", " + num2; 
        } else {
         chuoiSoTangDan += num1 + ", " + num3 + ", " + num2; 
        }
     } else if(Number(num3) >= Number(num1) && Number(num3) >= Number(num2)){
        if(Number(num1) >= Number(num2)){
         chuoiSoTangDan += num2 + ", " + num1 + ", " + num3; 
        } else {
         chuoiSoTangDan += num1 + ", " + num2 + ", " + num3; 
        }
     } else{
        chuoiSoTangDan += num1 + ", " + num2 + ", " + num3; 
     }

    

     document.getElementById("sapXepResult").innerHTML = chuoiSoTangDan;

}

document.getElementById("sapXepBtn").onclick = sapXepTangDan;