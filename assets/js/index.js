'use strict';

function testing(){
    fetch('https://www.boredapi.com/api/activity')
    .then((response) => response.json())
    .then((data) => {
        let activity = document.getElementById("rActivity");
        activity.innerHTML = data.activity
    });
}