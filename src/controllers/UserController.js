const api = require('../services/api');
const elasticsearch = require('../services/elasticsearch');

module.exports = {

   async index(req, res){
   
      const users = await api.getUsers();      
      
      // website 
      const websites = users.map(item => item.website);

      // users order by 'name','email','usuarios'  
      var ordered = users.map(item => ({
          name: item.name,
          email: item.email,
          company: item.company.name
        }));
        
      ordered = ordered.sort((a, b) => (a.name > b.name ? 1 : -1)); 

      // users with address include 'suite'  
      var filtered = users.filter(item => item.address.suite.toLowerCase().includes('suite'));

      filtered = filtered.map(item => ({
         name: item.name,
         address: item.address.suite
      })); 
       
      //finally
      var jsonResult = { 
         websites,
         ordered,
         filtered
      };   

      //Save Logs
      elasticsearch.storeLog(jsonResult);
    
      return res.json(jsonResult);    
   }
};