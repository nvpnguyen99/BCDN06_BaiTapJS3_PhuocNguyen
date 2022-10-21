/**
 * Mô hình 3 khối
 * Khối 1: input
 *      3 cạnh tam giác
 *      edge1, edge2, edge3
 * Khối 2: các bước xử lý
 *      B1: tạo hàm chào hỏi 
 *      B2: gắn hàm vào sự kiện onclick của nút button
 *      B3: lấy giá trị từ form
 *      B4: các cạnh là cạnh tam giác nếu thoả mãn edge1 + edge2 > edge3 hoặc edge3 + edge2 > edge1 hoặc edge3 + edge1 > edge2
 *          là tam giác đều nếu edge1 = edge2 = edge3
 *          là tam giác cân nếu edge1 = edge2 hoặc edge1 = edge3 hoặc edge2 = edge3
 *          là tam giác vuông nếu edge3^2 = edge1^2 + edge2^2 hoặc  edge1^2 = edge2^2 + edge3^2 hoặc edge2^2 = edge3^2 + edge1^2
 *      B5: Thông báo kết quả trên UI
 * Khối 3:
 */

function xacDinhTamGiac(){
    var edge1 = Number(document.getElementById("edge1").value);
    var edge2 = Number(document.getElementById("edge2").value);
    var edge3 = Number(document.getElementById("edge3").value);
    var textResult = "";

    if(edge1 + edge2 > edge3 && edge1 + edge3 > edge2 && edge2 + edge3 > edge1){
        if(edge1 == edge2 || edge1 == edge3 || edge2 == edge3){
            if(edge1 == edge2 && edge2 == edge3){
                textResult = "👉 Hình tam giác đều";
            } else{
                textResult = "👉 Hình tam giác cân";
            }
        }
        if(Math.pow(edge1,2) == Math.pow(edge2,2) + Math.pow(edge3,2) || Math.pow(edge2,2) == Math.pow(edge1,2) + Math.pow(edge3,2) || Math.pow(edge3,2) == Math.pow(edge2,2) + Math.pow(edge1,2)){
            textResult = "👉 Hình tam giác vuông";
        }
    } else{
        alert("Dữ liệu không hợp lệ");
    }

    document.getElementById("duDoanResult").innerHTML = textResult;
}

document.getElementById("duDoanBtn").onclick = xacDinhTamGiac;