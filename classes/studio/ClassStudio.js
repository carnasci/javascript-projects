//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate {
    constructor(name, mass, scoresArray){
        this.name = name;
        this.mass = mass;
        this.scoresArray = scoresArray;
    }
    addScore(num){
        this.scoresArray.push(num);
        return this.scoresArray;
    }
    scoresAverage(){
        let average = null;
        for (let i = 0; i < this.scoresArray.length; i++){
            average += Number(this.scoresArray[i])
        };
        average = Math.round((average/this.scoresArray.length)*10)/10;
        return average;
    }
    status(){
        let num = this.scoresAverage();
        let testStatus = "";
        if (num >= 90){
            testStatus = "Accepted";
        } else if (num < 90 && num > 80){
            testStatus = "Reserve";
        } else if (num < 80 && num > 70){
            testStatus = "Probationary";
        } else {
            testStatus = "Rejected";
        };
        return `${this.name} earned an average test score of ${this.scoresAverage()}% and has a status of ${testStatus}`;
    }
};

let bubbaBear = new CrewCandidate("Bubba Bear", "135kg", [88, 85, 90]);
let merryMaltese = new CrewCandidate("Merry Maltese", "1.5kg", [93, 88, 97]);
let gladGator = new CrewCandidate("Glad Gator", "225kg", [75, 78, 62]);

/*console.log(bubbaBear);
console.log(merryMaltese);
console.log(gladGator);*/

bubbaBear.addScore(83);
console.log(bubbaBear.scoresArray);
console.log(merryMaltese.scoresAverage());
console.log(bubbaBear.status());

//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.



//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.