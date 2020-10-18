
// 泛型
function log<T>(value: T): T{
  console.log(value);
  return value;
}

log(['a', 'b'])

type Log = <T>(value: T) => T;
let myLog: Log = log
