const models = require('../models')
const User =models.user
var stream = require('stream')
// const multer = require('multer')
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, 'uploads/')
//     },
//     filename: function (req, file, cb) {
//         //console.log(req)
//       cb(null, file.fieldname + '-' + req.params.user_id + '.png')
//     }
//   })
// const upload = multer({ storage: storage })

exports.upload = (req, res, next) => {
    try {
        res.send(req.file);
        //console.log(req.file.buffer)
    }
    catch(err) {
        res.send(400);
    }
    const body = {
        image: req.file.buffer
    }
    User.update(
        body,
        { where: {id: req.params.user_id, }}

    ).then(post=> {
        res.send({
            message: "success",
            post
        })
    }).catch(err => {
        console.log(err)
    })
}

exports.download = (req, res ) => {
    User.findOne({
        where: {id: req.params.user_id }
    }).then(file => {
        var fileContents = Buffer.from(file.image, "base64");
        var readStream = new stream.PassThrough();
        readStream.end(fileContents);

        res.set('Content-disposition','attachment; filename=' + file.name+'.png');
        res.set('Content-Type', file.type);

        readStream.pipe(res);
    }).catch(err => {
        console.log(err);
        res.json({msg: 'Error', detail: err});
      });
}
