const Course = require('../models/Course');
const { mongooseToObject } = require('../../util/mongoose');

class MeController {
    // [GET] /me/stored/courses
    storedCourses(req, res) {
        res.send('me');
    }
}

module.exports = new MeController();
