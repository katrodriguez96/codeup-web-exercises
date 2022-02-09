"use strict";

function lastCommit (username) {
    fetch(`https://api.github.com/users/${username}/events`, {headers: {'Authorization': `token ${GITHUB_TOKEN}`}})
        .then(response => {
        response.json().then(events => {
            let dateAndTime = events[0].created_at;
            console.log("Your last push was at: " + (new Date(dateAndTime)).toLocaleString())
        }).catch(() => console.log("You hit the max API usage"))
    })
        .catch(error => console.log(error));
}

lastCommit("katrodriguez96");

function wait (number) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.1) {
                resolve("Here is your data: ...")
            } else {
                reject("Network Connection Error!")
            }
        }, number)
    })
}

wait(1000).then(() => console.log("You'll see this after 1 second."))
wait(2000).then(() => console.log("You'll see this after 2 seconds."))
wait(5500).then(() => console.log("You'll see this after 5 seconds and 500 milliseconds."))