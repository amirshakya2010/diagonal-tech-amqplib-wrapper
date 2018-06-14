# diagonal-tech-amqplib-wrapper
Amqplib wrapper

#usages

For send script : 

var test = require('diagonal-tech-amqplib-wrapper');

test.send('localhost', 'tasks',{
    'id' : 122,
    'action' : 'test',
    'descripiton' : 'Hello world',
    'url': '/api/testing'
});
