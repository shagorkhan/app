// LoaderContext.js
import React, { createContext, useContext, useState } from "react";


// Create the context
const AuthContext = createContext();

// Create a provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(true);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
      
    </AuthContext.Provider>
  );
};

// Create a custom hook for using the context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useLoader must be used within a AuthProvider");
  }
  return context;
};
