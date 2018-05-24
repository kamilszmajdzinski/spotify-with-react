const recommendedReducer = (state = {}, action) => {
    switch (action.type) {
        case 'FETCH_RECOMMENDED_PENDING':
            return {
                fetchRecommendedPending: true,
                ...state
            
            }
        
        case 'FETCH_RECOMMENDED_ERROR':
            return {
                fetchRecommendedPending: false,
                fetchRecommendedError: true,
                ...state
            }
        
        case 'FETCH_RECOMMENDED_SUCCESS':
            return {
                fetchRecommendedPending: false,
                fetchRecommendedError: false,
                recommendations: action.recommendations,
                ...state
            }
            
        default:
            return state;
    }
}

export default recommendedReducer