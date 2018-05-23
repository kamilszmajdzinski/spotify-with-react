export const playlistReducer = (state = {}, action) => {
    switch (action.type) {

        case 'FETCH_PLAYLIST_PENDING':
        return {
            fetchPlaylistPending: true,
            ...state
            }
        
        case 'FETCH_PLAYLIST_ERROR':
            return {
                fetchPlaylistError: true,
                fetchPlaylistPending: false,
                ...state
            }

        case 'FETCH_PLAYLIST_SUCCESS':
            return {
                fetchPlaylistPending: false,
                fetchPlaylistError: false,
                playlists: action.playlists,
                ...state
            }
        default:
            return state;
    }
}

export default playlistReducer