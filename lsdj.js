

alert ("Calculadora multifuncion")
alert ("Calculadora, suma simple, suma predeterminada, nota promedio")
var respuesta = prompt("¿Que funcion elegira?")

if  (respuesta == "suma predeterminada");{
    a = 10;
    b = 10;
    c= (a + b);
    document.write(c)
}



//suma prompt
if(respuesta == "suma simple");{
    let num1 = parseFloat (prompt("Ingrese un valor"));
    let num2 = parseFloat (prompt("Ingrese un valor"));
    let resultado = (num1 + num2)
    alert(""+ resultado)

}


//calculadora
if(respuesta == "calculadora");{
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
        let y,x,text,divisor;
        x = document.getElementById("Num1").value;
        y = document.getElementById("Num2").value;
        divisor = parseFloat(x) / parseFloat(y);
        text = divisor;
        console.log(x)
        document.getElementById("Resultado").innerHTML = text
    }

    function multiplicacion(){
        let x,y,text,multiplicador;
        x = document.getElementById("Num1").value;
        y = document.getElementById("Num2").value;
    multiplicador = parseFloat(x) * parseFloat(y);
        text = multiplicador;
        console.log(x)
        document.getElementById("Resultado").innerHTML = text
    }
}


//promedio
if(respuesta == "calculadora") {
    let nota1=parseFloat(prompt("Ingrese su primer nota"));
    let nota2=parseFloat(prompt("Ingrese su primer nota"));
    let nota3=parseFloat(prompt("Ingrese su primer nota"));
let suma = nota1 + nota2 + nota3

let promedio = suma / 3;

if(promedio >= "7" && "10"){
    alert("Aprobaste la materia con; " + promedio);
}
else{
    alert("desaprobaste la materia con; " + promedio);
}
}
