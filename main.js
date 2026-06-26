// Chờ HTML tải xong hoàn toàn mới thực thi code
document.addEventListener("DOMContentLoaded", function () {
    
    // Lấy phần tử nút bấm và ô hiển thị kết quả
    const checkBtn = document.getElementById('check-btn');
    const resultOutput = document.getElementById('result');
	const danhsachten = [
		"tuyen", "Tuyen", "tuyên", "Tuyên", "TUYEN", "TUYÊN",
		"minh tuyên", "Minh Tuyên", "Minh tuyên", "minh Tuyen", "MINH TUYEN", "MINH TUYÊN",
		"minh tuyen", "Minh Tuyen", "Minh tuyên", "minh Tuyen", "MINH TUYEN", "MINH TUYÊN",
		"vu minh tuyen", "Vu Minh Tuyen", "Vu minh tuyen", "vu Minh Tuyen", "VU MINH TUYEN", "VU MINH TUYÊN",
		"vũ minh tuyên", "Vũ Minh Tuyên", "Vũ minh tuyên", "vũ Minh Tuyên", "VŨ MINH TUYÊN", "VŨ MINH TUYÊN",
		"vu tuyen", "Vu Tuyen", "Vu tuyên", "vu Tuyen", "VU TUYEN", "VU TUYÊN",
		"vũ Tuyên", "Vũ Tuyên", "Vũn tuyên", "vũ Tuyên", "VŨ TUYÊN", "VŨ TUYÊN",

		"hieu", "Hieu", "hiếu", "Hiếu", "HIEU", "HIẾU",
 		"dang hieu", "Dang Hieu", "Dang hiếu", "dang Hieu", "DANG HIEU", "ĐĂNG HIẾU",
 		"đăng hiếu", "Đăng Hiếu", "Đăng hiếu", "đăng Hiếu", "ĐĂNG HIẾU", "ĐĂNG HIẾU",
 		"nguyen dang hieu", "Nguyen Dang Hieu", "Nguyen dang hieu", "nguyen Dang Hieu", "NGUYEN DANG HIEU", "NGUYÊN ĐĂNG HIẾU",
 		"nguyễn đăng hiếu", "Nguyễn Đăng Hiếu", "Nguyễn đăng hiếu", "nguyễn Đăng Hiếu", "NGUYỄN ĐĂNG HIẾU", "NGUYỄN ĐĂNG HIẾU",
 		"nguyen hieu", "Nguyen Hieu", "Nguyen hiếu", "nguyen Hieu", "NGUYEN HIEU", "NGUYÊN HIẾU",
 		"nguyễn Hiếu", "Nguyễn Hiếu", "Nguyễnn hiếu", "nguyễn Hiếu", "NGUYỄN HIẾU", "NGUYỄN HIẾU",

	]

    if (checkBtn) {
        // Lắng nghe sự kiện click vào nút Kiểm tra
        checkBtn.addEventListener('click', function () {
            // 1. Lấy giá trị Họ tên
            const fullname = document.getElementById('fullname').value.trim();
            
            // 2. Lấy giá trị Năm sinh và tính Tuổi (Năm hiện tại - Năm sinh)
            const birthyear = document.getElementById('birthyear').value;
            const currentYear = new Date().getFullYear();
            const age = birthyear ? (currentYear - parseInt(birthyear)) : "Chưa nhập";

            // 3. Lấy giá trị Giới tính được chọn
            const genderRadio = document.querySelector('input[name="gender"]:checked');
            const gender = genderRadio ? genderRadio.value : "Chưa chọn";

            // Kiểm tra nếu chưa điền đủ thông tin cơ bản
            if (!fullname || !birthyear || gender === "Chưa chọn") {
                resultOutput.innerHTML = "<span style='color: red;'>Vui lòng nhập đầy đủ thông tin!</span>";
                return;
            }

            // Logic xử lý tên (giữ lại từ code cũ của bạn)
            // let nameResult = "";
            // if (fullname.toLowerCase() === "minh") {
            //     nameResult = "thằng này GAY.";
            // } else {
            //     nameResult = "Bạn đoán tiếp đi.";
            // }

			let nameResult = "";
            if (danhsachten.some(name => fullname.toLowerCase().includes(name))) {
                nameResult = "thằng này GAY.";
            } else {
                nameResult = "Bạn đoán tiếp đi.";
            }

            // 4. Trả kết quả về ô kết quả (dùng innerHTML để xuống dòng cho đẹp)
            resultOutput.innerHTML = `
                <strong>Kết quả thông tin:</strong><br>
                - Họ tên: ${fullname} (${nameResult})<br>
                - Tuổi: ${age}<br>
                - Giới tính: ${gender}
            `;
        });
    }
});