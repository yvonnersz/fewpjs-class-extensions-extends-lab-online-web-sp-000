// Your code here

class Polygon {

  constructor(array) {
    this.array = array;
  }

  get countSides() {
    return this.array.length
  }

  get perimeter() {
    return this.array.reduce((total, side) => total += side, 0)
  }
}

class Triangle extends Polygon {
  get isValid() {

<<<<<<< HEAD
    if (((this.array[0] + this.array[1]) > this.array[2]) && ((this.array[1] + this.array[2]) > this.array[0]) && ((this.array[0] + this.array[2]) > this.array[1])) {
      return true
    } else {
      return false
    }

  }
}

class Square extends Polygon {
  get isValid() {

    if ((this.array[0] === this.array[1]) && (this.array[0] === this.array[2]) && (this.array[0] === this.array[3])) {
      return true
    } else {
      return false
    }

  }

  get area() {
    return this.array[0] * this.array[1]
  }
}
=======

  }
}
>>>>>>> ec9558e4ea2f9fb954b26d8bbc256804ff58dc13
