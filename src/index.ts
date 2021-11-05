const pyramid = (number: number) => {
  for (let increment = 1; increment <= number; increment++) {
    let row = ''

    for (let j = 1; j <= number - increment; j++) {
      row += ' ';
    }

    for (let column = 1; column <= increment; column++) {
      row += ` ${increment} `
    }
    console.log(row);
  }
}


pyramid(9)
