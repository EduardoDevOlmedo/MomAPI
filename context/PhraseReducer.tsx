import { Phrase } from "../interfaces/Phrase";

type PhraseType = 
|{ type: "Phrase - GET", payload: Phrase[]} 
|{ type: "Phrase - POST", payload: Phrase}
|{ type: "Phrase - DELETE", payload: Phrase}

export const PhraseReducer = (state: PhraseState, action: PhraseType): PhraseState => {
    
    switch (action.type) {
        case 'Phrase - GET' :
            return {
                ...state, 
                phrases: [...action.payload]
            }
        case 'Phrase - DELETE':
            return {
                ...state,
                phrases: state.phrases.filter((phrase: Phrase) => {
                   return phrase._id !== action.payload._id
                })
            }
        case 'Phrase - POST':
            return {
                ...state,
                phrases: [...state.phrases, action.payload]
            }
        default:
            return state;
    }


}
