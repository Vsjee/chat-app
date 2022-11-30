const baseUrl = 'https://rickandmortyapi.com/api/';
const character = baseUrl + '/character';

export const getRick = () => {
  return fetch(character + '/1').then((res) => res.json());
};
