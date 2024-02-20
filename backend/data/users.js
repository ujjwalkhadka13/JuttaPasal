import bcrypt from 'bcryptjs';

const users = [
    {
        name: 'Admin User',
        email: 'admin@email.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true,
    },
    {
        
        name: 'khadka',
        email: 'khadka@email.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: false,
    },
    {
    name: 'roo',
        email: 'roo@email.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true,
    },
];
export default users;
