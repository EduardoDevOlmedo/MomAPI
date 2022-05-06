
type grade = 'Buena' | 'Mala' 


interface ISeedEntry {
    message: string;
    type: grade;
}

interface seedData {
    phrases: ISeedEntry[]
}

export const SeedData: seedData = {
    phrases: [
        {
            message: "Muy bien",
            type: "Buena"
        },
        {
            message: "Gracias ...",
            type: "Buena"
        },
        {
            message: "Vaya está bien",
            type: "Buena"
        },
        {
            message: "Los amo mucho",
            type: "Buena"
        },
        {
            message: "ponete las yinas",
            type: "Mala"
        },
        {
            message: "lava los trastes",
            type: "Mala"
        },
        {
            message: "tamal con queso para los presos",
            type: "Mala"
        },
        {
            message: "que vamos a comer? caca",
            type: "Mala"
        },
        {
            message: "baja a la loly de la cama",
            type: "Mala"
        },
        {
            message: "Anda ponete las Yinas",
            type: "Mala"
        },
        {
            message: "Lava los trastes YA",
            type: "Mala"
        },
        {
            message: "Anda a comprar a la tienda",
            type: "Mala"
        },
        {
            message: "Dale de comer a la loli",
            type: "Mala"
        },
        {
            message: "Apaga esa computadora",
            type: "Mala"
        },
        {
            message: "Anda bañate",
            type: "Mala"
        },
        {
            message: "Mira barre",
            type: "Mala"
        },
        {
            message: "Dale de comer a la loli",
            type: "Mala"
        },
        {
            message: "A Erick nunca le gusta nada solo Carnita",
            type: "Mala"
        },
        {
            message: "Dame el teléfono",
            type: "Mala"
        },
        {
            message: "Anda a ayudarle a tu papá",
            type: "Mala"
        },

    ]
}