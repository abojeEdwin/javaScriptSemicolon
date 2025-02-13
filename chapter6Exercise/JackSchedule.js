function jackSchedule(timing) {
    let result = timing.filter(time => time.includes("PM") || time.includes("pm"));
    return result;
}

module.exports = {jackSchedule}