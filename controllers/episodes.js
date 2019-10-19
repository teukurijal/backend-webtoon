const models = require('../models')
const Episode = models.episode
const Page = models.page

exports.index = (req, res) => {
    const{ toon_id }= req.params
    console.log( toon_id )
    Episode.findAll({
        where: { toonId: toon_id },
        // include: [{
        //     model: Webtoon,
        //     as: "toonid"
        // }]
    }).then(toons=>
        res.send(toons),

    ).catch(err => {
        console.log(err)
    })
}

exports.show = (req, res) => {
    const { toon_id, episode_id  } = req.params
    
    Episode.findOne({
        where: { toonId: toon_id, id: episode_id },
          
    }).then(posts=>
        res.send(posts)
    ).catch(err => {
        console.log(err)
    })
}

exports.show_img = (req, res) => {
    const { episode_id  } = req.params
    
    Page.findAll({
        where: { episodeId: episode_id },
          
    }).then(posts=>
        res.send(posts)
    ).catch(err => {
        console.log(err)
    })
}

exports.store = (req, res) => {
    const body = {
        title: req.body.title,
        image: req.body.image,
        toonId: req.params.toon_id,
        userId: req.params.user_id
    }
    Episode.create(body)
    .then(episode=> {
        res.send({
            message: "success", 
            episode
        })
    }).catch(err => {
        console.log(err)
    })
}

exports.update = (req, res) => {
    const{user_id, toon_id, episode_id} = req.params
    const body = req.body

    Episode.update(
        req.body,
        { where: {userId: user_id, toonId: toon_id, id: episode_id}}
        
    ).then(post=> {
        res.send({
            message: "success",
            body
        })
    }).catch(err => {
        console.log(err)
    })
}

exports.delete = (req, res) => {
    const{user_id, toon_id, episode_id} = req.params
    const body = req.body

    Episode.destroy(
        // req.body,
        { where: {userId: user_id, toonId: toon_id, id: episode_id}}
        
    ).then(post=> {
        res.send({
            message: "success",
            post
        })
    }).catch(err => {
        console.log(err)
    })
}