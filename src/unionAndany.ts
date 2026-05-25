
let apiRequest : 'pending' | 'success' | 'reject' = 'pending';
apiRequest = 'success';

let airlineSeat : 'aisle' | 'window' | 'middle' = 'aisle';
airlineSeat = 'window';

const orders = ['2','10','15','30'];
let currentOrder : String | undefined;
for(let order of orders){
    if(order === '10'){
        currentOrder = order;
    }
    currentOrder = '78';
}
console.log(currentOrder);


