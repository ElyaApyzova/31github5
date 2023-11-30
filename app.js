function loadGithubUser(name) {
  return fetch(`https://api.github.com/users/${name}`);
}

function showAvatar(githubUser) {
  return new Promise(function (resolve, reject) {
    let container = document.createElement("div");
    container.className = "avatar-container";
    let img = document.createElement("img");
    img.src = "https://avatars.githubusercontent.com/u/125929236?v=4";
    img.className = "avatar";
    container.appendChild(img);
    document.body.appendChild(container);
    setTimeout(() => {
      container.remove();
      resolve(githubUser);
    }, 5000);
  });
}
loadGithubUser("ElyaApyzova").then(showAvatar);
