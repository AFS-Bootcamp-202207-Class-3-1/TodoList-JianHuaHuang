import axios from "axios"
const api=axios.create({
baseURL:"http://localhost:8090"
// baseURL:"https://62ea14e03a5f1572e873a245.mockapi.io/api/"

});

export default api;