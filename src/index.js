class Foo {
    static bar () {
        this.baz();
    }
    static baz () {
        console.log('hello');
        alert('hello')
    }
    baz () {
        console.log('world');
        alert('world')
    }
}
  
Foo.bar() // hello


class Animal{
    constructor(shoutVoice, speed){
        this._shoutVoice = shoutVoice;
        this._speed = speed;
    }
 
    get speed(){
        return this._speed;
    }
 
    shout(){
        console.log(this._shoutVoice);
    }
 
    run(){
        console.log('本上仙的速度可是有' + this.speed);
    }
}
 
class Dog extends Animal{
    constructor(){
        super('汪汪汪', '10m/s');
    }
 
    gnawBone(){
        console.log('这是本狗最幸福的时候');
    }
 
    run(){
        console.log('本狗的速度可是有' + this._speed);
        super.run();
    }
}
 
class PoodleDog extends Dog{
    constructor(){
        super();
        this._breed = 'poodle';
    }
 
    get breed(){
        return this._breed;
    }
}
 debugger;
let poodleDog = new PoodleDog();
console.log(poodleDog.breed);
console.log(poodleDog.speed);
poodleDog.shout();
poodleDog.run()
poodleDog.gnawBone();


/////////////////////////////////////////////////////////////
class Cat { 
    constructor(id) {
      this._id = id;
    }
    
    speak() {
      console.log(this._id + ' makes a noise.');
    }

    getId(){
        return this._id;
    }
}
  
class Lion extends Cat {
    constructor(id, name){    
        super(id);
        this._name = name;
    }

    speak() {
      super.speak();
      console.log(this._name + ' roars.');
    }

    getId(){
        let ret = this._name + " 's id is " + super.getId();
        return ret;
    }
}
debugger;
  let lioncat = new Lion('20181203', 'Jack');
  lioncat.speak();
  console.log(lioncat.getId());




  //////////////////////////////////////////////////////////
class XXX {
    constructor(id){
      this._id = id;
    }
    
    getId(){
        return this._id;
    }
  
}
  
class YYY extends XXX{
    constructor(id, name){    
        super(id);
        this._name = name;
    }
    
    getName(){
        return this._name + " 's id is " + super.getId();
    }
  }
  
  debugger;
  let ccc = new YYY('button0', '用友按钮');
  console.log(ccc.getName());