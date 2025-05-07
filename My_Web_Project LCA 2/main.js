// Navbar toggle
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

document.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('#menu-icon');
  const navbar = document.querySelector('.navbar');
  menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
  };
});
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

// Redirect Page functions
function redirectToHome() {
  window.location.href = "index.html";
}

function redirectTologinPage() {
  window.location.href = "index1.html";
}

// Highlight input box
function highlightInputOnFocus() {
  const inputs = document.querySelectorAll('.input-box input');
  inputs.forEach(input => {
    input.addEventListener('focus', () => {
      const parent = input.parentElement;
      parent.classList.add('highlight');
      
      // DOM navigation: log first child of input's parent
      console.log("First element child of .input-box:", parent.firstElementChild);
    });

    input.addEventListener('blur', () => {
      input.parentElement.classList.remove('highlight');
    });
  });
}
highlightInputOnFocus();

// Mouse events: hover effect on login button
document.addEventListener('DOMContentLoaded', () => {
  const loginBtn = document.querySelector('.wrapper .btn-id');
  
  if (loginBtn) {
    loginBtn.addEventListener('mouseover', () => {
      loginBtn.classList.add('hover');
      console.log(loginBtn);
    });
  } 
});

// Key event: log Enter keypress
document.addEventListener('keydown', (e) => {    // Key Pressed 
  if (e.key === "Enter") {
    console.log("Enter key pressed.");
  }
});

// Form Submission
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('loginForm');
  
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      console.log('Form submitted!');
    });
  }
});