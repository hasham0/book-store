import { createContext, ReactNode, useContext } from "react";

type Props = { children: ReactNode };

const AuthContext = createContext({});

export default function AuthProvider({ children }: Props) {
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
}

// export auth hook
const useAuth = () => useContext(AuthContext);

export { useAuth };
