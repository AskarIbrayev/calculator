const display = document.querySelector(".display")
const history = document.querySelector(".history")

const key = document.querySelectorAll(".key")

var input = "";
var count = 0;
isDot = true;
var ID, firstInput, sign, signNext, output;
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
            dot = true;
            count = 0;
            sign = "";
            display.classList.remove("display--small")

        }

        if (item.classList.contains("key--number")){
            
            display.classList.remove("display--small")

            if (ID == "." && dot == true) {
                if (input == "") {
                    ID = "0."
                }
                dot = false;
            }
            else if (ID == "." && dot == false) ID = "";

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
                input = "";
                dot = true;
                sign = ID;
            }
            history.innerHTML += this.textContent;
            signNext = ID;
            count++;
        }
        
        if (ID == "equals" && input != "" || (count > 1 && item.classList.contains("key--operation") && input != "")){
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
            sign = signNext;
            firstInput = output;
            input = "";
            dot = true;

        }
    })
})