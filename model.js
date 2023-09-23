function Dog(_name, _age, _color){
    this.name = _name
    this.age = _age
    this.color = _color
}
var dog3 = new Dog("meomeo",2, "black");
var dog4 = new Dog("mimi",2, "white");
console.log(" 😂 ~ dog3:", dog3);
console.log(" 😂 ~ dog4:", dog4);




function SinhVien(ma,ten,matKhau,email,toan,ly,hoa){
    this.ma = ma
    this.ten = ten
    this.matKhau = matKhau
    this.email = email
    this.toan = toan
    this.ly = ly
    this.hoa = hoa
    this.tinhDTB = function(){
        var dtb = (this.toan *1 + this.ly*1 + this.hoa*1) /3;
        return dtb;
    }
}