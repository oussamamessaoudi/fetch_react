import {Children, cloneElement} from "react";
import {IBasicComponentProps} from "./IBasicComponentProps";


export const UseEhanceDefault = (props: IBasicComponentProps) => {
    let defaultComponent: JSX.Element | null = null;
    const childToOutput = Children.toArray(props.children).reduce((previousValue, child) => {
        const pattern = child.props.pattern;
        const name = child.type.name;
        defaultComponent = !defaultComponent && name === 'Default' && cloneElement(child, {
            response: props.response,
            httpStatus: props.httpStatus
        });
        if (name === 'Enhanced' && isPattern(props.httpStatus, pattern))
            return [...previousValue, cloneElement(child, {response: props.response, httpStatus: props.httpStatus})];
        return previousValue;
    }, []);
    if (childToOutput.length === 0) {
        if (defaultComponent)
            return defaultComponent;
        return cloneElement(Children.only(props.children), {response: props.response, httpStatus: props.httpStatus})
    }
    return childToOutput;
};

function isPattern(httpsStatus: number, pattern: string): boolean {
    return httpsStatus.toString() === pattern;
}
