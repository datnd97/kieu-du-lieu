// Viết chương trình tính diện tích hình tròn

// input : r;
// output : result;

// thuật toán : result =   r*r *3.14;

let inputBanKinh;
let result;

let PI = 3.14;

inputBanKinh = prompt('Mời bạn nhập bán kính hình tròn:');

BanKinh = parseInt(inputBanKinh);

result = BanKinh * BanKinh * PI;

document.write('dien tich hinh tron la:'+result);