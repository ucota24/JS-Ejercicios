

function calcularIMC(peso, altura){
    if (typeof peso !== "number" || typeof altura !== "number" || peso <= 0 || altura <= 0) {
        console.error("El peso y altura debe ser mayor a 0");
        return null;
    }
    return peso / (altura * altura);
}

function clasificarIMC(imc) {
    if(imc < 18.5) {
        return "bajo peso";
    } else if (imc < 25){
        return "normal";
    } else if (imc < 30) {
        return "sobrepeso";
    } else {
        return "obeso"
    }
}

const imc = calcularIMC(100, 1.78);

if (imc !== null) {
    console.log(`Tu imc es ${imc}: ${clasificarIMC(imc)}`);
}

calcularIMC(0, 1.78);
calcularIMC(65, 0);
calcularIMC("65", 1.78);
calcularIMC(65, 1.78);







