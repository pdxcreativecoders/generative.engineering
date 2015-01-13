var restify = require('restify')
var d3 = require('d3')

var server = restify.createServer()
server.listen(8000)

server.get('/', function(req,res,next){
  res.send({
    directory: [
    '/random/normal/',
    '/random/logNormal/'
  ]
  })
})

server.get('/random/:type/:count', return_random_numbers)

function return_random_numbers(req,res,next){

  var count = parseInt(req.params.count)
  var type = req.params.type

  console.log(count,type)

  var m = []
  console.log(typeof count)

 if (type==='normal' || type === 'logNormal') {

    for(var i = 0; i < count; i++){
      m.push(d3.random[type]()())
    }

  } else {
    m = [ 'invalid type' ]
  }

  res.send(m)
  return next()

}