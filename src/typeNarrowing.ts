function getChai(kind : String | Number){
    if(typeof kind === 'string'){
        return `Making ${kind} chai....`
    }
    return `Chai order : ${kind}`
}
function serveChai(msg?:String){
    if(msg){
        return `serving ${msg}`
    }
    return `Serving deafult chai...`
}

function orderChai(size : 'small' | 'medium' | 'large'){
    if(size === 'small'){
        return `small chai`
    }
    if(size == 'medium' || size == 'large'){
        return `Serve more chai`
    }
}

class khuladChai  {
    serve(){
        return `Serve khuladChai`
    }
}

class cuttingChai  {
    serve(){
        return `Serve cuttingChai`
    }
}

function serveingChai(chai :  khuladChai | cuttingChai){
    if(chai instanceof khuladChai){
        return chai.serve();
    }
}

type chaiOrder = {
    type : String,
    sugar : Number,
}

function isChaiOrder(obj:any):obj is chaiOrder  {
        return (
            typeof obj === 'object' && 
            typeof obj != null && 
            typeof obj.type === 'string' &&
            typeof obj.sugar === 'number'
        )
}
function serveOrder(item : chaiOrder | String){
    if(isChaiOrder(item)){
        return `Serving ${item.type} chai with sugar ${item.sugar}`
    }
    return `Serve deafult chai..`
}

