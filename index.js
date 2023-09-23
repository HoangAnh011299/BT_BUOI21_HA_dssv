// tạo array dssv chứa object sv 
var dssv = [];
const DSSV_LOCAL = "DSSV_LOCAL";
//rander lại data từ localstorage ki user reload
var dataJson = localStorage.getItem(DSSV_LOCAL);

console.log(dataJson);
//convert json sang Arr
if(dataJson != null){
    //kiểm tra dữ liệu dưới local storage có tồn tại hay ko trước khi đi render
    var dssv = JSON.parse(dataJson);
    console.log('render');
    renderDSSV(dssv.map(item=> new SinhVien(item.ma ,item.ten,item.matKhau,item.email,item.toan,item.ly,item.hoa)));
}

// THÊM SINH VIÊN 
function themSinhVien (){
    var sv = layThongTinTuForm();

//     validate dữ liệu trước khi thêm
//kiem tra mã SV
var isValid = kiemTraRong(sv.ma, "spanMaSV") &&
              kiemTraTrung(sv.ma, "spanMaSV", dssv, "Mã sinh viên đã tồn tại", "ma");
    
//kiem tra email SV
isValid =
   isValid &
   kiemTraTrung(sv.email, "spanEmailSV", dssv, "Email đã tồn tại","email");

//kiem tra ten SV
isValid =
   isValid &
   kiemTraRong(sv.ten, "SpanTenSV")

    if (!isValid) { //nếu isvalid false thì dừng funtion themSV tại đây
        return;
    }

    //thêm sv vừa tạo được vào array dssv
    dssv.push(sv);
    renderDSSV(dssv);
    // localStorage , json stringtify , json parse

    // convert array thành json để lưu xuống local
    var dataJson = JSON.stringify(dssv);
    console.log(" 😂 ~ themSinhVien ~ dataJson:", dataJson);
    //lưu json vàp localStorage khi user load trang thì không bị mất dữ liệu
    localStorage.setItem(DSSV_LOCAL,dataJson,);
    
}



// XOÁ SINH VIÊN 
function xoaSV(id){
    console.log(" 😂 ~ xoaSV ~ id:", id);
    console.log("yess")

//tìm vị trí sv nằm trong dssv có mã trùng với id
var index 
for(var i=0; i<dssv.length; i++){
    if(dssv[i].ma == id){
        index = i
    }
}
// xoá phần tử tại vị trí index trong dssv
dssv.splice(index, 1);
//gọi lại render sau khi xoá => tạo mới lại layout với data mới nhất
renderDSSV(dssv);

}



// SỬA SINH VIÊN 
function suaSV(id){
console.log(" 😂 ~ id:", id);
//tìm vị trí sv nằm trong dssv có mã trùng với id
var viTri = dssv.findIndex(function(item){
    return item.ma == id
}) 
console.log(" 😂 ~ viTri ~ viTri:", viTri);
var sv = dssv[index];
console.log(" 😂 ~ suaSV ~ sv:", sv);
// hiển thị thông tin lên form
document
}
