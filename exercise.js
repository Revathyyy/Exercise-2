var xhr= new XMLHttpRequest;
xhr.open("get","https://api.slingacademy.com/v1/sample-data/files/employees.json");
xhr.send();
// console.log(xhr.onreadystatechange);
xhr.onreadystatechange=function(){
   if(xhr.readyState==4){
    if(xhr.status==200){
        // console.log(xhr.responseText)
    //DATA
    
var result=JSON.parse(xhr.responseText);
var array=[]
    console.log(array)
    for(var i in result)
        array.push(result[i]);
    console.log(array[0])
        var htmlcontent=""
        var actionButton=document.getElementById("but").innerHTML
        console.log(actionButton)
        for(i=0;i<10;i++){
    var current=array[i]
    console.log(current)
    htmlcontent=htmlcontent+"<tr><td>"+current.first_name+"</td><td>"+current.last_name+"</td><td>"+current.department+"</td><td>"+current.email+"</td><td>"+current.job_title+"</td><td>"+current.gender+"</td><td>"+current.age+"</td><td>"+current.salary+"</td><td>"+current.years_of_experience+"</td><td>"+actionButton+"</td></tr>";
        }
        document.getElementById("area").innerHTML=htmlcontent; 
        rowdelete()
    editData()

    //TAB CHANGE
    function tabclick(m,n){ 
        var htmlcontent=""
        for(i=m;i<n;i++){
    var current=array[i]
   
    console.log(current.first_name)
    htmlcontent=htmlcontent+"<tr><td>"+current.first_name+"</td><td>"+current.last_name+"</td><td>"+current.department+"</td><td>"+current.email+"</td><td>"+current.job_title+"</td><td>"+current.gender+"</td><td>"+current.age+"</td><td>"+current.salary+"</td><td>"+current.years_of_experience+"</td><td>"+actionButton+"</td></tr>";
        }
        document.getElementById("area").innerHTML=htmlcontent;
      rowdelete()
      editData()
      }

    //SEARCH
      function search(){
        var htmlconten=""
           const val = document.querySelector('input').value;
           var upper=val.toUpperCase();
           console.log(upper) 
        console.log(val)
        for(var i=0;i<100;i++){
        var tr=array[i]
        var td=tr.first_name.toUpperCase();
        var len=td.length;
      
        console.log(tr)
        console.log(td)
        console.log(len)
      
        console.log(td.includes(upper))
        if(td.includes(upper)){
           htmlconten=htmlconten+"<tr><td>"+tr.first_name+"</td><td>"+tr.last_name+"</td><td>"+tr.department+"</td><td>"+tr.email+"</td><td>"+tr.job_title+"</td><td>"+tr.gender+"</td><td>"+tr.age+"</td><td>"+tr.salary+"</td><td>"+tr.years_of_experience+"</td><td>"+actionButton+"</td></tr>"; 
           document.getElementById("buttons").style.display="none"
        document.getElementById("area").innerHTML=htmlconten;  
        }
      } 
      rowdelete()
      editData()
        }
    //FILTER BY DEPARTMENT
        function filter(){
            var filterd=document.getElementById("myList1");
            var output=filterd.value;
            console.log(output)
            var htmlconten=""
            for(var i=0;i<100;i++){
              var current=array[i]
            var dept=current.department;
            console.log(dept) 
             if(dept==output) {
                htmlconten=htmlconten+"<tr><td>"+current.first_name+"</td><td>"+current.last_name+"</td><td>"+current.department+"</td><td>"+current.email+"</td><td>"+current.job_title+"</td><td>"+current.gender+"</td><td>"+current.age+"</td><td>"+current.salary+"</td><td>"+current.years_of_experience+"</td><td>"+actionButton+"</td></tr>"; 
           document.getElementById("buttons").style.display="none"
            document.getElementById("area").innerHTML=htmlconten; 
             }
            }
            rowdelete()
           editData()
          }
    //ADDING
    function show(){
        document.getElementById("inputs").style.display="block" 
        document.getElementById("saveEdit").style.display="none" 
      }
    function addData(){
        var name=document.getElementById("name").value;
        console.log(name)
        var last=document.getElementById("last").value;
        var dept=document.getElementById("dept").value;
        var mail=document.getElementById("mail").value;
        var job=document.getElementById("job").value;
        var gender=document.getElementById("gender").value;
        var age=document.getElementById("age").value;
        var salary=document.getElementById("salary").value;
        var year=document.getElementById("yoe").value;
        if(name&&last&&dept&&mail&&job&&gender&&age&&salary&&year){
            console.log(array[0])
            array.splice(0, 0, ({first_name:name,last_name:last,department:dept,email:mail,job_title:job,gender:gender,age:age,salary:salary,years_of_experience:year}));
            console.log(array)
           tabclick(0,10)
        }
        else{
          alert("Fill all inputs")
        }
       rowdelete()  
       editData() 
    }
     //DELETE DATA
     function rowdelete(){
        var claasn=document.getElementsByClassName("delete")
        for(i=0;i<claasn.length;i++){
          var d=claasn[i]
          d.addEventListener('click',function(){deleteData(this)})
         }
        }
        
        function deleteData(event){
          let row = event.parentNode.parentNode;
          row.parentNode.removeChild(row); 
          console.log(row)
         alert('The corresponding row will be deleted..')
         }

      // EDIT DATA
      function editData(){
          var editable=document.getElementsByClassName("edit")
    console.log(editable)
    for(i=0;i<editable.length;i++){
      var d=editable[i]
      console.log(d)
      d.addEventListener('click',function(){editValue(this), document.getElementById("inputs").style.display="block" ,
      document.getElementById("save").style.display="none",document.getElementById("saveEdit").style.display="block" })
      }
   
    }
      
      function editValue(event){
        let row = event.parentNode.parentNode;
        document.getElementById("name").value=row.cells[0].innerHTML;
        document.getElementById("last").value=row.cells[1].innerHTML;
        document.getElementById("dept").value=row.cells[2].innerHTML;
        document.getElementById("mail").value=row.cells[3].innerHTML;
        document.getElementById("job").value=row.cells[4].innerHTML;
        document.getElementById("gender").value=row.cells[5].innerHTML;
        document.getElementById("age").value=row.cells[6].innerHTML;
        document.getElementById("salary").value=row.cells[7].innerHTML;
        document.getElementById("yoe").value=row.cells[8].innerHTML;
     
       document.getElementById("saveEdit").addEventListener("click",function(){
        console.log(row)
        row.cells[0].innerHTML= document.getElementById("name").value;
        row.cells[1].innerHTML= document.getElementById("last").value;
        row.cells[2].innerHTML= document.getElementById("dept").value;
        row.cells[3].innerHTML= document.getElementById("mail").value;
        row.cells[4].innerHTML= document.getElementById("job").value;
        row.cells[5].innerHTML= document.getElementById("gender").value;
        row.cells[6].innerHTML= document.getElementById("age").value;
        row.cells[7].innerHTML= document.getElementById("salary").value;
        row.cells[8].innerHTML= document.getElementById("yoe").value;

       })
      }
      

      document.getElementById("btn1").addEventListener("click",function(){tabclick(0,10)})
      document.getElementById("btn2").addEventListener("click",function(){tabclick(10,20)})
      document.getElementById("btn3").addEventListener("click",function(){tabclick(20,30)})
      document.getElementById("btn4").addEventListener("click",function(){tabclick(30,40)})
      document.getElementById("btn5").addEventListener("click",function(){tabclick(40,50)})
      document.getElementById("btn6").addEventListener("click",function(){tabclick(50,60)})
      document.getElementById("btn7").addEventListener("click",function(){tabclick(60,70)})
      document.getElementById("btn8").addEventListener("click",function(){tabclick(70,80)})
      document.getElementById("btn9").addEventListener("click",function(){tabclick(80,90)})
      document.getElementById("btn10").addEventListener("click",function(){tabclick(90,100)})

      document.getElementById("search").addEventListener("keyup",function(){search()})
      document.getElementById("myList1").addEventListener("change",function(){filter()})
      document.getElementById("addDetail").addEventListener("click",function(){show()})
      document.getElementById("save").addEventListener("click",function(){addData()})
    }
}
   
}