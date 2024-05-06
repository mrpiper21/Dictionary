import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import LottieView from "lottie-react-native";
import { responsive } from "./src/helpers/Globalhelper";
import Stacknavigation from "./src/navigations/Stacknavigation";
import Splashnavigation from "./src/navigations/Splash";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

const App = () => {
  const queryClient = new QueryClient();

  const [route, setRoute] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  setTimeout(() => {
    setIsLoading(false);
    setRoute(true);
  }, 2000);

  return route ? (
    <QueryClientProvider client={queryClient}>
      <Stacknavigation />
    </QueryClientProvider>
  ) : (
    <Splashnavigation />
  );
};

export default App;
