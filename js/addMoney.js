document
  .getElementById('btn-add-money')
  .addEventListener('click', function (event) {
    event.preventDefault();

    // get money the pin number

    const addMoney = document.getElementById('input-add-money').value;
    const addMoneyNumber = parseFloat(addMoney);
    const pinNumber = document.getElementById('input-pin-number').value;
    console.log(addMoney, pinNumber);

    if (pinNumber === '1234') {
      const balance = document.getElementById('account-balance').innerText;
      const balanceNumber = parseFloat(balance);

      // new balance
      const newBalance = balanceNumber + addMoneyNumber;
      // update
      document.getElementById('account-balance').innerText = newBalance;
    } else {
      alert('Faild to the add money, Please try again later.');
    }
  });
