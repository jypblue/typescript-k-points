let add1: (x: number, y: number) => number;

interface Add {
  (x: number, y: number) : number
}

type Add1 = (x: number, y: number) => number;

// 可选参数
function add5(x: number, y?:number) {
  return y ? x+y : x;
}

function add6(x:number, y = 0, z:number, q = 1) {
  return x+y+z+q
}

console.log(add6(1, undefined,3));

function add7(x: number, ...rest: number[]) {
  return x + rest.reduce((pre, cur) => pre + cur);
}

// 重载
function add8(...rest: number[]): number;
function add8(...rest: string[]): string;
function add8(...rest: any[]): any {
  const f1st = rest[0];
  if(typeof f1st === 'string') {
    return rest.join('')
  }

  if(typeof f1st === 'number') {
    return rest.reduce((pre, cur) => pre + cur);
  }
}


