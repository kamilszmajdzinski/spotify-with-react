export const playlistReducer = (state = {}, action) => {
    switch (action.type) {
        case 'FETCH_PLAYLIST_PENDING':
            return {
                isPlaylistPending: action.isPlaylistPending,
                ...state
            }

            return {
                fetchPlaylistError: action.fetchPlaylistError,
                ...state
            }

        case 'FETCH_PLAYLIST_SUCCESS':
            return {
                playlists: action.playlists,
                ...state
            }
        default:
            return state;
    }
}

export default playlistReducer