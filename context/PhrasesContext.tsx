import { createContext } from 'react';
import { Phrase } from '../interfaces/Phrase';


interface contextProps{
    phrases: Phrase[]
    getValues: () => void
    deleteValues: (value: Phrase) => void
    addValues: (value: Phrase) => void
}

export const PhrasesContext = createContext({} as contextProps)