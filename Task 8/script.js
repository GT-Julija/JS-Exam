/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */
function Calculator(num1, num2) {
    this.numberFirst = num1;
    this.numberSecond = num2;
    this.sum = () => {
      return this.numberFirst + this.numberSecond;
    };
    this.subtraction = () => {
      return this.numberFirst - this.numberSecond;
    };
    this.multiplication = () => {
      return this.numberFirst * this.numberSecond;
    };
    this.division = () => {
      return this.numberFirst / this.numberSecond;
    };
  }
  const numberArr = new Calculator(3, 8);
  
  console.log(numberArr.sum());
  //console.log(numberArr.subtraction());
  //console.log(numberArr.multiplication());
  //console.log(numberArr.division());