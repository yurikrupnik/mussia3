/**
 *
 * responseId
 * @param {object} req
 * @param {object} res
 * @return {function}
 */

const responseId = (req, res) => {
    const { id } = req.params;
    const responseBody = Array.isArray(id) ? id : [id];
    const statusCode = 202;
    return () => res.status(statusCode).json(responseBody);
};

/**
 *
 * handleError This is a description of the handleError function.
 * @param {object} res
 * @return {function}
 */
const handleError = (res) => {
    const statusCode = 500;
    return (err) => res.status(statusCode).send(err);
};

/**
 *
 * respondWithResult This is a description of the respondWithResult function.
 * @param {object} res
 * @return {function}
 */
const respondWithResult = (res) => (entity) => res.status(200).json(entity);

/**
 *
 * list This is a description of the list function.
 * @param {object} Model
 * @return {function}
 */
const list = (Model) => (req, res) => Model.find({})
    .then(respondWithResult(res))
    .catch(handleError(res));


/**
 * @function
 * list This is a description of the list function.
 * @param {object} Model
 * @return {function}
 */
const find = (Model) => (req, res) => Model.findOne({ _id: req.params.id })
    .then(respondWithResult(res))
    .catch(handleError(res));

const removeOne = (Model) => (req, res) => Model
    .findOneAndRemove({ _id: req.params.id })
    .then(responseId(req, res))
    .catch(handleError(res));

const create = (Model) => (req, res) => {
    const user = new Model(req.body);
    return user.save()
        .then(respondWithResult(res))
        .catch(handleError(res));
};

const update = (Model) => (req, res) => Model
    .findOneAndUpdate({
        _id: req.body._id // eslint-disable-line no-underscore-dangle
    }, req.body)
    .then(respondWithResult(res))
    .catch(handleError(res));

const schema = (Model) => (req, res) => res.json(Model.schema.tree);

export {
    list,
    find,
    removeOne,
    create,
    update,
    schema
};
