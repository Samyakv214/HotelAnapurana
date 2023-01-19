burger=document.querySelector('.burger')
navbar=document.querySelector('.navbar')
nav-list=document.querySelector('.nav-list')
leftnav=document.querySelector('.leftnav')

burger.addEventListener('click',()=>{
    nav-list.classlist.toggle('v-class');
    leftnav.classlist.toggle('v-class');
    navbar.classlist.toggle('hnav');
})