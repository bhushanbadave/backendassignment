const handler = app => {

    app.all('*', (req, res) => res.status(200).json('Not Found'))
}

module.exports.handler = handler;
