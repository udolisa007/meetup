const menu_display = document.querySelector('.menu-display')
const menu_btn = document.querySelector('.menu-btn')
menu_btn.addEventListener('click', ()=>{

    menu_display.classList.toggle('show-nav')
     
     if(menu_display.classList.contains('show-nav')){
           menu_btn.src = './images/Close.png'  
     }else{
        menu_btn.src = './images/Menu.png'
     }
    
    
    
})