function validate(){
    var name= document.getElementById("name").value;
    var DOB= document.getElementById("DOB").value;
    var Emailid= document.getElementById("Email Id").value;
    var contactNumber= document.getElementById("contact number").value;
    var Tellmeaboutyourself = document.getElementById("Tell me about yourself").value;
    var formvalid=false;
    
    if(
        validateName(Name,formvalid)&&
        validateDOB(DOB,formvalid)&&
        validateEmailId(EmailId,formvalid)&&
        validateContactNumber(ContactNumber,formvalid)&&
        validateTellmeaboutyourself( Tellmeaboutyourself,formvalid)
       ){
        alert("form is submitted");
        document.getElementById("name").value="";
        document.getElementById("DOB").value="";
        document.getElementById("Email Id").value="";
        document.getElementById("contact number").value="";
        document.getElementById("Tell me about yourself").value="";
    }
}
function validateName(name,formvalid){
    if(name.trim()===""){
        document.getElementById("name-error").innerHTML="This is required";   
        formvalid=false;
    }else if(name.trim().length<=3){
        document.getElementById("name-error").innerHTML="please enter more than 3 characters";
        formvalid=false;
    }else{
        document.getElementById('name-error').innerHTML="";
        formvalid=true;
    }
    return formvalid;
}
function myname(){
    var str=document.getElementById("name").value;
    var cityAlert=document.getElementById("name-alert");
    if(!((/^[a-zA-Z]+$/.test(str) )||str.length==0)){
        nameAlert.style.display="block";
        nameAlert.innerHTML="only Alphabets are Allowed";
        nameFlag=false;
    }
    else{
        nameAlert.style.display="none";
        nameFlag=true;
    }
}
function validateEmail(email,formvalid){
    var pattern=/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    if(!pattern.test(email)){
        document.getElementById("email-error").innerHTML="This is invalid";
        formvalid=false;
    }else{
        document.getElementById("email-error").innerHTML="";
        formvalid=true;
    }
    return formvalid;
}
function validateName(contact,formvalid){
    if(contact.trim()===""){
        document.getElementById("contact-error").innerHTML="This is required";   
        formvalid=false;
    }else if(contact.trim().length!=10){
        document.getElementById("contact-error").innerHTML="please enter valid number";
        formvalid=false;
    }else{
        document.getElementById('contact-error').innerHTML="";
        formvalid=true;
    }
    return formvalid;
}
function validateName(age,formvalid){
    if(age.trim()==""){
        document.getElementById("age-error").innerHTML="This is required";   
        formvalid=false;
    }else if(age.trim().length>3){
        document.getElementById("age-error").innerHTML="please enter valid number";
        formvalid=false;
    }else{
        document.getElementById('age-error').innerHTML="";
        formvalid=true;
    }
    return formvalid;
}