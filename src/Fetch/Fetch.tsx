import React, {Children, useEffect, useState} from "react";
import Axios from "axios";
//#########################################################
import {IPropsFetch} from "./IPropsFetch";
import {HttpMethod} from "./HttpMethod";
import {FetchTypes} from "./FetchTypes";
import {ApiStatus} from "./ApiStatus";
import {IChildren} from "./IChildren";
import {IState} from "./IState";


const Fetch = ({url, children, data, fetchTypes = FetchTypes.AXIOS, headers, method = HttpMethod.GET, start = true}: IPropsFetch): JSX.Element => {
    const [state, setState] = useState<IState>({status: ApiStatus.INITIALIZE});
    const [childrenMap, setChildrenMap] = useState<IChildren>({});

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
                        status: ApiStatus.ERROR,
                        response: thrown.response,
                        httpStatus: thrown.response!!.status
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
        console.log("children");
        setChildrenMap(Children.toArray(children).reduce((total: Object, currentValue: JSX.Element) => {
            return {...total, [currentValue.type.name]: currentValue}
        }, {}))
    }, [children]);


    const child = childrenMap[state.status];
    if (child)
        return child;
    return null;
};

export default Fetch;
