// step - 1: set event handler
document
  .getElementById('login-btn')
  .addEventListener('click', function (event) {
    // step - 2: prevent default behavior (prevent reloading browser)
    event.preventDefault();

    // step - 3: get the phone number
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;

    // step 4 : validate phone and pin
    // this is temporary
    if (phoneNumber === '017' && pinNumber === '1234') {
      console.log('you are logged in');
      window.location.href = '/home.html';
    } else {
      alert('wrong phone number or pin');
    }
  });
