var tag = document.createElement('script');
tag.src = "http://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
var MusicName = document.getElementById("Music_name");
var Pagetitle = document.getElementById("Pagetitle");


var index = 0
var backindex = 0

var encoded_data = "";
for (let i = 0; i < videos.length; i++) {
    encoded_data += videos[i].vid + ", ";
}
var listvideos = encoded_data.split(', ');

function onYouTubeIframeAPIReady() {
    var n = 0;
    var vid = listvideos[n];
    console.log(listvideos)
    console.log(vid)
    player = new YT.Player('player', {
        height: '100%',
        width: '100%',
        videoId: vid,
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

var video_code_number = 0;
function onPlayvideo(idx) {
    var video = listvideos[idx];
    player.loadVideoById(video)
    console.log(video)
    console.log(idx)
    MusicName.innerHTML = videos[idx].artist + " - " + videos[idx].musictitle;
    Pagetitle.innerHTML = videos[idx].musictitle;
    video_code_number = idx
    console.log("idx", idx)
    backindex = index
    index = idx + 1
}

function onPlayerReady(event) {
    MusicName.innerHTML = videos[index].artist + " - " + videos[index].musictitle;
    Pagetitle.innerHTML = videos[index].musictitle;
    event.target.playVideo();
}

function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.ENDED) {
        const musictitle = videos[video_code_number + 1].musictitle;
        console.log(musictitle);
        MusicName.innerHTML = videos[video_code_number + 1].artist + " - " + videos[video_code_number + 1].musictitle;
        Pagetitle.innerHTML = videos[video_code_number + 1].musictitle;
        if (index < videos.length) {
            video_code_number += 1
            event.target.loadVideoById({
                videoId: videos[video_code_number].vid
            });
        }
        backindex = video_code_number
        index = video_code_number + 1
    }
}

// creating musiclist
for (let i = 0; i < videos.length; i++) {
    var musiclistzone = document.getElementById("playlist")
    musiclist = document.createElement("div");
    musiclist.innerHTML = '<div class="Music">' + '<span style="cursor: pointer;" class="Music_name" onclick = "onPlayvideo(' + i + ')">' + "<span>🎧 </span>" + videos[i].artist + " - " + videos[i].musictitle + "</span></div>"
    document.getElementById("playlist").appendChild(musiclist);
}


// Buttons functions

function BackMusic() {
    index -= 1
    console.log("index: " + index)
    console.log(videos[index])
    player.loadVideoById(listvideos[index - 1])
    MusicName.innerHTML = videos[index - 1].artist + " - " + videos[index - 1].musictitle;
    Pagetitle.innerHTML = videos[index - 1].musictitle;
}

function NextMusic() {
    if (index == 0) {
        index += 1
        console.log("index: " + index)
        player.loadVideoById(listvideos[1])
        MusicName.innerHTML = videos[1].artist + " - " + videos[1].musictitle;
        Pagetitle.innerHTML = videos[1].musictitle;
    }
    console.log("index: " + index)
    player.loadVideoById(listvideos[index])
    MusicName.innerHTML = videos[index].artist + " - " + videos[index].musictitle;
    Pagetitle.innerHTML = videos[index].musictitle;
    index += 1
}


function music_shuffle(){
    var shuffle_toggle = document.getElementById("shuffle_toggle-button");
    var shuffle_toggle_condition = "unactive"

    for (var a=[],i=0;i<40;++i) a[i]=i;

    // http://stackoverflow.com/questions/962802#962890
    function shuffle(array) {
      var tmp, current, top = array.length;
      if(top) while(--top) {
        current = Math.floor(Math.random() * (top + 1));
        tmp = array[current];
        array[current] = array[top];
        array[top] = tmp;
      }
      return array;
    }
    
    a = shuffle(a);
    
    if(shuffle_toggle.className == "active"){
        shuffle_toggle_condition = "active"
        console.log(shuffle_toggle_condition)
    }
    else{
        shuffle_toggle_condition = "unactive"
        console.log(shuffle_toggle_condition)
    }

    // http://stackoverflow.com/questions/962802#962890
}