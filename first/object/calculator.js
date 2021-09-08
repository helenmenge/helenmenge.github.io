const calculator = {
    sum() {
      return this.x + this.y;
    },
  
    mul() {
      return this.x * this.y;
    },
  
    read() {
      this.x = +prompt('x?', 0);
      this.y = +prompt('y?', 0);
    }
  };
  
  calculator.read();
  console.log( calculator.sum() );
  console.log( calculator.mul() );