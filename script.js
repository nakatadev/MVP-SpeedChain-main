function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');

    // Pegar os embeds
    const embedLight = document.getElementById('embed-light');
    const embedDark = document.getElementById('embed-dark');

    
    if (document.body.classList.contains('dark-mode')) {
        embedLight.style.display = 'none';
        embedDark.style.display = 'block';
    } else {
        embedLight.style.display = 'block';
        embedDark.style.display = 'none';
    }

    const logoPorscheBranco = document.getElementById('logo-porsche-branco');
    const logoPorschePreto = document.getElementById('logo-porsche-preto');

    if (document.body.classList.contains('dark-mode')) {
        logoPorscheBranco.style.display = 'block';
        logoPorschePreto.style.display = 'none';
    } else {
        logoPorscheBranco.style.display = 'none';
        logoPorschePreto.style.display = 'block';
    }
}
