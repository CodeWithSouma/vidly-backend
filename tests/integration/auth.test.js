const request = require('supertest');
const { Genre } = require('../../models/genre');
let server;
const { User } = require('../../models/user');

describe('auth middleware', () => {
    beforeEach(() => { server = require('../../index'); });
    afterEach(async () => { 
        await Genre.remove({name : 'genre3'});
        server.close();
    });

    let token;

    const exec = () => {
        return request(server)
            .post('/api/genres')
            .set('x-auth-token',token)
            .send({ name : 'genre3' });
    }

    beforeEach(() => {
        token = new User().generateAuthToken();
    });

    it('should return 401 if token is not provided', async () => {
        token = '';
        const res = await exec();
        expect(res.status).toBe(401);
    });

    it('should return 400 if token is invalid', async () => {
        token = 'a';
        const res = await exec();
        expect(res.status).toBe(400);
    });

    it('should return 200 if token is valid', async () => {
        const res = await exec();
        expect(res.status).toBe(200);
    });
});