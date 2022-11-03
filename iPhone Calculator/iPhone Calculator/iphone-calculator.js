const calculatorValue = document.getElementById("main-input")
const zero = document.getElementById("zero")
const nine = document.getElementById("nine")
const eight = document.getElementById("eight")
const seven = document.getElementById("seven")
const six = document.getElementById("six")
const five = document.getElementById("five")
const four = document.getElementById("four")
const three = document.getElementById("three")
const two = document.getElementById("two")
const one = document.getElementById("one")
const decimal = document.getElementById("decimal")
let sum = "";
const clear = document.getElementById("clear")
const equalsTo = document.getElementById("equalsTo")
const buttons = document.querySelectorAll(".input")
let mathArr = []
let ac = document.getElementById("clear")


buttons.forEach(function (btn){
    btn.addEventListener("click", function (e){
        const styles = e.currentTarget.classList;
        console.log(styles)
        
        if (styles.contains("one")){
            calculatorValue.value += "1"
            mathArr.push("1")
        }
        else if (styles.contains("two")){
            calculatorValue.value += "2"
            mathArr.push("2")
        }
        else if (styles.contains("three")){
            calculatorValue.value += "3"
            mathArr.push("3")
        }
        else if (styles.contains("four")){
            calculatorValue.value += "4"
            mathArr.push("4")
        }

        else if (styles.contains("five")){
            calculatorValue.value += "5"
            mathArr.push("5")
        }
        else if (styles.contains("six")){
            calculatorValue.value += "6"
            mathArr.push("6")
        }
        else if (styles.contains("seven")){
            calculatorValue.value += "7"
            mathArr.push("7")
        }
        else if (styles.contains("eight")){
            calculatorValue.value += "8"
            mathArr.push("8")
        }
        else if (styles.contains("nine")){
            calculatorValue.value += "9"
            mathArr.push("9")
        }
        else if (styles.contains("zero") ){
            calculatorValue.value += "0"
            mathArr.push("0")
        }
        else if (styles.contains("decimal")){
            calculatorValue.value += "."
            mathArr.push(".")
        }
        else if (styles.contains("clear")){
            calculatorValue.value = ""
            mathArr = []
        }
        else if (styles.contains("delete")){
            calculatorValue.value = calculatorValue.value - 1
        }
        else if (styles.contains("multiplication")){
            mathArr.push("*")
            calculatorValue.value = ""
        }
        else if (styles.contains("addition")){
            mathArr.push("+")
            calculatorValue.value = ""
        }
        else if (styles.contains("division")){
            mathArr.push("/")
            calculatorValue.value = ""
        }
        else if (styles.contains("subtraction")){
            mathArr.push("-")
            calculatorValue.value = ""
        }
        else if (styles.contains("equals")){
            let jide = ""
            for (i = 0; i < mathArr.length; i++){
                jide += mathArr[i]
            }
            console.log(jide)
            calculatorValue.value = eval(jide)
        }
        else{
            calculatorValue.value += 2
        }
        console.log(mathArr)
    })
})
