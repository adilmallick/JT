class car{ 
    constructor(bs01, ef01, cf01, bf01, gf01){ 
        this.bs01 = bs01;
        this.ef01 = ef01; 
        this.cf01 = cf01; 
        this.bf01 = bf01;  
        this.gf01 = gf01; 
    } 
} 

let hatchback = new car(2000,5000,2000,1000,3000); 
let sedan = new car(4000,8000,4000,1500,6000);
let suv = new car(5000,10000,6000,2500,8000);

function bill(){
    let inputCar = document.getElementById("serviceCode").value.toLowerCase();
    let serviceCode = document.getElementById("serviceName").value.toUpperCase();
    let services = serviceCode.split(", ");
    console.log(services)
    let car;
    if(inputCar == 'hatchback'){
        car = hatchback;
    }
    else if(inputCar == 'sedan'){
        car = saden;
    }
    else if(inputCar == 'suv'){
        car = suv;
    }
    else{
        return;
    }

    let totalBill = 0;
    let tab = ``
    for(let i = 0; i < services.length; i++){
        console.log("inside for")
        if(services[i] == 'BS01'){
            totalBill += car.bs01;
            tab += `<p>Charges for Basic Servicing – ₹${car.bs01}</p>`
        }
        else if(services[i] == 'EF01'){
            totalBill += car.ef01;
            tab += `<p>Charges for Engine Fixing – ₹${car.ef01}</p>`
        }
        else if(services[i] == 'CF01'){
            totalBill += car.cf01;
            tab += `<p>Charges for Clutch Fixing – ₹${car.cf01}</p>`
        }
        else if(services[i] == 'BF01'){
            totalBill += car.bf01;
            tab += `<p>Charges for Brake Fixing  – ₹${car.bf01}</p>`
        }
        else if(services[i] == 'GF01'){
            totalBill += car.gf01;
            tab += `<p>Charges for Gear Fixing  – ₹${car.gf01}</p>`
        }
    }

    tab += `<p>Total Bill – ₹${totalBill}</p><br>`
    document.getElementById("bill").innerHTML = tab;
    console.log
    console.log(totalBill);
    


}

function billing(car){
    for(let i = 0; i < services.length; i++){
        if(services[i] == 'BS01'){
            console.log(hatchback.bf01)
        }
        else if(services[i] == 'BS01'){

        }
        else if(services[i] == 'BS01'){
            
        }
        else if(services[i] == 'BS01'){
            
        }
        else if(services[i] == 'BS01'){
            
        }
    }
}

