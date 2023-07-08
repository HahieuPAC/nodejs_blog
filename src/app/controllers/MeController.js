const Course = require('../models/Course');
const {
    mongooseToObject,
    multipleMongooseToObject,
} = require('../../util/mongoose');

class MeController {
    // [GET] /me/stored/courses
    storedCourses(req, res, next) {
        Course.find({})
            .then((courses) =>
                res.render(
                    '../../resources/view/me/stored-courses.handlebars',
                    {
                        courses: multipleMongooseToObject(courses),
                    },
                ),
            )
            .catch(next);
    }
}

module.exports = new MeController();
