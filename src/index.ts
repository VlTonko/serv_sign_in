import './style.css';
import * as I from './interface';
import {url, btnSend} from './elements';

async function fetchRequest(obj:I.DataInf){
  const response = await fetch(url, {method: 'POST',body:JSON.stringify(obj),headers:{'content-type': 'application/json'}})
  const data = await response.json();
  return data;
}

btnSend.addEventListener('click',function (ev) {
    let firstName = document.forms['myform'].elements['firstName'].value;
    let lastName = document.forms['myform'].elements['lastName'].value;
    let email = document.forms['myform'].elements['email'].value;
    let phone = document.forms['myform'].elements.phone.value;
    let textarea = document.forms['myform'].elements.address.value;

    let obj = {
      firstName:firstName,
      lastName:lastName,
      email:email,
      phone:phone,
      textarea:textarea
    };
    
    fetchRequest(obj);
})
