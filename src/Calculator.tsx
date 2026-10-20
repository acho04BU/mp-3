let output = document.getElementById('output') as HTMLElement;

console.log(output);

function jarvis_says(x:string,setOutput:any){
    setOutput("Jarvis says: " + x);
}

function computer(op:string,first:number,second:number,setFirst: (arg0: number) => void, setSecond: (arg0: number) => void, setOutput: (arg0: string) => void){
    if (op ==="clear"){
        setFirst(0);
        setSecond(0);
        setOutput("");
        return;
    }
    let x = 0;
    if (isNaN(Number(first))|| isNaN(Number(second))){
        jarvis_says("Invalid input(s)",setOutput);
        throw new Error ("Invalid input");
    }else if (op ==="divide" && Number(second) === 0){
        jarvis_says("Divide by 0",setOutput);
        throw new Error ("Divide by 0");
    }
    switch(op){
        case "add":
            x = Number(first) + Number(second);
            break;
        case "subtract":
            x = Number(first) - Number(second);
            break;
        case "multiply":
            x = Number(first) * Number(second);
            break;
        case "divide":
            x = Number(first) / Number(second);
            break;
        case "power":
            if (Number(second) >= 0){
                x = 1;
                for (let i = 0; i < Number(second); i++){
                    x *= Number(first);
                }
            }else{
                x = 1;
                for (let i = 0; i > Number(second); i--){
                    x /= Number(first);
                }
            }
            break;

    }
    if(op !== "clear"){
        //if (x < 0) output.style.color = "red";
        jarvis_says(String(x),setOutput);
        console.log(x);
    }

}

export default function Calculator(op:string,first:number,second:number,setFirst: (arg0: number) => void, setSecond: (arg0: number) => void, setOutput: (arg0: string) => void){
    try{
        computer(op,first,second,setFirst,setSecond,setOutput);
    }catch(error){
        console.log(error);
    }
}