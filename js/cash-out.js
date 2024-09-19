document
  .getElementById('btn-cash-out')
  .addEventListener('click', function (event) {
    event.preventDefault();

    const cashOut = document.getElementById('input-cash-out').value;
    const cashoutNumber = parseFloat(cashOut);
    const pinNumber = document.getElementById('cash-out-pin-number').value;

    if (pinNumber === '1234') {
      const balance = document.getElementById('account-balance').innerText;
      const balanceNumber = parseFloat(balance);

      // reduce the balance
      const newBalance = balanceNumber - cashoutNumber;
      // update the balance
      document.getElementById('account-balance').innerText = newBalance;
    } else {
      alert('Failed to cash out. Please try again later.');
    }
  });
