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

// Create a object with the following properties
// name
// age
// isTall
// books

// Create object for 3 persons in your life
// Create a list of those people

// for (var i=0;i<10;i++){
// code to execute
//}

for (var i=0;i<=20;i++){
    console.log("Number: "+i)
}

console.log('My Names:')
var names = ['Dedu', 'Marco', 'Ines', 'Carlos']

for (var i=0; i<names.length; i++){
    console.log(names[i])
}

for (var i=0; i<names.length; i++){
    // variavel local
    var name = names[i]
    console.log(name)
}

// For each
for (var name of names){
    console.log(name)
}

console.log('Ages')
var ages = [10, 15, 20, 32, 40, 5]

for (var i=0; i<ages.length; i++){
    // local variables
    var age = ages[i]

    if(age >= 18){
        console.log('Is an adult: '+age)
    }else{
        console.log('Is a under age: '+age)
    }
}


var numbers = [10, 20, 5, 30, 40, 10, 9, 2]

// Current Number > Max Number => New Max Number (maxNumber=currentNumber)
// 10 > _ => 10
// 20 > 10 => 20
// 5  > 20 => 20
// 30 > 20 => 30
// 40 > 30 => 40
// 10 > 40 => 40
// 9  > 40 => 40
// 2  > 40 -> 40

var maxNumber = 0

for (var i=0;i<numbers.length;i++){
    
    var currentNumber = numbers[i]

    if(currentNumber>maxNumber){
        maxNumber = currentNumber
    }
}

console.log(maxNumber)

// Exercise:
// Iterate for the list of persons and write the names on the screen
// Iterate for the list of persons and create a new list with only the tall people