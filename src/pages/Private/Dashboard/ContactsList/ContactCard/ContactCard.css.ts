import styled from 'styled-components';

const ContactCardWrapper = styled.button`
  cursor: pointer;
  display: flex;
  border: none;
  background: none;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0;
  padding: 0.5rem 5%;
  border-radius: 55px;
  box-shadow: rgba(33, 35, 38, 0.2) 0px 10px 10px -10px;
  transition: 0.3s ease-in;

  &:hover {
    background-color: #daabf7;
  }

  .picture {
    display: inline-flex;
    align-items: center;
    width: 30%;

    img {
      width: 50%;
      border-radius: 50px;
    }
  }

  .btn {
    cursor: pointer;
    padding: 0;
    display: grid;
    place-items: center;
    border-radius: 50px;
    border: none;

    .btn__icon {
      width: 30px;
      height: 30px;

      &:hover {
        color: #9c6bba;
      }
    }
  }
`;

export default ContactCardWrapper;
