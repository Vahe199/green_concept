import axios from "axios";

const jwt = localStorage.getItem('jwt_token') ? localStorage.getItem('jwt_token') : null

const instance = axios.create({
    baseURL: 'https://green-kis.tecman.ru/api/',
    headers: {
        'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8;application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9ncmVlbi1raXMudGVjbWFuLnJ1XC9hcGlcL2xvZ2luIiwiaWF0IjoxNjMxMDg3NTQ1LCJleHAiOjE2MzExNzM5NDUsIm5iZiI6MTYzMTA4NzU0NSwianRpIjoiMGViT1BhMEdmcko1R0ZIaiIsInN1YiI6MywicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.DK9vFnR4M3kQc-45vxdvZZBGxRIFUE96CjxjZa67mHM`
    }
})

export const counterpartiesApi = {

    fetchContractorsList() {
        return instance.get('contractors')
    },
}
