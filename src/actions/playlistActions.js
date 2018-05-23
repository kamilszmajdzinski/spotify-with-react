
export const fetchPlaylistPending = (bool) => {
    return {
        type: 'FETCH_PLAYLIST__PENDING',
        isPlaylistPending: bool
    }
}

export const fetchPlaylistSuccess = playlists => {
    return {
        type: 'FETCH_PLAYLISTS_SUCCESS',
        playlists
    }
}

export const fetchPlaylistError = error => {
    return {
        type: 'FETCH_PLAYLISTS_ERROR',
        error
    }
}

export const fetchPlaylist = (userId, accessToken) => {
    return dispatch => {
        const request = new Request(`https://api.spotify.com/v1/users/${userId}/playlists`,{
            headers: new Headers({
                'Authorization': 'Bearer ' + accessToken
            })
        })

        dispatch (fetchPlaylistPending(true))

        fetch(request).then(res => {
            if (res.statusText === 'Unauthorized') {
                window.location.href = '/'
            }
            return res.json()
        }).then(res => {
            dispatch(fetchPlaylistSuccess(res.items))
            dispatch(fetchPlaylistPending(false))
        }).catch(err => {
            dispatch(fetchPlaylistError(err))
        })

    }
}