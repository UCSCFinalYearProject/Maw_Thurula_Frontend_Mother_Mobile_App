import axios from 'axios';
const baseUrl = 'https://jsonplaceholder.typicode.com/';



  export const SignUpService = async () => {
    try {
        const responce = await  axios.get(`${baseUrl}posts/1`).then((response) => {
            console.log(response.data);
          });
    }
    catch ( err ){

    }
}