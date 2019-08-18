const axios = require('axios');

module.exports = {

   async esConfigure(){

      try{

        response = await axios.put(`http://${process.env.ELASTIC}/logs/users`);      
      
        const { status } = response.status;  
        const { type } = response.data.error;  

        if (status == 400){
            
            if (type != 'resource_already_exists_exception'){
                console.log('ES Error: ', type);
            }
        }        

      }catch (error){
         //console.log('Error on Create Index Logs - ElasticSearch!');        
      }

   },

   async storeLog(item){
      try{

        response = await axios.post(`http://${process.env.ELASTIC}/logs/users`, item);     

      }catch (error){
         //console.log('Error on Save Log - ElasticSearch: ', error);        
      }
   }
   
};