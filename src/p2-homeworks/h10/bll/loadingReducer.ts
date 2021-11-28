const initState = false


export const loadingReducer = (state:boolean = initState, action: loadingActionType): boolean => { // fix any
    switch (action.type) {
        case 'SET-LOADING': {
            return  action.loading
        }
        default: return state
    }
}

export const loadingAC = (loading: boolean) => {
    return {type: 'SET-LOADING', loading } as const
}
type loadingActionType=ReturnType<typeof loadingAC>