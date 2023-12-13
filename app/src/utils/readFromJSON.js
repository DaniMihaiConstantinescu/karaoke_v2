import songs from '@/assets/songs'

export default async function getSongsNames() {

    const names = []

    for (let index = 0; index < songs.length; index++) {
        names.push(songs[index].title);
    }

    // console.log(names);
    return names;

}

