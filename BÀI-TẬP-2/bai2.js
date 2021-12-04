document.getElementById("But").addEventListener("click", function () {
  var nNum = document.getElementById("number1").value;
  var hNum = document.getElementById("number2").value;
  function checkPrime(number) {
    if (number <= 1) {
      return false;
    } else {
      for (let i = 2; i < number; i++) {
        if (number % i == 0) {
          return false;
        }
      }
    }
    return true;
  }
  for (let i = nNum; i <= hNum; i++) {
    const isPrime = checkPrime(i);
    if (isPrime) {
      console.log(`${i} là số nt`);
    } else {
      console.log(`${i} méo là số nt`);
    }
  }
});
