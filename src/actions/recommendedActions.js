export const fetchRecommendedPending = () => {
    return {
        type: 'FETCH_RECOMMENDED_PENDING'
    }
}

export const fetchRecommendedSuccess = recommendations => {
    return {
        type: 'FETCH_RECOMMENDED_SUCCESS',
        recommendations
    }
}

export const fetchRecommendedError = () => {
    return {
        type: 'FETCH_RECOMMENDED_ERROR'
    }
}

export const fetchRecommendations = (accessToken) => {
    return dispatch => { 
        const request = new Request('https://api.spotify.com/v1/browse/new-releases', {
            headers: new Headers({
                'Authorization': 'Bearer ' + accessToken
            })
        })

        dispatch (fetchRecommendedPending())

        fetch(request).then(res => {
            return res.json()
        }).then(res => {
            
            dispatch(fetchRecommendedSuccess(res.albums))
            
            
        }).catch(err => {
            console.log(err);
            
            dispatch(fetchRecommendedError())
        })

    }

}