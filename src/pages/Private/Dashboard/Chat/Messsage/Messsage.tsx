import MesssageWrapper from './MesssageWrapper.css';

interface Props {
  msg: string;
}

function Messsage({ msg }: Props) {
  return <MesssageWrapper>{msg}</MesssageWrapper>;
}

export default Messsage;
