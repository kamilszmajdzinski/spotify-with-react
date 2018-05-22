export const fetchUserSuccess = user => {
    return {
        type: 'FETCH_USER_SUCCESS',
        user
    }
}

export const fetchUserError = error => {
    return {
        type: 'FETCH_USER_ERROR',
        error
    }
}

export const fetchUserPending = bool => {
    return {
        type: "FETCH_DATA_PENDING",
        isLoading: bool
    }
}


export const fetchUser = token => {
    return dispatch => {
        const request = new Request('https://api.spotify.com/v1/me', {
            headers: new Headers({
                'Authorization': 'Bearer ' + token
            })
        })
        dispatch(fetchUserPending(true))
        fetch(request).then(res => {
            if(res.statusText === "Unauthorized"){
                window.location.href = './'
            }
            return res.json()
        }).then(res => {
            dispatch(fetchUserSuccess(res))
            dispatch(fetchUserPending(false))
        }).catch(err => {
            dispatch(fetchUserError(err))
        })

    }
}