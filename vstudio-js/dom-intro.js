
(function () {
    function clickHandler(message)
    {
        console.log(`Hey` + message);
    }
    let myButton = document.getElementById(`myButton`);
    myButton.addEventListener(`click`, function () { clickHandler(`Hi from iffe`) });
})();