const marqueeMsgs = [
  "Our pasta, who art in a colander, draining be your noodles. Thy noodle come, Thy sauce be yum, on top some grated Parmesan. Give us this day, our garlic bread, …and forgive us our trespasses, as we forgive those who trample on our lawns.",
  "Icarus laughed as he fell. Threw his head back and yelled into the winds, arms spread wide, teeth bared to the world",
  "It's giving bozo...",
  "What the sigma",
  "Born to goon, forced to edge",
  "Also try Terraria!",
  "What we do in life echoes in eternity - Maxiumus",
  "Roll for initiative....",
  "The supreme art of war is to subdue the enemy without fighting - Sun Tzu",
  "How do I code this...?"
];

const marquee = document.getElementById("change");

function splash() {
  marquee.innerHTML = marqueeMsgs[Math.floor(Math.random() * marqueeMsgs.length)];
  console.log("Website used Splash!");
}

marquee.addEventListener('animationiteration', splash);

splash();

// Last.fm Integration
const apiKey = 'd89c0c0f384af07f5453c41f88934340';
const username = 'Darsolos';

async function fetchLatestSong() {
    const response = await fetch(`https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${username}&api_key=${apiKey}&format=json&limit=1`);
    const data = await response.json();
    const track = data.recenttracks.track[0];
    document.getElementById('latest-song').innerHTML = `${track.artist['#text']} - ${track.name}`;
}

async function fetchTopTracks() {
    const response = await fetch(`https://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&user=${username}&api_key=${apiKey}&format=json&period=7day&limit=3`);
    const data = await response.json();
    const tracks = data.toptracks.track;
    let trackList = '';
    tracks.forEach(track => {
        trackList += `<div class="song">${track.artist.name} - ${track.name}</div>`;
    });
    document.getElementById('top-songs').innerHTML = trackList;
}

async function fetchTopArtists() {
    const response = await fetch(`https://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=${username}&api_key=${apiKey}&format=json&period=7day&limit=3`);
    const data = await response.json();
    const artists = data.topartists.artist;
    let artistList = '';
    artists.forEach(artist => {
        artistList += `<div class="artist">${artist.name}</div>`;
    });
    document.getElementById('top-artists').innerHTML = artistList;
}

// Call the Last.fm functions
fetchLatestSong();
fetchTopTracks();
fetchTopArtists();
