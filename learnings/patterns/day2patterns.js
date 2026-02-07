//  5
// 44
// 333
// 2222
// 11111
const patternTwo = (n) => {
  let string = "";

  for (let i = n; i >= 1; i--) {
    for (let j = n; j >= i; j--) {
      string = string + " " + i;
    }
    string = string + "\n";
  }
  console.log(string);
};
// patternTwo(5);

//    1
//   1 2
//  1 2 3

const trianglePattern = (n) => {
  let string = "";

  for (let i = 1; i <= n; i++) {
    for (let j = n - 1; j >= i; j--) {
      string = string + " ";
    }
    for (let j = 1; j <= i; j++) {
      string = string + " " + j;
    }
    string = string + "\n";
  }
  console.log(string);
};
//trianglePattern(5);

// 1 *     1
//  2*    1 2
//  3*   1 2 3
//  *

const hallowTrianglePattern = (n) => {
  let string = "";
  for (let j = 1 - 1; j <= n + 1; j++) {
    string = string + "*" + " ";
  }
  string = string + "\n";
  for (let i = 1; i <= n; i++) {
    string += "*";
    for (let j = n; j >= i; j--) {
      string = string + " ";
    }
    for (let j = 1; j <= i; j++) {
      string = string + " " + j;
    }
    for (let j = n; j >= i; j--) {
      string = string + " ";
    }
    string += "*";
    string = string + "\n";
  }
  for (let j = 1 - 1; j <= n + 1; j++) {
    string = string + "*" + " ";
  }
  console.log(string);
};
// hallowTrianglePattern(5);

const haloTrianglePattern = (n) => {
  let string = "";

  // Prints sleeping * line at the top
  for (let j = 1; j <= n + 2; j++) {
    string += "* ";
  }

  string += "\n";

  for (let i = 1; i <= n; i++) {
    // Printing the starting * from each line
    string += "*";

    // Actual pattern logic
    for (let j = n; j >= i; j--) {
      string += " ";
    }

    for (let j = 1; j <= i; j++) {
      if (j == 1) {
        string += j;
      } else {
        string += " " + j;
      }
    }

    for (let j = n; j >= i; j--) {
      string += " ";
    }

    // Printing the * at the end of each line
    string += "*";

    string += "\n";
  }

  // Prints sleeping * line at the bottom
  for (let j = 1; j <= n + 2; j++) {
    string += "* ";
  }

  console.log(string);
};

haloTrianglePattern(9);
