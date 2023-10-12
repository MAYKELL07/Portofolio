import React from 'react';
import { Box, Text, Image, Grid, Link, Button } from '@chakra-ui/react';
import { useScroll } from '@use-gesture/react'; // For scrolling animation

const HomePage: React.FC = () => {
  // Mock data for top 4 GitHub repos. Replace with actual data.
  const topRepos = [
    { name: 'Repo 1', stars: 100, link: 'https://github.com/MAYKELL07/repo1' },
    // ... add more repos
  ];

  // Mock data for your games. Replace with actual data.
  const games = [
    { title: 'Game 1', link: 'https://game1-link.com' },
    // ... add more games
  ];

  // For scrolling animation
  const bind = useScroll(state => {
    // Add your scrolling animation logic here
  });

  return (
    <Box p={4} {...bind()}>
      <Image src="path-to-your-banner-image.jpg" alt="Main Banner" w="100%" />

      <Text fontSize="2xl" fontWeight="bold" mt={4}>
        Welcome to My Portfolio

        About me: Michaellie Ferrel Yoandike is a passionate Senior Game Developer based in Surabaya, Indonesia, with a diverse background in web development, API management, and online entrepreneurship. He has a strong track record of achieving impressive results in his various roles, such as reducing costs and increasing web traffic as a freelance web developer and API manager, and driving sales and website traffic as an online shop entrepreneur. Michaellie's true passion lies in game development, particularly in Roblox, where he has been involved in innovating game mechanics and creating in-game items. He also has experience in cloud hosting services and developing a WhatsApp bot. His educational background includes a high school diploma in computer science and a minor in mathematics, and he is proficient in various programming languages and tools. Michaellie is known for his leadership skills, problem-solving abilities, and analytical mindset. He is fluent in English and Indonesian and welcomes collaboration and discussions in the field of game development and beyond. You can reach him via email, phone, or LinkedIn.
      </Text>

      <Box mt={4}>
        <Text fontSize="xl" fontWeight="bold">Top GitHub Repositories</Text>
        <Grid templateColumns="repeat(4, 1fr)" gap={4}>
          {topRepos.map((repo, index) => (
            <Box key={index} p={4} borderWidth="1px" borderRadius="lg">
              <Link href={repo.link} isExternal>
                {repo.name} - {repo.stars} stars
              </Link>
            </Box>
          ))}
        </Grid>
      </Box>

      <Box mt={4}>
        <Text fontSize="xl" fontWeight="bold">My Game Projects</Text>
        <Grid templateColumns="repeat(4, 1fr)" gap={4}>
          {games.map((game, index) => (
            <Box key={index} p={4} borderWidth="1px" borderRadius="lg">
              <Link href={game.link} isExternal>
                {game.title}
              </Link>
            </Box>
          ))}
        </Grid>
      </Box>

      <Box mt={4}>
        <Text fontSize="xl" fontWeight="bold">Contact Me</Text>
        <Button colorScheme="teal" size="md">
          Send me an email
        </Button>
      </Box>
    </Box>
  );
};

export default HomePage;
