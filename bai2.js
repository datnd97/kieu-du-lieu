// Bài 2:  Viết chương trình nhập một giá trị là độ 0C (Celsius) và chuyển nó sang độ 0F (Fahrenheit). [Hướng dẫn: C/5 = (F-32)/9]
// input : N
// output: KQ

// THUAT TOAN: C = 5*(F-32)/9 ==> F= (9*C)/5 +32;


let inputC ;

inputC = prompt("Mời bạn nhập độ C:");
let C = parseInt(inputC);
let result = (9*C)/5+32;

document.write("ket qua can tim la:"+result +"F");