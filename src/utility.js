const getTimestamp = () => {
    const d = new Date();
    return d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
}

// Styles //
// IK, this is horrible
// Let's think of a better way of naming and sorting all this
const changeCSS = (id) => document.getElementById(id).className = "textbox textbox--highlighted";
const changeCSS2 = (id) => document.getElementById(id).className = "textbox textbox--unhighlighted";
const submitButtonEffect = (id) => document.getElementById(id).className = "submitButton submitButton--effect";
const submitButtonEffect2 = (id) => document.getElementById(id).className = "submitButton";
// End Styles //

module.exports = {
    getTimestamp,
    changeCSS,
    changeCSS2,
    submitButtonEffect,
    submitButtonEffect2
};