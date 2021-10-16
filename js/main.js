const slider = document.getElementById('check')
const feeIndicator = document.querySelector('.fee')
const popularPlan = document.querySelector('.price-check')
const logIn = document.getElementById('log-in')
const modalWindow = document.querySelector('.modal')
const promoBtn = document.getElementById('btn-bundles')

slider.addEventListener('click', ()=>{ 
  slider.checked == true ? feeIndicator.textContent = 'Annualy' : feeIndicator.textContent = 'Monthly'
  slider.checked == true ? popularPlan.textContent = '$129.99/y' : popularPlan.textContent = '$12.99/mo'
})

let openModal = false

function modalBehaviour(event,open){
  if(open){
    modalWindow.style.display = 'inline-block'
    document.body.classList.add('stop-scrolling')
  }else{
    modalWindow.style.display = 'none'
    document.body.classList.remove('stop-scrolling')
  }
}

logIn.addEventListener('click', (event)=>{
  openModal = !openModal
  console.log(event)
  modalBehaviour(event,openModal)
})

promoBtn.addEventListener('click',()=>{
  let bundles  = document.querySelector('.deals')
  bundles.scrollIntoView()

})

window.addEventListener('mousedown', (e)=>{
  if(openModal && e.target.className !== "modal"){
    openModal = false
    modalBehaviour(e, openModal)
  }
})