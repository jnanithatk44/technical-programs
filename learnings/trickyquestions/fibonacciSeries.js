// 0 1 1 2 3 5 8 13
const fibSeries = (n) => {
  let string = "";
  let p2 = 0;
  let p1 = 1;
  for (let i = 1; i <= n; i++) {
    string += p2 + " ";
    let cur = p2 + p1;
    p2 = p1;
    p1 = cur;
  }
  console.log(string);
};
fibSeries(6);
