//parent class
class Media {
    constructor(info) {
        this.publishDate = info.publishDate;
        this.name = info.name;
    }
}

//child class
class Song extends Media {
    constructor(songData) {
    super(SongData);
    this.artish = songData.artist;
    }
}

const mySong = new Song({
    artish: "Queen",
    name: "Bohemain Rhapsody",
    publishDate: 1975,
});
console.log(mySong);