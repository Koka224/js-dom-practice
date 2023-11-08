// 1) Дан массив из объектов с полями title и text. Заполните
// массив сами произвольными данными. Ваша задача отрисовать данные на странице в соответствующих тегах (h2 - для title, p - для text)
// const data = [
//   { title: "Россия", text: "Москва" },
//   { title: "США", text: "Вашинктон" },
//   { title: "Кыргызстан", text: "Бишкек" },
// ];

// function renderData(index) {
//   const titleElement = document.getElementById("title");
//   const textElement = document.getElementById("text");

//   if (index >= 0 && index < data.length) {
//     titleElement.innerText = data[index].title;
//     textElement.innerText = data[index].text;
//   } else {
//     titleElement.innerText = "Нет в списке";
//     textElement.innerText = "Нет в списке";
//   }
// }

// const dataIndexx = 2;
// renderData(dataIndexx);
// 2) Дан элемент. Сделайте так, чтобы по клику на него он красился в красный цвет, но только если в момент клика нажата клавиша Ctrl
// const element = document.querySelector(".element");

// element.addEventListener("click", function (event) {
//   if (event.ctrlKey || event.metaKey) {
//     element.style.backgroundColor = "red";
//   }
// // });
// 3) Дан элемент. Сделайте так, чтобы при клике на него и нажатой клавише
// Ctrl - в его текст записывалось '1', при нажатой клавише Alt - '2', а при нажатой клавише Shift - '3'
// const element2 = document.querySelector(".element2");
// element2.addEventListener("click", function (event) {
//   if (event.ctrlKey) {
//     element2.textContent += "1";
//   } else if (event.altKey) {
//     element2.textContent += "2";
//   } else if (event.shiftKey) {
//     element2.textContent += "3";
//   }
// });
// 4)  Даны абзацы с числами. То есть, несколько подобных элементов <p>1</p>. По нажатию на абзац в нем должен появится квадрат числа, которое он содержит.
// const Allsum = document.querySelectorAll(".summ");

// Allsum.forEach(function (element) {
//   element.addEventListener("click", function () {
//     const numbers = +element.textContent;
//     if (numbers) {
//       const umn = numbers ** 2;
//       element.textContent += ` квадрат этого числа ${umn}`;
//     }
//   });
// });
// 5) Даны картинки. Привяжите к каждой картинке событие, чтобы по клику на картинку в console.log выводился ее src.
// const ImgFon = document.querySelectorAll(".card");

// ImgFon.forEach(function (imagevent) {
//   imagevent.addEventListener("click", function () {
//     console.log(imagevent.src);
//   });
// });
// 6) Даны ссылки с заполненным href. Например <a href="https://google.com">Сайт гугл</a>.
// Привяжите всем ссылкам событие - по наведению на ссылку в конец ее текста дописывается ее href в круглых скобках.
const links = document.querySelectorAll(".link");
links.forEach(function (linkEv) {
  linkEv.addEventListener("mouseenter", function () {
    const a = linkEv.target.href;
    linkEv.textContent += `(${a})`;
  });
});
