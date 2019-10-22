let chai = require('chai');
const serverUrl = 'http://localhost:5000' || process.env.URL + process.env.PORT;
chai.config.includeStack = true;
let chaiHttp = require('chai-http');
chai.use(chaiHttp);
let should = chai.should();
//User Test
describe('For Users Test  API', () => {
  it('Should return it works ', function(done) {
    chai
      .request(serverUrl)
      .get('/api/user/test')
      .end((err, res) => {
        console.log(res.status);
        res.status.should.be.equal(200);
        done();
      });
  });
});
