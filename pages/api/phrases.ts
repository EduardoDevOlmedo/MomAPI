import type { NextApiRequest, NextApiResponse } from 'next'
import {db} from "../../database"
import PhraseModel, { IPhrase } from "../../models/Phrase"

type Data = {
  message: string
| IPhrase
| IPhrase[]
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  
  if(process.env.NODE_ENV === "production"){
    return res.status(401).json({
        message: "No tiene acceso a este servicio"
    })}


  switch (req.method) {
    case "GET":
      return getPhrases(res)
    case "POST":
      return setPhrase(req, res)
    case "DELETE":
      return deletePhrase(req, res)
    default:
      break;
  }
}

export const getPhrases = async( res: NextApiResponse) => {
  try {
    await db.connect()
    const phrases = await PhraseModel.find().sort({createdAt: 'ascending'})
    return res.status(200).json(phrases)
  }
  catch (err){
    return res.status(400).json(err)
  }
}

const setPhrase = async(req: NextApiRequest, res: NextApiResponse) => {
  
  const {message = "", type = ""} = req.body;
  const newPhrase = new PhraseModel({
    message: message, type: type
  })

  try {
    await db.connect()
    await newPhrase.save()
    await db.disconnect()
    res.status(201).json(newPhrase)
  }
  catch(err){
    await db.disconnect()
    return res.status(404).json("Something went wrong with this POST REQUEST" + err)
  }

}


const deletePhrase = async(req: NextApiRequest, res: NextApiResponse) => {
  
  const {_Reqid = ""} = req.body

  try {
    await db.connect()
    const phrases = await PhraseModel.find().sort({createdAt: 'ascending'})
    const PhraseID = phrases.map(phrase => phrase._id.toString() === _Reqid && phrase._id.toString())
                        .filter(phrase => phrase !== false)
    await PhraseModel.deleteOne({_id: PhraseID.toString()})
    await db.disconnect()
    return res.status(200).json("Successfully deleted id: " + _Reqid)
  }
  catch(err) {
    console.log(err)
  }
}