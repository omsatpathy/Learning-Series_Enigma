const abutton=document.getElementsByClassName('button')[0]
const alinks=document.getElementsByClassName('links')[0]
abutton.addEventListener('click',()=>{
    alinks.classList.toggle('active')
})