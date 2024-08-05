function createplaylist(playlistName){
    let playlist=[];
    return {
        addSong: function (songName,artist){
            playlist.push({songName,artist})
        },
        listSong : function(){
            if(playlist.length===0) console.log("playlist is empty")
            else{
                 console.log(`${playlistName} playlist :${playlist.map(song=>`${song.songName} by ${song.artist}`).join(' , ')}`)        
            }
        }
    }
}

function addSong(playlist,songName,artist){
    playlist.addSong(songName,artist);
}
function listSong(playlist){
    playlist.listSong();
}
const myPlaylist = createplaylist("my Fevorite");   
addSong(myPlaylist,"song1","artist1");
addSong(myPlaylist,"song2","artist2");
addSong(myPlaylist,"song3","artist3");
addSong(myPlaylist,"song4","artist4");

listSong(myPlaylist)