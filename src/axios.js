import axios from "axios";

const instance = axios.create({
    // THE API (cloud function) URL
    baseURL: "https://us-central1-amzcln245.cloudfunctions.net/api"
    //"http://localhost:5001/amzcln245/us-central1/api" 
});

export default instance;

