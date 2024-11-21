
//////// Reviews Start //////////
var swiper = new Swiper(".mySwiperReview", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }
});
//////// Reviews End //////////




//////// contact //////////

document.querySelector('#contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevents form submission
  
  const username = document.querySelector('#username');
  const number = document.querySelector('#number');
  const email = document.querySelector('#email');
  const message = document.querySelector('#msg');

  // Username validation
  if (!username.value.trim()) {
    alert('Please enter your correct Username');
    username.focus();
    return;
  }

  // Number validation (Check if it's a valid number and not empty)
  if (!number.value.trim() || isNaN(number.value) || number.value.length < 10) {
    alert('Please enter a valid Number (at least 10 digits)');
    number.focus();
    return;
  }

  // Email validation
  if (!email.value.trim() || !validateEmail(email.value)) {
    alert('Please enter a valid Email');
    email.focus();
    return;
  }

  // Message validation
  if (!message.value.trim()) {
    alert('Please enter a message');
    message.focus();
    return;
  }

  // Store data in local storage
  localStorage.setItem('username', username.value);
  localStorage.setItem('number', number.value);
  localStorage.setItem('email', email.value);
  localStorage.setItem('message', message.value);

  // Clear form after successful submission
  alert('Form submitted successfully!');
  document.querySelector('#contactForm').reset(); // Reset form fields
  
  // Optional: Clear local storage after submission
  localStorage.clear(); // Uncomment this line if you want to clear local storage after submission
});

// Email validation function using Regular Expression
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}





