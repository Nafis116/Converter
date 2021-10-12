let changeBillsP = document.getElementById('changeBills-p');
    btnChangeRUB = document.getElementById('btnChangeRUB');
    btnChangeUSD = document.getElementById('btnChangeUSD');
    btnChangeEUR = document.getElementById('btnChangeEUR');
    btnChangeGBP = document.getElementById('btnChangeGBP');
    haveBillsP = document.getElementById('haveBills-p');    
    btnhaveBillsRUB = document.getElementById('btnhaveBillsRUB');
    btnhaveBillsUSD = document.getElementById('btnhaveBillsUSD');
    btnhaveBillsEUR = document.getElementById('btnhaveBillsEUR');
    btnhaveBillsGBP = document.getElementById('btnhaveBillsGBP');
    inputHave = document.getElementById('amountAdd');
    inputChange = document.getElementById('amountChange');

async function bills(cur1, cur2) {
  let response = await fetch(`https://api.exchangerate.host/latest?base=${cur1}&symbols=${cur2}`);
  let data = await response.json();
  let result = await data;
  haveBillsP.innerHTML = `1 ${cur1} = ${result.rates[cur2].toFixed(4)} ${cur2}`;

  inputHave.addEventListener('input', () => {
    if ((inputHave.value == '') || (inputHave.value == '0') || (inputHave.value == ' ' > 1)) {
      inputChange.value = ''
    } else {
      inputChange.value = (parseFloat(inputHave.value) / result2.rates[cur1]).toFixed(2);
    }
  })

  let response2 = await fetch(`https://api.exchangerate.host/latest?base=${cur2}&symbols=${cur1}`);
  let data2 = await response2.json();
  let result2 = await data2;
  changeBillsP.innerHTML = `1 ${cur2} = ${result2.rates[cur1].toFixed(4)} ${cur1}`;

  inputChange.addEventListener('input', () => {
    if ((inputChange.value == '') || (inputChange.value == '0') || (inputChange.value == ' ' > 1)) {
      inputHave.value = ''
    } else {
      inputHave.value = (parseFloat(inputChange.value) / result.rates[cur2]).toFixed(2);
    }
  })
}


let cur1 = 'RUB', cur2 = 'USD';

  btnChangeRUB.addEventListener('click', (e) => {
    if (e.target.id == 'btnChangeRUB') {
      cur2 = e.target.innerHTML;
      e.target.classList.add('active');
      btnChangeUSD.classList.remove('active');
      btnChangeEUR.classList.remove('active');
      btnChangeGBP.classList.remove('active');
    }
    bills(cur1, cur2);
  });

  btnChangeUSD.addEventListener('click', (e) => {
    if (e.target.id == 'btnChangeUSD') {
      cur2 = e.target.innerHTML;
      e.target.classList.add('active');
      btnChangeRUB.classList.remove('active');
      btnChangeEUR.classList.remove('active');
      btnChangeGBP.classList.remove('active');
    }
    bills(cur1, cur2);
  });

  btnChangeEUR.addEventListener('click', (e) => {
    if (e.target.id == 'btnChangeEUR') {
      cur2 = e.target.innerHTML;
      e.target.classList.add('active');
      btnChangeUSD.classList.remove('active');
      btnChangeRUB.classList.remove('active');
      btnChangeGBP.classList.remove('active');
    }
    bills(cur1, cur2);
  });

  btnChangeGBP.addEventListener('click', (e) => {
    if (e.target.id == 'btnChangeGBP') {
      cur2 = e.target.innerHTML;
      e.target.classList.add('active');
      btnChangeUSD.classList.remove('active');
      btnChangeEUR.classList.remove('active');
      btnChangeRUB.classList.remove('active');
    }
    bills(cur1, cur2);
  });

  btnhaveBillsRUB.addEventListener('click', (e) => {
    if (e.target.id == 'btnhaveBillsRUB') {
      cur1 = e.target.innerHTML;
      e.target.classList.add('active');
      btnhaveBillsUSD.classList.remove('active');
      btnhaveBillsEUR.classList.remove('active');
      btnhaveBillsGBP.classList.remove('active');
    }
    bills(cur1, cur2);
  });

  btnhaveBillsUSD.addEventListener('click', (e) => {
    if (e.target.id == 'btnhaveBillsUSD') {
      cur1 = e.target.innerHTML;
      e.target.classList.add('active');
      btnhaveBillsRUB.classList.remove('active');
      btnhaveBillsEUR.classList.remove('active');
      btnhaveBillsGBP.classList.remove('active');
    }
    bills(cur1, cur2);
  });

  btnhaveBillsEUR.addEventListener('click', (e) => {
    if (e.target.id == 'btnhaveBillsEUR') {
      cur1 = e.target.innerHTML;
      e.target.classList.add('active');
      btnhaveBillsUSD.classList.remove('active');
      btnhaveBillsRUB.classList.remove('active');
      btnhaveBillsGBP.classList.remove('active');
    }
    bills(cur1, cur2);
  });

  btnhaveBillsGBP.addEventListener('click', (e) => {
    if (e.target.id == 'btnhaveBillsGBP') {
      cur1 = e.target.innerHTML;
      e.target.classList.add('active');
      btnhaveBillsUSD.classList.remove('active');
      btnhaveBillsEUR.classList.remove('active');
      btnhaveBillsRUB.classList.remove('active');
    }
    bills(cur1, cur2);
  });

inputHave.addEventListener('keyup', () => {
  inputHave.value = inputHave.value.replace(/[A-Za-zА-Яа-яЁё]/g,'');
  inputHave.value = inputHave.value.replace(/[,]/g, '.');
});

inputChange.addEventListener('keyup', () => {
  inputChange.value = inputChange.value.replace(/[A-Za-zА-Яа-яЁё]/g,'');
  inputChange.value = inputChange.value.replace(/[,]/g, '.');
});

bills(cur1, cur2);