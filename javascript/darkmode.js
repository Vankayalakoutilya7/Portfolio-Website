window.onload = () => {
  const darkToggle = document.getElementById("darkModeToggle");
  const logoImg = document.querySelector(".toggleimg");

  // Enable dark mode by default
  document.body.classList.add("dark-mode");
  darkToggle.checked = true;
  logoImg.src = "images/vk-removebg-preview.png";

  // Add listener for toggle
  darkToggle.addEventListener("change", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      logoImg.src = "images/vk-removebg-preview.png";
    } else {
      logoImg.src = "images/create_a_logo_with_no_background_but_just_two_letters__VK_.-removebg-preview.png";
    }
  });
};

let isToggled = false;

function toggleTheme() {
  const taskbarItems = document.querySelectorAll('.taskbar div');
  isToggled = !isToggled;

  taskbarItems.forEach(div => {
    div.style.backgroundColor = isToggled ? 'orange' : '';
  });
}
