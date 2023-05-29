import { Role } from '@prisma/client'
const userData = [
    {
      id: 1,
      name: 'Priya',
      email: 'priya.s@yavar.in',
      password: '12345678',
      role :Role.Admin,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      id: 2,
      name: 'user1',
      email: 'priya.s@yopmail.com',
      password: '12345678',
      role: Role.User,
      created_at: new Date(),
      updated_at: new Date()
    },
  ];
  
  export default userData;
  