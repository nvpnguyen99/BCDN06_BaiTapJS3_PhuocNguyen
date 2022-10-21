/**
 * Mô hình 3 khối:
 * Khối 1: input
 *      num1, num2, num3
 * Khối 2: các bước xử lý
 *      B1: tạo hàm chào hỏi 
 *      B2: gắn hàm vào sự kiện onclick của nút button
 *      B3: lấy giá trị từ form
 *      B4: tạo biến đếm số chẵn
 *      B5: kiểm tra số chẵn (số chia hết cho 2)
 *          nếu là số chẵn thì tăng biến đếm
 *      B6: số lượng số lẻ : oddNumber = 3 - evenNumber
 *      B7: in kết quả lên UI
 * Khối 3: Output
 *      Số lượng số chẵn, số lượng số lẽ
 *      evenNumber, oddNumber
 */

function demSo(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var num3 = document.getElementById("num3").value;
    var evenNumber = 0;
    var oddNumber = 0;

   if(num1 % 2 == 0)
   evenNumber++;

   if(num2 % 2 == 0)
   evenNumber++;

   if(num3 % 2 == 0)
   evenNumber++;

   oddNumber = 3 - evenNumber;

   document.getElementById("demSoResult").innerHTML = "Số lượng số chẵn: " + evenNumber + "<br>Số lượng số lẻ: " + oddNumber;
}

document.getElementById("demSoBtn").onclick = demSo;