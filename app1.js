document.addEventListener('DOMContentLoaded', () => {
    const audioPlayer = document.getElementById('audio-player');
    const trackList = document.getElementById('track-list');

    trackList.addEventListener('click', event => {
        if (event.target.tagName === 'LI') {
            const trackFile = event.target.getAttribute('data-file');
            audioPlayer.src = `/music/${trackFile}`;
            audioPlayer.play();
        }
    });
});
