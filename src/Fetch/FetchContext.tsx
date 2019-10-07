import {createContext} from "react";


interface IContext {
    Initialize?: JSX.Element
    Loading?: JSX.Element,
    Success?: JSX.Element,
    Error?: JSX.Element,
    NotConnected?: JSX.Element
}

export const FetchContext = createContext<IContext>({});
