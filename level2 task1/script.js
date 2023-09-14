let string = "";
let buttons = document.querySelectorAll('.child');
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (e)=>{
    if(e.target.innerHTML == '='){
      string = eval(string);
      document.querySelector('.output').innerHTML = string;
    }
    else if(e.target.innerHTML == 'C'){
      string = ''
      document.querySelector('.output').innerHTML = string;
    }else if(e.target.innerHTML == '+/-'){
      string = string+'*(-1)';
      string = eval(string);
      document.querySelector('.output').innerHTML = string;
    }
    else{ 
    string = string + e.target.innerHTML;
    document.querySelector('.output').innerHTML = string;
      }
  })
})