let response : any = "42";
let numericLength : number = (response as String).length
type Book = {name : String;};
let BookString =  `{name : who moved my cheese}`
let BookObject = JSON.parse(BookString) as Book; // console.log(BookObject.name);
const inputElement = document.getElementById("username") as HTMLInputElement // type Assertation 
let value : any;
value = 45;
value = 'a';
value = true; // value.toUpperCase();
let newValue : unknown;
newValue = "meet";
newValue = [1,2,3,];
if(typeof newValue === 'string'){
    newValue.toLocaleUpperCase();
}
try {
} catch (error) {
    if(error instanceof Error){
        console.log(error.message);
    }
    console.log("Error" ,error);
}
const data : unknown = "meet";
const res : String = data as String;
type Role = 'Admin' | 'User' | 'SuperAdmin';
function redirectAsRole(role : Role) : void {
    if(role === 'Admin'){
        console.log("Redirecting to Admin....");
        return
    }
    if(role === 'User') {
         console.log("Redirecting to User....");
        return
    }
    role;
}