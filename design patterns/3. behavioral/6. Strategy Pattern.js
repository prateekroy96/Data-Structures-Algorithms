//Strategy1
function FedEx() {
  this.calculate = (package) => {
    //calculations  happen here..
    return 2.99;
  };
}

//Strategy2
function UPS() {
  this.calculate = (package) => {
    //calculations  happen here..
    return 1.59;
  };
}

//Strategy3
function USPS() {
  this.calculate = (package) => {
    //calculations  happen here..
    return 4.5;
  };
}

// encapsulation
function Shipping() {
  this.company = "";
  this.setStrategy = (company) => {
    this.company = company;
  };
  this.calculate = (package) => {
    return this.company.calculate(package);
  };
}

//usage
const fedex = new FedEx();
const ups = new UPS();
const usps = new USPS();

const package = { from: "Alabama", to: "Georgia", weight: 1.5 };

const shipping = new Shipping();
shipping.setStrategy(fedex);
console.log("Fedex:" + shipping.calculate(package)); // OUTPUT => "Fedex:2.99"
