const {
  LiveClient,
  Message,
  Originator
} = require("flowai-js");

// Create a new live client
const client = new LiveClient({
  clientId: 'YOUR CLIENT ID HERE',
  origin: 'https://my.site'
})

// Fired whenever the client connects
client.on(LiveClient.CONNECTED, () => {

  console.log('--> Connected')

  // Create the originator of the message
  const originator = new Originator({
    name: "Boss"
  })

  // Create a Message
  const message = new Message({
    // Thread Id limits the message just to John
    threadId: 'john',
    // The text to send
    speech: "Behold, I'm pure awesomeness!",
    // Person or system sending the message
    originator
  })

  // Send
  client.send(message)
})

// Start the connection
//client.start();

export default function () {
  client.start();
}
