var amqp = require('amqplib/callback_api');
var msg = "Hello World!";
var host = 'localhost';
var q = 'tasks';

function send(host,q,msg) {
    if(typeof (msg) == 'object') {
        msg = JSON.stringify(msg);
    }
    amqp.connect('amqp://'+host, function(err, conn) {
        conn.createChannel(function(err, ch) {

            ch.assertQueue(q, {durable: true});
            ch.sendToQueue(q, new Buffer(msg), {persistent: true});
            console.log(" [x] Sent '%s'", msg);
        });
        setTimeout(function() { conn.close(); process.exit(0) }, 50);
    });
}

function receive(host, q) {
    if(typeof (msg) == 'object') {
        msg = JSON.stringify(msg);
    }
    amqp.connect('amqp://'+host, function(err, conn) {
        conn.createChannel(function(err, ch) {

            ch.assertQueue(q, {durable: true});
            console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", q);
            ch.consume(q, function(msg) {
                console.log(" [x] Received %s", msg.content.toString());
            }, {noAck: true});
        });
    });
}


module.exports.send = send;
module.exports.receive = receive;







