var randomNum
var fontColors
var fontFamilies
var fontSize
var textTransform
var italicOrNah
var boldOrNah
var blackOrWhite
var d
var n
var m
var commentInfoFromTop
var commentInfoFromRight
var positionFromComment
var randomColor

$(function(){

  // randomNum = Math.floor(Math.random() * 99)
  fontColors = ['red','orange','yellow','green','blue','indigo','violet','pink']
  fontFamilies = ['Arial','Helvetica','Times New Roman','Courier','Verdana','Georgia','Garamond','Comic Sans MS','Impact','Papyrus','Snell Roundhand']
  fontSize = Math.ceil(Math.random() * 100)
  textTransform = ['uppercase','lowercase']
  italicOrNah = ['italic','none']
  boldOrNah = ['bold','none']
  blackOrWhite = ['black','white']
  howBig = ['25','50','75','100','125','150','175','200']
  d = new Date()
  n = d.getFullYear()
  m = d.getMonth()
  commentInfoFromTop = ['2','80']
  commentInfoFromRight = ['2','80']

  if(fontSize<60){
    fontSize=60
  }
  
  $('.testing').scrollTop($('.testing')[0].scrollHeight);

  //use jquery to make a get request to the server on the forecast endpoint
  $.get('/youtube', function(data){
    
    randomNum = Math.floor(Math.random() * data.items.length)

    setInterval(function(){ 
  randomNum = Math.floor(Math.random() * data.items.length)
}, 5000)

  // $('.imageBox').append('<img src=' + data.items[randomNum].snippet.topLevelComment.snippet.authorProfileImageUrl + '>')
    
        $('.testing').css({'color':randomColor})

      $('.testing').append('<p>"' + data.items[randomNum].snippet.topLevelComment.snippet.textDisplay + '"</p>')

      console.log('comment number:' + randomNum)
      console.log('font size:' + fontSize)

      var theChoice = blackOrWhite[Math.floor(Math.random() * blackOrWhite.length)]

      if (theChoice == 'black'){
          $('.commentInfo').css('color','white')
      }else{
          $('.commentInfo').css('color','black')
      }
        
    randomColor = fontColors[Math.floor(Math.random() * fontColors.length)]

//       $('.commentInfo').append('<p>' + "<font style='font-size:75pt !important; font-family: Snell Roundhand;'> - " + data.items[randomNum].snippet.topLevelComment.snippet.authorDisplayName + '. </font> <br> YouTube comment, #' + randomNum + '. <br> Retrieved from ' + data.items[randomNum].snippet.videoId + '.</p>')

      //+ data.items[randomNum].snippet.topLevelComment.snippet.publishedAt
      // $('.commentInfo').css({'top': p.height})

      console.log(data.items[randomNum].snippet.topLevelComment.snippet.authorDisplayName)

      console.log(data)
    
//     var aComment = '<p>"' + data.items[randomNum].snippet.topLevelComment.snippet.textDisplay + '"</p>'

      $('body').css({
        'font-family':'Courier',
        'font-size': '25',
        'background-color':'black'

      })

    setInterval(function(){ 
      setInterval(function(){ 
  randomNum = Math.floor(Math.random() * data.items.length)
}, 5000)
      console.log('video:' + randomNum)
          var newLine = $('<p>' + data.items[randomNum].snippet.topLevelComment.snippet.textDisplay+ '</p>');
          $('.testing').append(newLine)
         randomColor = fontColors[Math.floor(Math.random() * fontColors.length)]
          $(newLine).css({
          'color':randomColor
          })
        }, 5000)
    


  })
})


