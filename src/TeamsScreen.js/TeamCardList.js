import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import { motion } from 'framer-motion';
import LazyLoad from 'react-lazy-load';
import cardsData from './CardsData';
import TeamCard from './TeamCard';

const TeamCardList = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [visibleCards, setVisibleCards] = useState(4);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: -80 }}
      animate={{ opacity: isMounted ? 1 : 0, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 2, bounce: 2 }}
    >
      <Grid container spacing={2} justifyContent="center">
        {cardsData.map((card, index) => (
          <Grid item key={card.id}>
            <LazyLoad height={200} offset={700}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 20,
                  delay: index < visibleCards ? index * 0.1 : 0,
                }}
              >
                <TeamCard {...card} />
              </motion.div>
            </LazyLoad>
          </Grid>
        ))}
      </Grid>
    </motion.div>
  );
};

export default TeamCardList;
