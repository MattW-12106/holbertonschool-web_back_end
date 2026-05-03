import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then(([photo, user]) => {
      console.log(`${photo} ${user}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}