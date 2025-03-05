document.write("<h1>Tarayıcı çalıştı çıktıyı görmek için consolu kontrol et");
/**# data types

let x1 = "";             // new primitive string
let x2 = 0;              // new primitive number
let x3 = false;          // new primitive boolean
const x4 = {};           // new object
const x5 = [];           // new array object
const x6 = /()/;         // new regexp object
const x7 = function(){}; // new function object
"var"değişken tipi artık kullanılmıyor onun yerine "let" kullanılır 
eğer değişken sabit bırakılıp daha yeni atama ile değiştirilmesi önlenmek isteniyorsa "const" kullanılır. 
*/

/*
#tek satır if else şartı

let yas = 20;
let mesaj = yas >= 18 ? "ehliyet albilir" : "ehliyet alamaz";
console.log(mesaj);
*/

/*
# type of

let obj = {
  name: "idris",
  lastname: "aktas",
};

console.log(typeof 5);
console.log(typeof "5");
console.log(typeof true);
console.log(typeof obj);
*/

/*
console.log(5 > 30 && 8 > 2); // false and koşulu
console.log(5 > 30 || 8 > 2); // true  or koşulu

let üye = {
  age: 18,
  member: true,
};

let result = üye.age && üye.member ? "giriş başarılı" : "giriş başarısız";
console.log(result);
*/

/*
let user = {
  username: "idrisaktaas",
  password: "4523",
  log: false,
};
while (!user.log) {
  let logusername = prompt("User Name:");
  let loguserpassword = prompt("Password");

  console.log("obj.username" + typeof user.username);
  console.log("obj.password" + typeof user.password);
  console.log("logusername" + typeof logusername);
  console.log("logpassword" + typeof loguserpassword);

  if (user.username == logusername && user.password == loguserpassword) {
    console.log("Giriş Başarılı.");
    user.log = true;
  } else {
    alert("Giriş Başarısız. kullanıcı adı veya şifreniz hatalı");
  }
}
*/

/** 
// # switch case yapısı:

let age = 15;
//let age = parseInt(prompt("Ysşınızı giriniz: "));

switch (
  true //karşılaştırma varsa switchin alacağı değer değişken değil true olacak
) {
  case age < 0:
    console.log("Geçersiz Yaş"); //alert("Geçersiz yaş")
    break;
  case age <= 3:
    console.log("Bebek");
    break;
  case age <= 14:
    console.log("Çocuk");
    break;
  case age <= 25:
    console.log("Genç");
    break;
  case age <= 35:
    console.log("Yetişkin");
    break;
  default:
    console.log("yaşlı");
}
*/
/**
  -, *, /, % gibi işlemler yapıldığında stringler number'a çevrilir.
+ operatörü varsa en az biri string ise birleştirme yapılır. 
*/
let x = "string";
console.log(typeof x);
x = 5;
y = "4";
console.log(x + y); //54 string
console.log(x - y); //1 number
console.log(0 == "       "); //true ama string veya 0 dışında sayı gelirse false olur

//0.1 ve 0.2 ikili sistemde sonsuz tekrar eden diziler olarak saklanır.
let x2 = 0.1;
let y2 = 0.2;
let z = x2 + y2; //toFixed() bir string döndürür, eğer sayı olarak kullanacaksanız parseFloat()
console.log(z); //0.30000000000000004
/**
 * iki değerin türlerini zorla eşitleyerek karşılaştırma yapar.
 * Yani type coercion (tip dönüşümü) gerçekleştirir.
 *
 */
