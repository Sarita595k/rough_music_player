const songs = [{
    id: 1,
    name: "kya hua tera vada",
    artist: "mohammed rafi",
    img: "https://a10.gaanacdn.com/gn_img/albums/koMWQ7BKqL/oMWQ7raKqL/size_m.webp",
    genre: "retro",
    source: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
}, {
    id: 2,
    name: "morni banke",
    artist: "guru randhawa",
    img: "https://d3pc1xvrcw35tl.cloudfront.net/sm/images/1260x945/badhai-ho-new-song_20180951392.jpg",
    genre: "party",
    source: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
}, {
    id: 3,
    name: "gun guna rahe hai bhanvare",
    artist: "asha bhosle, mohammed rafi",
    img: "https://c-fa.cdn.smule.com/rs-s77/arr/ce/d9/890e1253-fa5d-4b51-8a24-4217e4443ff1.jpg",
    genre: "retro",
    source: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
}, {
    id: 4,
    name: "what",
    artist: "dj shireen",
    img: "https://www.fluentu.com/blog/wp-content/uploads/site//1/esl-song-activities.jpg",
    genre: "party",
    source: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
}, {
    id: 5,
    name: "koi fariyaad",
    artist: "jagjit singh",
    img: "https://c.saavncdn.com/792/Tum-Bin-Hindi-2001-20221206162237-500x500.jpg",
    genre: "gazals",
    source: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
}, {
    id: 6,
    name: "unforgettable",
    artist: "french montana, swae lee",
    img: "https://c.saavncdn.com/654/Unforgettable-English-2017-20170807151548-500x500.jpg",
    genre: "workout",
    source: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
}, {
    id: 7,
    name: "no stylist",
    artist: "drake",
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2e/French_Montana_%E2%80%93_No_Stylist.png/220px-French_Montana_%E2%80%93_No_Stylist.png",
    genre: "workout",
    source: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
}, {
    id: 8,
    name: "old days",
    artist: "lil durk",
    img: "https://c.saavncdn.com/312/Good-Old-Days-English-2020-20200722130108-500x500.jpg",
    genre: "hip hop",
    source: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
}, {
    id: 9,
    name: "as we speak",
    artist: "drake",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM3rz-kDdZbXtdwBsI2vDqngq2fw1QPrpCDg&s",
    genre: "hip hop",
    source: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
}, {
    id: 10,
    name: "eye of the tiger",
    artist: "survivor",
    img: "https://jumptwist.com/cdn/shop/products/eyeofthetiger_1200x1200.png?v=1678811490",
    genre: "motivation",
    source: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
}, {
    id: 11,
    name: "i'm still standing",
    artist: "elton john",
    img: "https://80sheaven.com/wp-content/uploads/2024/05/Im-Still-Standing-7-inch-vinyl-sleeve-front.jpg",
    genre: "motivation",
    source: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
}]

let sortByGenre = songs

function createDropDown() {
    let dropDown = document.getElementById("all-songs")
    let createSelect = document.createElement("select")
    // dropdown.createElement("option")
    createSelect.id = "dropdownSelect";

    let genres = songs.map(song => song.genre)
    let uniqueGenre = [...new Set(genres)]
    uniqueGenre.forEach(genre => {
        let option = document.createElement("option")
        option.value = genre
        option.textContent = genre
        createSelect.appendChild(option)
    })

    // console.log(genres)
    dropDown.appendChild(createSelect)

    createSelect.addEventListener("change", (event) => {
        let selectedValue = event.target.value
        sortByGenre = songs.filter(song => {
            return song.genre === selectedValue
            // console.log(song)
        })
        currentIndex = 0
        allSongsDisplay(sortByGenre)
        updateIndex(0)
    })

}
createDropDown()


let allSongsDisplay = function (sortByGenre = songs) {

    let listContainer = document.getElementById("all-songs-list")
    listContainer.innerHTML = ''
    listContainer.innerHTML = "<h1>All songs</h1>"

    sortByGenre.forEach((song, index) => {

        console.log(index)

        let listIs = document.createElement("button")
        listIs.classList.add("songs-list")
        listIs.textContent = song.name
        listIs.id = song.id
        listContainer.appendChild(listIs)
        listIs.name = song.name
        listIs.image = song.img
        listIs.artist = song.artist
        listIs.source = song.source

        listIs.addEventListener("click", () => {
            currentIndex = index
            updateIndex(currentIndex)
        })
    })
}
function updateIndex(index) {
    let imageContainer = document.getElementById("image-container")
    imageContainer.innerHTML = ''
    let song = sortByGenre[index]
    let songImage = document.createElement('img')
    songImage.src = song.img


    let songTitle = document.createElement("h3")
    songTitle.classList.add("songTitle")

    let songArtist = document.createElement("h5")
    songArtist.classList.add("SongArtist")
    songArtist.textContent = song.artist

    let audioControls = document.createElement("audio")
    audioControls.controls = true
    audioControls.src = song.source

    songTitle.textContent = song.name

    let previousBtn = document.createElement("button")
    let nextBtn = document.createElement("button")
    previousBtn.classList.add("previousButton")
    nextBtn.classList.add("nextButton")


    let addToPlaylistbtn = document.createElement("button")
    addToPlaylistbtn.classList.add("addToPlaylist")
    addToPlaylistbtn.textContent = "Add to playlist"
    // previousBtn.textContent = 'previous'
    // nextBtn.textContent = 'next'

    previousBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + sortByGenre.length) % sortByGenre.length
        updateIndex(currentIndex)
    })
    nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % sortByGenre.length
        updateIndex(currentIndex)
    })
    addToPlaylistbtn.addEventListener("click", () => {
        let addToPlaylist = document.getElementById("playlist-list")
        let songListIs = document.createElement("button")
        songListIs.classList.add("songListName")
        songListIs.textContent = sortByGenre[currentIndex].name

        addToPlaylist.append(songListIs)
        // console.log(songs[currentIndex].name)
    })


    imageContainer.append(songImage, songTitle, songArtist, audioControls, previousBtn, nextBtn, addToPlaylistbtn)
}


// renderCurrentSong()
//     )

// }
allSongsDisplay()
function toggletheme() {
    let selectBtn = document.getElementById("toggle-button")
    selectBtn.textContent = "Dark theme"
    selectBtn.addEventListener("click", () => {
        let selectBody = document.getElementById("section-container")
        let selectContainers = document.getElementById("songs-container")
        let selectContainers2 = document.getElementById("image-container")
        let selectContainers3 = document.getElementById("playlist-container")
        if (selectBtn.classList.contains("darktheme")) {
            selectBtn.textContent = "Dark theme"
            selectBtn.style.backgroundColor = "#FFFFFF"
            selectBtn.style.color = "black"
            selectBody.style.backgroundColor = "rgb(147, 152, 152)"
            selectContainers.style.backgroundColor = "#187e7e"
            selectContainers2.style.backgroundColor = "#187e7e"
            selectContainers3.style.backgroundColor = "#187e7e"

            selectBtn.classList.remove("darktheme")
        } else {
            selectBtn.textContent = "light theme"
            selectBtn.style.backgroundColor = "#187e7e"
            selectBody.style.backgroundColor = "black"
            selectBtn.style.color = "#FFFFFF"
            selectContainers.style.backgroundColor = "grey"
            selectContainers2.style.backgroundColor = "grey"
            selectContainers3.style.backgroundColor = "grey"
            selectBtn.classList.add("darktheme")
        }

    })
}

toggletheme()

let showSongs = function () {


}



let addtoPlaylist = function () {
    let playlist = document.getElementById("my-playlist")
    let playlistValue = document.getElementById("playlistInputBox")
    let playlistbtn = document.getElementById("createPlaylistBtn")
    playlistbtn.addEventListener("click", (event) => {
        event.preventDefault()
        let newPlaylist = document.createElement("button")
        newPlaylist.classList.add("newPlaylist")
        newPlaylist.textContent = playlistValue.value

        playlist.append(newPlaylist)
        playlistValue.value = ''
        // console.log(playlistValue.value)
    })

}
addtoPlaylist()
let createPlaylist = function () {

}
