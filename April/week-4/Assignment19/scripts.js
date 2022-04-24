const x = [11, 21, 31, 41, 51];
const y = [1, 2, 3, 4, 5];
const z = [8, 7, 6, 5, 3];

function divideBy2(array) {
  let a = [];
  for (let i = 0; i < array.length; i++) {
    const answer = array[i] / 2;
    a.push(answer);
    // console.log(answer)
  }
  console.log(a);
  //   return a;
}
divideBy2(x);
divideBy2(y);
divideBy2(z);
