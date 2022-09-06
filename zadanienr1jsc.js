let zbior = [];

for(let i = 0; i < 10; i++){
    let z = Math.floor(Math.random()*20 + 1);
    if(zbior.indexOf(z) === -1){
        zbior[i] = z;
    }else{
        i--;
        continue;
    }
    
}

let numery = prompt("podaj liczby, odziel je spacja");

const newarray = numery.split(" ");

let trafione = 0;

for(let i = 0; i < newarray.length; i++){
    for (let j = 0; j< zbior.length; j++){
        if(newarray[i] == zbior[j]){
            trafione+=1;
            break;
        }else{
            continue;
        }
    }
    
}

document.write(zbior + );


document.write(numery);
