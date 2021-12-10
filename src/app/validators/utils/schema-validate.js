import { isUndefined, pick } from 'lodash';

export default new class SchemaValidate {
	getMessage (error) {
		const field = error.params.label || error.params.path;
		const errorType = error.type;
        const EXPECTED_TYPE_NAME = {
            number: 'Número',
            string: 'texto'
        };
		const errorMessages = {
			typeError: (field, value, expectedType) => `O valor ${value} é inválido para o campo ${field}. Você deve informar um ${EXPECTED_TYPE_NAME[expectedType]}.`,
			required: field => `O campo ${field} é obrigatório.`,
			email: () => 'E-mail inválido',
			invalidFormat: (field, value) => `O valor ${value} é inválido para o campo ${field}.`,
			invalidDateRange: () => 'A data inicial não pode ser após a data final.',
			length: (field, value, expectedType) => `O campo ${field} precisa ter ${expectedType} caracteres.`,
			oneOf: () => 'Os campos informados precisam ser iguais.',
			min: (field, value, expectedType) => `O campo ${field} precisa ter no mínimo ${expectedType} caracteres.`,
			max: (field, value, expectedType) => `O campo ${field} só pode ter no máximo ${expectedType} caracteres.`,
			invalidExtension: () => 'Arquivo com extensão inválida.'
		};

		return errorMessages[errorType]
			? errorMessages[errorType](field, error.params.originalValue, error.params[error.type] || error.params.type)
			: 'Houve um erro, tente novamente em breve.';
	};

    validate (schema) {
        return (req, res, next) => {
            const { error, results } = isValid(schema, req);

            if (error) {
                return res.status(400).json({
                    status: 'error',
                    typeError: 'VALIDATE_ERROR',
                    message: getMessage(error)
                })
            }

            req.data = pick(results.data, value => !isUndefined(value));
			req.filter = pick(results.filter, value => !isUndefined(value));

            return next
        }
    }

	isValid (schemas, req) {
		try {
			const results = {
				filter: {},
				data: {}
			};

			Object.keys(schemas).forEach(key => {
				const schema = schemas[key];
				const result = schema.cast(schema.validateSync(req[key]));

				if (key === 'body') {
					results.data = Object.assign(results.data, result);
					return;
				}

				results.filter = Object.assign(results.filter, result);
			});

			return { results };
		} catch (error) {
			if (process.env.NODE_ENV !== 'production') {
				console.log('---- VALIDATION ERROR ----');
				console.log(error.stack);
				console.log('---- VALIDATION ERROR ----');
			}

			return { error };
		}
	};
};