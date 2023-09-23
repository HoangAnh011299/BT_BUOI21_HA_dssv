function layThongTinTuForm(){
    console.log('first')
    var ma = document.getElementById("txtMaSV").value;
    var ten = document.getElementById("txtTenSV").value;
    var matKhau = document.getElementById("txtPass").value;
    var email = document.getElementById("txtEmail").value;
    var toan = document.getElementById("txtDiemToan").value;
    var ly = document.getElementById("txtDiemLy").value;
    var hoa = document.getElementById("txtDiemHoa").value;
    //tao object
    var sv = new SinhVien(ma,ten,matKhau,email,toan,ly,hoa);
    return sv;
}
function renderDSSV(dssv){
    var contentHTML = ""; 
    // show array dssv len layout, moi item ~ 1 thẻ tr
    // duyệt mảng để update dữ liêụ của contentHTML
    for(var i = 0; i < dssv.length; i++){
        var sv = dssv[i];
        // tạo chuỗi tr
    
        //cộng dồn chuỗi tr va contentHTMl
        contentHTML += `<tr>
                        <td>${sv.ma}</td>
                        <td>${sv.ten}</td>
                        <td>${sv.email}</td>
                        <td>0</td>
                        <td>
                        <button onclick = "xoaSV('${sv.ma}')" class='btn btn-secondary'>Xoá</button>
                        <button onclick = "suaSV('${sv.ma}')" class='btn btn-success'>Sửa</button>
                        </td>
                       </tr>`

        // dom vào tbody và show contentHTML
    }
    console.log('11');
    document.getElementById("tbodySinhVien").innerHTML = contentHTML;

}