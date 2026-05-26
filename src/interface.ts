
type chaiOrder = { 
    type : String,
    sugar : Number,
    strong : Number,
}
function makeChai(order : chaiOrder){
    console.log(order);
}

type teaRecpie = {
    water : Number,
    milk : Number,
}

class MasalaChai implements teaRecpie {
    water = 100;
    milk = 50;
}

// type CupSize = "Small" | "large";

interface CupSize {
    size : "Small" | "large";
}

class chai implements CupSize {
    size: "Small" | "large" = "large";
}

type BaseChai = {teaLeaves : number};
type Extra = {masala : number};

type mixChai = BaseChai & Extra;

const cup : mixChai = {
    teaLeaves : 2,
    masala  : 4
}

type User = {
    username : String,
    bio?: String,
}
const u1 :  User = {username : "meet"};
const u2 :  User = {username : "nanish",bio : "haha"};
type Config = {
    readonly appName : String,
    version : number,
}

const cfg : Config = {
    appName : "MasterTS",
    version : 1.1,
}