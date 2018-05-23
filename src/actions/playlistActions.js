
export const fetchPlaylistPending = () => {
    return {
        type: 'FETCH_PLAYLIST_PENDING'
    }
}

export const fetchPlaylistSuccess = (playlists) => {    
    return {
        type: 'FETCH_PLAYLIST_SUCCESS',
        playlists
    }
}

export const fetchPlaylistError = () => {
    return {
        type: 'FETCH_PLAYLIST_ERROR'
    }
}

export const fetchPlaylist = (userId, accessToken) => {
    //1167184935
    console.log(userId + ' moje :1167184935');
    const API_URL = `https://api.spotify.com/v1/users/${userId}`
    return dispatch => {
        const request = new Request(API_URL + '/playlists',{
            headers: new Headers({
                'Authorization': 'Bearer ' + accessToken
            })
        })

        dispatch (fetchPlaylistPending())

        fetch(request).then(res => {
            if (res.statusText === 'Unauthorized') {
                window.location.href = '/'
            }
            return res.json()
        }).then(res => {

            console.log(res.items);
            
            dispatch(fetchPlaylistSuccess(res.items)) 
        }).catch(err => {
            dispatch(fetchPlaylistError(err))
        })

    }
}