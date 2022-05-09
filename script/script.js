//const form = document.getElementById("formvalidate");
//console.log(form);
 /*form.addEventListener('submit',function(event){
  //  form.addEventListener('submit'){
     validate(Callback);
    
  })*/

  
 function validate(Callback)
{
    let email = document.getElementById('email');
    let pwd = document.getElementById('pwd');
    var flag;
    if(email.value !='admin' || pwd.value !='12345')
    {  
         flag = 0;
        
        Callback(flag);
    }
    else{

         flag =1;
        Callback(flag);
        
    }
    
}

function Callback(flag)
  {
    if(flag==1)
    {
     //form.action ="./sucess.html";
      window.location.href="sucess.html";
    // window.open("./sucess.html");

    }
    else
    {
        alert("Invalid user");
    }

  }
 

