const db = require('../models');
const redisClient = require('../server/redis');

module.exports = {
  get(req, res, next) {
    /*
      method: GET
      route: '/api/photos/:id'
    */
    const roomId = req.params.id;
    redisClient.get(roomId, (err, data) => {
      if (err) {
        throw err;
      }

      if (data !== null) {
        res.send(JSON.parse(data));
      } else {
        db.getPhoto(roomId, (data) => {
          redisClient.set(roomId, JSON.stringify(data.rows));
          res.status(200).send(data.rows);
        });
      }
    });
  },
  post(req, res, next) {
    /*
      method: POST
      route: '/api/photos/:id'
    */
    // TODO: Add better error handling and data cleaning
    // const newPhoto = new db.Photo();
    // newPhoto.room_id = req.params.id;
    // newPhoto.description = req.params.description;
    // newPhoto.verified = req.params.verified;
    // newPhoto.photo_url = req.params.photo_url;
    // newPhoto
    //   .save()
    //   .then(() => {
    //     res.status(201).send();
    //   })
    //   .catch(() => {
    //     res.status(500).send();
    //   });
  },
  put(req, res, next) {
    /*
      method: PUT
      route: '/api/photos/:id'
    */
    // db.Photo().findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, todo) => {
    //   if (err) return res.status(405).send(err);
    //   return res.send(todo);
    // });
  },
  delete(req, res, next) {
    /*
      method: DELETE
      route: '/api/photos/:id'
    */
    //   db.Photo().findByIdAndRemove(req.params.id, (err, photo) => {
    //     if (err) return res.status(500).send(err);
    //     const response = {
    //       message: 'Photo successfully deleted',
    //       id: photo.id,
    //     };
    //     return res.status(200).send(response);
    //   });
  },
};
