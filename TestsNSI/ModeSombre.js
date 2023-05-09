function Light()
{
    document.body.style.backgroundColor='white' ;
    document.body.style.color='black' ;
    document.getElementById("Clair").disabled = true ;
    document.getElementById("Sombre").disabled = false ;
}

function Dark()
{
    var sound = new Audio("toutnoir.mp3") ;
    sound.play() ;
    window.alert("ça va être tout noir !") ; 
    setTimeout(function(){
        document.body.style.backgroundColor='black' ;
        document.body.style.color='white' ;
        document.getElementById("Sombre").disabled = true ;
        document.getElementById("Clair").disabled = false ;  
    }, 3000);
    
}