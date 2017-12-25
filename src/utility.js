const getTimestamp = () => {
    const d = new Date();
    return d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
}

module.exports = getTimestamp;