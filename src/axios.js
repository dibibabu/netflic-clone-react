import axios from 'axios'
import { baseURL } from './constants/constants'

const instance = axios.create({
    baseURL: baseURL
})

export default instance
