'use client';

import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';

type Props = {
  children: React.ReactNode;
};

export const Providers: React.FC<Props> = ({ children }) => {
  return <ChakraProvider>{children}</ChakraProvider>;
};
