// ts 基本数据类型

// 原始数据类型
let bool: boolean = true;
let num: number = 123;
let str: string = 'abc';

//str = 123;

// | 联合类型
let union: string | number | boolean = 12312;

// 数组
let arr1: number[] = [1,2,3];
let arr2: Array<number | string> = [1,2,3, '4'];

// 元祖
let tuple: [number, string] = [0, '1']
tuple.push(2);
console.log(tuple);


// 函数
let add = (x: number, y: number) => x+ y;
let compute: (x: number, y: number) => number;
compute = add;

// 对象
let obj: {x: number, y: number} = {x: 1, y : 2}
obj.x = 3;

// symbol
let s1: Symbol = Symbol();
let s2 = Symbol();

// undefined, null
let un: undefined = undefined;
let nu: null = null;

// void
let noReturn = () => {};

// any
let x;

// never
let error = () => {
  throw new Error('error')
}

let endless = ()=>{
  while(true){}
}


// 数字枚举
enum Role {
  Reporter,
  Developer,
  Maintainer,
  Owner,
  Guest
}

console.log(Role);


enum Message {
  Success = '123',
  Fail = '456'
}

enum Answer {
  N,
  Y = 'Yes'
}

enum Char {
  a,
  b = Char.a,
  c = 1+3,
  d = Math.random(),
  e = '123'.length
}


// 常量枚举，编译后被移除，只需要value不需要key时
const enum Month {
  Jan,
  Feb,
  Mar,
}

// 枚举类型， 不同类型枚举类型不能进行比较，字符串类型只能取成员的值
enum E { a, b }


// 接口
interface List {
  readonly id: number;
  name: string;
  age?: number;
  [key: string]: any
}

interface Result {
  data: List[]
}

function render(result: Result) {
  result.data.forEach(value => {
    console.log(value.id, value.name)
  })
}

let result = {
  data: [
    {
      id: 1, name: 'a', sex: 'male'
    }
  ]
}

render(result)

render({
  data: [
    {
      id: 1, name: 'a', sex: 'male'
    }
  ]
} as Result)