const Course = require('../models/Course');
const { mongooseToObject } = require('../../util/mongoose');

class CourseController {
    // [GET] /course/:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .lean()
            .then((course) =>
                res.render('courses/show', {
                    course: course,
                }),
            )
            .catch(next);
    }

    // [GET] /course/create
    create(req, res, next) {
        res.render('../../resources/view/courses/create.handlebars');
    }

    // [POST] /course/store
    store(req, res, next) {
        const formData = req.body;
        formData.image = `https://i.ytimg.com/vi/${req.body.videoID}/hqdefault.jpg`;
        const course = new Course(req.body);
        course
            .save()
            .then(() => res.redirect('/'))
            .catch((error) => {});
    }
}

module.exports = new CourseController();
