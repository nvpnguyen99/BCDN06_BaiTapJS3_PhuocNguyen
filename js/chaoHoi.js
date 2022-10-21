/**
 * Mô hình 3 khối
 * Khối 1: input
 *      member
 * Khối 2: các bước xử lý
 *      B1: tạo hàm chào hỏi 
 *      B2: gắn hàm vào sự kiện onclick của nút button
 *      B3: lấy giá trị từ form
 *      B4: kiểm tra giá trị từ form bằng switch case
 *      B5: thông báo kết quả lên UI
 * Khối 3: output
 */

function chaoHoi() {
    var member = document.getElementById("selectMember").value;
    var helloTxt = "";
    switch (member) {
        case "Bố":
            helloTxt = "Xin chào Bố!";
            break;
        case "Mẹ":
            helloTxt = "Xin chào Mẹ!";
            break;
        case "Anh Trai":
            helloTxt = "Xin chào Anh Trai!";
            break;
        case "Em Gái":
            helloTxt = "Xin chào Em Gái!";
            break;
        default:
            alert("Chưa chọn thành viên");
            break;
    }
    document.getElementById("chaoHoiResult").innerHTML = helloTxt;
}

document.getElementById("chaoHoiBtn").onclick = chaoHoi;