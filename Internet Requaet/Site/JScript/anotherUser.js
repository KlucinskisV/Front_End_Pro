async function anotherUserProfile () {
    const urlParams = new URLSearchParams(window.location.search);
const usernameUrl = urlParams.get('username');

let requests = new Requests();
const usernameUrlData = await requests.get('user/' + usernameUrl);
let profileImage = document.getElementById('myAvatar');
    let username = document.getElementById('profile-user-name')[0];
    let posts = document.getElementById('profile-stat-count')[0];
    let followers = document.getElementById('profile-stat-count')[1];
    let following = document.getElementById('profile-stat-count')[2];
    let bio = document.getElementById('profile-real-name');
    
    profileImage.src = myData.avatar;
    profileImage.style.opacity = 1;
    username.innerHTML = myData.username;
    posts.innerHTML = myData.posts_count;
    followers.innerHTML = myData.followers;
    following.innerHTML = myData.following;
    bio.innerHTML = myData.bio;
}