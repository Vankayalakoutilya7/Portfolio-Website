const iconsContainer = document.querySelector(".grid");
const arr = [
    { src: "images/C_Programming_Language.webp", name: "C" },
    { src: "images/java.png", name: "Java" },
    { src: "images/css.jpg", name: "CSS" },
    { src: "images/html.webp", name: "HTML" },
    { src: "images/javascript.png", name: "JavaScript" },
    { src: "images/tailwind.webp", name: "Tailwind" },
    { src: "images/python.webp", name: "Python" },
    { src: "images/reactjs.webp", name: "ReactJS" },
    { src: "images/mongodb.webp", name: "MongoDB" },
    { src: "images/expressjs.png", name: "ExpressJS" },
    { src: "images/nodejs.png", name: "NodeJS" }
];


let html = '';
arr.forEach(item => {
  html += `
    <div class="langicon">
      <img src="${item.src}" alt="${item.name}">
      <span><strong>${item.name}</strong></span>
    </div>
  `;
});

iconsContainer.innerHTML = html;
