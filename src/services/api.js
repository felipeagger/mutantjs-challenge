const axios = require('axios');

module.exports = {

   async getUsers(){
      
      const response = await axios.get("https://jsonplaceholder.typicode.com/users");

      return response.data;
   }
   
};