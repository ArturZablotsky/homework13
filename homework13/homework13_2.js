function findPalindrome(number) {
    let steps = 0;
    let currentNumber = number;
  
    function isPalindrome(num) {
      const str = num.toString();
      return str === str.split('').reverse().join('');
    }
  
    while (!isPalindrome(currentNumber)) {
      const reversedNumber = parseInt(currentNumber.toString().split('').reverse().join(''), 10);
      currentNumber += reversedNumber;
      steps++;
    }
  
    return { result: currentNumber, steps };
  }
  
  console.log(findPalindrome(41));
  console.log(findPalindrome(96));
  console.log(findPalindrome(987));