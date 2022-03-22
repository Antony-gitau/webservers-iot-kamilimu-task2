//reuire mqtt
const mqtt = require('mqtt')

//create a client
const client = mqtt.connect('mqtt://test.mosquitto.org')

client.on('connect',function(){
    client.subscribe('presence',function(err){
        if(!err){
            client.publish('presence', 'hello mqtt')
        }
    })
})

client.on('message', function(topic, message){
    console.log(message.toString())
    client.end()
})