const patternOne = (n) => {
  // variable to store the number of rows (or size of pattern)
  let string = ""; // variable to store the pattern string for each line

  // External loop to handle the number of rows
  for (let i = 1; i <= n; i++) {
    // Internal loop to handle the number of stars in each row
    // It runs 'i' times for the right-angled triangle
    for (let j = 1; j <= i; j++) {
      string += "* "; // Add a star and a space to the string
    }
    string += "\n"; // Add a new line character after each row is complete
  }

  console.log(string); // Print the final pattern to the console
};
patternOne(7);
