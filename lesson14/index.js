let a = 10;
let b = 5;
let c = 3;

// 1
function f(a, b) {
  return a + b;
}
console.log(f(a, b));

// 2
function g(a, b) {
  return a - b;
}
console.log(g(a, b));

// 3
function h(a, b) {
  return a * b;
}
console.log(h(a, b));

// 4
function i(a, b) {
  return a / b;
}
console.log(i(a, b));

// 5
function j(a) {
  return a % 2 === 0;
}
console.log(j(a));

// 6
function k(a) {
  return a % 2 !== 0;
}
console.log(k(a));

// 7
function l(a) {
  return a * a;
}
console.log(l(a));

// 8
function m(a) {
  return a * a * a;
}
console.log(m(c));

// 9
function n(a, b) {
  if (a > b) return a;
  else return b;
}
console.log(n(a, b));

// 10
function o(a, b) {
  if (a < b) return a;
  else return b;
}
console.log(o(a, b));

let d = 8;
let e = 2;
let f1 = 6;

// 1
let p = function(d, e) {
  return d + e;
};
console.log(p(d, e));

// 2
let q = function(d, e) {
  return d - e;
};
console.log(q(d, e));

// 3
let r = function(d, e) {
  return d * e;
};
console.log(r(d, e));

// 4
let s = function(d, e) {
  return d / e;
};
console.log(s(d, e));

// 5
let t = function(d) {
  return d % 2 === 0;
};
console.log(t(d));

// 6
let u = function(d) {
  return d % 2 !== 0;
};
console.log(u(d));

// 7
let v = function(d) {
  return d * d;
};
console.log(v(d));

// 8
let w = function(f1) {
  return f1 * f1 * f1;
};
console.log(w(f1));

// 9
let x = function(d, e) {
  return d > e ? d : e;
};
console.log(x(d, e));

// 10
let y = function(d, e) {
  return d < e ? d : e;
};
console.log(y(d, e));

let g1 = 20;
let h1 = 4;
let i1 = 7;

// 1
let z = (g1, h1) => g1 + h1;
console.log(z(g1, h1));

// 2
let a1 = (g1, h1) => g1 - h1;
console.log(a1(g1, h1));

// 3
let b1 = (g1, h1) => g1 * h1;
console.log(b1(g1, h1));

// 4
let c1 = (g1, h1) => g1 / h1;
console.log(c1(g1, h1));

// 5
let d1 = (g1) => g1 % 2 === 0;
console.log(d1(g1));

// 6
let e1 = (g1) => g1 % 2 !== 0;
console.log(e1(g1));

// 7
let f2 = (g1) => g1 * g1;
console.log(f2(g1));

// 8
let g2 = (i1) => i1 * i1 * i1;
console.log(g2(i1));

// 9
let h2 = (g1, h1) => (g1 > h1 ? g1 : h1);
console.log(h2(g1, h1));

// 10
let i2 = (g1, h1) => (g1 < h1 ? g1 : h1);
console.log(i2(g1, h1));



