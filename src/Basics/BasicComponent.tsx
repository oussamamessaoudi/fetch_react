export default function BasicComponent({children, status, response, httpStatus}: any): JSX.Element {
    if (typeof (children) === 'function')
        return children(response, status, httpStatus);
    return children;
}
