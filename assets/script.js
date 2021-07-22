function alertForm(){
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var phone = document.getElementById('phone').value.trim();

    if(name.length!=0 && email.length!=0 && phone.length!=0 ){
        alert("Your Name is: " + name + ", Your Email is: " + email + ", Your Phone is: " + phone);
    }else{            
         alert("Fill All Form");
    }
     
}
 