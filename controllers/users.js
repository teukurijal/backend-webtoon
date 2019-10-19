const models = require('../models')
const jwt = require('jsonwebtoken')
const User = models.user
const Webtoon = models.webtoon


exports.store = (req, res) => {
    
    const token = jwt.sign({ email: req.body.email}, 'my-secret-key')
    const email = req.body.email
   
    User.findOrCreate({
        where: {email: req.body.email}, 
        defaults: {
            password: req.body.password,
            name: req.body.name
        }
    }).then( ([user, created]) => {
      console.log(user.get
        ({ plain: true })
    )
      if(created) {
          res.send({
              message: 'Register success',
              email,
              token
          })
      }else{
          res.status(400).send({
              message: 'Email already registered'
          })
      }
    })
}

exports.show = (req, res) => {
    const { user_id } = req.params
    console.log(user_id)
    
    Webtoon.findAll({
       where: { createdBy: user_id },
      
    }).then(posts=>
        res.send(posts)
    ).catch(err => {
        console.log(err)
    })
}

exports.update = (req, res) => {
    const{ user_id } = req.params
    User.update(
        req.body,
        { where: {id: user_id}}
        
    ).then(post=> {
        res.send({
            message: "success",
            post
        })
    }).catch(err => {
        console.log(err)
    })
}