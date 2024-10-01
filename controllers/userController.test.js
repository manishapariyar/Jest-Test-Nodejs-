const supertest = require("supertest")
const app = require("../server")


  describe('POST/ users', () => {
    describe('given username and password', () => { 
      test('should respond  with a 200 status code', async () => {
        const response = await supertest(app)
        .post('/api/users/login')
        .send({
         username: 'username',
         password: 'password'
          })
          expect(response.status).toBe(200);
      })
      
      
    })
   })


   test('check whether the header type is json/not', async () => {
    const response = await supertest(app).post('/api/users/login').send({
        username: 'username',
        password: 'password'
    })
    expect(response.headers['content-type']).toEqual(expect.stringContaining('json'))
})