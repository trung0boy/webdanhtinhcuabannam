document.addEventListener("DOMContentLoaded", function () {
    // Lấy phần tử nút bấm và ô hiển thị kết quả
    const checkBtn = document.getElementById('check-btn');
    const resultOutput = document.getElementById('result');

    // Danh sách các tên nghi vấn sẽ bị chẩn đoán "GAY mặc định"
    const danhsachgay = [
        "tuyen", "Tuyen", "tuyên", "Tuyên", "TUYEN", "TUYÊN",
        "minh tuyên", "Minh Tuyên", "Minh tuyên", "minh Tuyen", "MINH TUYEN", "MINH TUYÊN",
        "minh tuyen", "Minh Tuyen", "Minh tuyên", "minh Tuyen", "MINH TUYEN", "MINH TUYÊN",
        "vu minh tuyen", "Vu Minh Tuyen", "Vu minh tuyen", "vu Minh Tuyen", "VU MINH TUYEN", "VU MINH TUYÊN",
        "vũ minh tuyên", "Vũ Minh Tuyên", "Vũ minh tuyên", "vũ Minh Tuyên", "VŨ MINH TUYÊN", "VŨ MINH TUYÊN",
        "vu tuyen", "Vu Tuyen", "Vu tuyên", "vu Tuyen", "VU TUYEN", "VU TUYÊN",
        "vũ Tuyên", "Vũ Tuyên", "Vũn tuyên", "vũ Tuyên", "VŨ TUYÊN", "VŨ TUYÊN",


        "dang", "Dang", "đăng", "Đăng", "DANG", "ĐĂNG",
        "nguyen dang", "Nguyen Dang", "Nguyen đăng", "nguyen Dang", "NGUYEN DANG", "NGUYÊN ĐĂNG",
        "nguyễn đăng", "Nguyễn Đăng", "Nguyễn đăng", "nguyễn Đăng", "NGUYỄN ĐĂNG", "NGUYỄN ĐĂNG",
        "van dang", "Van Dang", "Van đăng", "van Dang", "VAN DANG", "VAN ĐĂNG",
        "văn đăng", "Văn Đăng", "Văn đăng", "văn Đăng", "VĂN ĐĂNG", "VĂN ĐĂNG",
        "nguyen van dang", "Nguyen Van Dang", "Nguyen văn đăng", "nguyen Van Dang", "NGUYEN VAN DANG", "NGUYÊN VĂN ĐĂNG",
        "nguyễn văn đăng", "Nguyễn Văn Đăng", "Nguyễn văn đăng", "nguyễn Văn Đăng", "NGUYỄN VĂN ĐĂNG", "NGUYỄN VĂN ĐĂNG"
    ];

    const danhsachtencony = [
        "hieu", "Hieu", "hiếu", "Hiếu", "HIEU", "HIẾU",
        "dang hieu", "Dang Hieu", "Dang hiếu", "dang Hieu", "DANG HIEU", "ĐĂNG HIẾU",
        "đăng hiếu", "Đăng Hiếu", "Đăng hiếu", "đăng Hiếu", "ĐĂNG HIẾU", "ĐĂNG HIẾU",
        "nguyen dang hieu", "Nguyen Dang Hieu", "Nguyen dang hieu", "nguyen Dang Hieu", "NGUYEN DANG HIEU", "NGUYÊN ĐĂNG HIẾU",
        "nguyễn đăng hiếu", "Nguyễn Đăng Hiếu", "Nguyễn đăng hiếu", "nguyễn Đăng Hiếu", "NGUYỄN ĐĂNG HIẾU", "NGUYỄN ĐĂNG HIẾU",
        "nguyen hieu", "Nguyen Hieu", "Nguyen hiếu", "nguyen Hieu", "NGUYEN HIEU", "NGUYÊN HIẾU",
        "nguyễn Hiếu", "Nguyễn Hiếu", "Nguyễnn hiếu", "nguyễn Hiếu", "NGUYỄN HIẾU", "NGUYỄN HIẾU",
        "nguyễn hieu", "Nguyễn Hieu", "Nguyễn hiếu", "nguyễn Hieu", "NGUYỄN HIEU", "NGUYỄN HIẾU"
    ];

    const danhsachtenadmin = [ // tên admin sẽ được chẩn đoán chắc chắn bình thường
        "trung","Trung","TRUNG",
        "thanh trung","Thanh Trung","Thanh trung","thanh Trung","THANH TRUNG","THANH Trung",
        "thành trung","Thành Trung","Thành trung","thành Trung","THÀNH TRUNG","THANH trung",
        "THÀNH trung","THÀNH Trung","nguyễn trung", "Nguyễn trung","NGUYỄN trung",
        "nguyễn Trung","NGUYEN Trung","NGUYEN trung","NGUYỄN TRUNG","nguyen trung","Nguyen trung","NGUYEN TRUNG",
        "nguyen Trung","Nguyen Trung","Nguyễn Trung","NGUYỄN Trung",
        "nguyen thanh trung","Nguyen thanh trung","nguyen thanh Trung","NGUYEN thanh trung",
        "Nguyen Thanh Trung","nguyen Thanh trung","NGUYEN THANH TRUNG","NGUYEN Thanh Trung",
        "nguyễn thành trung","nguyễn Thành trung","NGUYỄN thành trung","Nguyen Thành Trung",
        "Nguyễn Thành Trung","nguyễn thành Trung","NGUYỄN Thành Trung","NGUYEN THÀNH TRUNG",
        "Nguyễn thành trung","NGUYỄN THÀNH TRUNG","nguyen thành trung","nguyễn thanh trung",
        "nguyen Thanh trung","Nguyễn thanh trung","nguyễn Thanh trung","Nguyễn Thanh Trung",
        "NGUYỄN THANH TRUNG","nguyen thanh Trung","nguyễn thành Trung"
      
    ];

    function getAgeDialogue(age) { // kiểm tra tuổi
        let dialogues = [];

        if (age < -1000000) {
            dialogues = [
                "Tuổi này là từ thời vụ nổ Big Bang à?",
                "Bạn sống trước cả khi Trái Đất hình thành luôn?",
                "Kính lão đắc thọ, cụ cố của vũ trụ ơi!"
            ];
        } else if (age < -500000) {
            dialogues = [
                "Thời này loài người còn chưa tiến hóa xong nữa.",
                "Bạn là người tối cổ phiên bản đời đầu đúng không?",
                "Tuổi âm vô cực thế này ai chơi lại bạn."
            ];
        } else if (age < -100000) {
            dialogues = [
                "Chắc bạn sống qua mấy kỷ băng hà rồi nhỉ?",
                "Thời tiền sử vẫy gọi bạn quay về kìa.",
                "Cụ tổ của loài người gọi bằng cụ luôn."
            ];
        } else if (age < -50000) {
            dialogues = [
                "Tuổi này chắc bạn rủ khủng long đi uống trà sữa à?",
                "Hồi đó thế giới có gì vui không bạn?",
                "Kỷ niệm thời tiền sử của bạn chắc phong phú lắm."
            ];
        } else if (age < -5000) {
            dialogues = [
                "Bạn sinh ra trước cả Công Nguyên luôn sao?",
                "Chắc bạn chứng kiến mấy nền văn minh cổ đại sụp đổ luôn nhỉ?",
                "Tuổi này thì sách lịch sử cũng chịu thua."
            ];
        } else if (age < -500) {
            dialogues = [
                "Thời phong kiến xa xưa có gì thú vị không cụ?",
                "Bạn là ma cà rồng hay người bất tử vậy?",
                "Tuổi này sống qua mấy triều đại rồi đấy."
            ];
        } else if (age < -300) {
            dialogues = [
                "Cụ sống thọ quá, con cháu tìm không ra luôn.",
                "Bí kíp trường sinh bất lão của cụ là gì thế?",
                "Ba trăm mấy năm trước bạn làm nghề gì?"
            ];
        } else if (age < -100) {
            dialogues = [
                "Ủa alo, âm hơn cả thế kỷ luôn hả?",
                "Bạn nhập năm sinh ở tương lai hay sao vậy?",
                "Tuổi này chắc chưa có trên bản đồ nhân loại."
            ];
        } else if (age < -5) {
            dialogues = [
                "Ủa bạn còn chưa đầu thai hay sao?",
                "Năm sinh âm thế này thì chịu rồi.",
                "Bạn đến từ tương lai đúng không?"
            ];
        } else if (age === 0) {
            dialogues = [
                "Mới đẻ ra đã biết lên mạng test gay rồi à?",
                "Chào bé cưng mới lọt lòng mẹ nhé!",
                "0 tuổi mà đã biết bấm nút kiểm tra, thiên tài!"
            ];
        } else if (age < 16) {
            dialogues = [
                "Tuổi này lo học đi em ơi, gay gủng gì tầm này.",
                "Còn nhỏ tuổi lo ăn lo lớn đi nhé.",
                "Tuổi học trò ngây thơ trong sáng, đừng vội vã."
            ];
        } else if (age < 25) {
            dialogues = [
                "Tuổi trẻ tài cao, tràn đầy năng lượng thanh xuân.",
                "Cái tuổi đẹp nhất để đi tìm bản ngã cuộc đời.",
                "Độ tuổi này tình yêu bắt đầu nở rộ rồi nè."
            ];
        } else if (age < 40) {
            dialogues = [
                "Tuổi này là chín chắn, trưởng thành lắm rồi.",
                "Giai đoạn ổn định cuộc sống và sự nghiệp.",
                "U30 U40 tới nơi rồi, thẳng hay cong biết liền."
            ];
        } else if (age < 60) {
            dialogues = [
                "Giai đoạn trung niên đầy trải nghiệm sống.",
                "Tuổi này người ta nhìn đời bằng ánh mắt thấu hiểu rồi.",
                "Trải qua nửa đời người, không còn gì phải giấu diếm."
            ];
        } else if (age < 100) {
            dialogues = [
                "Bách niên giai lão, cụ sống thọ quá cụ ơi.",
                "Tuổi xế chiều vui vầy bên con cháu thôi cụ.",
                "Cụ thọ thế này là phước đức của gia đình đấy."
            ];
        } else if (age < 200) {
            dialogues = [
                "Kỷ lục Guinness thế giới đang chờ danh tính của bạn.",
                "Làm sao sống thọ qua cả trăm tuổi hay thế bạn?",
                "Cụ là nhân chứng sống của hai thế kỷ rồi."
            ];
        } else if (age < 500) {
            dialogues = [
                "Cụ sống từ thời nhà Lê hay nhà Nguyễn thế?",
                "Thành tinh mất rồi cụ ơi!",
                "Sống mấy trăm năm thế này không chán hả cụ?"
            ];
        } else if (age < 1000) {
            dialogues = [
                "Yêu quái phương nào tu luyện ngàn năm ở đây?",
                "Cụ sống lâu hơn cả một vương triều.",
                "Tuổi này chắc chứng kiến hết thăng trầm lịch sử."
            ];
        } else if (age < 5000) {
            dialogues = [
                "Bạn sống từ thời các Vua Hùng dựng nước à?",
                "Huyền thoại sống của nhân loại là đây chứ đâu.",
                "Năm ngàn tuổi thì thành thần tiên mất rồi."
            ];
        } else if (age < 10000) {
            dialogues = [
                "Bạn có quen biết thần thoại nào không?",
                "Tuổi này chắc bạn viết lại được cả lịch sử thế giới.",
                "Đại lão tiền bối xin nhận của vãn bối một lạy."
            ];
        } else if (age < 100000) {
            dialogues = [
                "Mốc tuổi thần thánh, không thể tin nổi!",
                "Bạn là sinh vật ngoài hành tinh đúng không?",
                "Trái Đất này quá nhỏ bé so với số tuổi của bạn."
            ];
        } else {
            // Trường hợp từ 100,000 tuổi trở lên
            dialogues = [
                "Số tuổi vượt giới hạn vũ trụ rồi bạn ơi!",
                "Hệ thống máy tính bất lực trước số tuổi này.",
                "Bạn là đấng sáng thế phương nào ghé thăm vậy?"
            ];
        }
        // Bốc ngẫu nhiên 1 trong 3 câu thoại
        const randomIndex = Math.floor(Math.random() * dialogues.length);
        return dialogues[randomIndex];
    };



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
            const outputphamviTuoi = getAgeDialogue(age); // câu thoại trả về ứng với độ tuổi
            

            // Khởi tạo các biến chứa kết quả hiển thị
            let nameResult = "";
            let borderColor = "#cbd5e1";
            let backgroundColor = "#f8fafc";

            // Kiểm tra xem tên có nằm trong danh sách "bị chỉ định" không
            let isDefaultGay = danhsachgay.some(name => lowerFullname === name.toLowerCase());
            let isAdmin = danhsachtenadmin.some(name => lowerFullname === name.toLowerCase());
            let isCony = danhsachtencony.some(name => lowerFullname === name.toLowerCase());

            if (isDefaultGay) {
                // Tên nằm trong "danh sách đen" -> Chắc chắn GAY (Màu hồng đậm)
                nameResult = "<span class='status-les' style='color:#e11d48;'>Thằng này chắc chắn GAY 🏳️‍🌈.</span>";
                borderColor = "#fbcfe8";
                backgroundColor = "#fdf2f8";
           

            } else if (isCony) {
                // Tên nằm trong "danh sách có người yêu" -> Chắc chắn bình thường (Màu xanh lá)
                nameResult = "<span class='status-straight' style='color:#16a34a;'>Thằng này có người yêu, không GAY nổi! 💚</span>";
                borderColor = "#bbf7d0"; // Viền xanh lá
                backgroundColor = "#f0fdf4"; // Nền xanh lá nhạt
            
            
            
            } else if (isAdmin) {
                // Tên nằm trong "danh sách admin" -> Ch
                nameResult = "<span class='status-admin' style='color:#2563eb;'>Đây này là Admin, chắc chắn bình thường! ✅</span>";
                borderColor = "#bfdbfe"; // Viền xanh dương
                backgroundColor = "#eff6ff"; // Nền xanh dương nhạt
            
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
                • <strong>Kết luận:</strong> ${nameResult}<br>
                • <strong></strong> ${outputphamviTuoi}
            `; // tên - tuổi - giới tính - kết luận - phạm vi tuổi
        });
    }
});
