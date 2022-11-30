const url = 'https://rickandmortyapi.com/api/character';
const page = url + '/?page=19';

export const getContacts = () => {
  return fetch(page).then((res) => res.json());
};
