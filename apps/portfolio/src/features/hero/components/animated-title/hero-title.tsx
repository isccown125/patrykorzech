'use client';

import React, { useEffect, useRef, useState } from 'react';
import styles from './styles.module.css';
import { TypedTitles } from '../../core/typed-title';
import { useInView } from 'framer-motion';

type Title = {
  title: string;
  color: string;
};

const titles: Title[] = [
  { title: 'fullstack developer', color: 'yellow' },
  { title: 'frontend developer', color: 'green' },
  { title: 'backend developer', color: 'blue' },
];

export const HeroTitle = () => {
  const ref = useRef<TypedTitles | null>(null);
  const [title, setTitle] = useState<Title>({
    title: titles[0].title,
    color: titles[0].color,
  });

  const getTypedTitles = () => {
    if (!ref.current) {
      return new TypedTitles(titles.map((title) => title.title));
    }
    return ref.current;
  };

  useEffect(() => {
    const typedTitles = getTypedTitles();

    console.log('start');
    typedTitles.start((title) => {
      console.log(title);
      setTitle(() => ({
        title,
        color: titles[typedTitles.titleIndex].color,
      }));
    });
  }, []);

  return (
    <div className={styles['hero-title__wrapper']}>
      <h1 className={styles['hero-title']}>
        Hi, i am{' '}
        <span
          style={{
            color: `${titles[getTypedTitles().titleIndex].color}`,
          }}
        >
          {title.title.split('').map((letter, index) => (
            <span
              key={`hero-letter-${letter}-${index}`}
              className={styles['visible']}
            >
              {letter}
            </span>
          ))}
        </span>
        <span className={styles['animate-cursor']}></span>
      </h1>
    </div>
  );
};
