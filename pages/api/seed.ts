import type { NextApiRequest, NextApiResponse } from 'next'
import {db} from "../../database"
import PhraseModel from "../../models/Phrase"
import {SeedData} from "../../database/seed-data"

type Data = {
    message: string
}

export default async function handler (req: NextApiRequest, res: NextApiResponse<Data>) {
    
    if(process.env.NODE_ENV === "production"){
        return res.status(401).json({
            message: "No tiene acceso a este servicio"
        })
    }

    await db.connect()
    await PhraseModel.deleteMany();
    await PhraseModel.insertMany(SeedData.phrases);
    await db.disconnect()

    res.status(200).json({ message: 'Proceso realizado correctamente ' + res.statusCode})
}