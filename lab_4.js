function Animal(species) {
    this.species = species;
    this.speak = function speak () {
        console.log(`${this.species} makes a sound`);
    }
}

Misha = new Animal("Misha");
Misha.speak();

function Vehicle(brand) {
    this.brand = brand;
}

Vehicle.prototype.start = function() {
    console.log(`The ${this.brand} vehicle is starting`)
}

function Car(brand, model) {
    Vehicle.call(this, brand);
    this.model = model;
    this.brand = brand;
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

Car.prototype.start = function() {
    console.log(`The ${this.brand} car model ${this.model} is starting`)
}

BMW = new Car("BMW", "X5");
BMW.start();