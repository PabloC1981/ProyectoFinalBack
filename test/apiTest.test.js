import supertest from 'supertest';
import chai,{expect} from 'chai';

const request = supertest('http://localhost:8080');

describe('test API',()=>{
    describe('GET',()=>{
        it('La peticion deberia retomar status 200', async()=>{
            let res = await request.get('/api/users/');
            expect(res.status).to.equal(200);
        })            
    })
    describe('POST',()=>{
        it('Debe Porder Guardar un Usuario', async()=>{
            let user = {
                
                    first_name:"Pablo",
                    last_name:"Perez",
                    email:"a@a"
            }
            let res = await request.post('/api/users/').send(user); 
            expect(res.status).to.be.equal(200);
            const resBody = res.body;
            expect(resBody).to.include.keys('first_name','last_name','email','_id')
        })            
    })
})
