import axios from 'axios';
const baseUrl = 'http://192.168.165.213:3000/';



  export const SignUpService = async () => {
    try {
        const responce = await  axios.get(`${baseUrl}posts/1`).then((response) => {
            console.log(response.data);
          });
    }
    catch ( err ){

    }
}