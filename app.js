const display = document.querySelector(".display")
const history = document.querySelector(".history")

const key = document.querySelectorAll(".key")

var input = "";
var count = 0;
isThereDot = false;
var ID, firstInput, sign, signNext, conditionalSign, output;
display.innerHTML = "0"
 

key.forEach(function(item){
    item.addEventListener("click", function(){
        ID = item.getAttribute("id");

        if(document.querySelector(".active")){
            document.querySelector(".active").classList.remove("active");
        }
        if (ID == "AC"){
            history.innerHTML = "";
            display.innerHTML = "0";
            input = "";
            isThereDot = false;
            count = 0;
            sign = "";
            display.classList.remove("display--small")

        }

        if (item.classList.contains("key--number")){
            
            display.classList.remove("display--small")

            if (ID == "." && !isThereDot) {
                if (input == "") {
                    ID = "0."
                }
                isThereDot = false;
            }
            else if (ID == "." && isThereDot) ID = "";

            if (ID == "0" && input == "") {
                input = "";
                display.innerHTML = "0"
            }
            else {
                input += ID;
                display.innerHTML = input;       
            }
            history.innerHTML += ID
        }
        if (item.classList.contains("key--operation")){
            item.classList.add("active");
            if (count == 0) {
                firstInput = display.textContent;
                isThereDot = false;
                input = "";
                sign = ID
            } else sign = signNext
            history.innerHTML += this.textContent;
            signNext = ID;
            count++;
            conditionalSign = ID
        } 
        else if (ID == "equals") sign = conditionalSign
        
        if (ID == "equals" && input != "" || (count > 1 && item.classList.contains("key--operation") && input != 0)){
            if (sign == "plus"){
                output = (parseFloat(firstInput) + parseFloat(input)).toString();
            }
            else if (sign == "minus"){
                output = (parseFloat(firstInput) - parseFloat(input)).toString();
            }
            else if (sign == "mult"){
                output = (parseFloat(firstInput) * parseFloat(input)).toString();
            }
            else if (sign == "divide"){
                output = (parseFloat(firstInput) / parseFloat(input)).toString();
            }
            else {
                output = display.textContent;
            }
            if (output.length > 7) {
                display.classList.add("display--small")
            }
            display.innerHTML = output;
            if (count > 1 && item.classList.contains("key--operation")) sign = signNext;
            firstInput = output;
            input = "";
            isThereDot = false;

        }
    })
})