import { useEffect, useState } from 'react';

export const useTypedTitle = () => {
  const [currentTitle, setCurrentTittle] = useState('');

  useEffect(() => {});

  return {
    title: 'Welcome to my portfolio',
    subtitle: 'I am a software engineer',
  };
};
