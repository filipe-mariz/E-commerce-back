import bcrypt from 'bcryptjs';

export default {
    checkPassword = (password, hash) => {
        return bcrypt.compare(password, hash);
    }
}