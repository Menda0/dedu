console.log('Hello world')

// Variables
var my_name = 'Andre Fonseca'
var age = 17
var new_age = '32'
var isAndreTall = true

// Numeric operators
var op1 = 2 + 2

console.log(op1)

var op2 = age * 2

console.log(op2)

// String operators
var op3 = "2" + "2"

console.log(op3)

var op4 = my_name + " age:"+ age + " isTall:"+isAndreTall

console.log(op4)

// IF <condition> then <Instruction> else <Other Intruction>

if(isAndreTall){
    console.log('Sim o andre e alto')
}else{
    console.log('Nao o andre e pequeno')
}

if(age < 10){
    console.log('Is child')
}else if(age < 18){
    console.log('Is a teen')
}else if(age < 40){
    console.log('Is an adult')
}else if(age >= 40){
    console.log('Is a senior')
}

if(age < 10){
    console.log('Is child')
}else if(age < 18){
    console.log('Is a teen')
}else if(age < 40){
    console.log('Is an adult')
}else {
    console.log('Is a senior')
}

// This is dangerous, use else if instead
if(age < 10){
    console.log('Is child')
}
if(age < 18){
    console.log('Is a teen')
}
if(age < 40){
    console.log('Is an adult')
}
if(age >= 40) {
    console.log('Is a senior')
}


// Boolean operation
// <, >, >=, <=, ==, !=
var isDeduAChild = age < 10
console.log(isDeduAChild)

if(isDeduAChild){
    console.log('Give candy')
}else{
    console.log('Give beer')
}

// Arrays
var arr1 = []
var arr2 = [1,2,3,4,5,6,7,8,9,10]

console.log('arr2[0]=' + arr2[0])
console.log('arr2[3]=' + arr2[3])
console.log('arr2[10]=' + arr2[10])

var arr3 = ['Andre', 'Marco', 'Pedro', 'Carlos']

console.log("arr3[2]=" + arr3[2])

var arr4 = ['Andre', 33, true, 22.23]

console.log(arr4[2])

var arr5 = [arr1, arr2, arr3, arr4]

console.log(arr5)

var myArr1 = arr5[2]

console.log('myArr1='+myArr1)

console.log('myArr1[1]='+myArr1[1])

console.log('arr5[2][1]=',arr5[2][1])

console.log(arr5[1][9])

// Objectos

var andre = {
    name: "Andre Fonseca",
    age: 32,
    isTall: true,
}


andre['name']
andre.name

console.log("andre['name']="+andre['name'])
console.log("andre['age']="+andre['age'])


console.log("andre.name ="+andre.name)

var marco = {
    name: "Marco Mendao",
    age: 32,
    isTall: false
}

var isMarcoEqualToAndre = marco.name == andre.name
var isMarcoTheSameAgeAsAndre = marco.age == andre.age

var students = [marco, andre]
console.log('students[0].name='+students[0].name)
console.log("students[1]['age']="+students[1]['age'])

var filipa = {
    name: "Ana Filipa",
    age: 29,
    isTall: false,
    experience: ["c#", 'javascript', 'html']
}

var carrinhoDeCompras = {
    produtos: [
        {
            name: 'pao',
            quatity: 1,
            unit: "kg",
            valor: 10
        },
        {
            name: "Cerveka",
            quatity: 10,
            unit: "lt",
            valor: 1
        },
        {
            name: "Fruta",
            quatity: 10,
            valor: 30,
            fruits: ['kiwi', 'orange']
        }
    ],
}

console.log(carrinhoDeCompras['produtos'][2]['fruits'][1])
console.log(carrinhoDeCompras.produtos[2].fruits[1])