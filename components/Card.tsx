import React, { FC, useContext } from 'react'
import { Card, CardActionArea, CardContent, CardHeader, Grid, IconButton, Typography } from '@mui/material'
import {Phrase} from "../interfaces/Phrase"
import DeleteIcon from '@mui/icons-material/Delete';
import { PhrasesContext } from '../context';
import {utils} from "../utils/index"



interface Props {
    phrases: Phrase[]
}

const PhraseCard: FC<Props> = ({phrases}): JSX.Element => {
 
   const {deleteValues} = useContext(PhrasesContext)

   const {capitalize} = utils 

    const handleDelete = (value: Phrase) => {
      deleteValues(value)
    }

    return(
       <>
         {
         phrases.map(phrase => {
         return(
         <Grid key={phrase._id} sx={{borderRadius: "10px", height: "auto",padding: "2px"}} item xs={12} sm={3}>
            <Card>
               <CardActionArea>
                  <CardContent sx={{background: "#8789C0", display: "flex", alignItems:"center", justifyContent: "space-between"}}>
                     <Typography sx={{fontSize: 20}} variant="h2" color="#280000" gutterBottom>
                        {
                         phrase.type === "Mala" ? "Regaño" : "Felicitación"
                        }
                     </Typography>
                     <IconButton onClick={() => handleDelete(phrase)}>
                        <DeleteIcon />
                     </IconButton>
                  </CardContent>
                  <CardContent>
                     <Typography sx={{ fontSize: 18 }} color="#8789C0">
                        {
                        `${capitalize(phrase.message)}`
                        }
                     </Typography>
                  </CardContent>
               </CardActionArea>
            </Card>
         </Grid>
         )
         })
         }
       </>
    )
}
export default PhraseCard