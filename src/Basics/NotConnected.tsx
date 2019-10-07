import React, {createElement} from "react";
import BasicComponent from "./BasicComponent";

export function NotConnected(props: any): JSX.Element {
    return createElement(BasicComponent, props);
}
