fetch('https://youtube.googleapis.com/youtube/v3/videos?chart=mostPopular&maxResults=24&key=AIzaSyBzydGn9gxg0IBk39Mvvxu54Q9OuOWosKE')
.then((res) =>{
    return res.json();
}).then((data)=> {
    console.log(data);
});

