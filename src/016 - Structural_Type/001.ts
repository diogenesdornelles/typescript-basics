type VerifyUserFn = (user: User, sentValue: User) => boolean;

type User = {
  username: string;
  email?: string;
  password: string;
};

const verifyUserFn: VerifyUserFn = (user, sentValue) => {
  if ((user.email && user.email === sentValue.email) || user.username === sentValue.username)
    return user.password === sentValue.password;
  return false;
};

const user: User = {
  username: 'Tato',
  password: '12345',
};

const values: User = {
  username: 'Tato',
  password: '12345',
};

console.log(verifyUserFn(user, values));
