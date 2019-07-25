// Viết chương trình chu vi hình tròn
// intput : 

let inputBanKinh;
let result;

let PI = 3.14;

inputBanKinh = prompt('Mời bạn nhập bán kính hình tròn:');

BanKinh = parseInt(inputBanKinh);

result = BanKinh * 2 * PI;

document.write('chu vi hinh tron la:'+result);