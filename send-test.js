var test = require('./index');

test.send('localhost', 'tasks',{
    'id' : 122,
    'action' : 'test',
    'descripiton' : 'Hello world',
    'url': '/api/testing'
});
