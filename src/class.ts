
// 类
// 实例属性

// 抽象类, 复用实现多态，运行时的绑定
abstract class Animal {
  eat() {
    console.log('eat')
  }

  abstract sleep(): void
}

//const animal = new Animal();

class Dog extends Animal{
  constructor(name: string) {
    super();
    this.name = name;
  }
  name: string = 'dog'
  run() {

  }

  sleep() {
    console.log('dog sleep')
  }
}

console.log(Dog.prototype);
const dog = new Dog('hahaha');
console.log(dog)
dog.eat();

class Husky extends Dog {
  constructor(name: string, color: string) {
    super(name);
    this.color = color;

  }
  color: string

}


class Cat extends Animal {
  sleep() {
    console.log('cat sleep')
  }
}

const cat = new Cat();

const animals: Animal[] = [dog, cat];

animals.forEach(i=> {
  i.sleep();
})


// 返回this实现链式调用
class WorkFlow {
  step1() {
    console.log('step1')
    return this;
  }
  step2() {
    console.log('step2')
    return this;
  }
}

new WorkFlow().step1().step2();

class MyFlow extends WorkFlow {
  next() {
    console.log('next')
    return this;
  }
}

new MyFlow().next().step1().step2().next().step2();