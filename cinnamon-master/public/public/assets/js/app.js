const contactForm= document.querySelectorAll('.php-email-form');
let name= document.getElementById('namee');
let email= document.getElementById('email');
let phone= document.getElementById('phone');
let date= document.getElementById('date');
let time= document.getElementById('time');
let people= document.getElementById('people');
let subject= subject.getElementById('subject');
let message= message.getElementById('message');


contactForm.addEventListener('submit', (e)=>{
    e.preventDefault();

    let formData = {
        name:namee.value,
        email: email.value,
        phone:phone.value,
        date:date.value,
        time:time.value,
        people:people.value,
       


    }
 
    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/');
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload =  function(){
        console.log(xhr.responseText);
        if(xhr.responseText == 'success'){
            alert('Email sent');
            name.value = '';
            email.value='';
            phone.value='';
            date.value='';
            time.value='';
            people.value='';

        }else{
            alert('something went wrong!')
        }

    }

    xhr.send(JSON.stringify(formData)); 
    

})

