jQuery(document).ready(function() {

    var offset = 300;
    
    var duration = 500;
    
    jQuery(window).scroll(function() {
    
    if (jQuery(this).scrollTop() > offset) {
    
    jQuery('.backtotop').fadeIn(duration);
    
    } else {
    
    jQuery('.backtotop').fadeOut(duration);
    
    }
    
    });
    
    
    
    jQuery('.backtotop').click(function(event) {
    
    event.preventDefault();
    
    jQuery('html, body').animate({scrollTop: 0}, duration);
    
    return false;
    
    })
    
    });
    var btn1 = document.querySelector(".btnLeiaMais1")
    btn1.addEventListener('click',()=>{

        var pontos=document.getElementById("pontos1");
        var maisTexto=document.getElementById("mais1");
       
        if(pontos.style.display === "none"){ 
            pontos.style.display="inline";
            maisTexto.style.display="none";
            btn1.innerHTML="Saiba Mais";
        }else{
            pontos.style.display="none";
            maisTexto.style.display="inline";
            btn1.innerHTML="Saiba Menos";
        }
    })

    var btn2 = document.querySelector(".btnLeiaMais2")
    btn2.addEventListener('click',()=>{

        var pontos=document.getElementById("pontos2");
        var maisTexto=document.getElementById("mais2");


        if(pontos.style.display === "none"){ 
            pontos.style.display="inline";
            maisTexto.style.display="none";
            btn2.innerHTML="Saiba Mais";
        }else{
            pontos.style.display="none";
            maisTexto.style.display="inline";
            btn2.innerHTML="Saiba Menos";
        }
    })

    var btn3 = document.querySelector(".btnLeiaMais3")
    btn3.addEventListener('click',()=>{

        var pontos=document.getElementById("pontos3");
        var maisTexto=document.getElementById("mais3");


        if(pontos.style.display === "none"){ 
            pontos.style.display="inline";
            maisTexto.style.display="none";
            btn3.innerHTML="Saiba Mais";
        }else{
            pontos.style.display="none";
            maisTexto.style.display="inline";
            btn3.innerHTML="Saiba Menos";
        }
    })

var btn4 = document.querySelector(".btnLeiaMais4")
    btn4.addEventListener('click',()=>{

        var pontos=document.getElementById("pontos4");
        var maisTexto=document.getElementById("mais4");


        if(pontos.style.display === "none"){ 
            pontos.style.display="inline";
            maisTexto.style.display="none";
            btn4.innerHTML="Saiba Mais";
        }else{
            pontos.style.display="none";
            maisTexto.style.display="inline";
            btn4.innerHTML="Saiba Menos";
        }
    })
    var btn5 = document.querySelector(".btnLeiaMais4")
    btn5.addEventListener('click',()=>{

        var pontos=document.getElementById("pontos4");
        var maisTexto=document.getElementById("mais4");


        if(pontos.style.display === "none"){ 
            pontos.style.display="inline";
            maisTexto.style.display="none";
            btn5.innerHTML="Saiba Mais";
        }else{
            pontos.style.display="none";
            maisTexto.style.display="inline";
            btn5.innerHTML="Saiba Menos";
        }
    })

    