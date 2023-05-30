var btn = document.querySelector('#botao');
var perguntasprest = document.querySelector('.perguntasprest');

btn.addEventListener('click', function(){

    if(perguntasprest.style.display === 'block'){
        perguntasprest.style.display = 'none';
} else {
    perguntasprest.style.display = 'block';
}

});



var btn = document.querySelector('#botao2');
var perguntasclient = document.querySelector('.perguntasclient');

btn.addEventListener('click', function(){

    if(perguntasclient.style.display === 'block'){
        perguntasclient.style.display = 'none';
} else {
    perguntasclient.style.display = 'block';
}


});

var btn1 = document.querySelector('#botao');
var btn2 = document.querySelector('#botao2');

var btn1Visible = true;
var btn2Visible = true;

btn1.addEventListener('click', function() {
  if (btn1Visible) {
    btn2.style.display = 'none';
    btn2Visible = false;
  } else {
    btn2.style.display = 'block';
    btn2Visible = true;
  }
  
  btn1Visible = !btn1Visible;
});

btn2.addEventListener('click', function() {
  if (btn2Visible) {
    btn1.style.display = 'none';
    btn1Visible = false;
  } else {
    btn1.style.display = 'block';
    btn1Visible = true;
  }
  
  btn2Visible = !btn2Visible;
});


const imageInput= document.querySelector("[data-image-input]");
const imagePreview= document.querySelector("[data-image-preview]");

imageInput.onchange()= () => {
  const [file] = imageInput.files;

  imagePreview.src = URL.createObjectURL(file)
}