{
    let timerInterval;
    const phase = ["work", "short break", "work", "short break", "work", "long break"];
    let index = 0;
    let timesUser = {};
    const soundFinished = new Audio('assets/sounds/soundFinished.mp3');

    function startPomo() {

        clearInterval(timerInterval);

        const workTime = parseInt(document.getElementById("work-time").value) * 60;
        const shortBreak = parseInt(document.getElementById("short-break").value) * 60;
        const longBreak = parseInt(document.getElementById("long-break").value) * 60;

        timesUser = {
            "work": workTime,
            "short break": shortBreak,
            "long break": longBreak,
        };

        index = 0;
        nextPhase();
    }

    function nextPhase() {

        clearInterval(timerInterval)

        currentPhase = phase[index % phase.length];

        let duration = timesUser[currentPhase];
        timerUpdate(duration);

        timerInterval = setInterval(() => {
            duration--;
            timerUpdate(duration);

            if (duration <= 0) {
                clearInterval(timerInterval);
                index++;
                nextPhase();
                soundFinished.play()
                displayPhase();

            }
        }, 1000)
    }

    function timerUpdate(sec) {

        const remaningmin = Math.floor(sec / 60);
        const remaningsec = sec % 60;
        document.getElementById("timer").textContent = `${String(remaningmin).padStart(2, '0')}:${String(remaningsec).padStart(2, '0')}`;

    }
    
    function displayPhase() {
        
        document.getElementById("displayPhase").textContent = `${currentPhase}`;
        
    }
    
    function resetPomo() {
        clearInterval(timerInterval);
        document.getElementById("timer").textContent = `00:00`;
        document.getElementById("displayPhase").textContent = `work`;
        index = 0;
    }

    function skipPhase() {

        clearInterval(timerInterval);
        index++;
        nextPhase();
        displayPhase();

    }
}