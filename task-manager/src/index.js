const express =  require('express')


///will ensure that the index is connected to the db, so we do need to require anything specific
require('./db/mongoos')


const User = require('./models/user')
const { collection } = require('./models/user')

const app = express()
const port = process.env.PORT || 3000

///transform the JSON data as an object to be able to access 
app.use(express.json())



app.post('/users', (req, resp) =>{
const user = new User(req.body)

user.save().then(() => {

  resp.send(user)

}).catch((error) =>{
  resp.status(400).send(error)
})

})


app.delete('/users/:age', (req, resp) =>{


  
  User.remove({age: req.params.age === 0}, (error, resp) =>{
    if (error){
      return resp.send(error)
    }

    resp.send(resp)
  })
  
  })
  
  





app.listen(port, () =>{
  console.log('Server is up on port ' + port)
})
