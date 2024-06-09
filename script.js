let one=document.getElementById('sectionone');
let header=document.getElementById('header');
window.addEventListener('scroll',()=>{
    let value= window.scrollY;
    one.style.top=value*1.5+'px';
    if (value >= 400) {
        header.style.transform = 'translateY(-100%)'; // Adjust value as needed
      } else {
        header.style.transform = 'translateY(0)';
      }
      
})
