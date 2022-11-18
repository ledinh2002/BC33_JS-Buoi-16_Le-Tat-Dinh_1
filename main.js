//Bài tập 1 : Tìm số nguyên dương nhỏ nhất sao cho: 1 + 2 + … + n > 10000

function timsonguyenduong() {
  var sum = 0;
  var n = 0;
  while (sum <= 10000) {
    n++;
    sum = sum + n;
  }
  document.getElementById("ketqua").innerHTML = n;
}

/**
 * Bài tập 2 :Viết chương trình nhập vào 2 số x, n tính tổng: S(n) = x + x^2
 * + x^3 + … + x^n (Sử dụng vòng lặp và hàm)
*/
function tonghaiso(){
  var numberX = +document.getElementById("number1").value;
  var numberN = +document.getElementById("number2").value;
var S = 0;

  for(var i = 0; i <= numberN; i++){
    S += numberX*i;
  }
  document.getElementById("ketqua1").innerHTML = S;

}
/**
 * Bài tập 3: Tính giai thừa 1*2*...n
 */
function giaithua(){
  var numberN = +document.getElementById("number3").value;
  var result = 1;
  for(var i = 1; i <= numberN; i++){
    result = result*i;
  }
  document.getElementById("ketqua2").innerHTML = result;
}
/**
 * Bài tập 4: Hãy viết chương trình khi click vào button sẽ in ra 10 thẻ div.
Nếu div nào vị trí chẵn thì background màu đỏ và lẻ thì
background màu xanh.
 */

function chanle() { 
  result = '';
  for(var i = 0; i < 10; i++){
    if(i%2 === 0){
      result += '<div class="bg-danger">Background chan</div>'
    }
    else{
      result += '<div class="bg-primary">Background le</div>'

    }
  }
  document.getElementById("ketqua3").innerHTML = result;
 }