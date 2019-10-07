import React, {Children, cloneElement, useContext, useEffect, useState} from "react";
import Axios from "axios";
//#########################################################
import {IPropsFetch} from "./IPropsFetch";
import {HttpMethod} from "./HttpMethod";
import {FetchTypes} from "./FetchTypes";
import {ApiStatus} from "./ApiStatus";
import {IChildren} from "./IChildren";
import {IState} from "./IState";
import {FetchContext} from "./FetchContext";


const Fetch = ({url, children, data, fetchTypes = FetchTypes.AXIOS, headers, method = HttpMethod.GET, start = true}: IPropsFetch): JSX.Element => {
    const [state, setState] = useState<IState>({status: ApiStatus.INITIALIZE});
    const [childrenMap, setChildrenMap] = useState<IChildren>({});
    const contextFetch = useContext(FetchContext);

    useEffect(() => {
        if (!start) return;

        const source = Axios.CancelToken.source();
        setState({status: ApiStatus.LOADING});

        Axios({
            url: url,
            method: method,
            data: data,
            cancelToken: source.token
        })
            .then((response) => {
                // handle success
                setState({status: ApiStatus.SUCCESS, response: response.data, httpStatus: response.status});
            })
            .catch((thrown) => {
                // handle error
                if (!Axios.isCancel(thrown)) {
                    setState({
                        status: thrown.response ? ApiStatus.ERROR : ApiStatus.NOT_CONNECTED,
                        response: thrown.response,
                        httpStatus: thrown.response && thrown.response.status
                    });
                }
            });
        return () => {
            if (source) {
                source.cancel('Operation canceled by component unmounted.');
            }
        };
    }, [url, method, data, start]);

    useEffect(() => {
        setChildrenMap(Children.toArray(children).reduce((total: Object, currentValue: JSX.Element) => {
            return {...total, [currentValue.type.name]: currentValue}
        }, {}))
    }, [children]);


    const child = childrenMap[state.status];
    if (child)
        return cloneElement(child, state);
    const childContext = contextFetch[state.status];
    if (childContext)
        return typeof (childContext) === "function" ? childContext(state.response, state.status, state.httpStatus) : childContext;
    return null;
};

export default Fetch;
