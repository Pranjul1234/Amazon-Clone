import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: 'https://us-central1-ecommerce-website-2109d.cloudfunctions.net/api'
    
});

export default instance;

//http://127.0.0.1:5001/ecommerce-website-2109d/us-central1/api


