const getTimestamp = (date) => {
    return date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
}

module.exports = getTimestamp;