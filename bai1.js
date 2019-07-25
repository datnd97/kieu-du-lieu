// Bài 1: Viết chương trình nhập điểm của một sinh viên cho các môn: Vật lý, Hóa học, và Sinh học. Sau đó hiển thị điểm trung bình và tổng của những điểm này.//

let inputLy;
let inputSinh;
let inputHoa;

inputLy = prompt('Enter the Ly:');
inputSinh = prompt('Enter the Sinh:');
inputHoa = prompt('Enter the Hoa:');

let ly = parseInt(inputLy);
let sinh = parseInt(inputSinh);
let hoa = parseInt(inputHoa);

let sum = ly + sinh + hoa;

document.write("Tong 3 môn là:"+sum);

let trungBinh = sum / 3;

document.write('</br>');

document.write("Diem trung binh 3 mon la:"+trungBinh)