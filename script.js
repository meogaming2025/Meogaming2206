function copyScript() {
    var copyText = document.getElementById("scriptText");
    
    // Sử dụng API Clipboard hiện đại, nếu lỗi sẽ dùng cách dự phòng
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(copyText.value).then(function() {
            alert("Đã copy script thành công!");
        }).catch(function(error) {
            fallbackCopy(copyText);
        });
    } else {
        fallbackCopy(copyText);
    }
}

function fallbackCopy(inputElement) {
    inputElement.removeAttribute('readonly'); // Tạm bỏ readonly để chọn text trên mobile
    inputElement.select();
    inputElement.setSelectionRange(0, 99999);
    
    try {
        var successful = document.execCommand('copy');
        if (successful) {
            alert("Đã copy script thành công!");
        } else {
            alert("Không thể copy, vui lòng copy thủ công!");
        }
    } catch (err) {
        alert("Trình duyệt không hỗ trợ tự động copy!");
    }
    
    inputElement.setAttribute('readonly', true); // Khóa lại như cũ
}
