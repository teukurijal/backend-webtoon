const express = require('express')
const bodyParser = require('body-parser')
require('express-group-routes')

const app = express()
const port = 3000

const AuthController = require('./controllers/auth')
const UserController = require('./controllers/users')
const WebtoonController = require('./controllers/webtoons')
const EpisodeController = require('./controllers/episodes')
const PageController = require('./controllers/pages')
const BannerController = require('./controllers/banners')
const { authenticated } = require('./middleware')

app.use(bodyParser.json())

app.group("/api/v1", (router) => {

    router.post('/login', AuthController.login)
    router.get('/banners', BannerController.show )
    router.put('/user/:user_id/upload', UserController.update)
    
    router.post('/register', 
    UserController.store)
    
    router.get('/user/:user_id/webtoons', authenticated, UserController.show)
    router.post('/user/:user_id/webtoon', authenticated, WebtoonController.store)
    router.get('/user/:user_id/webtoon/:toon_id/episodes', WebtoonController.show_user)
    router.delete('/user/:user_id/webtoon/:toon_id/', authenticated, WebtoonController.delete)
    router.put('/user/:user_id/webtoon/:toon_id/', authenticated, WebtoonController.update)
    router.post('/user/:user_id/webtoon/:toon_id/episode', authenticated, EpisodeController.store)
    router.put('/user/:user_id/webtoon/:toon_id/episode/:episode_id', authenticated, EpisodeController.update)
    router.delete('/user/:user_id/webtoon/:toon_id/episode/:episode_id', authenticated, EpisodeController.delete)
    router.get('/user/:user_id/webtoon/:toon_id/episode/:episode_id/images', authenticated, PageController.show)
    router.post('/user/:user_id/webtoon/:toon_id/episode/:episode_id/image', authenticated, PageController.store)
    router.delete('/user/:user_id/webtoon/:toon_id/episode/:episode_id/image/:image_id', authenticated, PageController.delete)

    router.get('/webtoons', WebtoonController.index)
    router.get('/webtoon/:toon_id', WebtoonController.show)
    router.get('/webtoon/:toon_id/episodes', EpisodeController.index)
    router.get('/webtoon/:toon_id/episode/:episode_id', EpisodeController.show)

})

app.listen(port, () => console.log(`Listening on port ${port}!`))