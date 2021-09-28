class Person {
    constructor(firstName = 'Bharti', lastName="Iyer", age = 22, country = "India", city = "Mumbai") {
        console.log(this);
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.country = country;
        this.city = city;
        this.score = 0; // Initial value
        this.skills = []; // Initial value
    }

    getFullName() { // Getter
        return this.firstName + " " + this.lastName;
    }

    get getSkills() {
        return this.skills;
    }

    get getScore() {
        return this.score;
    }

    set setScore(score = 0) {
        this.score += score;
    }

    set setSkills(skill) {
        if(skill)
            this.skills.push(skill)
    }

    getPersonInfo() {
        return `This is ${this.firstName} ${this.lastName}. They are ${this.age} years old, and lives in ${this.city} ${this.country}. Their score is: ${this.score} and skills include: ${this.skills.join(", ")}.`;
    }
}

const p1 = new Person('Bharati', 'Subramanian', 30, 'India', 'Chennai');
console.log(p1);
console.log(p1.getFullName())
console.log(p1.getScore)
console.log(p1.getSkills)
p1.setScore = 100;
p1.setSkills = "HTML";
p1.setSkills = "CSS";
p1.setSkills = "JavaScript";
console.log(p1);
console.log(p1.getPersonInfo())


/*  EXERCISES */
// levelOne

// 1. Create an Animal class. The class will have name, age, color, legs properties and create different methods
// 2. Create a Dog and Cat child class from the Animal Class.


class Animal {
    constructor(name, age, color, legs) {
        this.name = name;
        this.age = age;
        this.color = color;
        this.legs = legs;
    }

    get getName() {
        return this.name;
    }

    get getAge() {
        return this.age;
    }

    get getColor() {
        return this.color;
    }

    get getLegs() {
        return this.legs;
    }

    getInfo() {
        return `My name is ${this.name}, and I am ${this.age} years old. I have ${this.legs} legs, and I am ${this.color} in color`; 
    }
}
const dog = new Animal('Dog', 4, 'brown', 4);
console.log(dog.getName);
console.log(dog.age);
console.log(dog.color);
console.log(dog.getLegs);
console.log(dog.getInfo());

class Dog  extends Animal{
    constructor(name, age, color, legs, breed) {
        super(name, age, color, legs);
        this.breed = breed;
        this.specialSkills = [];
    }

    bark() {
        return "Woof Woof!";
    }

    set setSpecialSkills(skill) {
        this.specialSkills.push(skill);
    }

    getInfo() { // Level 2
        return `I am a ${this.breed} dog, and my name is: ${this.name}. I'm ${this.age} years old, and ${this.color} in color. ${this.specialSkills && this.specialSkills.length > 0 ? "My specials skills include: " + this.specialSkills.join(", ") : "I have no special skills!"}`;
    }
}
const dogWoofy = new Dog('Woofy', 2, "white", 4, 'Pomeranian' );
console.log(dogWoofy);
console.log(dogWoofy.getName);
console.log(dogWoofy.getAge);
console.log(dogWoofy.getColor);
console.log(dogWoofy.getLegs);
console.log(dogWoofy.bark());
console.log(dogWoofy.getInfo());
dogWoofy.setSpecialSkills = 'Play Ball';
dogWoofy.setSpecialSkills = 'Sniff';
console.log(dogWoofy.getInfo());

class Cat  extends Animal{
    constructor(name, age, color, legs, weight) {
        super(name, age, color, legs);
        this.weight = weight;
        this.specialSkills = [];
    }

    meow() {
        return "Meow Meow!";
    }

    set setSpecialSkills(skill) {
        this.specialSkills.push(skill);
    }

    getInfo() { // Level 2
        return `I am a cat, and my name is: ${this.name}. I'm ${this.age} years old, and ${this.color} in color. I weigh ${this.weight} kgs, and ${this.specialSkills && this.specialSkills.length > 0 ? "My specials skills include: " + this.specialSkills.join(", ") : "I have no special skills!"}`;
    }
}

const catMuffy = new Cat('Muffy', 7, 'Light Brown', 4, 5.4);
console.log(catMuffy);
console.log(catMuffy.getName);
console.log(catMuffy.getAge);
console.log(catMuffy.getColor);
console.log(catMuffy.getLegs);
console.log(catMuffy.meow());
console.log(catMuffy.getInfo());
catMuffy.setSpecialSkills = 'Sleep';
catMuffy.setSpecialSkills = 'Scratch';
console.log(catMuffy.getInfo());

// Level 3
// 1. Let's try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create a class called Statistics and create all the functions which do statistical calculations as method for the Statistics class. Check the output below.

class Statistics {
    constructor(ages) {
        this.ages = ages;
    }

    getCount() {
        return this.ages.length;
    }

    get getSum() {
        const sum = this.ages.reduce((prevVal, currVal) => {
            return prevVal + currVal;
        });
        return sum;
    }

    getMin() {
        return ages.reduce((minAge, age) => {
            return age<minAge ? age: minAge;
        },Number.MAX_VALUE)
        
    }

    getMax() {
        return ages.reduce((minAge, age) => {
            return age>minAge ? age: minAge;
        },-1)
    }

    getCopy() {
        return [...ages];
    }

    getSortedArray(agesCopy) {
        agesCopy.sort()
    }

    getRange() {
        const agesCopy = this.getCopy();
        this.getSortedArray(agesCopy);
        return agesCopy[agesCopy.length-1] - agesCopy[0];
         
    }

   
    getMean() {
        return this.getSum / this.getCount();
    }

    getMedian() {
        const agesCopy = this.getCopy();
        this.getSortedArray(agesCopy);

        const len = this.getCount();
        if(len % 2 === 0) {
            return (agesCopy[ Math.trunc(len/ 2) - 1] + agesCopy[Math.trunc(len / 2)]) / 2;
        }
        
        return agesCopy[ Math.trunc(len/ 2) ];
    }



    getMode() {
        const count = {};
        let maxRepeat = 0;
        for(let i of ages) {
            if(count.hasOwnProperty(i)) {
                count[i] = ++count[i];
                if(maxRepeat < count[i]) maxRepeat = count[i];
            }
            else {
                count[i] = 1;
            }
        }
        const modes = [];
        for(let i in count) {
            if(count[i] === maxRepeat) {
                modes.push({
                    mode: i,
                    count: count[i]
                });
            }
        }
        return modes;
    }

    getVariance() {
        const mean = this.getMean();
        let variance =  ages.map(age => {
            return Math.pow((age-mean),2);
        }).reduce((prevVal, currVal) => {
            return prevVal+ currVal;
        });
        return (variance / this.ages.length).toFixed(2);
    }

    getStandardDeviation() {
        return Math.sqrt(this.getVariance()).toFixed(1);
    }

    getFrequencyDistribution() {
        const count = {};
        for(let i of ages) {
            if(count.hasOwnProperty(i)) {
                count[i] = ++count[i];
            }
            else {
                count[i] = 1;
            }
        }
        const frequencyDis = [];
        for(let i in count) {
            frequencyDis.push({

                relFreq: (count[i]/this.getCount()) * 100,
                age: i,
            })
        }
        return frequencyDis;
    }

    describe() {
        return `Count: ${this.getCount()}
Sum: ${this.getSum}
Min: ${this.getMin()}
Max: ${this.getMax()}
Range: ${this.getRange()}
Mean: ${this.getMean()}
Median: ${this.getMedian()}  
Mode: ${(this.getMode().map(mode => "("+mode.mode + ", " + mode.count + ")"))}
Variance: ${this.getVariance()},
Standard Deviation: ${this.getStandardDeviation()}
Frequenct Distribution: ${(this.getFrequencyDistribution().map(dis => "(" + dis.relFreq + ", " + dis.age +")").join(" "))}
`;
    }
}


const ages =  [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26];
const statistics = new Statistics(ages);
console.log('Count:', statistics.getCount()) // 25
console.log('Sum: ', statistics.getSum) // 744
console.log('Min: ', statistics.getMin()) // 24
console.log('Max: ', statistics.getMax()) // 38
console.log('Range: ', statistics.getRange()) // 14
console.log('Mean: ', Math.round(statistics.getMean())) // 30
console.log('Median: ',statistics.getMedian()) // 29
console.log('Mode: ', statistics.getMode()) // {'mode': 26, 'count': 5}
console.log('Variance: ', statistics.getVariance()) // 17.5
console.log('Variance: ',statistics.getStandardDeviation()) // 17.5
console.log('Frequency Distribution: ',statistics.getFrequencyDistribution()) // [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
console.log(statistics.describe())
