var express = require('express')
var logger = require('morgan')
var bodyParser = require('body-parser')
var axios = require('axios')
var algorithm = require('./trashyAlgorithm')

var app = express()

app.set('view engine', 'ejs')

app.use(express.static('views'))
app.set('views', __dirname + '/views')
app.use(logger('dev'))

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/', function(request,response){
   
    response.render('home.ejs')
})

app.post('/results', function(request, response){
    var answer1 = request.body.radio1
    var answer2 = request.body.radio2
    var answer3 = request.body.radio3
    var answer4 = request.body.radio4
    var answer5 = request.body.radio5
    var answer6 = request.body.radio6
    
    var result = algorithm.calculateTrashyness(answer1, answer2, answer3, answer4, answer5, answer6)
    
    var url = `https://api.giphy.com/v1/gifs/search?api_key=xtS177WXcKzzDPkmTjMUVRJnUXMcwNSr&q=${result}&limit=25&offset=0&rating=G&lang=en`
    
    axios.get(url)
    .then(function(res){
        var answerArray = res.data.data
        var firstResult = answerArray[0]
        var images = firstResult.images
        
        console.log(images)
        
        response.render('results.ejs', { 
            result: result, 
            url: images.fixed_width.url
        })
    })
    .catch(function(err){ console.log(err) })
    
    
})


var port =  process.env.PORT || 8080

app.listen(port,function(){
    console.log('App running on port' + port)
})
