function copyScript() {
    var copyText = document.getElementById("scriptText");
    copyText.select();
    copyText.setSelectionRange(0, 99999); // Dành cho thiết bị di động
    
    // Thực hiện copy vào clipboard
    navigator.clipboard.writeText(copyText.value);
    
    alert("Đã copy script thành công!");
}
