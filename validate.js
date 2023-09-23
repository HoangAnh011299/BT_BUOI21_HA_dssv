function kiemTraRong(value, idErr){
    if(value != ""){
        // ko lỗi
        document.getElementById(idErr).innerHTML = ""
        innerHTML = "";
        return true;
    }else{
        document.getElementById(idErr).innerHTML = "Điền vô coi"
        return false;
    }
}

function kiemTraTrung(value, idErr, dssv, message, key){
    var index = dssv.findIndex(function(item){
        return item[key] == value;
    });
    console.log(" 😂 ~ index ~ index:", index);
    if (index == -1){
        // ko tìm thấy value nằm trong dssv => hợp lệ
        document.getElementById(idErr).innerText = "";
        return true;
    }else{
        document.getElementById(idErr).innerText = message; "Mã sinh viên không tồn tại";
        return false;
    }
}