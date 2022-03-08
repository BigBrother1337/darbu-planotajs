const enter = document.getElementById('.orangebutton');
function checkPassword(){
    if(document.getElementById('password').value == 'hello'){
     alert('Correct Password!'); 
       location.href = "http://127.0.0.1:5500/darbu-planotajs/vaditajakalendars/index.html";
      } else {
        if(document.getElementById('password').value == 'hi','ho'){
          alert('Correct Password!'); 
            location.href = "http://127.0.0.1:5500/darbu-planotajs/darbiniekukalendars/index1.html";
          } else {
      alert('Wrong Password!');
       return false;}
      }
    }
enter.wage();
    function wage(){
    enter.addEventListener("keydown", function (e) {
      if (e.code === "Enter") {  
          checkPassword();
      }
  })
};