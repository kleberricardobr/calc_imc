window.onload = function() {   

    document.getElementById("calcular").addEventListener("click", () => {  
        clearResultItem();
              
        const altura = document.getElementById("altura").value;
        const peso = document.getElementById("peso").value;
        if (!validarValores(peso, altura))
          return;      
        
        const imc = getIMC(peso, altura);
        showMessage(`Resultado IMC: ${imc}`);
        selectResultItem(imc);
    } )
}

const getIMC = (peso, altura) => {
    return (peso / Math.pow(altura, 2)).toFixed(1);
}

const showMessage = (message) => {
    const elMsg = document.getElementById("message");     
    elMsg.innerHTML = message;
    elMsg.style.display = "block";    
}

const selectResultItem = (imc) => {    

    let idResult;
    let bgColor;
    
    if (imc < 18.5) {
      idResult = "abaixo";
      bgColor = "#be720e"
    } else if (imc <= 24.9) {
      bgColor = "#63be0e"
      idResult = "normal";
    } else if (imc <= 29.9) {
      bgColor = "#be0ea7";
      idResult = "excesso"
    } else if (imc < 35) {
      bgColor = "#be0e66";
      idResult = "obeso"; 
    } else {
      bgColor = "#ff0404";
      idResult = "extremo";   
    }
    
    const resultItem = document.getElementById(idResult);
    resultItem.style.backgroundColor = bgColor;
    resultItem.style.color = "#FFF";
}

const clearResultItem = () => {
    document.querySelectorAll(".result--item").forEach( x => {
        x.style.backgroundColor = "#CCC";
        x.style.color = "rgba(0, 0, 44, 0.3)";
    });
    
}

const validarValores = (peso, altura) => {    
    if (!peso || !altura) {        
        showMessage("Informe todos os valores")
        return false;
    }

    if (isNaN(peso) || isNaN(altura)) {        
        showMessage("Os valores informados estão incorretos!")
        return false;
    }

    return true;
}