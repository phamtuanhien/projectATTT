import React, { useState } from "react";
export const UserContext = React.createContext();

export function UserProvider(props) {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider
      value={{
        setUser: setUser,
        user: user,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}
