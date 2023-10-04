import React from 'react';
import { Link } from "react-router-dom";
import {
  Box,
  Text,
  IconButton,
  Menu,
  MenuButton,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react';
import { HamburgerIcon, AddIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { ColorModeSwitcher } from '../ColorModeSwitcher'; // Import the ColorModeSwitcher component

export const Header = () => {
  return (
    <Box>
      <Box display="flex" alignItems="center" p={4} bg="teal.400">
        <AddIcon boxSize={6} color="white" />
        <Text
          fontSize="xl"
          color="white"
          ml={2}
          fontFamily="Chakra Petch"
        >
          Your Name
        </Text>
        <Box ml="auto">
          <ColorModeSwitcher />
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon />}
              variant="outline"
            />
            <Breadcrumb spacing="8px" separator={<ChevronRightIcon color="gray.500" />}>
              <BreadcrumbItem>
                <BreadcrumbLink as={Link} to="#">
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem>
                <BreadcrumbLink as={Link} to="#">
                  About
                </BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink as={Link} to="#">
                  Contact
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
          </Menu>
        </Box>
      </Box>
-    </Box>
  );
};
