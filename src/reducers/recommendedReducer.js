const recommendedReducer = (state = {}, action) => {
    switch (action.type) {
        case 'RECOMMENDED_PENDING':
            return {
                fetchRecommendedPending: true,
                ...state
            }
        
        case 'RECOMMENDED_ERROR':
            return {
                fetchRecommendedPending: false,
                fetchRecommendedError: true,
                ...state
            }
        
        case 'RECOMMENDED_SUCCESS':
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