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
