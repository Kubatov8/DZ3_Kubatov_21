let draw = () => {
    let n = "*" 
    for (let i = 1; i <= 7; i++) {
        console.log(n);
        n = n+"*"
    }
} 
draw()

let FizzBuzz = () =>{
    for( let i = 1; i <=100; i++) {
        if(i%3===0 && i%5===0) console.log("FizzBuzz");
        else if(i%3===0) console.log("Fizz");
        else if(i%5===0) console.log("Buzz");
        else console.log(i);
    }
}
FizzBuzz()

let CountChar = (World, a) =>{
    let slovo = World.toLowerCase()
    let m = 0;
    let ss = a.toLowerCase
    for(let i of slovo) {
        if(i===a) m++
    }
    console.log("Количество слов = ", m);

}
CountChar("Abrakadabra", "a")


function CapitalizeString(str) {
    str = str.toLowerCase()
    if(str === " " || str === "")console.log(str);
    else {
        str = str[0].toUpperCase() + str.substring(1)
        console.log(str);
    }
        
}
CapitalizeString("еВгений")
CapitalizeString(" ")