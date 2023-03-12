const addit = (a : number, b : number) =>{
    return a * b;
}

const answer = addit(4, 5);

console.log(answer);

let isCool:boolean = true;
let age: number = 56;
let eyeColor: string = 'brown';
let favouriteQoute: string = 'I am not old';
//arrays
let pets: string[] = ['cat', 'dog', 'pig'];
let pets2: Array<string> = ['Bum', 'tom', 'fum'];
let wizards: object = {
    a: 'John'
}

//null and undefined
let nah: undefined = undefined;
let no:null = null;

//tuple
let basket : [string, number];
basket = ['ball', 5];

//enum
enum Size {Small = 1, Medium = 2, Large = 3};
let sizeNumber: string = Size[2];
let size:number = Size.Medium;

// Any type
let what: any = 'yeas';
what = 4;
what = true;
what = ['bubu', 4];


//void
let sing = ():void =>{
    console.log('lalalala');
}

//never  never returns and no endpoints
let error = ():never =>{
    throw Error('jhdsbskj')
}

//interface
interface RobotArmy{  //or type
    count: number,
    type: string,
    magic: string
}

let fightRobotArmy = (robots: RobotArmy) => {
    console.log('Fight');
}

//the above is the same as

let fightRobotArmy2 = (robots: {count: number, type: string, magic: string})=>{
    console.log('fight')
}

//assertions
interface FrimArmy{  //or type
    count: number,
    type: string,
    magic?: string  //magis may or maynot be part of the object
}

const dog = {} as FrimArmy;
dog.count

//function
let frameit = (chief?: number):number =>{
    return 5
}

//class
class Animals {
    sing: string = 'Waoh'
    constructor(sound: string){
        this.sing = sound;
    }
    greet(): string{
        return(`sings ${this.sing}`);
    }
}

let Cat = new Animals('waooow');
Cat.greet();


//union
let confused: string | number = "balablue";