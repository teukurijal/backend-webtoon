const models =  require('../models')
const Banner = models.banner


exports.show = (req, res) => {
    Banner.findAll({
          
    }).then(posts=>
        res.send(posts)
    ).catch(err => {
        console.log(err)
    })
}