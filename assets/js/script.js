const mode = document.getElementById('mode_icon');

mode.addEventListener('click', () => {
    const form = document.getElementById('login_form')
    const background = document.getElementById('container')
    const rodape = document.getElementById('rodape')

    if (mode.classList.contains('fa-moon')) {
        mode.classList.remove('fa-moon');
        mode.classList.add('fa-sun');

        rodape.classList.add('dark');
        background.classList.add('dark');
        form.classList.add('dark');
        return;
    }

    rodape.classList.remove('dark');    
    background.classList.remove('dark');
    mode.classList.add('fa-moon');
    mode.classList.remove('fa-sun');
    form.classList.remove('dark');
});