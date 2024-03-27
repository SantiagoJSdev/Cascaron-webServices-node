 const { Server } = require("./models/server"); 
 




const server = new Server(); 
server.listen();
server.cron();
  
// app.listen(app.get('port'), function () {
//   console.log('Server on port', app.get('port'));
// })
 


