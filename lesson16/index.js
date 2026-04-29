let obj = { ism: "Muhammad", yosh: 14 }
let b1 = Object.assign({}, obj)
obj.ism = "Raxim"
obj.yosh = 13
console.log(obj, b1)

let b2 = Object.assign({}, obj)
obj.ism = "Abror"
obj.yosh = 13
console.log(obj, b2)

let b3 = Object.assign({}, obj)
obj.ism = "Axror"
obj.yosh = 14
console.log(obj, b3)

let b4 = Object.assign({}, obj)
obj.ism = "Dilshod"
obj.yosh = 13
console.log(obj, b4)

let b5 = Object.assign({}, obj)
obj.ism = "Mubashsher"
obj.yosh = 14
console.log(obj, b5)

let b6 = Object.assign({}, obj)
obj.ism = "Aziz"
obj.yosh = 13
console.log(obj, b6)

let b7 = Object.assign({}, obj)
obj.ism = "Asror"
obj.yosh = 13
console.log(obj, b7)

let b8 = Object.assign({}, obj)
obj.ism = "Otabek"
obj.yosh = 14
console.log(obj, b8)

let b9 = Object.assign({}, obj)
obj.ism = "Oybek"
obj.yosh = 13
console.log(obj, b9)





let obj2 = { ism: "Muhammad", yosh: 20 }
let c1 = structuredClone(obj2)
obj2.ism = "Raxim"
obj2.yosh = 25
console.log(obj2, c1)

let c2 = structuredClone(obj2)
obj2.ism = "Kamron"
obj2.yosh = 13
console.log(obj2, c2)

let c3 = structuredClone(obj2)
obj2.ism = "Yosi"
obj2.yosh = 13
console.log(obj2, c3)

let c4 = structuredClone(obj2)
obj2.ism = "Abutolib"
obj2.yosh = 13
console.log(obj2, c4)

let c5 = structuredClone(obj2)
obj2.ism = "Bek"
obj2.yosh = 14
console.log(obj2, c5)

let c6 = structuredClone(obj2)
obj2.ism = "Azizbek"
obj2.yosh = 14
console.log(obj2, c6)

let c7 = structuredClone(obj2)
obj2.ism = "Ilhom"
obj2.yosh = 13
console.log(obj2, c7)

let c8 = structuredClone(obj2)
obj2.ism = "Muhammad Ali"
obj2.yosh = 13
console.log(obj2, c8)

let c9 = structuredClone(obj2)
obj2.ism = "Ibrohim"
obj2.yosh = 14
console.log(obj2, c9)

let c10 = structuredClone(obj2)
obj2.ism = "Muboshsher"
obj2.yosh = 12
console.log(obj2, c10)