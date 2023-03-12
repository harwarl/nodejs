var addit = function (a, b) {
    return a * b;
};
var answer = addit(4, 5);
console.log(answer);
var isCool = true;
var age = 56;
var eyeColor = 'brown';
var favouriteQoute = 'I am not old';
//arrays
var pets = ['cat', 'dog', 'pig'];
var pets2 = ['Bum', 'tom', 'fum'];
var wizards = {
    a: 'John'
};
//null and undefined
var nah = undefined;
var no = null;
//tuple
var basket;
basket = ['ball', 5];
//enum
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
;
var sizeNumber = Size[2];
var size = Size.Medium;
// Any type
var what = 'yeas';
what = 4;
what = true;
what = ['bubu', 4];
//void
var sing = function () {
    console.log('lalalala');
};
//never  never returns and no endpoints
var error = function () {
    throw Error('jhdsbskj');
};
var fightRobotArmy = function (robots) {
    console.log('Fight');
};
//the above is the same as
var fightRobotArmy2 = function (robots) {
    console.log('fight');
};
var dog = {};
dog.count;
//function
var frameit = function (chief) {
    return 5;
};
//class
var Animals = /** @class */ (function () {
    function Animals(sound) {
        this.sing = 'Waoh';
        this.sing = sound;
    }
    Animals.prototype.greet = function () {
        return ("sings ".concat(this.sing));
    };
    return Animals;
}());
var Cat = new Animals('waooow');
Cat.greet();
//union
var confused = "balablue";
