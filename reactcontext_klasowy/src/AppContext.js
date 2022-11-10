import { createContext } from "react";

export const defaultObject = {
    isUserLogged: false,
    toggleLoggedState: () => console.log('Domyślny provider')
}

export const AppContext = createContext(defaultObject);

