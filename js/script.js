const menubar=document.querySelector('.menubar')

window.addEventListener('scroll',function(){
    if (window.pageYOffset > 50) {
        menubar.classList.add('active')
    }else{
        menubar.classList.remove('active')
    }
})