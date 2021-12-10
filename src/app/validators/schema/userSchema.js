import * as yup from 'yup';

export default new class UserSchema {
    create() {
        return {
            body: yup.object({
                name: yup.string().required().label('Nome').max(255),
                phone: yup.string().required().label('Contato'),
                email: yup.string().required().email().label('E-mail'),
                password: yup.string().required(),
                isAdmin: yup.boolean().required().default(false)
            }).noUnknown()
        }
    }

    find() {
        return {
            params: yup.object({
                id: yup.number().required()
            }).noUnknown()
        };
    };

    update() {
        return {
            params: yup.object({
                id: yup.number().required()
            }).noUnknown(),
            body: yup.object({
                name: yup.string().label('Nome').max(255),
                phone: yup.string().label('Contato'),
                email: yup.string().email().label('E-mail'),
                password: yup.string()
            }).noUnknown()
        };
    };
};
