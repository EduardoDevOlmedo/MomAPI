import mongoose, {Model, Schema} from "mongoose";
import {Phrase} from "../interfaces/Phrase"

export interface IPhrase extends Phrase {}

const PhraseSchema = new Schema({
   message: {type: String, required: true},
   type: {type: String, required: true,  enum: {
      values: ['Buena', 'Mala' ],
      message: '{VALUE} no es un estado permitido'
  },
  default: "Buena"} 
})

const PhraseModel: Model<IPhrase>  = mongoose.models.Phrase || mongoose.model("Phrase", PhraseSchema)


export default PhraseModel