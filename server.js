const express = require('express')
const app = express()
var request = require('request'); //use the request package to make api requests
var videoID = ['dQw4w9WgXcQ', 'FZUcpVmEHuk']
var randomVideo = videoID[Math.floor(Math.random() * videoID.length)]

app.use(express.static('public')) //server out the public files statically!


//use express to make an endpoint which we can access with the client on a get call.
app.get('/youtube', function(req,res){

  // use the request package to make a call to the forecast API
  request('https://www.googleapis.com/youtube/v3/commentThreads?key=AIzaSyAxCSKrqlW6u9-7WXaA1xvjRJoxkZd8wog&textFormat=plainText&part=snippet&videoId=' + randomVideo + '&maxResults=100', function(error, response, body){
    // console.log(error)
    // if(error){ console.error(error); return;}
    // console.log( JSON.parse(body) );
    res.send(JSON.parse(body)) //send the JSON out to the incoming GET request from jQuery.

  })
})

 //boot up the server
var port = process.env.PORT || 3000
app.listen(port, function(){
  console.log("running on 3k")
})

$(function(){

randomVideo = videoID[Math.floor(Math.random() * videoID.length)]

      setInterval(function(){ 
  randomVideo = Math.floor(Math.random() * data.items.length)
}, 5000)

})
