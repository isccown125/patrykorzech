'use client';

import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../theme';

type Props = {
  children: React.ReactNode;
};

export const Providers: React.FC<Props> = ({ children }) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};
