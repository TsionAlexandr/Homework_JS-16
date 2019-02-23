// Задача 2.


function Build(name, numOfFloors) {
    this.name = name;
    this.numOfFloors = numOfFloors;
    
    this.getnumOfFloors = function () {
        return this.numOfFloors;
    };
    
    this.setnumOfFloors = function (num) {
        this.numOfFloors = num;
    };
}

function House(name, numOfFloors, numOfApartamentsPerFloor) {
    Build.apply(this, arguments);
    this.numOfApartamentsPerFloor = numOfApartamentsPerFloor;
    
    this.getnumOfFloors = function() {
        return {floors: this.numOfFloors, totalApartaments: this.numOfFloors * this.numOfApartamentsPerFloor};
    }
}

function Mall(name, numOfFloors, numOfShopsPerFloor) {
    Build.apply(this, arguments);
    this.numOfShopsPerFloor = numOfShopsPerFloor;
    
    this.getnumOfFloors = function() {
        return {floors: this.numOfFloors, totalShops: this.numOfFloors * this.numOfShopsPerFloor};
    }
}


const house = new House('Home', 9, 4);
const mall = new Mall('Bravo', 4, 6);