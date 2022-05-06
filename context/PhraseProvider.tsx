import { useEffect, useReducer } from "react";
import PhrasesApi from "../apis/PhrasesApi";
import { Phrase } from "../interfaces/Phrase";
import { PhraseReducer } from "./";
import { PhrasesContext } from "./";

export interface UIState {
    phrases: Phrase | []
}

const UI_INITIAL_STATE: UIState = {
    phrases: []
}


const UIProvider: React.FC = ({children}) => {
  
  const [state, dispatch] = useReducer(PhraseReducer, UI_INITIAL_STATE)
  
    const getValues = async() => {
        const {data} = await PhrasesApi.get<Phrase[]>("/phrases")
        dispatch({
            type: "Phrase - GET",
            payload: data
        })
    }

    const deleteValues = async(phrase: Phrase) => {
        const res = await PhrasesApi.delete<Phrase>("/phrases", {data: {
            _Reqid: phrase._id 
        }})
        dispatch({
            type: "Phrase - DELETE",
            payload: phrase
        })
    }

    const addValues = async(phrase: Phrase) => {
        const {data} = await PhrasesApi.post<Phrase>("/phrases",  {
            message: phrase.message,
            type: phrase.type
        })
        dispatch({
            type: "Phrase - POST",
            payload: data
        })
    }

    useEffect(() => {
        getValues()
    }, [])
    

    return (
      <PhrasesContext.Provider value={
          {
              ...state, getValues, deleteValues, addValues
       
        }}>
          {
              children
          }
      </PhrasesContext.Provider>
  )
}

export default UIProvider