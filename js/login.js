// step - 1: set event handler
document
  .getElementById('login-btn')
  .addEventListener('click', function (event) {
    // step - 2: prevent default behavior (prevent reloading browser)
    event.preventDefault();

    // step - 3: get the phone number
    const phoneNumber = document.getElementById('phone-number').value;
  });
