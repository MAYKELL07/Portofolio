import React, { lazy, Suspense } from "react";
import {
  ChakraProvider,
  Box,
  theme,
  Spinner,
} from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";

const HomePage = lazy(() => import('./pages/HomePage'));
const WorksPage = lazy(() => import('./pages/Works'));

export const App = () => (
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <Header />
      <Box textAlign="center" fontSize="xl">
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/works" element={<WorksPage/>} />
          </Routes>
        </Suspense>
      </Box>
    </BrowserRouter>
  </ChakraProvider>
);