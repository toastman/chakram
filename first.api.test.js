var chakram = require('chakram');
var expect = chakram.expect;

describe('Chakram', function() {
    it('should offer simple HTTP request capabilities', function() {
        var response = chakram.get('http://api-mockapitron.rhcloud.com/?size=1&name=name&address=address');
        expect(response).to.have.status(200);
        expect(response).not.to.have.header('non-existing-header');
        response.then(function(d) {
            expect(d.body).to.have.property('ok');
        });
        return chakram.wait();
    });
});