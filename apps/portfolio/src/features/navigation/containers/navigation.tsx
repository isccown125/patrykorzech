'use client';

import React, { useState } from 'react';
import { NavigationContainer } from '../components/navigation-container';
import { Button, FormControl, Switch } from '@chakra-ui/react';
import { MdWbSunny, MdDarkMode } from 'react-icons/md';
export const Navigation = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <NavigationContainer>
      <div
        style={{
          marginLeft: 'auto',
          display: 'flex',
          gap: '1rem',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              fontSize: '1.5rem',
              color: darkMode ? '#101010' : 'orange',
              transition: 'color 0.3s ease',
              marginRight: '0.5rem',
            }}
          >
            {darkMode ? <MdDarkMode /> : <MdWbSunny />}
          </div>
          <Switch
            sx={{}}
            size={'lg'}
            onChange={() => setDarkMode(!darkMode)}
            colorScheme="blackAlpha"
            isChecked={darkMode}
            style={{
              margin: 0,
            }}
          />
        </div>

        <Button colorScheme="blackAlpha" size={'lg'}>
          O mnie
        </Button>
        <Button colorScheme="blackAlpha" size={'lg'}>
          Doświadczenie
        </Button>
        <Button colorScheme="blackAlpha" size={'lg'}>
          Kontakt
        </Button>
      </div>
    </NavigationContainer>
  );
};
