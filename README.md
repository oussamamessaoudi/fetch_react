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
import Fetch, {Loading, Success, Error, Initialize} from '@react-items/fetch';

const App = () => (
    <div>
        <Fetch url={'https://jsonplaceholder.typicode.com/todos/1'}>
            <Initialize>
                <div>"Initialize"</div>
            </Initialize>

            <Loading>
                <div>"Loading"</div>
            </Loading>

            <Success>
                <div>"Success"</div>
            </Success>

            <Error>
                <div>"Error"</div>
            </Error>

        </Fetch>
    </div>
);
```
# Author

Oussama MESSAOUDI - [@Oussama Messaoudi](https://github.com/oussamamessaoudi/)
