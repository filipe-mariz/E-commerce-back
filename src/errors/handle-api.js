import Log from './log-api';

export default new class HandleApi {
    handleResponse() {
        return {
            code,
            skip_log: true
        }
    };

    handleException(res, error) {
        if (!error.skip_log) {
            Log.log500Action(error, res);
            return;
        }

        res.status(error.status || 500).send({
            status: 'error',
            code: error.code
        });
    };

    handleError(req, res, error) {
        if (!error.skip_log) {
			Log.log500Action(error, req, res);
			return;
		}

		res.status(error.status || 500).send({
			status: 'error',
			code: error.code
		});
    };
};
