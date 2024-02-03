// LoaderContext.js
import React, { createContext, useContext, useState } from "react";
import { ActivityIndicator, Dimensions, View } from "react-native";

// Create the context
const LoaderContext = createContext();

// Create a provider component
export const LoaderProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  const showLoader = () => {
    setIsLoading(true);
  };

  const hideLoader = () => {
    setIsLoading(false);
  };

  return (
    <LoaderContext.Provider value={{ isLoading, showLoader, hideLoader }}>
      {children}
      {isLoading && (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            width: Dimensions.get("window").width,
            height: Dimensions.get("window").height,
            backgroundColor: "rgba(255, 255, 255, 0.60)",
          }}
        >
          <ActivityIndicator color={"#3d6aee"} size={"large"} />
        </View>
      )}
    </LoaderContext.Provider>
  );
};

// Create a custom hook for using the context
export const useLoader = () => {
  const context = useContext(LoaderContext);
  if (!context) {
    throw new Error("useLoader must be used within a LoaderProvider");
  }
  return context;
};
