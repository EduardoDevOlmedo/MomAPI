import axios from "axios"

const PhrasesApi = axios.create(
    {
        baseURL: '/api'
    }
)


export default PhrasesApi