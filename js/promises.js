"use strict";

function lastCommit (username) {
    fetch(`https://api.github.com/users/${username}/events`)
        .then(response => {
        response.json().then(events => {
            let dateAndTime = events[0].created_at;
            console.log("Your last push was at: " + (new Date(dateAndTime)).toLocaleString())
        }).catch(() => console.log("You hit the max API usage"))
    })
        .catch(error => console.log(error));
}

lastCommit("katrodriguez96");

