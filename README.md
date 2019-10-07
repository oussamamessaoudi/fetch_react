# fetch-react


Fetching data using React Component.


## Installation

Add dependency to your project.
```sh
npm install @react-items/fetch --save
```
    
## Quick Start

```jsx
import React from 'react';
import Fetch, {Error, FetchContext, Success} from '@react-items/fetch';

const defaultValues = {
    Loading: <div>Loading</div>,
    NotConnected: (response, status, httpStatus) => (
        <div>
            <div>NotConnected</div>
            <div>{JSON.stringify(response)}</div>
            <div>{status}</div>
            <div>{httpStatus}</div>
        </div>
    )
};

const App = () => (
    <FetchContext.Provider value={defaultValues}>
        <Fetch url={'https://jsonplaceholder.typicode.com/todos/1'}>
            <Success>
                {(response, status, httpStatus) =>
                    <div>
                        <div>Success</div>
                        <div>{JSON.stringify(response)}</div>
                        <div>{status}</div>
                        <div>{httpStatus}</div>
                    </div>
                }
            </Success>
            <Error>
                {(response, status, httpStatus) =>
                    <div>
                        <div>Error</div>
                        <div>{JSON.stringify(response)}</div>
                        <div>{status}</div>
                        <div>{httpStatus}</div>
                    </div>
                }
            </Error>
        </Fetch>
    </FetchContext.Provider>
);
```
# Author

Oussama MESSAOUDI - [@Oussama Messaoudi](https://github.com/oussamamessaoudi/)
