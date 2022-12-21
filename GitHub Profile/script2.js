function infoGithub(response) {
    let user = document.getElementById('user');
    let infoUser = document.getElementById('bio');
    let avatar = document.getElementById("avatar");
    let followers = document.getElementById('followers');
    let following = document.getElementById('following');
    let repositorio = document.getElementById('repo');
    

    user.innerHTML = response.data.login;
    infoUser.innerHTML = response.data.bio;
    avatar.innerHTML = response.data.avatar_url;
    followers.innerHTML = response.data.followers;
    following.innerHTML = response.data.following;
    repositorio.innerHTML = response.data.public_repos;

  
}
 function searchGithubUsers(user) {
    let apiUrl = `https://api.github.com/users/${user}`;
    console.log(apiUrl);
    axios.get(apiUrl).then(infoGithub);
}

function submit(event) {
    event.preventDefault();
    let formSearch = document.querySelector("#search-text");
    searchGithubUsers(formSearch.value);
  }

let form = document.querySelector("#search-form");
form.addEventListener("submit", submit);


// function gitsRepo(response) {
//    let repositorioGits = response.data.public_gists;

//    let repoGitsDisplay = document.getElementById("gitsRepo");

//    let gitsRepoHtml = `<div class="card-body text-center">`;
//    repositorioGits.forEach(function (reposGits, index) {
//     if (index < 5) {
//         gitsRepoHtml = 
//         gitsRepoHtml +
//         `<a href="${gitsRepo(reposGits.dt)}" class="card-link">Card link</a>`

// }
// });
// gitsRepoHtml = gitsRepoHtml + `</div>`;
// repoGitsDisplay.innerHTML = gitsRepoHtml;
// }


// // function searchGithubUsers(user) {
// //     let apiUrl = `https://api.github.com/users/${user}`;
// //     console.log(apiUrl);
// //     axios.get(apiUrl).then(gitsRepo);
// }

searchGithubUsers("DianaB177");