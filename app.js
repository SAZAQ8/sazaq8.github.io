// Scroll to top button (example)
const scrollBtn = document.createElement('button');
scrollBtn.textContent = "↑";
scrollBtn.style.position = 'fixed';
scrollBtn.style.bottom = '20px';
scrollBtn.style.right = '20px';
scrollBtn.style.display = 'none';
document.body.appendChild(scrollBtn);

scrollBtn.addEventListener('click', () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) scrollBtn.style.display = 'block';
    else scrollBtn.style.display = 'none';
});
