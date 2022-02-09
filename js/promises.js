function lastCommit (username) {
    fetch(`https://api.github.com/users/${username}/events`, {headers: {'Authorization': `token ${GITHUB_TOKEN}`}})
        .then(response => console.log(response))
        .catch(error => console.log(error));
}

lastCommit("katrodriguez96");
