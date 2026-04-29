// 1
let obj = {
    name: "Iphone 17 pro max",
    color: "White", 
    price: 1700,
}
let a = {}
for(let key in obj) {
    if (typeof obj[key] === "number") {
        a[key] = obj[key] + 300
    }else if (key === "name"){
        a[key] = "Iphone 18 pro max"
    }else if (key === "color"){
        a[key] = "BlueViolet"
    }else {
        a[key] = obj[key]
    }
}
console.log(a);

console.log("////////////////////////////////////////////////");

// 2
let b = {
    name: "Sabzi",
    color: "Olovrang", 
    price: 6000,
}
let c = {}
for(let key in b) {
    if (typeof b[key] === "number") {
        c[key] = b[key] + 3000
    }else if (key === "name"){
        c[key] = "Kartoshka"
    }else if (key === "color"){
        c[key] = "Sariq"
    }else {
        c[key] = b[key]
    }
}
console.log(c);

console.log("////////////////////////////////////////////////");

// 3
let d = {
    name: "Cobalt",
    color: "oq", 
    price: 12000,
}
let e = {}
for(let key in d) {
    if (typeof d[key] === "number") {
        e[key] = d[key] + 3000
    }else if (key === "name"){
        e[key] = "Gentre"
    }else if (key === "color"){
        e[key] = "qora"
    }else {
        e[key] = d[key]
    }
}
console.log(e);

console.log("////////////////////////////////////////////////");

// 4
let f = {
    name: "Nexia 2",
    color: "oq", 
    price: 8000,
}
let g = {}
for(let key in f) {
    if (typeof f[key] === "number") {
        g[key] = f[key] + 5000
    }else if (key === "name"){
        g[key] = "Nexia 3"
    }else if (key === "color"){
        g[key] = "qora"
    }else {
        g[key] = f[key]
    }
}
console.log(g);

console.log("////////////////////////////////////////////////");

// 5
let h = {
    name: "Acer",
    color: "qora", 
    price: 600,
}
let i = {}
for(let key in h) {
    if (typeof h[key] === "number") {
        i[key] = h[key] + 900
    }else if (key === "name"){
        i[key] = "Makbuc pro"
    }else if (key === "color"){
        i[key] = "oq"
    }else {
        i[key] = h[key]
    }
}
console.log(i);

console.log("////////////////////////////////////////////////");

// 6
let j = {
    name: "hp",
    color: "oq", 
    price: 500,
}
let k = {}
for(let key in j) {
    if (typeof j[key] === "number") {
        k[key] = j[key] + 100
    }else if (key === "name"){
        k[key] = "Lenove"
    }else if (key === "color"){
        k[key] = "qora"
    }else {
        k[key] = j[key]
    }
}
console.log(k);

console.log("////////////////////////////////////////////////");

// 7
let l = {
    name: "footbolka",
    color: "oq", 
    price: 70,
}
let m = {}
for(let key in l) {
    if (typeof l[key] === "number") {
        m[key] = l[key] + 130
    }else if (key === "name"){
        m[key] = "Shim"
    }else if (key === "color"){
        m[key] = "qora"
    }else {
        m[key] = l[key]
    }
}
console.log(m);

console.log("////////////////////////////////////////////////");

// 8
let n = {
    ism: "Ronaldo",
    familiya: "Cristiano", 
    num: 7,
}
let o = {}
for(let key in n) {
    if (typeof n[key] === "number") {
        o[key] = n[key] + 3
    }else if (key === "ism"){
        o[key] = "Messi"
    }else if (key === "familiya"){
        o[key] = "Lionel"
    }else {
        o[key] = n[key]
    }
}
console.log(o);

console.log("////////////////////////////////////////////////");

// 9
let p = {
    ism: "Messi",
    familiya: "Lionel", 
    num: 10,
}
let q = {}
for(let key in p) {
    if (typeof p[key] === "number") {
        q[key] = p[key] - 3
    }else if (key === "ism"){
        q[key] = "Ronaldo"
    }else if (key === "familiya"){
        q[key] = "Cristiano"
    }else {
        q[key] = p[key]
    }
}
console.log(q);

console.log("////////////////////////////////////////////////");

// 10
let r = {
    ism: "Mubappe",
    familiya: "Kilyan", 
    num: 10,
}
let s = {}
for(let key in r) {
    if (typeof r[key] === "number") {
        s[key] = r[key] + 1
    }else if (key === "ism"){
        s[key] = "Neymar"
    }else if (key === "familiya"){
        s[key] = "Junior"
    }else {
        s[key] = r[key]
    }
}
console.log(s);