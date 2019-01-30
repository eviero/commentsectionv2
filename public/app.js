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

  //use jquery to make a get request to the server on the forecast endpoint
  $.get('/youtube', function(data){

  //  // data.items.forEach(function(item){
  //  //   console.log(item.snippet.topLevelComment.snippet.textDisplay)
  //  //
  //  // })


    // console.log(data)

    // console.log(data.items["0"].snippet.topLevelComment.snippet.textDisplay)
    // console.log(data.items["1"].snippet.topLevelComment.snippet.textDisplay)
    // console.log(data.items["2"].snippet.topLevelComment.snippet.textDisplay)
    // console.log(data.items["3"].snippet.topLevelComment.snippet.textDisplay)
    // console.log(data.items["4"].snippet.topLevelComment.snippet.textDisplay)
    // console.log(data.items["5"].snippet.topLevelComment.snippet.textDisplay)
    // console.log(data.items["6"].snippet.topLevelComment.snippet.textDisplay)
    // console.log(data.items["7"].snippet.topLevelComment.snippet.textDisplay)
    // console.log(data.items["8"].snippet.topLevelComment.snippet.textDisplay)
    // console.log(data.items["9"].snippet.topLevelComment.snippet.textDisplay)
    // console.log(data.items["10"].snippet.topLevelComment.snippet.textDisplay)
    // console.log(data.items["11"].snippet.topLevelComment.snippet.textDisplay)
    // console.log(data.items["12"].snippet.topLevelComment.snippet.textDisplay)
    // console.log(data.items["13"].snippet.topLevelComment.snippet.textDisplay)
    // console.log(data.items["14"].snippet.topLevelComment.snippet.textDisplay)
    // console.log(data.items["15"].snippet.topLevelComment.snippet.textDisplay)
    // console.log(data.items["16"].snippet.topLevelComment.snippet.textDisplay)
    // console.log(data.items["17"].snippet.topLevelComment.snippet.textDisplay)
    // console.log(data.items["18"].snippet.topLevelComment.snippet.textDisplay)
    // console.log(data.items["19"].snippet.topLevelComment.snippet.textDisplay)
    // console.log(data.items["20"].snippet.topLevelComment.snippet.textDisplay)
    // console.log(data.items["21"].snippet.topLevelComment.snippet.textDisplay)
    // console.log(data.items["22"].snippet.topLevelComment.snippet.textDisplay)
    // console.log(data.items["23"].snippet.topLevelComment.snippet.textDisplay)
    // console.log(data.items["24"].snippet.topLevelComment.snippet.textDisplay)
    // console.log(data.items["25"].snippet.topLevelComment.snippet.textDisplay)
    // console.log(data.items["26"].snippet.topLevelComment.snippet.textDisplay)
    // console.log(data.items["27"].snippet.topLevelComment.snippet.textDisplay)
    // console.log(data.items["28"].snippet.topLevelComment.snippet.textDisplay)
    // console.log(data.items["29"].snippet.topLevelComment.snippet.textDisplay)
    // console.log(data.items["30"].snippet.topLevelComment.snippet.textDisplay)
    // console.log(data.items["31"].snippet.topLevelComment.snippet.textDisplay)
    // console.log(data.items["32"].snippet.topLevelComment.snippet.textDisplay)
    // console.log(data.items["33"].snippet.topLevelComment.snippet.textDisplay)
    // console.log(data.items["34"].snippet.topLevelComment.snippet.textDisplay)
    // console.log(data.items["35"].snippet.topLevelComment.snippet.textDisplay)
    // console.log(data.items["36"].snippet.topLevelComment.snippet.textDisplay)
    // console.log(data.items["37"].snippet.topLevelComment.snippet.textDisplay)
    // console.log(data.items["38"].snippet.topLevelComment.snippet.textDisplay)
    // console.log(data.items["39"].snippet.topLevelComment.snippet.textDisplay)
    // console.log(data.items["40"].snippet.topLevelComment.snippet.textDisplay)
    // console.log(data.items["41"].snippet.topLevelComment.snippet.textDisplay)
    // console.log(data.items["42"].snippet.topLevelComment.snippet.textDisplay)
    // console.log(data.items["43"].snippet.topLevelComment.snippet.textDisplay)
    // console.log(data.items["44"].snippet.topLevelComment.snippet.textDisplay)
    // console.log(data.items["45"].snippet.topLevelComment.snippet.textDisplay)
    // console.log(data.items["46"].snippet.topLevelComment.snippet.textDisplay)
    // console.log(data.items["47"].snippet.topLevelComment.snippet.textDisplay)
    // console.log(data.items["48"].snippet.topLevelComment.snippet.textDisplay)
    // console.log(data.items["49"].snippet.topLevelComment.snippet.textDisplay)

    // $('.testing').html('<h1>' + data.items["1"].snippet.topLevelComment.snippet.textDisplay +
    // '<br>' + data.items["2"].snippet.topLevelComment.snippet.textDisplay +
    // '<br>' + data.items["3"].snippet.topLevelComment.snippet.textDisplay +
    // '<br>' + data.items["4"].snippet.topLevelComment.snippet.textDisplay +
    // '<br>' + data.items["5"].snippet.topLevelComment.snippet.textDisplay + '</h1>')

    // 50 COMMENTS

    // // if(data.items["0"].snippet.topLevelComment.snippet.textDisplay.includes('2017')){
    //
    //   $('.testing').append('<p>' + data.items["0"].snippet.topLevelComment.snippet.textDisplay + '</p>')
    //
    // // }
    //
    // // if(data.items["1"].snippet.topLevelComment.snippet.textDisplay.includes('2017')){
    //
    //   $('.testing').append('<p>' + data.items["1"].snippet.topLevelComment.snippet.textDisplay + '</p>')
    //
    // // }
    //
    // // if(data.items["2"].snippet.topLevelComment.snippet.textDisplay.includes('2017')){
    //
    //   $('.testing').append('<p>' + data.items["2"].snippet.topLevelComment.snippet.textDisplay + '</p>')
    //
    // // }
    //
    // // if(data.items["3"].snippet.topLevelComment.snippet.textDisplay.includes('2017')){
    //
    //   $('.testing').append('<p>' + data.items["3"].snippet.topLevelComment.snippet.textDisplay + '</p>')
    //
    // // }
    //
    // // if(data.items["4"].snippet.topLevelComment.snippet.textDisplay.includes('2017')){
    //
    //   $('.testing').append('<p>' + data.items["4"].snippet.topLevelComment.snippet.textDisplay + '</p>')
    //
    // // }
    //
    // // if(data.items["5"].snippet.topLevelComment.snippet.textDisplay.includes('2017')){
    //
    //   $('.testing').append('<p>' + data.items["5"].snippet.topLevelComment.snippet.textDisplay + '</p>')
    //
    // // }
    //
    // // if(data.items["6"].snippet.topLevelComment.snippet.textDisplay.includes('2017')){
    //
    //   $('.testing').append('<p>' + data.items["6"].snippet.topLevelComment.snippet.textDisplay + '</p>')
    //
    // // }
    //
    // // if(data.items["7"].snippet.topLevelComment.snippet.textDisplay.includes('2017')){
    //
    //   $('.testing').append('<p>' + data.items["7"].snippet.topLevelComment.snippet.textDisplay + '</p>')
    //
    // // }
    //
    // // if(data.items["8"].snippet.topLevelComment.snippet.textDisplay.includes('2017')){
    //
    //   $('.testing').append('<p>' + data.items["8"].snippet.topLevelComment.snippet.textDisplay + '</p>')
    //
    // // }
    //
    // // if(data.items["9"].snippet.topLevelComment.snippet.textDisplay.includes('2017')){
    //
    //   $('.testing').append('<p>' + data.items["9"].snippet.topLevelComment.snippet.textDisplay + '</p>')
    //
    // // }
    //
    // // if(data.items["10"].snippet.topLevelComment.snippet.textDisplay.includes('2017')){
    //
    //   $('.testing').append('<p>' + data.items["10"].snippet.topLevelComment.snippet.textDisplay + '</p>')
    //
    // // }
    //
    // // if(data.items["11"].snippet.topLevelComment.snippet.textDisplay.includes('2017')){
    //
    //   $('.testing').append('<p>' + data.items["11"].snippet.topLevelComment.snippet.textDisplay + '</p>')
    //
    // // }
    //
    // // if(data.items["12"].snippet.topLevelComment.snippet.textDisplay.includes('2017')){
    //
    //   $('.testing').append('<p>' + data.items["12"].snippet.topLevelComment.snippet.textDisplay + '</p>')
    //
    // // }
    //
    // // if(data.items["13"].snippet.topLevelComment.snippet.textDisplay.includes('2017')){
    //
    //   $('.testing').append('<p>' + data.items["13"].snippet.topLevelComment.snippet.textDisplay + '</p>')
    //
    // // }
    //
    // // if(data.items["14"].snippet.topLevelComment.snippet.textDisplay.includes('2017')){
    //
    //   $('.testing').append('<p>' + data.items["14"].snippet.topLevelComment.snippet.textDisplay + '</p>')
    //
    // // }
    //
    // // if(data.items["15"].snippet.topLevelComment.snippet.textDisplay.includes('2017')){
    //
    //   $('.testing').append('<p>' + data.items["15"].snippet.topLevelComment.snippet.textDisplay + '</p>')
    //
    // // }
    //
    // // if(data.items["16"].snippet.topLevelComment.snippet.textDisplay.includes('2017')){
    //
    //   $('.testing').append('<p>' + data.items["16"].snippet.topLevelComment.snippet.textDisplay + '</p>')
    //
    // // }
    //
    // // if(data.items["17"].snippet.topLevelComment.snippet.textDisplay.includes('2017')){
    //
    //   $('.testing').append('<p>' + data.items["17"].snippet.topLevelComment.snippet.textDisplay + '</p>')
    //
    // // }
    //
    // // if(data.items["18"].snippet.topLevelComment.snippet.textDisplay.includes('2017')){
    //
    //   $('.testing').append('<p>' + data.items["18"].snippet.topLevelComment.snippet.textDisplay + '</p>')
    //
    // // }
    //
    // // if(data.items["19"].snippet.topLevelComment.snippet.textDisplay.includes('2017')){
    //
    //   $('.testing').append('<p>' + data.items["19"].snippet.topLevelComment.snippet.textDisplay + '</p>')
    //
    // // }
    //
    // // if(data.items["20"].snippet.topLevelComment.snippet.textDisplay.includes('2017')){
    //
    //   $('.testing').append('<p>' + data.items["20"].snippet.topLevelComment.snippet.textDisplay + '</p>')
    //
    // // }
    //
    // // if(data.items["21"].snippet.topLevelComment.snippet.textDisplay.includes('2017')){
    //
    //   $('.testing').append('<p>' + data.items["21"].snippet.topLevelComment.snippet.textDisplay + '</p>')
    //
    // // }
    //
    // // if(data.items["22"].snippet.topLevelComment.snippet.textDisplay.includes('2017')){
    //
    //   $('.testing').append('<p>' + data.items["22"].snippet.topLevelComment.snippet.textDisplay + '</p>')
    //
    // // }
    //
    // // if(data.items["23"].snippet.topLevelComment.snippet.textDisplay.includes('2017')){
    //
    //   $('.testing').append('<p>' + data.items["23"].snippet.topLevelComment.snippet.textDisplay + '</p>')
    //
    // // }
    //
    // // if(data.items["24"].snippet.topLevelComment.snippet.textDisplay.includes('2017')){
    //
    //   $('.testing').append('<p>' + data.items["24"].snippet.topLevelComment.snippet.textDisplay + '</p>')
    //
    // // }
    //
    // // if(data.items["25"].snippet.topLevelComment.snippet.textDisplay.includes('2017')){
    //
    //   $('.testing').append('<p>' + data.items["25"].snippet.topLevelComment.snippet.textDisplay + '</p>')
    //
    // // }
    //
    // // if(data.items["26"].snippet.topLevelComment.snippet.textDisplay.includes('2017')){
    //
    //   $('.testing').append('<p>' + data.items["26"].snippet.topLevelComment.snippet.textDisplay + '</p>')
    //
    // // }
    //
    // // if(data.items["27"].snippet.topLevelComment.snippet.textDisplay.includes('2017')){
    //
    //   $('.testing').append('<p>' + data.items["27"].snippet.topLevelComment.snippet.textDisplay + '</p>')
    //
    // // }
    //
    // // if(data.items["28"].snippet.topLevelComment.snippet.textDisplay.includes('2017')){
    //
    //   $('.testing').append('<p>' + data.items["28"].snippet.topLevelComment.snippet.textDisplay + '</p>')
    //
    // // }
    //
    // // if(data.items["29"].snippet.topLevelComment.snippet.textDisplay.includes('2017')){
    //
    //   $('.testing').append('<p>' + data.items["29"].snippet.topLevelComment.snippet.textDisplay + '</p>')
    //
    // // }
    //
    // // if(data.items["30"].snippet.topLevelComment.snippet.textDisplay.includes('2017')){
    //
    //   $('.testing').append('<p>' + data.items["30"].snippet.topLevelComment.snippet.textDisplay + '</p>')
    //
    // // }
    //
    // // if(data.items["31"].snippet.topLevelComment.snippet.textDisplay.includes('2017')){
    //
    //   $('.testing').append('<p>' + data.items["31"].snippet.topLevelComment.snippet.textDisplay + '</p>')
    //
    // // }
    //
    // // if(data.items["32"].snippet.topLevelComment.snippet.textDisplay.includes('2017')){
    //
    //   $('.testing').append('<p>' + data.items["32"].snippet.topLevelComment.snippet.textDisplay + '</p>')
    //
    // // }
    //
    // // if(data.items["33"].snippet.topLevelComment.snippet.textDisplay.includes('2017')){
    //
    //   $('.testing').append('<p>' + data.items["33"].snippet.topLevelComment.snippet.textDisplay + '</p>')
    //
    // // }
    //
    // // if(data.items["34"].snippet.topLevelComment.snippet.textDisplay.includes('2017')){
    //
    //   $('.testing').append('<p>' + data.items["34"].snippet.topLevelComment.snippet.textDisplay + '</p>')
    //
    // // }
    //
    // // if(data.items["35"].snippet.topLevelComment.snippet.textDisplay.includes('2017')){
    //
    //   $('.testing').append('<p>' + data.items["35"].snippet.topLevelComment.snippet.textDisplay + '</p>')
    //
    // // }
    //
    // // if(data.items["36"].snippet.topLevelComment.snippet.textDisplay.includes('2017')){
    //
    //   $('.testing').append('<p>' + data.items["36"].snippet.topLevelComment.snippet.textDisplay + '</p>')
    //
    // // }
    //
    // // if(data.items["37"].snippet.topLevelComment.snippet.textDisplay.includes('2017')){
    //
    //   $('.testing').append('<p>' + data.items["37"].snippet.topLevelComment.snippet.textDisplay + '</p>')
    //
    // // }
    //
    // // if(data.items["38"].snippet.topLevelComment.snippet.textDisplay.includes('2017')){
    //
    //   $('.testing').append('<p>' + data.items["38"].snippet.topLevelComment.snippet.textDisplay + '</p>')
    //
    // // }
    //
    // // if(data.items["39"].snippet.topLevelComment.snippet.textDisplay.includes('2017')){
    //
    //   $('.testing').append('<p>' + data.items["39"].snippet.topLevelComment.snippet.textDisplay + '</p>')
    //
    // // }
    //
    // // if(data.items["40"].snippet.topLevelComment.snippet.textDisplay.includes('2017')){
    //
    //   $('.testing').append('<p>' + data.items["40"].snippet.topLevelComment.snippet.textDisplay + '</p>')
    //
    // // }
    //
    // // if(data.items["41"].snippet.topLevelComment.snippet.textDisplay.includes('2017')){
    //
    //   $('.testing').append('<p>' + data.items["41"].snippet.topLevelComment.snippet.textDisplay + '</p>')
    //
    // // }
    //
    // // if(data.items["42"].snippet.topLevelComment.snippet.textDisplay.includes('2017')){
    //
    //   $('.testing').append('<p>' + data.items["42"].snippet.topLevelComment.snippet.textDisplay + '</p>')
    //
    // // }
    //
    // // if(data.items["43"].snippet.topLevelComment.snippet.textDisplay.includes('2017')){
    //
    //   $('.testing').append('<p>' + data.items["43"].snippet.topLevelComment.snippet.textDisplay + '</p>')
    //
    // // }
    //
    // // if(data.items["44"].snippet.topLevelComment.snippet.textDisplay.includes('2017')){
    //
    //   $('.testing').append('<p>' + data.items["44"].snippet.topLevelComment.snippet.textDisplay + '</p>')
    //
    // // }
    //
    // // if(data.items["45"].snippet.topLevelComment.snippet.textDisplay.includes('2017')){
    //
    //   $('.testing').append('<p>' + data.items["45"].snippet.topLevelComment.snippet.textDisplay + '</p>')
    //
    // // }
    //
    // // if(data.items["46"].snippet.topLevelComment.snippet.textDisplay.includes('2017')){
    //
    //   $('.testing').append('<p>' + data.items["46"].snippet.topLevelComment.snippet.textDisplay + '</p>')
    //
    // // }
    //
    // // if(data.items["47"].snippet.topLevelComment.snippet.textDisplay.includes('2017')){
    //
    //   $('.testing').append('<p>' + data.items["47"].snippet.topLevelComment.snippet.textDisplay + '</p>')
    //
    // // }
    //
    // // if(data.items["48"].snippet.topLevelComment.snippet.textDisplay.includes('2017')){
    //
    //   $('.testing').append('<p>' + data.items["48"].snippet.topLevelComment.snippet.textDisplay + '</p>')
    //
    // // }
    //
    // // if(data.items["49"].snippet.topLevelComment.snippet.textDisplay.includes('2017')){
    //
    //   $('.testing').append('<p>' + data.items["49"].snippet.topLevelComment.snippet.textDisplay + '</p>')
    //
    // // }

    // REFRESH

// setTimeout(function(){
//   location = ''
// },10000)

// $('body').click(function() {
//   location = ''
// })

  randomNum = Math.floor(Math.random() * data.items.length)

  // $('.imageBox').append('<img src=' + data.items[randomNum].snippet.topLevelComment.snippet.authorProfileImageUrl + '>')

      $('.testing').append('<p>"' + data.items[randomNum].snippet.topLevelComment.snippet.textDisplay + '"</p>')

      console.log('comment number:' + randomNum)
      console.log('font size:' + fontSize)

      var theChoice = blackOrWhite[Math.floor(Math.random() * blackOrWhite.length)]

      if (theChoice == 'black'){
          $('.commentInfo').css('color','white')
      }else{
          $('.commentInfo').css('color','black')
      }

//       $('.commentInfo').append('<p>' + "<font style='font-size:75pt !important; font-family: Snell Roundhand;'> - " + data.items[randomNum].snippet.topLevelComment.snippet.authorDisplayName + '. </font> <br> YouTube comment, #' + randomNum + '. <br> Retrieved from ' + data.items[randomNum].snippet.videoId + '.</p>')

      //+ data.items[randomNum].snippet.topLevelComment.snippet.publishedAt
      // $('.commentInfo').css({'top': p.height})

      console.log(data.items[randomNum].snippet.topLevelComment.snippet.authorDisplayName)

      console.log(data)

      $('body').css({
        'color':fontColors[Math.floor(Math.random() * fontColors.length)],
        'font-family':fontFamilies[Math.floor(Math.random() * fontFamilies.length)],
        'font-size': fontSize,
        'text-transform':textTransform[Math.floor(Math.random() * textTransform.length)],
        'font-style':italicOrNah[Math.floor(Math.random() * italicOrNah.length)],
        'font-weight':boldOrNah[Math.floor(Math.random() * boldOrNah.length)],
        'background-color':theChoice

      })

      // $('.imageBox img').css('height',howBig[Math.floor(Math.random() * howBig.length)])


  })

    })
