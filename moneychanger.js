
  
  const moneyStocks = {
    100000: 1,
    50000: 2,
    20000: 4,
    10000: 5,
    5000: 5,
    1000: 10,
    500: 5
  }
debugger
  let uang = [];

for (const key in moneyStocks) {
  uang.push(+key);
  
}

for (let i = 0; i < uang.length - 1; i++) {
  for (let j = i + 1; j < uang.length; j++) {
    if (uang[i] < uang[j]) {
      let swap = uang[i];
      uang[i] = uang[j];
      uang[j] = swap;
    }
  }
}
//console.log(uang);

function getMoneyChange(money) {
  //your code here
  let obj = {};
  for (let i = 0; i < uang.length; i++) {
    while (moneyStocks[uang[i]] != 0 && money - uang[i] >= 0) {
      if (!obj[uang[i]]) {
        obj[uang[i]] = 0;
      }
      moneyStocks[uang[i]] -= 1;
      money -= uang[i];
      obj[uang[i]] += 1;
    }
  }

   //console.log(obj);
   
   if (money != 0) {
    for (const key in obj) {
      let sample = +key;
      moneyStocks[sample] += obj[key];
    }
    console.log('Maaf uang kembalian tidak cukup');
  }else {
    let arr = []
    for (const key in obj) {
      let temp = []
      temp.push(key)
      temp.push(obj[key])
      arr.push(temp)
      temp = []
    }
    for (let i = arr.length - 1 ; i >= 0; i--) {
      console.log(`${arr[i][0]} ${arr[i][1]} lembar`)
    }
  }
}

  
  getMoneyChange(75000)
  /*
    50000 1 lembar
    20000 1 lembar
    5000 1 lembar
  */
  
  getMoneyChange(190000)
  /*
    100000 1 lembar
    50000 1 lembar
    20000 2 lembar
  */
  
  getMoneyChange(190000)
  /*
    Maaf uang kembalian tidak cukup
  */
  
  getMoneyChange(100000)
  /*
    20000 1 lembar
    10000 5 lembar
    5000 4 lembar
    1000 10 lembar
  */
  
  getMoneyChange(400)
  /*
    Maaf uang kembalian tidak cukup
  */
  
  console.log(moneyStocks)
  /*
  { '500': 5,
    '1000': 0,
    '5000': 0,
    '10000': 0,
    '20000': 0,
    '50000': 0,
    '100000': 0 }
  */
  