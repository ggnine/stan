    // We need to check if the browser supports WebSockets
    if ("WebSocket" in window) {
      // Before we can connect to the WebSocket, we need to start it in Processing.
      // Example using WebSocketP5
      // https://github.com/muthesius/WebSocketP5
      var ws = new WebSocket("ws://localhost:1338/ket");
    } else {
      // The browser doesn't support WebSocket
      alert("WebSocket NOT supported by your Browser!");
    }
function fuck(){
   console.log("hi")
    ws.send("hi"); 
}