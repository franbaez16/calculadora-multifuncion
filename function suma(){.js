//suma predeterminada
{
    function suma(){
        let x,y,sumador,text;
        x = document.getElementById("num1").value;
        y = document.getElementById("num2").value;
        sumador = parseFloat(x) + parseFloat(y);
        text = sumador;
        console.log(x)
        document.getElementById("resultado").innerHTML = text
    }
}

//suma prompt


//nota promedio
function promedio(){
let nota1, nota2, nota3, suma, promedio,text, notadesaprobado, notaaprobado
    nota1= document.getElementById("nota1").value;
    nota2= document.getElementById("nota2").value;
    nota3= document.getElementById("nota3").value;
    suma = parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3);
    promedio = suma / 3;
    text = promedio;
    document.getElementById("promedio").innerHTML = text

    if(promedio >= "7" && "10"){
        alert("Aprobaste la materia con; " + promedio);
       
    }
    else{
        alert("desaprobaste la materia con; " + promedio);
    }
}



//calculadora(suma,resta,multiplicacion y division)
{
function suma(){
    let x,y,sumador,text;
    x = document.getElementById("Num1").value;
    y = document.getElementById("Num2").value;
    sumador = parseFloat(x) + parseFloat(y);
    text = sumador;
    console.log(x)
    document.getElementById("Resultado").innerHTML = text
}

function resta(){
    let x,y,restador,text;
    x = document.getElementById("Num1").value;
    y = document.getElementById("Num2").value;
    restador = parseFloat(x) - parseFloat (y);
    text = restador;
    document.getElementById("Resultado").innerHTML = text
}


function division(){
    let x,y,text, divisor
    x = document.getElementById("Num1").value;
    y = document.getElementById("Num2").value;
    divisor = parseFloat(x) / parseFloat(y);
    text = divisor;
    console.log(x)
    document.getElementById("Resultado").innerHTML = text
}

function multiplicacion(){
    let x,y,text,multiplicador
    x = document.getElementById("Num1").value;
    y = document.getElementById("Num2").value;
  multiplicador = parseFloat(x) * parseFloat(y);
    text = multiplicador;
    console.log(x)
    document.getElementById("Resultado").innerHTML = text
}
}