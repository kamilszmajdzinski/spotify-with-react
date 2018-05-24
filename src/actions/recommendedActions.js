export const fetchRecommendedPending = () => {
    return {
        type: 'RECOMMENDED_PENDING'
    }
}

export const fetchRecommendedSuccess = recommendations => {
    return {
        type: 'RECOMMENDED_SUCCESS',
        recommendations
    }
}

export const fetchRecommendedError = () => {
    return {
        type: 'RECOMMENDED_ERROR'
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
            if (res.statusText === 'Unauthorized') {
                window.location.href = '/'
            }
            return res.json()
        }).then(res => {
            dispatch(fetchRecommendedSuccess(res.items))
        }).catch(err => {
            console.log(err);
            
            dispatch(fetchRecommendedError())
        })

    }

}