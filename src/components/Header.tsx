import React from 'react';
import {
  Box,
  Text,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react';
import { HamburgerIcon, AddIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { ColorModeSwitcher } from '../ColorModeSwitcher';

export const Header = () => {
  return (
    <Box>
      <Box display="flex" alignItems="center" p={4} bg="teal.400">
        <AddIcon boxSize={6} color="white" />
        <Text fontSize="xl" color="white" ml={2} fontFamily="Chakra Petch">
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
            <MenuList>
              <center>
                <Breadcrumb spacing="10px" separator={<ChevronRightIcon color="gray.500" />}>
                <BreadcrumbItem isCurrentPage>
                  <BreadcrumbLink href="#">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">About</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Contact</BreadcrumbLink>
                </BreadcrumbItem>
              </Breadcrumb>
              </center>
              <MenuItem>Settings</MenuItem>
              <MenuItem>Logout</MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Box>
    </Box>
  );
};
