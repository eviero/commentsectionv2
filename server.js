const express = require('express')
const app = express()
var request = require('request'); //use the request package to make api requests
var videoID = ['1nDj1wpykWI', 'kffacxfA7G4', 'hSlb1ezRqfA', 'IvxRsDpXPGo', 'arXl3J3IVMM', 'gmmfmCdqzbQ', 'y6120QOlsfU', 'tpqttuNfWYo', 'ZXLCqA2ARSw', 'xTDM8oO8zYw', 'CJZfwJIpxgo', 'Cmo6g03Kd8c', 'kbBgx0BEuuI', '7_pAxFOqJv8', 'guQQSJNRooQ', 'k6zmICIqWRw', 'JhOUnWv2X8A', 'uqcyDA2L5L0', 'EGNKgah948s', 'aDMd6BeReAI', 'OGbhJjXl9Rk', 'A_MjCqQoLLA', 'VmUaBoEEz_g', 'XBqY6cJD3CE', 'hTWKbfoikeg', 'RTuBf4BrIgE', 'pjS6OdY2dBQ', '08ITsgiL6v8', 'GPdqlROzgvg', '1RtNuYX1Go4', '_qiVBOqNiOs']

app.use(express.static('public')) //server out the public files statically!


//use express to make an endpoint which we can access with the client on a get call.
app.get('/youtube', function(req,res){

  // use the request package to make a call to the forecast API
  request('https://www.googleapis.com/youtube/v3/commentThreads?key=AIzaSyAxCSKrqlW6u9-7WXaA1xvjRJoxkZd8wog&textFormat=plainText&part=snippet&videoId=' + videoID[Math.floor(Math.random() * videoID.length)] + '&maxResults=100', function(error, response, body){
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
