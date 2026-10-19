let firstInput = document.getElementById('first-input') as HTMLInputElement;
let secondInput = document.getElementById('second-input') as HTMLInputElement;
let output = document.getElementById('output') as HTMLElement;

function jarvis_says(x:string){
    output.innerHTML = "Jarvis says: " + x;
}

function computer(op:string){
    let x = 0;
    if (firstInput.value === '' || secondInput.value === '' || isNaN(Number(firstInput.value))|| isNaN(Number(secondInput.value))){
        jarvis_says("Invalid input(s)");
        throw new Error ("Invalid input");
    }else if (op ==="divide" && Number(secondInput.value) === 0){
        jarvis_says("Divide by 0");
        throw new Error ("Divide by 0");
    }
    switch(op){
        case "add":
            x = Number(firstInput.value) + Number(secondInput.value);
            break;
        case "subtract":
            x = Number(firstInput.value) - Number(secondInput.value);
            break;
        case "multiply":
            x = Number(firstInput.value) * Number(secondInput.value);
            break;
        case "divide":
            x = Number(firstInput.value) / Number(secondInput.value);
            break;
        case "power":
            if (Number(secondInput.value) >= 0){
                x = 1;
                for (let i = 0; i < Number(secondInput.value); i++){
                    x *= Number(firstInput.value);
                }
            }else{
                x = 1;
                for (let i = 0; i > Number(secondInput.value); i--){
                    x /= Number(firstInput.value);
                }
            }
            break;
        case "clear":
            firstInput.value = "";
            secondInput.value = "";
            output.innerHTML = "";
            break;
    }
    if(op !== "clear"){
        jarvis_says(String(x));
        if (x < 0) output.style.color = "red";
    }

}

export default function Calculator(op:string){
    try{
        computer(op)
    }catch(error){
        console.log(error);
    }
}