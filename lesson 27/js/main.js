// object

var car ={
    car="lambo",
    colour="red",
    year="2021",
    kilometer="10,000",
    startengine: function(){
        alert("vrooooom pha pha")
    }
    get getkilomiters(){
        return this.kilomiters;
    }
    set setkilometers(km){
        this.kilometers = km;
    }
};

console.log(get.getkilomiters);

car.setkilometers = 100;

console.log(car.getkilomiters);



var computer = new Object();

computer.name = "lenovo";
computer.CPU = "intel core i7";
computer.RAM = "16gb";
computer.GPU = " geforce gt730....";

computer.type = function(){

    return this.name +' ,  '+this.CPU + ', '+this.RAM + ','+this.GPU;

};

alert(computer.GPU);

alert(computer.type());

delete computer.GPU;
alert(computer.GPU);


function Computer(name,cpu,gpu,ram){
this.name = name;
this.cpu = cpu;
this.gpu = gpu;
this.ram = ram;
};

var computer1 = new  Computer()