import React, { lazy, Suspense } from "react";
import {
  ChakraProvider,
  Box,
  theme,
  Spinner,
} from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header } from "./components/Header";

const HomePage = lazy(() => import('./pages/HomePage'));

export const App = () => (
  <ChakraProvider theme={theme}>
    <Router>
      <Header />
      <Box textAlign="center" fontSize="xl">
        <Suspense fallback={<Spinner />}>
          <Switch>
            <Route path="/" exact component={HomePage} />
          </Switch>
        </Suspense>
      </Box>
    </Router>
  </ChakraProvider>
);
