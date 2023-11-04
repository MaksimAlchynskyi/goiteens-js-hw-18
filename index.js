"use strikt"

// 1.
// Напиши функцію-конструктор Account, яка створює об'єкт з властивостями login і email. В prototype функції-конструктора 
// добав метод getInfo(), який виводить в консоль значення полів login і email об'єкта який його викликав.

class Account {
    constructor({ login, email }) {
        this.login = login;
        this.email = email;
    };
    getInfo() {
        return `Login ${this.login}, Email ${this.email}`
    };
};
const mango = new Account({
    login: 'Mangozedog',
    email: 'mango@dog.woof',
});
console.log(mango.getInfo());

// 2.
// Напиши клас User для створення користувача з наступними властивостями:
// name — рядок
// age — число
// followers — число
// Добав метод getInfo(), який, виводить рядок: User ${ім'я} is ${вік} years old and has ${кількість фоловерів} followers

class User {
    constructor({ name, age, followers }) {
        this.name = name;
        this.age = age;
        this.followers = followers;
    };
    getInfo() {
        return `User ${this.name} is ${this.age} years old and has ${this.followers} followers`
    };
};
const poly = new User({
    name: 'Poly',
    age: 3,
    followers: 17,
});
console.log(poly.getInfo());

// 3.
// Напиши клас Storage, який буде створювати об'єкти для управління складом товарів.
// При виклику буде отримувати один аргумент - початковий масив товарів, і записувати його у властивість items.
// Додай методи класу:
// getItems() — повертає масив поточних товарів
// addItem(item) — отримує новий товар і додає його до поточних
// removeItem(item) — отримує товар і, якщо він є, видаляє його з поточних

class Storage {
    constructor(initialItems = []) {
        this.items = initialItems;
    };
    getItems() {
        return this.items
    };
    addItem(item) {
        this.items.push(item);
    };
    removeItem(item) {
        const index = this.items.indexOf(item);
        if (index !== -1) {
            this.items.splice(index, 1);
        };
    };
};
const storage = new Storage([
    'Нанітоіди',
    'Пролонгер',
    'Залізні жупи',
    'Антигравітатор',
]);
const items = storage.getItems();
console.table(items);
storage.addItem('Дроїд');
console.table(storage.items);
storage.removeItem('Пролонгер');
console.table(storage.items);

// 4.
// Напиши клас StringBuilder. На вхід він отримує один параметр — рядок, який записує у властивість _value.
// Додай класу наступний функціонал:
// Геттер value — повертає поточне значення поля _value
// Метод append(str) — отримує параметр str (рядок) і додає його в кінець _value
// Метод prepend(str) — отримує параметр str (рядок) і додає його на початок _value
// Метод pad(str) — отримує параметр str (рядок) і додає його на початок і в кінець _value

class StringBuilder {
    constructor(value) {
        this._value = value;
    };
    get value() {
        return this._value;
    };
    append(str) {
        this._value += str;
    };
    prepend(str) {
        this._value = str + this._value;
    };
    pad(str) {
        this._value = str + this._value + str;
    };
};
const builder = new StringBuilder('.');
builder.append('^');
console.log(builder.value);
builder.prepend('^');
console.log(builder.value);
builder.pad('=');
console.log(builder.value);

// 5.
// Напиши клас Car із зазначеними властивостями і методами.

class Car {
    static getSpecs({ maxSpeed, speed, isOn, distance, price }) {
        console.log(`Max Speed: ${maxSpeed}, Speed: ${speed}, Is On: ${isOn}, Distance: ${distance}, Price: ${price}`);
    };
    constructor({ maxSpeed, price }) {
        this.speed = 0;
        this.price = price;
        this.maxSpeed = maxSpeed;
        this.isOn = false;
        this.distance = 0;
    };
    get getPrice() {
        return this.price;
    };
    set setPrice(newPrice) {
        this.price = newPrice;
    };
    turnOn() {
        this.isOn = true;
    };
    turnOff() {
        this.isOn = false;
        this.speed = 0;
    };
    accelerate(value) {
        if (this.speed + value <= this.maxSpeed) {
            this.speed += value;
        } else {
            console.log("error");
        };
    };
    decelerate(value) {
        if (this.speed - value >= 0) {
            this.speed -= value;
        } else {
            console.log("error");
        };
    };
    drive(hours) {
        if (this.isOn) {
            this.distance += this.speed * hours;
        } else {
            console.log('Спочатку заведіть машину!');
        };
    };
};
const mustang = new Car({ maxSpeed: 200, price: 2000 });
mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);
Car.getSpecs(mustang);
mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();
Car.getSpecs(mustang);
console.log(mustang.price);
mustang.price = 4000;
console.log(mustang.price);