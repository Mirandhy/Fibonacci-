const express = require('express');
const app = express();

function isFibonacci(num) {
  let n1 = 0;
  let n2 = 1;
  let n3 = 0;

  while (n3 < num) {
    n3 = n1 + n2;
    n1 = n2;
    n2 = n3;
  }

  return n3 === num;
}

app.get('/', (req, res) => {
  res.send('<h1>Fibonacci Tester</h1>');
});

app.get('/fibonacci/:num', (req, res) => {
  const inputNum = Number(req.params.num);

  if (!isNaN(inputNum) && isFibonacci(inputNum)) {
    res.send('Very well, It is Fibonacci.');
  } else {
    res.send('I can tell this is not a Fibonacci number or not a valid number.');
  }
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
