'use strict';

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Foo = function () {
    function Foo() {
        _classCallCheck(this, Foo);
    }

    _createClass(Foo, [{
        key: 'baz',
        value: function baz() {
            console.log('world');
            alert('world');
        }
    }], [{
        key: 'bar',
        value: function bar() {
            this.baz();
        }
    }, {
        key: 'baz',
        value: function baz() {
            console.log('hello');
            alert('hello');
        }
    }]);

    return Foo;
}();

Foo.bar(); // hello


var Animal = function () {
    function Animal(shoutVoice, speed) {
        _classCallCheck(this, Animal);

        this._shoutVoice = shoutVoice;
        this._speed = speed;
    }

    _createClass(Animal, [{
        key: 'shout',
        value: function shout() {
            console.log(this._shoutVoice);
        }
    }, {
        key: 'run',
        value: function run() {
            console.log('本上仙的速度可是有' + this.speed);
        }
    }, {
        key: 'speed',
        get: function get() {
            return this._speed;
        }
    }]);

    return Animal;
}();

var Dog = function (_Animal) {
    _inherits(Dog, _Animal);

    function Dog() {
        _classCallCheck(this, Dog);

        return _possibleConstructorReturn(this, (Dog.__proto__ || Object.getPrototypeOf(Dog)).call(this, '汪汪汪', '10m/s'));
    }

    _createClass(Dog, [{
        key: 'gnawBone',
        value: function gnawBone() {
            console.log('这是本狗最幸福的时候');
        }
    }, {
        key: 'run',
        value: function run() {
            console.log('本狗的速度可是有' + this._speed);
            _get(Dog.prototype.__proto__ || Object.getPrototypeOf(Dog.prototype), 'run', this).call(this);
        }
    }]);

    return Dog;
}(Animal);

var PoodleDog = function (_Dog) {
    _inherits(PoodleDog, _Dog);

    function PoodleDog() {
        _classCallCheck(this, PoodleDog);

        var _this2 = _possibleConstructorReturn(this, (PoodleDog.__proto__ || Object.getPrototypeOf(PoodleDog)).call(this));

        _this2._breed = 'poodle';
        return _this2;
    }

    _createClass(PoodleDog, [{
        key: 'breed',
        get: function get() {
            return this._breed;
        }
    }]);

    return PoodleDog;
}(Dog);

debugger;
var poodleDog = new PoodleDog();
console.log(poodleDog.breed);
console.log(poodleDog.speed);
poodleDog.shout();
poodleDog.run();
poodleDog.gnawBone();

/////////////////////////////////////////////////////////////

var Cat = function () {
    function Cat(id) {
        _classCallCheck(this, Cat);

        this._id = id;
    }

    _createClass(Cat, [{
        key: 'speak',
        value: function speak() {
            console.log(this._id + ' makes a noise.');
        }
    }, {
        key: 'getId',
        value: function getId() {
            return this._id;
        }
    }]);

    return Cat;
}();

var Lion = function (_Cat) {
    _inherits(Lion, _Cat);

    function Lion(id, name) {
        _classCallCheck(this, Lion);

        var _this3 = _possibleConstructorReturn(this, (Lion.__proto__ || Object.getPrototypeOf(Lion)).call(this, id));

        _this3._name = name;
        return _this3;
    }

    _createClass(Lion, [{
        key: 'speak',
        value: function speak() {
            _get(Lion.prototype.__proto__ || Object.getPrototypeOf(Lion.prototype), 'speak', this).call(this);
            console.log(this._name + ' roars.');
        }
    }, {
        key: 'getId',
        value: function getId() {
            var ret = this._name + " 's id is " + _get(Lion.prototype.__proto__ || Object.getPrototypeOf(Lion.prototype), 'getId', this).call(this);
            return ret;
        }
    }]);

    return Lion;
}(Cat);

debugger;
var lioncat = new Lion('20181203', 'Jack');
lioncat.speak();
console.log(lioncat.getId());

//////////////////////////////////////////////////////////

var XXX = function () {
    function XXX(id) {
        _classCallCheck(this, XXX);

        this._id = id;
    }

    _createClass(XXX, [{
        key: 'getId',
        value: function getId() {
            return this._id;
        }
    }]);

    return XXX;
}();

var YYY = function (_XXX) {
    _inherits(YYY, _XXX);

    function YYY(id, name) {
        _classCallCheck(this, YYY);

        var _this4 = _possibleConstructorReturn(this, (YYY.__proto__ || Object.getPrototypeOf(YYY)).call(this, id));

        _this4._name = name;
        return _this4;
    }

    _createClass(YYY, [{
        key: 'getName',
        value: function getName() {
            return this._name + " 's id is " + _get(YYY.prototype.__proto__ || Object.getPrototypeOf(YYY.prototype), 'getId', this).call(this);
        }
    }]);

    return YYY;
}(XXX);

debugger;
var ccc = new YYY('button0', '用友按钮');
console.log(ccc.getName());

//# sourceMappingURL=index.js.map