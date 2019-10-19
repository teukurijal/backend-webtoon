const models =  require('../models')
const Image = models.page


exports.show = (req, res) => {
    const { episode_id  } = req.params
    
    Image.findAll({
        where: { episodeId: episode_id },
          
    }).then(posts=>
        res.send(posts)
    ).catch(err => {
        console.log(err)
    })
}

exports.store = (req, res) => {
    const body = {
        page: req.body.page,
        image: req.body.image,
        episodeId: req.params.episode_id,
        toonId: req.params.toon_id,
        userId: req.params.user_id
    }
    Image.create(body)
    .then(post=> {
        res.send({
            message: "success", 
            post
        })
    }).catch(err => {
        console.log(err)
    })
}

exports.delete = (req, res) => {
    const {image_id, episode_id} =req.params
    Image.destroy({
        where: {id: image_id, episodeId: episode_id}
    }).then(post=> {
        res.send({
            message: "success",
            post
        })
    }).catch(err => {
        console.log(err)
    })
}