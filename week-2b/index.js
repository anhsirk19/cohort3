// class Reactangle{
//     constructor(w, h, color){
//         this.width = w;
//         this.height = h;
//         this.color = color;
//     }

//     area(){
//         return this.width*this.height;
//     }

//     paint(){
//         console.log(`painting with color ${this.color}`);
//     }
// }

// const rect = new Reactangle(2,3,"black");
// console.log(rect.width);
// console.log(rect.height);
// console.log(rect.color);

// console.log(rect.area());
// rect.paint();

// const date = new Date();
// console.log(date);

// const map = new Map();
// map.set("name", "krishna");
// map.set("age", 19);
// console.log(map.get("age"));
// console.log(map.get("name"));

// function main(){
//     console.log("sai");
// }

// setTimeout(main, 3000);

// function setTimeoutPromisified(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
//   }
  
//   function callback() {
//       console.log("3 seconds have passed");
//   }
  
//   setTimeoutPromisified(3000).then(callback)

function random(r){
    setTimeout(r, 3000);
}

let p = new Promise(random);

function callback(){
    console.log("promise succed");
}
p.then(callback);
  


