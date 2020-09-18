(function () {
  const button = document.querySelector('.btn');
  const body = document.querySelector('body');
  const hexValues = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
  ];
  const value = document.querySelector('#hex-code');

  button.addEventListener('click', changeHex);

  function changeHex() {
    let hex = '#';

    for (let i = 0; i < 6; i++) {
      const index = Math.floor(Math.random() * hexValues.length);
      hex += hexValues[index];
    }
    value.textContent = hex;
    body.style.backgroundColor = hex;
  }
})();

// ------------------------------------------------------------
// const clickMe = document.querySelector('.btn');
// const hexValue = document.getElementById('hex-code');

// let colorArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

// clickMe.addEventListener('click', function (e) {
//   e.preventDefault();
//   console.log('clicked');
//   let c1 = colorArr[colorIndex()];
//   let c2 = colorArr[colorIndex()];
//   let c3 = colorArr[colorIndex()];
//   let c4 = colorArr[colorIndex()];
//   let c5 = colorArr[colorIndex()];
//   let c6 = colorArr[colorIndex()];
//   let hexCode = `#${c1}${c2}${c3}${c4}${c5}${c6}`;

//   document.body.style.backgroundColor = hexCode;
//   hexValue.innerText = hexCode;
// });

// function colorIndex() {
//   return Math.floor(Math.random() * Math.floor(colorArr.length - 1));
// }
