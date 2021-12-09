var btn ;
var nombre ;
var nomberdevenir ;
var output ;


nombre = Math.floor(Math.random()*100)  ;
btn = document.getElementById('btn') ;
output = document.getElementById('outputtext') ;
console.log(nombre) ;

function play (){
  nomberdevenir = document.getElementById('userinput').value;
  if (nomberdevenir == nombre){
      output.innerHTML = 'you win'
  }else{
    if(nomberdevenir > nombre){
        output.innerHTML = 'you need to choose a smaller number'
    }
    
    else{
        output.innerHTML = 'choose abigger number'
    }

  }
};