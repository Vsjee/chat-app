import { RefObject } from 'react';

export const scrollToMyRef = (chatContainer: RefObject<HTMLDivElement>) => {
  const sH = chatContainer.current?.scrollHeight !== undefined ? chatContainer.current?.scrollHeight : 0;
  const cH = chatContainer.current?.clientHeight !== undefined ? chatContainer.current?.clientHeight : 0;
  const scroll = sH - cH;
  chatContainer.current?.scrollTo(0, scroll);
};
