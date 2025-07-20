document.addEventListener('DOMContentLoaded',()=>{const navLinks=document.querySelectorAll('.nav-link');let currentPage=window.location.pathname.split('/').pop();if(currentPage===''){currentPage='index.html'}
navLinks.forEach(link=>{const linkPage=link.getAttribute('href').split('/').pop();link.classList.remove('text-navy');if(linkPage===currentPage){link.classList.add('active')}})})
