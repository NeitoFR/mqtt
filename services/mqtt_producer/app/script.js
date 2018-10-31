var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://mqtt_server:1883', {username: "iot", password: "iot"});

client.on('connect', function() {
    console.log('Connected to MQTT');
    setInterval(function() {
        client.publish('test', Math.floor(Math.random() * 50).toString());
    },5000)
})