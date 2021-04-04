let menu_set = document.querySelector('.menu_set');
let sider_nav = document.querySelector('.sider_nav');
menu_set.addEventListener('click', ()=>{
    sider_nav.classList.toggle('open_sider')
});

let nav = document.querySelector('nav');
window.addEventListener('scroll',()=>{
    if(document.documentElement.scrollTop > 20){
        nav.classList.add('active_nav');
        top_set.style.display = 'block';
    }else{
        nav.classList.remove('active_nav')
        top_set.style.display = 'none';
    }
});

let top_set = document.querySelector('.top_set');


// console.log(top_set);
top_set.addEventListener('click',()=>{
    document.documentElement.scrollTop = 0;
})