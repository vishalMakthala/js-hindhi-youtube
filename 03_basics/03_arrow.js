const user = {
    username: "hitesh",
    price : 999,
    welcomeMessage : function(){
        // console.log(`${this.username} , welcome to website`);
    // console.log(this);
    }

}
// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()
// console.log(this);

// function chai (){
//     let username =  "Vishal"
//     // console.log(this.username);
// }
// chai()

// const chai = function() {
//     let username = " Vishal"
//     console.log(this.username);
// }
const chai = () =>{
    let username = " Vishal"
    console.log(this.username);
}
chai()

