
 const searchingUser = document.getElementById('main');
 const form = document.getElementById('form');


form.addEventListener('submit', (e)=>{
  e.preventDefault();

  let search = document.getElementById('search').value;
  let userName = search.split(' ').join('');
  fetch(`https://api.github.com/users/${userName}`)
  .then((res)=>res.json())
  .then((data)=>(console.log(data)))
  document.searchingUser.innerHTML = `
     <div>
     <div><img src='${data.avatar_url} alt='avatar'/></div>
     <div>
     <h3>${data.login}</h3>
     <p>${data.bio_url}</p>
     <ul class='userFollow'>
     <li>${data.followers_url}</li>
     <li>${data.following_url}</li>
     <li>${data.repos_url}</li>
     </ul>
     <ul>
     <li>${data.gists_url}</li>
     </ul>
     </div>
     </div>
  `
})