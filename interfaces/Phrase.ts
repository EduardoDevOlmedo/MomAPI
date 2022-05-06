type grade = 'Buena' | 'Mala' 


export interface Phrase {
    message: string;
    type: grade;
    _id?:string;
}