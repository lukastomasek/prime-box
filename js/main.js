const slider = document.getElementById('check')
const feeIndicator = document.querySelector('.fee')
const popularPlan = document.querySelector('.price-check')
const logIn = document.getElementById('log-in')
const modalWindow = document.querySelector('.modal')
const promoBtn = document.getElementById('btn-bundles')

slider.addEventListener('click', ()=>{ 
  slider.checked === true ? feeIndicator.textContent = 'Annualy' : feeIndicator.textContent = 'Monthly'
  slider.checked === true ? popularPlan.textContent = '$129.99/y' : popularPlan.textContent = '$12.99/mo'
})

let openModal = false

function modalBehaviour(open){
  if(open){
    modalWindow.style.display = 'inline-block'
    document.body.classList.add('stop-scrolling')

    let logInBtn = document.getElementById('login-btn')
    logInBtn.addEventListener('click', () =>{
       console.log('clicked')
       let emailField = document.getElementById('email')
       let passwordField = document.getElementById('login-password')

        if(emailField.value === '' || passwordField.value === ''){
          emailField.classList.add('outline')
          passwordField.classList.add('outline')
          return
        }else{
          passwordField.classList.remove('outline')
          emailField.classList.remove('outline')
          openModal = false
          modalBehaviour(openModal)
          emailField.value = ''
          passwordField.value = ''
          alert('Signed In')
          return
        }
      
     })

  }else{
    modalWindow.style.display = 'none'
    document.body.classList.remove('stop-scrolling')

  }
}

logIn.addEventListener('click', ()=>{
  openModal = !openModal
  modalBehaviour(openModal)
})

promoBtn.addEventListener('click',()=>{
  let bundles  = document.querySelector('.deals')
  bundles.scrollIntoView()

})

document.addEventListener('click',(e)=>{
  if(openModal === true  && modalWindow.style.display === 'inline-block'){
    let targetElement = e.target
    do {
      if (targetElement === modalWindow || targetElement === logIn) {
          // This is a click inside. Do nothing, just return.
          return;
      }
      // Go up the DOM
      targetElement = targetElement.parentNode;
      
    } while (targetElement);
    // clicked outside of modal
      openModal = false
      modalBehaviour(false)
  }
 
})