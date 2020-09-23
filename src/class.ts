
// 类
// 实例属性

class Dog {
  constructor(name: string) {
    this.name = name;
  }
  name: string = 'dog'
  run() {

  }
}

console.log(Dog.prototype);
const dog = new Dog('hahaha');
console.log(dog)


class Husky extends Dog {
  constructor(name: string, color: string) {
    super(name);
    this.color = color;

  }
  color: string




}