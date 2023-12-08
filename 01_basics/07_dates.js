let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toDateString);
// console.log(typeof myDate);

let myCreateDate = new Date(2023 , 0 , 23)
// console.log(myCreateDate. toDateString())

let MyTimeStamp = Date.now();
// console.log(myCreateDate.getTime());

//IMPORTANT
let newDate = new Date() 
newDate.toLocaleDateString('default',{
    weekday: " long "
    
            })