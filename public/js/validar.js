 function imprimirresultado()  {
    let masa = parseFloat((document.getElementById('masa').value))

    let expre = /^[1-9]*(\.?)[ 1-9]+$/

    let masaok = expre.test(masa)

   


    const aceTierra = 9.8
    const aceMarte = 3.7
    const aceLuna = 1.6 

    const pesoTierra = masa/aceTierra
    const pesoMarte = masa/aceMarte
    const pesoLuna = masa/aceLuna

    if (masaok == false ){
        alert('ingrese un peso valido')
    }else{
        
    document.getElementById('resultadoTierra').innerHTML= +pesoTierra
    
    document.getElementById('resultadoMarte').innerHTML= +pesoMarte
    
    document.getElementById('resultadoLuna').innerHTML= +pesoLuna

        
    document.getElementById('nn').innerHTML= +masa
    }

    
    }

    