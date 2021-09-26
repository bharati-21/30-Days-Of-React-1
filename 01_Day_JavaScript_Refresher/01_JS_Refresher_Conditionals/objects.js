/* =========== OBJECTS =========== */

// Level 1
// 1. Create an empty object called dog
const dog = {};

// 2. Print the the dog object on the console
console.log(dog);

// 3. Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
dog.name = "Woofy";
dog.legs = 4;
dog.color = "Brown",
dog.age = 4;
dog.bark = () => {
    return "woof woof!";
}

// 4. Get name, legs, color, age and bark value from the dog object
console.log('Name:', dog.name);
console.log('Legs:', dog.legs);
console.log('Color:', dog.color);
console.log('Age:', dog.age);
console.log('Bark:', dog.bark());

// 5. Set new properties the dog object: breed, getDogInfo
dog.breed = "Jack Russell Terrier";
dog.getDogInfo = () => {
    for(d in dog) {
        console.log(d + " " + dog[d]);
    }
}
dog.getDogInfo();

// Level 2
const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }
  
 

// 1. Find the person who has many skills in the users object.
let maxSkills = 0, skilledPerson = {};

let keys = Object.keys(users);
for(k of keys) {
    if(users[k].skills.length > maxSkills) {
        skilledPerson = k;
        maxSkills = users[k].skills.length;
    }
}

console.log(`Most skilled person is ${skilledPerson} with ${maxSkills} skills`);

// 2. Count logged in users,count users having greater than equal to 50 points from the following object.
let loggedInCount = 0, pointsGreaterThan50 = 0;
for(k of keys) {
    if(users[k].isLoggedIn) {
        loggedInCount++;
    }
    if(users[k].points >= 50) {
        pointsGreaterThan50++;
    }
}

console.log(`Number of logged in users: ${loggedInCount}`);
console.log(`Number of users with points >= 50: ${pointsGreaterThan50}`);


// 3. Find people who are MERN stack developer from the users object


let mernDevs = [];
for (k of keys) {
    if(users[k].skills.includes('MongoDB') && users[k].skills.includes('React') && users[k].skills.includes('Express') && users[k].skills.includes('Node')) {
        mernDevs.push(k);
    }
}
console.log(`MERN Developers: ${mernDevs}`);

// 4. Set your name in the users object without modifying the original users object
/*
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }

    */
users.Bharati = {
    email : "bharati@gmail.com",
    skills : ['HTML', 'CSS', 'JavaScript', 'React', 'Node'],
    age: 22,
    isLoggedIn : true,
    points: 70
}

console.log(users['Bharati']);
console.log(users);

// 5. Get all keys or properties of users object
keys = Object.keys(users);

// 6. Get all the values of users object
entries = Object.entries(users);
console.log(entries);

// Level 3
// Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.

const personAccount = {
    firstName: 'Bharati',
    lastName: 'Subramanian',
    incomes: {
      salary: '$500',
      incentive: '$100',
    }, 
    expenses: {
      food: '$75',
      travel: '$25',
    },
    totalExpense: '$100',
    totalIncom: '$600',
    acoountInfo: {
      accountHolder: 'Bharati Subramanian',
      accountNum: 123456789,
      accountBalance: '$7500'
    },
    addIncome: function(incomeName="Unknown Income", incomeValue = 0) {
      this.incomes[incomeName] = incomeValue;
    },

    addExpense: function(expenseName = "Unknown Expense", expenseValue = 0) {
      this.expenses[expenseName] = expenseValue;
    },

    getBalance: function() {
      return this.acoountInfo.accountBalance;
    }
}

console.log(personAccount.getBalance())
console.log(personAccount.addExpense())

console.log(personAccount)


// 2. **** Questions:2, 3 and 4 are based on the following two arrays:users and products ()
const usersObj = [
  {
    _id: 'ab12ex',
    username: 'Alex',
    email: 'alex@alex.com',
    password: '123123',
    createdAt: '08/01/2020 9:00 AM',
    isLoggedIn: false,
  },
  {
    _id: 'fg12cy',
    username: 'Asab',
    email: 'asab@asab.com',
    password: '123456',
    createdAt: '08/01/2020 9:30 AM',
    isLoggedIn: true,
  },
  {
    _id: 'zwf8md',
    username: 'Brook',
    email: 'brook@brook.com',
    password: '123111',
    createdAt: '08/01/2020 9:45 AM',
    isLoggedIn: true,
  },
  {
    _id: 'eefamr',
    username: 'Martha',
    email: 'martha@martha.com',
    password: '123222',
    createdAt: '08/01/2020 9:50 AM',
    isLoggedIn: false,
  },
  {
    _id: 'ghderc',
    username: 'Thomas',
    email: 'thomas@thomas.com',
    password: '123333',
    createdAt: '08/01/2020 10:00 AM',
    isLoggedIn: false,
  },
]

// Imagine you are getting the above users collection from a MongoDB database. 
  // a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.
  //b. Create a function called signIn which allows user to sign in to the application


usersObj.signUp = function(userInfo) {
  
  for(let u of usersObj) {

    if(u["_id"]=== userInfo["_id"]) {
      return "User already has an account";
    }
    else {

      usersObj.push(userInfo);
      return "User signed up successfully!"
    }
  }
}

usersObj.signIn = (id, password) => {
  for(u of usersObj) {
    if(id === u["_id"] && password === u["password"]) {
      u["isLoggedIn"] = true;
      return "Signed in successfully!";
    }
  }
  return "Sign in Failed. Incorrect password or id!"
}


const userInfo = {
    _id: 'gti123',
    username: 'Bharati',
    email: 'bharati@123.com',
    password: 'abcdef',
    createdAt: '26/09/2021 19.22PM',
    isLoggedIn: true,

}
console.log(usersObj.signUp(userInfo));
console.log(usersObj.signIn('gti23', 'abcdef'));

const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy'],
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy'],
  },
]


// 3. The products array has three elements and each of them has six properties. a. Create a function called rateProduct which rates the product b. Create a function called averageRating which calculate the average rating of a product

function rateProduct(prodId, userId, rating) {
  let found = false;
  products.forEach(product => {
    if(product["_id"] === prodId) {
      product.ratings.push({
        userId: userId,
        rate: rating
      });
      found = true;
    }
  })
  return found ? "Rating Added successfully" :"Invalid Product";
}

products["rateProduct"] = rateProduct;

console.log(products.rateProduct('hedfg', 'gti123', '3'))

// 4. Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.


function likeProduct(prodId, userId) {
  let found = false;
  products.forEach(product => {
    if(product["_id"] === prodId) {
      found = true;
      if(product.likes.includes(userId))  {
        product.likes.splice(product.likes.indexOf(userId,1))
      }
      else {
        product.likes.push(userId);

      }
    }
  })
  return found ? "Product Likes Changed" :"Invalid Product";
}
products.likeProduct = likeProduct;

console.log(products.likeProduct('hedfcg', 'gti123'));console.log(products.likeProduct('hedcg', 'gti123'));
