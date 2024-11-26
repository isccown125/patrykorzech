'use client';
import React, { useRef } from 'react';
import { motion, Variants } from 'framer-motion';
import { clsx } from 'clsx';
import { Button } from '@chakra-ui/react';

type ExperienceSectionProps = {};

const animation: Variants = {
  row: {
    x: 0,
    y: 0,
    transition: {
      duration: 0.5,
      type: 'spring',
      ease: 'easeInOut',
    },
  },
  column: {
    x: 0,
    y: 0,
    transition: {
      duration: 0.5,
      type: 'spring',
      ease: 'easeInOut',
    },
  },
};

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({}) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [toggle, setToggle] = React.useState(true);

  return (
    <>
      <motion.div
        layout
        transition={{
          duration: 0.5,
          type: 'spring',
          ease: 'easeInOut',
        }}
        ref={scrollRef}
        style={{
          width: '100%',
          height: '300vh',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <button
          className={'button-box'}
          onClick={() => setToggle((prev) => !prev)}
        >
          toggle
        </button>
        <motion.div
          className={clsx('container-box', {
            column: toggle,
            row: !toggle,
          })}
        >
          <motion.div
            className={'box'}
            layout
            animate={toggle ? 'row' : 'column'}
            variants={animation}
          ></motion.div>
          <motion.div
            className={'box'}
            layout
            animate={toggle ? 'row' : 'column'}
            variants={animation}
          ></motion.div>
          <motion.div
            className={'box'}
            layout
            animate={toggle ? 'row' : 'column'}
            variants={animation}
          ></motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};
