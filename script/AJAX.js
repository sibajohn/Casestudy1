function ajax()
{

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function()
    {
   
      if((this.readyState ==4) && (this.status == 200))
      {
      // document.getElementById("demo").innerHTML = JSON.parse(this.responseText) ;
      var response = JSON.parse(this.responseText) ;
      console.log(response);
      display(response);
      

    
    }
  } 

  xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
  xhttp.send();

 

}

/*function buildTable(data)    {
        var table = document.getElementById('myTable');

        for (var j=0;j< data.length ;j++)
         {

            var row = `<tr>
                 <td>${data[j].id}</td>
                 <td>${data[j].title}</td>
                 <td>${data[j].completed}</td>
                 </tr>`
           table.innerHTML += row;
         }
         
  }*/


function display(data){
    var table = document.getElementById("mytable");
    for (var i=0;i< data.length ;i++)
    {
       let rowcount = table.rows.length;
       var row = table.insertRow(rowcount);
       var cell1 = row.insertCell(0);
       cell1.innerHTML = data[i].id;

       var cell2 = row.insertCell(1);
       cell2.innerHTML = data[i].title;
     

      var cell3 = row.insertCell(2);
       var element = document.createElement("input");
       element.type = "checkbox";
       if(data[i].completed == true)
       {
         element.setAttribute("checked","true");
         element.setAttribute("disabled","true");
       }
       element.addEventListener('change',(event)=>{
        if(event.currentTarget.checked){
          count ++;
         checkcounter();
          }
        else
        {
          count --;
        }
   })
    cell3.appendChild(element);
   }  
  }
 var count = 0;
 function checkcounter()
 {
   let promise = new Promise(function(resolve,reject){
     if(count ==5)
     {alert( "congraulation you have 5 task completed")}
   })
   promise.then(function(s)
   {
     alert(s);
   })

 }

 function Logout()
 {
   window.location.href = "./Index.html";
 }



  