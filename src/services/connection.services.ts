import axios from "axios"

const serviceZip = axios.create({
    baseURL:"https://viacep.com.br/ws/"
})


export default serviceZip