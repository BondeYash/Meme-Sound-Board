document.addEventListener('DOMContentLoaded', function () {
    let currentlyPlayingAudio = null;

    const memes = document.querySelectorAll('.meme');

    memes.forEach(meme => {
        meme.addEventListener('click', function () {
            const soundFile = this.getAttribute('data-sound');
            playSound(soundFile);
        });
    });

    function playSound(soundFile) {
        // Stop currently playing audio, if any
        if (currentlyPlayingAudio) {
            currentlyPlayingAudio.pause();
            currentlyPlayingAudio.currentTime = 0;
        }

        const audio = new Audio(soundFile);
        audio.play();

        // Set the currently playing audio
        currentlyPlayingAudio = audio;

        // Optional: Add an event listener to reset currentlyPlayingAudio when the sound finishes
        audio.addEventListener('ended', function () {
            currentlyPlayingAudio = null;
        });
    }
});
