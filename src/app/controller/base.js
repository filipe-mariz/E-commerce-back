class HandleAPI {
   success(res, response) {
        return res.status(200).json({
            code: 200,
            ...response
        })
    };

    error(res, error) {
        return res.error(400).json({
            code: 400,
            ...error
        })
    }
};

export default HandleAPI;