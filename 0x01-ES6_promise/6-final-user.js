import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise
    .allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((result) => (
      result.map((s) => ({
        status: s.status,
        value: s.status === 'fulfilled' ? s.value : String(s.reason),
      }))
    ));
}
