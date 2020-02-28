import User from '../entities/user';

export const createTestAuthenticatedUser = () =>
  new User({
    uid: 'zzzRTzMCjldkNrrU1JExTfAwaXj1',
    displayName: 'John Doe',
    photoUrl: 'https://imoblar.com/site/img/demo/profile.jpg',
    email: 'johndoe@email.com',
    isNewUser: false,
  });
