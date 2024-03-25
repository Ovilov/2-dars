// const num1 = +prompt("Birinchi son");
// const num2 = +prompt("Ikkinchi son");
// const amal = prompt("Amal");
// const title = document.getElementById("title");

// switch (amal) {
//   case "+":
//     title.textContent = `${num1} + ${num2} = ${num1 + num2}`;
//     break;
//   case "-":
//     title.textContent = `${num1} - ${num2} = ${num1 - num2}`;
//     break;
//   case "*":
//     title.textContent = `${num1} * ${num2} = ${num1 * num2}`;
//     break;
//   case "/":
//     title.textContent = `${num1} / ${num2} = ${num1 / num2}`;
//     break;
//   default:
//     alert("Nimadur hato kiritildi !");
// }

///////////////////////////////////////////////

// const li = document.getElementsByTagName("li");

// console.log(li);
// li[0].style.color = "yellow";

// for (let i = 0; i < li.length; i++) {
//   li[i].style.color = "green";
// }

///////////////////////////////////////////////

// const list = document.getElementById("list");
// console.log(list);

//////////////////////////////////////////////

const li = document.querySelectorAll("li");

li.forEach((item) => {
  if ((item.textContent = Math.trunc(Math.random() * 100)) % 2 == 0) {
    item.style.backgroundColor = "green";
  } else {
    item.style.backgroundColor = "red";
  }
});
