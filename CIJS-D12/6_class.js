class Car {
  name;
  speed;
  brand;
  color;
  constructor(name, speed, brand, color) {
    this.name = name;
    this.speed = speed;
    this.brand = brand;
    this.color = color;
  }

  diver() {
    console.log(this.name + "is derving at" + this.speed + "km/h");
  }

  paint(){
      console.log('Current color: '+this.color+ '.Changing to' +newColor)
  }
}

let fadil = new Car("Fadil", 100, "Vinfat", "red");

fadil.diver();

fadil.paint()
