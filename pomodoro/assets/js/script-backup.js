{
    let timerInterval;
    const phase = ["work", "short break", "work", "short break", "Work", "long break"];
    let index = 0;
    let times = {};

    function timerUpdate(sec) {

        const remaningmin = Math.floor(sec / 60);
        const remaningsec = sec % 60;
        document.getElementById("timer").textContent = `${remaningmin}:${remaningsec}`;

    }

    function nextPhase() {

        clearInterval(timerInterval)

        currentPhase = phase[index % phase.length];

        let duration = times[currentPhase];
        timerUpdate(duration);

        timerInterval = setInterval(() => {
            duration--;
            timerUpdate(duration);

            if (duration <= 0) {
                clearInterval(timerInterval);
                index++;
                nextPhase();

            }
        }, 1000)
    }

    function startPomo() {

        clearInterval(timerInterval);

        const workTime = parseInt(document.getElementById("work-time").value) * 60;
        const shortBreak = parseInt(document.getElementById("short-break").value) * 60;
        const longBreak = parseInt(document.getElementById("long-break").value) * 60;

        times = {
            "work": workTime,
            "short break": shortBreak,
            "long break": longBreak,
        };

        index = 0;
        nextPhase();
    }

    function resetPomo() {
        clearInterval(timerInterval);
        document.getElementById("timer").textContent = "00:00";
        index = 0;
    }

}