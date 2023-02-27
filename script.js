let travel = prompt("Mavjud summangizni kiriting")

let bilet=500;
let mehmonxona=250;
let joylar=120;

let umumiy= (bilet+mehmonxona)*10650.34 + joylar*11650.03;

let title = document.querySelector("#title");
if(travel >= umumiy){
  title.textContent = "Oq yo'l , Alisher!";
  console.log("Oq yo'l ,  Alisher!");
}
else{
  title.textContent = "Alisher, ozroq sabr qilish kerak bo'lar ekan.";
  console.log("Alisher, ozroq sabr qilish kerak bo'lar ekan.");
}