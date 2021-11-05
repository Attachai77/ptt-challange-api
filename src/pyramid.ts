const pyramid = (number: number) => {
  for (let increment = 1; increment <= number; increment++) {
    let row = ''

    for (let space = 1; space <= number - increment; space++) {
      row += '  ';
    }

    for (let column = 1; column <= increment; column++) {
      row += `  ${increment} `
    }
    console.log(row);
  }
}


pyramid(10)
