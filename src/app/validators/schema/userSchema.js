module.exports = () => {
    const yup = require('yup');

    const schema = {
        create: {
            body: yup.object({
                name: yup.string().required().label('Nome').max(255),
                phone: yup.string().required().label('Contato'),
                email: yup.string().required().email().label('E-mail'),
                password: yup.string().required(),
                isAdmin: yup.boolean().required().default(false)
            }).noUnknown()
        },

        find: {
            params: yup.object({
                id: yup.number().required()
            }).noUnknown()
        },

        update: {
            params: yup.object({
                id: yup.number().required()
            }).noUnknown(),

            body: yup.object({
                name: yup.string().label('Nome').max(255),
                phone: yup.string().label('Contato'),
                email: yup.string().email().label('E-mail'),
                password: yup.string()
            }).noUnknown()
        },

        delete: {
            params: yup.object({
                id: yup.number().required()
            })
        }
    };

    const schemaValidate = {
        create: schema.create,
        find: schema.find,
        update: schema.update,
        delete: schema.delete
    };

    return schemaValidate;
};
