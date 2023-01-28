const users = [
    
 { name: "John Doe",    city: "New York", email: "johndoe@example.com", status: "inactive", age: 30, id: "123" },
 { name: "Jane Smith",  city: "Los Ange", email: "janesmith@example.com", status: "active",  age: 25, id: "1234" },
 { name: "Bob Johnson", city: "Chicago", email: "bobjohnson@example.com", status: "inactive", age: 35 , id: "12"},
 { name: "Emily Davis", city: "Houston", email: "emilydavis@example.com", status: "active",  age: 28 , id: "1235"},
 { name: "Michael ",    city: "Phoenix", email: "michaelbrown@example.com", status: "active", age: 40, id: "13" },
 { name: "Sarah M",     city: "Philade", email: "sarahmiller@example.com", status: "active",  age: 32, id: "23" },
 { name: "David G",     city: "San Ant", email: "davidgarcia@example.com", status: "processing", age: 38 , id: "1023"}
]   
    

// methods

// 1 Map
// 2 filter
// 3 find

// ya copy bana data hy origial data ki

const mapMethod = () => {
      let newUsers = users.map((user, index)=>{
       return user.age*2
        })
        console.log(newUsers)
}

// ya pura arry ly ga or vo cahaiya jin
const filterMethod = () => {
        let filterUsers = users.filter((user, i)=>{
         return user.status === "active"
        })

        console.log(filterUsers)
}
 
// ya pahla dikhay ga bas
const findMethod = () => {
        let document = users.find((user, i)=>{
                return user.age>30
        })
        console.log(document)
}




// console.log(users);
// for loop-----------------------------------------
// for(let i=0; i<users.length;i++ ){
// console.log(users[i])
// }

// for of loop-------------------------------------

// for(let user of users){
//      for(let property in user){
//         // // console.log(property)
//         console.log(property  +  "=> " + user[property])
//         }

// }

// let singleUser = users[0]
// console.log(singleUser)

// for(let property in singleUser){
// // console.log(property)
// console.log(singleUser[property])
// }

// arrow function---------------------------------
// const say = name => "Hellow "  + name
// console.log(say('uamir'))