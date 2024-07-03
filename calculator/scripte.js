const display = document.getElementById("display");

function append_To_Display(input){
    display.value +=input;
}

function clearDisplay(){
    display.value = "";
}

function calculate_ans(){
    try{
        display.value = eval(display.value);
    }
    catch(err){
        display.value ="ERROR"
    }
}