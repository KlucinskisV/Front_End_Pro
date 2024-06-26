const baseURL = 'http://49.13.31.246:9191/';
const headers = {
    "content - type":"application/json",
    "x-accase - token": localStorage.getItem('token'),

};

/*async function me(){
    const result = await fetch(baseURL + 'me', {
        headers: headers
    });

    const dataMe = await result.json();
    console.log("MY DATA : ", dataMe);

    
}*/

async function me() {
    let request = new Request();
    const myData = await request.get('me');
    console.log('All Ok' + myData);
    
    console.log(myData);
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

class User{
    constructor(_id,fullName,avatar,age,bio,balance,notification,transection,username,posts_count,followers,following){
        if(!_id || !fullName || !username) throw new Error('Missing ID or Fullname or Username');
        this._id = _id;
        this.avatar = avatar;
        this.fullName = fullName;
        this.age = age || 'Not Discripted';
        this.bio = bio || '';
        this.balance = balance || 0 ;
        this.notification = notification || [];
        this.transection = transection || [];
        this.username = username;
        this.posts_count = posts_count|| 0;
        this.following = following || 0;
        this.followers = followers || 0;
        this.token = localStorage.getItem('token');
        this.request = new Request();
    }
    edit (username,avatar,age,fullName,bio,balance){
        this.username = username;
        this.avatar = avatar;
        this.age = age;
        this.fullName = fullName;
        this.bio = bio;
        this.balance = balance;
    }
}