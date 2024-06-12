document.addEventListener('DOMContentLoaded', () => {
    const heart = document.getElementById('heart');
    const heartbeatSound = document.getElementById('heartbeat-sound');
    let isPlaying = false;

    // Verificar si el archivo de audio se carga correctamente
    heartbeatSound.addEventListener('canplaythrough', () => {
        console.log('El archivo de audio se ha cargado correctamente.');
    });

    heartbeatSound.addEventListener('error', (e) => {
        console.error('Error al cargar el archivo de audio:', e);
    });

    heart.addEventListener('click', () => {
        if (!isPlaying) {
            console.log('Corazón clickeado, empezando a latir.');
            heart.classList.add('beat');
            heartbeatSound.play().then(() => {
                console.log('Reproducción de audio iniciada.');
                isPlaying = true;
            }).catch((error) => {
                console.error('Error al intentar reproducir el audio:', error);
            });
        } else {
            console.log('Deteniendo latido y audio.');
            heart.classList.remove('beat');
            heartbeatSound.pause();
            heartbeatSound.currentTime = 0;
            isPlaying = false;
        }
    });
});
