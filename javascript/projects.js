document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelector(".boxes");
  
    const arr = [
      {
        src: "images/0532f2cd-040b-46f5-865d-bfebaffcfbb9_removalai_preview.png",
        projecttitle: "Stock Price Predictor",
        projectdesc: "Used Python, Keras, scikit-learn, and yfinance to build and train a 4-layer LSTM model for stock price prediction.Deployed it with Streamlit",
        link:"https://github.com/Vankayalakoutilya7/stockpricepredictor"
      },
      {
        src:"images/expensetracker.jpg",
        projecttitle:"Expense-Tracker",
        projectdesc:"Used HTML, CSS, JavaScript, React for front-end and Node.js, Express.js, MongoDB, PostgreSQL for the back-end.",
        link:"https://github.com/Vankayalakoutilya7/expense-management-tracker"
      },
      {
        src:"images/quackser.webp",
        projecttitle:"Quack-Home Services",
        projectdesc:"Used Flutter and HTML/CSS/JavaScript for embedded web. Integrated web views to display interactive dashboards and embedded content for UX.",
        link:"https://github.com/Vankayalakoutilya7/Quack"
      }
    ];
  
    let html = '';
    arr.forEach(item => {
      html += `
          <div class="box2">
      <div class="project-card">
        <h3 class="project-title">${item.projecttitle}</h3>
        <img src="${item.src}" alt="Project Icon" class="project-icon" />
        <div class="title"><strong>${item.projecttitle}</strong></div>
        <p class="project-description">
          ${item.projectdesc}
        </p>
        <a target="_blank" href="${item.link}" class="source-button">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="15" height="15" viewBox="0 0 256 256" xml:space="preserve">
<g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
	<path d="M 20.06 90 c -5.358 0 -10.396 -2.087 -14.184 -5.876 C 2.087 80.336 0 75.299 0 69.94 s 2.086 -10.396 5.875 -14.184 l 20.42 -20.421 c 7.822 -7.821 20.548 -7.821 28.368 0 c 1.953 1.953 1.953 5.119 0 7.071 c -1.951 1.952 -5.119 1.952 -7.07 0 c -3.921 -3.921 -10.303 -3.922 -14.227 0 l -20.419 20.42 c -3.922 3.923 -3.922 10.304 0 14.227 c 1.9 1.9 4.426 2.946 7.113 2.946 s 5.213 -1.046 7.113 -2.946 L 37.29 66.938 c 1.954 -1.953 5.119 -1.952 7.071 0 s 1.953 5.118 0 7.07 L 34.244 84.124 C 30.455 87.913 25.418 90 20.06 90 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>
	<path d="M 49.521 60.539 c -5.358 0 -10.396 -2.087 -14.185 -5.876 c -1.953 -1.952 -1.953 -5.118 0 -7.071 c 1.953 -1.951 5.119 -1.951 7.071 0.001 c 1.9 1.9 4.427 2.946 7.113 2.946 s 5.213 -1.046 7.112 -2.946 l 20.421 -20.42 c 1.9 -1.9 2.946 -4.426 2.946 -7.113 s -1.046 -5.213 -2.946 -7.113 c -3.922 -3.922 -10.305 -3.922 -14.227 0 L 52.71 23.063 c -1.951 1.952 -5.118 1.952 -7.071 0 c -1.953 -1.953 -1.953 -5.119 0 -7.071 L 55.757 5.875 c 7.82 -7.821 20.547 -7.821 28.367 0 C 87.913 9.664 90 14.701 90 20.06 s -2.087 10.396 -5.876 14.185 l -20.42 20.419 C 59.916 58.452 54.879 60.539 49.521 60.539 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>
</g>
</svg>
        </a>
      </div>
    </div>
      `;
    });
  
    items.innerHTML = html;
  });