import {UserType} from "../HW8";

export const homeWorkReducer = (state: UserType[], action: actionsType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            // МЕТОД SORT ИЗМЕНЯЕТ ИСХОДНЫЙ МАССИВ Т.Е. ОСТАЕТСЯ ССЫЛКА НА ИСХОДНЫЙ МАССИВ
            // И ДЛЯ РЕАКТА ЭТО ТОТ ЖЕ САМЫЙ МАССИВ И ПЕРЕРИСОВКИ НЕ ПРОИСХ=>ДЕЛАТЬ КОПИЮ
            //     if (action.payload === 'up') {
            //         return [...state].sort(
            //             (a, b) => {
            //                 if (a.name < b.name) {
            //                     return -1
            //                 } else if (a.name > b.name) {
            //                     return 1
            //                 } else return 0
            //             }
            //         )
            //     } else {
            //         return [...state].sort(
            //             (a, b) => {
            //                 if (a.name > b.name) {
            //                     return -1
            //                 } else if (a.name < b.name) {
            //                     return 1
            //                 } else return 0
            //             }
            //         )
            //     }
            // }

            const sortedState=[...state].sort((a, b) => {
                    if (a.name < b.name) {return -1}
                    else if (a.name > b.name) {return 1}
                    else return 0
                })
            return action.payload==='up' ? sortedState : sortedState.reverse()
        }
        case 'check': {
            return state.filter(u => u.age > action.payload)
        }
        default:
            return state
    }
}
type actionsType = sortUpType | sortDownType | checkAgeType
type sortUpType = { type: 'sort', payload: 'up' }
type sortDownType = { type: 'sort', payload: 'down' }
type checkAgeType = { type: 'check', payload: number }