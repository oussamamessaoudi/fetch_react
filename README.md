# fetch-react


Featching data using React Component.


## Installation

Add dependency to your project.
```sh
npm install @react-items/fetch --save
```
    
## Quick Start

```jsx
import React from 'react';
import Fetch, {Initialize, Loading, Success, Error, NotConnected} from '@react-items/fetch';

const App = () => (
    <div>
            <Fetch url={'https://jsonplaceholder.typicode.com/todos/1'}>
                <Initialize>
                    <div>Loading</div>
                </Initialize>
                <Loading>
                    <div>Loading</div>
                </Loading>
                <Success>
                    {(response, status,  httpStatus)=>
                        <div>
                            <div>Success</div> 
                            <div>{JSON.stringify(response)}</div>
                            <div>{status}</div>
                            <div>{httpStatus}</div>
                        </div>
                    }
                </Success>
                <Error>
                    {(response, status,  httpStatus)=>
                        <div>
                            <div>Error</div>
                            <div>{JSON.stringify(response)}</div>
                            <div>{status}</div>
                            <div>{httpStatus}</div>
                        </div>
                    }
                </Error>
                <NotConnected>
                    {(response, status,  httpStatus)=>
                        <div>
                            <div>NotConnected</div>
                            <div>{JSON.stringify(response)}</div>
                            <div>{status}</div>
                            <div>{httpStatus}</div>
                        </div>
                    }
                </NotConnected>
            </Fetch>
    </div>
);
```
# Author

Oussama MESSAOUDI - [@Oussama Messaoudi](https://github.com/oussamamessaoudi/)
