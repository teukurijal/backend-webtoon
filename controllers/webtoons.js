const models = require('../models')
const Webtoon = models.webtoon
const Sequelize = require('sequelize')
const Op = Sequelize.Op;
const Episode = models.episode

exports.index = (req, res) => {
    const favorite = req.query.is_favorite
    const title = req.query.title
    if (favorite == "true"){
        Webtoon.findAll({
            where: { isFavorite: true }
        }).then (post => res.send(post))
    } else if (favorite == "false"){
        Webtoon.findAll({
            where: { isFavorite: false }
        }).then(post => res.send(post))
    } else if (title){
        Webtoon.findAll({
            where  : {
                title : { [Op.like] : `%${req.query.title}%` }
              }
        }).then(post => res.send(post))
    } else {
        Webtoon.findAll({

        }).then(post => res.send(post))
    }
}


exports.show = (req, res) => {
    const { toon_id } = req.params
    Webtoon.findOne({
        where: { id: toon_id },
        //   include: [{
        //     model: User,
        //     as: "userid"
        // }]
    }).then(posts=>
        res.send(posts)
    ).catch(err => {
        console.log(err)
    })
}

exports.store = (req, res) => {
    const body = {
        title: req.body.title,
        genre: req.body.genre,
        isFavorite: req.body.isFavorite,
        image: req.body.image,
        createdBy: req.params.user_id
    }
    Webtoon.create(body)
    .then(webtoon=> {
        res.send({
            message: "success", 
            webtoon
        })
    }).catch(err => {
        console.log(err)
    })
}


exports.show_user = (req, res) => {
    const{ toon_id, user_id }= req.params
    console.log( toon_id )
    Episode.findAll({
        where: { toonId: toon_id, userId: user_id },
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

exports.delete = (req, res) => {
    const {user_id, toon_id} =req.params
    Webtoon.destroy({
        where: {createdBy: user_id, id: toon_id}
    }).then(post=> {
        res.send({
            message: "success",
            post
        })
    }).catch(err => {
        console.log(err)
    })
}

exports.update = (req, res) => {
    const{user_id, toon_id} = req.params
    Webtoon.update(
        req.body,
        { where: {createdBy: user_id, id: toon_id}}

    ).then(post=> {
        res.send({
            message: "success",
            post
        })
    }).catch(err => {
        console.log(err)
    })
}