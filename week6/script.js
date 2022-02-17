//var myName = "Jordan"
var myButton = document.querySelector('button')

myButton.addEventListener('click', dataPrompt)
function dataPrompt(){
    //var firstName = prompt('Enter your first name', 'First Name')
    //var lastName = prompt('Enter your last name', 'Last Name')
    var firstNumber = prompt('Enter your first number', 'first number')
    var secondNumber = prompt('Enter your first number', 'second number')
    var result = Number(firstNumber) + Number(secondNumber)
    //regular string concatenation
    //alert("Hello World! " + firstName + " " + lastName)
    //example of using string literal
    alert(`The result is ${result}`)
    document.querySelector('span').innerHTML = `The result is ${result}`
}

//dataPrompt()