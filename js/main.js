const form = document.querySelector('.subcribe_form');
const input = document.querySelector('#email_inp');

form.addEventListener('submit', (event) => {
    if (!input.value) {
        event.preventDefault()
        alert("Write your email");
    }
})



const inp_name = document.querySelector('#name');
const inp_mail = document.querySelector('#mail');
const txt_area = document.querySelector('#txt_area');
const form_mes = document.querySelector('.form_mesage');

form_mes.addEventListener('submit', (event) =>{
    if(!inp_name.value || !inp_mail.value || !txt_area.value){
        event.preventDefault()
        alert("Fill in all fields");
    }
})