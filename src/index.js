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
