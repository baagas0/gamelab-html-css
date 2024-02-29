const playSound = (e) => {
    console.log(e)
    if(e === undefined) return;
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) {
        alert('Kunci tidak ditemukan');
        return;
    }
    audio.currentTime = 0;
    audio.play();
    key.classList.add('play');
}

// EVENT LISTENER
// TUGAS GAMELAB
window.addEventListener('keydown', (e) => {
    console.log('playSound');
    playSound(e);
});

const removeTransitionClass = (e) => {
    if (e.propertyName !== 'box-shadow') return;
    e.target.classList.remove('play');
}

keys = document.querySelectorAll('.piano-ele');
keys.forEach(key => addEventListener('transitionend', removeTransitionClass));
