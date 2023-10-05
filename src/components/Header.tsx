import React from "react";
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
} from "@chakra-ui/react";
import { HamburgerIcon, AddIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { ColorModeSwitcher } from "../assets/ColorModeSwitcher";

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
              <Breadcrumb
                spacing="10px"
                separator={<ChevronRightIcon color="gray.500" />}
              >
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/works">Works</BreadcrumbLink>
                </BreadcrumbItem>
              </Breadcrumb>
              <MenuItem>Settings</MenuItem>
              <MenuItem>Logout</MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Box>
    </Box>
  );
};
