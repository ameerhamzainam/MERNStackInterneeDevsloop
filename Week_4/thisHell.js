// // console.log(this);
// // function showThis() {
// //     console.log(this);
// //   }
// //   showThis();

// // let obj = {
// //     name: "ameerhamza",
// //     age: 24,
// //     getdata: function () {
// //         return console.log(`name ${this.name} and age ${this.age}`)
// //     }
// // }
// // obj.getdata();

// // let data = getdata();
// // console.log(data);
// let obj1 = {
//     name: "ameerhamza",
//     age: 24,
//     getdata: () => {
//         return console.log(`name ${this.name} and age ${this.age}`)
//     }
// }
// // obj1.getdata(); //not accessible
// // obj.getdata();//accessible
// // console.log(this);// returing an empty object
// // function showThis() {
// //     console.log(this);
// // }
// // showThis(); // window (in browser) or global (in Node)


// // console.log("===========================================================");

// // function greet(word,other) {
// //     // console.log("Hi " + this.name);
// //     console.log(`${word} Hi im ${this.name} and my age is ${this.age} and ${other}`);
// // }

// // const user = {
// //     name: "Ameer",
// //     age: 24
// // };
// // const boundFunc = greet.bind(user,'Amigos');
// // boundFunc();
// // greet("hi");
// // const fn = greet.bind(user)
// // console.log(fn); 
// // fn();

// // greet.apply(user);
// // greet.call(user,["amigos","heheheheh"]);
// // greet.apply(user,["amigos","heheheheh"]);
const team = {
    name: "CodeSquad",
    members: ["Alice", "Bob", "Hamza"],
    printMembers: function () {
      this.members.forEach(function (member) {
        console.log(`${member} is in ${this.name}`);
      });
    }
  };
  
  team.printMembers(); // ❌ 'this.name' is undefined (function inside method)
  const team2 = {
    name: "CodeSquad",
    members: ["Alice", "Bob", "Hamza"],
    printMembers: function () {
      this.members.forEach((memberName)=> {
        console.log(`${memberName} is in ${this.name}`);
      });
    }
  };
  
  team2.printMembers(); 
  
  
