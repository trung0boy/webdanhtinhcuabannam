document.addEventListener("DOMContentLoaded", function () {
    // Lấy phần tử nút bấm và ô hiển thị kết quả
    const checkBtn = document.getElementById('check-btn');
    const resultOutput = document.getElementById('result');

    // Danh sách các tên nghi vấn sẽ bị chẩn đoán "GAY mặc định"
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
        "nguyễn Hiếu", "Nguyễn Hiếu", "Nguyễnn hiếu", "nguyễn Hiếu", "NGUYỄN HIẾU", "NGUYỄN HIẾU"
    ];

    if (checkBtn) {
        // Lắng nghe sự kiện click vào nút Kiểm tra
        checkBtn.addEventListener('click', function () {
            // 1. Lấy giá trị Họ tên và chuẩn hóa
            const fullname = document.getElementById('fullname').value.trim();
            
            // 2. Lấy giá trị Năm sinh và tính Tuổi
            const birthyear = document.getElementById('birthyear').value;
            const currentYear = new Date().getFullYear();
            const age = birthyear ? (currentYear - parseInt(birthyear)) : "Chưa nhập";

            // 3. Lấy giá trị Giới tính được chọn
            const genderRadio = document.querySelector('input[name="gender"]:checked');
            const gender = genderRadio ? genderRadio.value : "Chưa chọn";

            // Kiểm tra nếu chưa điền đủ thông tin cơ bản
            if (!fullname || !birthyear || gender === "Chưa chọn") {
                resultOutput.innerHTML = "<span style='color: #ef4444; font-weight: bold;'>⚠️ Vui lòng nhập đầy đủ thông tin trước khi kiểm tra!</span>";
                resultOutput.style.borderColor = "#fecaca";
                resultOutput.style.backgroundColor = "#fef2f2";
                return;
            }

            const lowerFullname = fullname.toLowerCase();

            // Khởi tạo các biến chứa kết quả hiển thị
            let nameResult = "";
            let borderColor = "#cbd5e1";
            let backgroundColor = "#f8fafc";

            // Kiểm tra xem tên có nằm trong danh sách "bị chỉ định Gay" hay không
            let isDefaultGay = danhsachten.some(name => lowerFullname.includes(name.toLowerCase()));

            if (isDefaultGay) {
                // Tên nằm trong "danh sách đen" -> Chắc chắn GAY (Màu hồng đậm)
                nameResult = "<span class='status-les' style='color:#e11d48;'>Thằng này chắc chắn GAY 🏳️‍🌈.</span>";
                borderColor = "#fbcfe8";
                backgroundColor = "#fdf2f8";
            } else {
                // Tên bình thường -> Xử lý ngẫu nhiên 3 trường hợp dựa trên giới tính
                const rand = Math.random(); // Trả về số thực từ 0 đến sát 1

                if (gender === "Nữ") {
                    if (rand < 0.33) {
                        // Trường hợp 1.1: Bình thường
                        nameResult = "<span class='status-straight'>Bạn là Nữ thẳng hoàn toàn bình thường 🌸.</span>";
                        borderColor = "#bbf7d0"; // Viền xanh lá
                        backgroundColor = "#f0fdf4"; // Nền xanh lá nhạt
                    } else if (rand < 0.66) {
                        // Trường hợp 1.2: Les (Đồng tính nữ)
                        nameResult = "<span class='status-les'>Phát hiện triệu chứng LES ngầm! 👩‍❤️‍👩</span>";
                        borderColor = "#fbcfe8"; // Viền hồng
                        backgroundColor = "#fdf2f8"; // Nền hồng nhạt
                    } else {
                        // Trường hợp 1.3: Có triệu chứng nổi loạn
                        nameResult = "<span class='status-warning'>Có triệu chứng tomboy tinh nghịch, cần chú ý thêm! 👀</span>";
                        borderColor = "#fef08a"; // Viền vàng
                        backgroundColor = "#fefce8"; // Nền vàng nhạt
                    }
                } 
                else if (gender === "Nam") {
                    if (rand < 0.33) {
                        // Trường hợp 2.1: Bình thường
                        nameResult = "<span class='status-straight'>Bạn là Nam thẳng chuẩn Men 100%! 💪</span>";
                        borderColor = "#bbf7d0"; // Viền xanh lá
                        backgroundColor = "#f0fdf4"; // Nền xanh lá nhạt
                    } else if (rand < 0.66) {
                        // Trường hợp 2.2: Gay
                        nameResult = "<span class='status-gay'>Phát hiện triệu chứng GAY tiềm ẩn! 🦄</span>";
                        borderColor = "#e9d5ff"; // Viền tím
                        backgroundColor = "#faf5ff"; // Nền tím nhạt
                    } else {
                        // Trường hợp 2.3: Có triệu chứng (lung lay)
                        nameResult = "<span class='status-warning'>Độ thẳng đang lung lay dữ dội, rất dễ bị bẻ cong! 🌀</span>";
                        borderColor = "#fef08a"; // Viền vàng
                        backgroundColor = "#fefce8"; // Nền vàng nhạt
                    }
                } 
                else {
                    // Giới tính "Khác"
                    if (rand < 0.5) {
                        nameResult = "<span class='status-gay'>Cực kỳ cá tính và đầy sắc màu cầu vồng! 🌈✨</span>";
                        borderColor = "#fbcfe8";
                        backgroundColor = "#fdf2f8";
                    } else {
                        nameResult = "<span class='status-straight'>Bí ẩn, độc lạ và là mảnh ghép thú vị của vũ trụ! 🌌</span>";
                        borderColor = "#cbd5e1";
                        backgroundColor = "#f8fafc";
                    }
                }
            }

            // Cập nhật phong cách khung kết quả dựa theo trạng thái chẩn đoán
            resultOutput.style.borderColor = borderColor;
            resultOutput.style.backgroundColor = backgroundColor;

            // 4. Trả kết quả hiển thị cuối cùng
            resultOutput.innerHTML = `
                <strong class="result-title">🔍 Kết quả phân tích độ thẳng:</strong>
                • <strong>Họ tên:</strong> ${fullname}<br>
                • <strong>Tuổi:</strong> ${age} tuổi<br>
                • <strong>Giới tính sinh học:</strong> ${gender}<br>
                • <strong>Kết luận:</strong> ${nameResult}
            `;
        });
    }
});
