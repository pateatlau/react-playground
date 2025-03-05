import { createContext, useState } from 'react';

type User = {
  name: string;
  password: string;
};

interface UserContext {
  user: User;
  setName: (name: string) => void;
  setPassword: (password: string) => void;
  resetUser: () => void;
}

const initialUser: User = {
  name: '',
  password: '',
};

const UserContext = createContext<UserContext>({
  user: initialUser,
  setName: () => {},
  setPassword: () => {},
  resetUser: () => {},
});

interface Props {
  children: React.ReactNode;
}

const UserContextProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState<User>(initialUser);

  const setName = (name: string) =>
    setUser((prev) => ({ ...prev, name: name }));
  const setPassword = (password: string) =>
    setUser((prev) => ({ ...prev, password: password }));
  const resetUser = () => setUser(initialUser);

  const contextValue = {
    user,
    setName,
    setPassword,
    resetUser,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

export default UserContextProvider;
export { UserContext };
