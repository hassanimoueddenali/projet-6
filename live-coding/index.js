var number ;
var output;
var input;
var btn;

number = Math.floor(Math.random() * 1000);
output = document.getElementById('outputtext'); 
console.log(number); 
btn = document.getElementById('btn')

function play(){  
     input = document.getElementById('userInput').value;
 
    if(input == number){
         output.innerHTML ='bravo'
    }else{
         if( input > number){
             output.innerHTML ='se nommber est plus grand que'
        }else{
            output.innerHTML ='se nombre est plus petit que'
        }    
    }
};