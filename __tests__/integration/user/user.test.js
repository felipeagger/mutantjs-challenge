const request = require('supertest');

const app = require('../../../src/app');

describe('Users', () => {
    
   it('it should get routes users with three objects', async () => {

    const response = await request(app).get('/users');

    expect(response.status).toBe(200);

    let { websites, ordered, filtered } = response.body;

    //Websites
    expect(Array.isArray(websites)).toBe(true);
    expect(websites.length).toBeGreaterThan(0);
    
    //Ordered
    expect(typeof ordered).toBe('object');
    expect(ordered.length).toBeGreaterThan(0);

    //Filtered
    expect(typeof filtered).toBe('object');
    expect(filtered.length).toBeGreaterThan(0);       
      
   });

});