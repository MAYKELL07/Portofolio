import React from 'react';
import { Box, Text, Grid, Link } from '@chakra-ui/react';

// Mock data for your games. Replace this with actual data.
const games = [
  {
    title: "Game 1",
    link: "https://black-corporation.itch.io/the-peepholes-chronicles-weird-john"
  },
  // ... add more games
];

const GameProjectsPage: React.FC = () => {
  return (
    <Box p={4}>
      <Text fontSize="2xl" fontWeight="bold">My Game Projects</Text>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        {games.map((game, index) => (
          <Box key={index} p={4} borderWidth="1px" borderRadius="lg">
            <Link href={game.link} isExternal>
              {game.title}
            </Link>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default GameProjectsPage;
