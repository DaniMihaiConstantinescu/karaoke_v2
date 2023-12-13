import songs from '@/assets/songs'

export default async function getLyrics(song){

    for (let index = 0; index < songs.length; index++) {

        if (songs[index].title == song) {
            return songs[index].lyrics;
        }
    }
}