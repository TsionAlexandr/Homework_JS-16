// Задача 1.



function Planet(name) {
    this.name = name;
    this.getName = function () {
        return 'Planet name is ' + this.name;
    }
}

function PlanetWithSatellite(name, satelliteName) {
    Planet.apply(this, arguments);

    this.satelliteName = satelliteName;
    let planetGetName = this.getName;
    
    this.getName = function () {
        return `${planetGetName.call(this)}. The satellite is ${this.satelliteName}`;
    }
}

let earth = new PlanetWithSatellite('earth', 'moon');

earth.getName();