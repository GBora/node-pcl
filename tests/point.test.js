const pcl = require('../dist/index.js');
const test = require('unit.js');

describe('The Point class', function(){

    let point = new pcl.Point(1,1,1);

    it('should be an object', function(){
        test.object(point);
    });
});