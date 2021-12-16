class Log {
    log400 (req, res, next) {
        const log = {
			counter_id: null,
			request: getRequest(req),
			response: '[Error 404]',
			endpoint: req.method + ' ' + req.path,
			user_id: Utils.getUserId(app, req),
			company_id: Utils.getCompanyId(app, req)
		};

		console.log('---------- ERROR 404 ------------');
		console.log(log.endpoint);
		console.log('----------------------');

		res.status(404).send({
			message: 'Route Not found.',
			path: req.url
		});
    };

    log500 (req, res) {
        const log = {
			counter_id: null,
			request: getRequest(req),
			response: err.toString(),
			endpoint: req.method + ' ' + req.path,
			user_id: Utils.getUserId(app, req),
			company_id: Utils.getCompanyId(app, req)
		};

		console.log('---------- ERROR 500 ------------');
		console.log(log.endpoint);
		console.log(err.stack);
		console.log('----------------------');

		try {
			req.bugsnag.notify(new Error(err.stack));
		} catch (err) {
			console.log('--- Bugsnag send error: not loaded --- ');
		}

		res.status(500).send({ error: err });
    }
}

export default new Log();