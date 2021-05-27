import axios from "axios";

const instance = axios .create({
    baseURL: "http://us-central1-challenge-4b2b2.cloudfunctions.net/api"     // this api  have not buyed by me 
    // baseURL: "http://localhost:5001/clone-by-rm/us-central1/api",     //the api{ cloud function } URL

});
export default instance