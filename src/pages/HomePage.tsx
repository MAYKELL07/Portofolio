import React from "react";
import { Box, Text, Image, Button, Container } from "@chakra-ui/react";
import { useScroll } from "@use-gesture/react";
import { motion } from "framer-motion";

const MotionButton = motion(Button);

const HomePage: React.FC = () => {
  const [opacity, setOpacity] = React.useState(1);

  // For scrolling animation
  const bind = useScroll(({ xy: [x, y] }) => {
    const newOpacity = 1 - y / 1000;
    setOpacity(Math.max(0, Math.min(1, newOpacity)));
  });

  const buttonVariants = {
    hover: { scale: 1.1, transition: { duration: 0.3 } },
    tap: { scale: 0.9, transition: { duration: 0.3 } },
  };

  return (
    <Container centerContent>
    <Box p={4} {...bind()}>
      <Image
        src="/workspaces/Portofolio/public/mainBanner.png"
        alt="Main Banner"
        w="100%"
        opacity={opacity}
      />

      <Box p={4}>
        {/* Small Box for Text */}
        <Box borderWidth="1px" borderRadius="lg" p={4}>
          <Text>Your Text Here</Text>
        </Box>

        {/* About Me Section */}
        <Box mt={4}>
          <Text fontSize="2xl" fontWeight="bold">
            About Me
          </Text>
          <Text>About me: Michaellie Ferrel Yoandike is a passionate Senior Game Developer based in Surabaya, Indonesia, with a diverse background in web development, API management, and online entrepreneurship. He has a strong track record of achieving impressive results in his various roles, such as reducing costs and increasing web traffic as a freelance web developer and API manager, and driving sales and website traffic as an online shop entrepreneur. Michaellie's true passion lies in game development, particularly in Roblox, where he has been involved in innovating game mechanics and creating in-game items. He also has experience in cloud hosting services and developing a WhatsApp bot. His educational background includes a high school diploma in computer science and a minor in mathematics, and he is proficient in various programming languages and tools. Michaellie is known for his leadership skills, problem-solving abilities, and analytical mindset. He is fluent in English and Indonesian and welcomes collaboration and discussions in the field of game development and beyond.</Text>
        </Box>

        {/* My Works Section */}
        <Box mt={4}>
          <Text fontSize="2xl" fontWeight="bold">
            My Works
          </Text>
          {/* Left blank for now */}
        </Box>

        {/* Bio Section */}
        <Box mt={4}>
          <Text fontSize="2xl" fontWeight="bold">
            Bio
          </Text>
          <Text>Your bio content here...</Text>
        </Box>

        {/* Contacts Section */}
        <Box mt={4}>
          <Text fontSize="2xl" fontWeight="bold">
            Contacts
          </Text>
          <MotionButton
            colorScheme="teal"
            size="md"
            mt={2}
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            as="a"
            href="whatsapp-link"
          >
            WhatsApp
          </MotionButton>
          {/* ... Repeat for other contacts: LinkedIn, Discord, Instagram, Twitter */}
        </Box>
      </Box>
    </Box>
    </Container>
  );
};

export default HomePage;
