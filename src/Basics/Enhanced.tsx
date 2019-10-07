import {createElement} from "react";
import BasicComponent from "./BasicComponent";


export function Enhanced(props: any) {
    return createElement(BasicComponent, props);
}
