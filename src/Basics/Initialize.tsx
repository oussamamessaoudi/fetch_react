import {createElement} from "react";
import BasicComponent from "./BasicComponent";

export function Initialize(props: any): JSX.Element {
    return createElement(BasicComponent, props);
}
