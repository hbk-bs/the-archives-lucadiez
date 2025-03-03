{

    const workTime = parseInt(document.getElementById("work-time").value) * 60 * 1000;
    const shortBreak = parseInt(document.getElementById("short-break").value) * 60 * 1000;
    const longBreak = parseInt(document.getElementById("long-break").value) * 60 * 1000;


    const startTime = Date.now();
    const soundFinished = new Audio('assets/sounds/soundFinished.mp3');

    function startPomo() {

        
    }
    
    function animate() {
        
        const currentTime = Date.now();
        const elapsedTime = currentTime - startTime
        
        
        requestAnimationFrame(animate)
        if (elapsedTime >= workTime && elapsedTime <= workTime + 10) {
            soundFinished.play()
            .then(() => {
                console.log('Sound wird abgespielt');
            })
            .catch(error => {
                console.error('Fehler beim Abspielen:', error);
            });
        }
        
        const interval1 = workTime + shortBreak
        if (elapsedTime >= interval1 && elapsedTime <= interval1 + 10) {
            soundFinished.play()
            .then(() => {
                console.log('Sound wird abgespielt');
            })
            .catch(error => {
                console.error('Fehler beim Abspielen:', error);
            });
        }
        
        
    }
    requestAnimationFrame(animate);
}