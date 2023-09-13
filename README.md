# useLastValue
**A react hook for managing state's especially numeric ID's.**

### Introduction
If you are generally working with numeric ID's or something else using with state's, a time you may need to declare the past value of any state to a variable. In this time, *useLastValue* will do what you needed. It work's with localStorage of the browser.


#### Installation 📦

    npm i uselastvalue
or

    yarn add uselastvalue
    
#### Usage 👨🏻‍💻

    import { useLastValue } from 'useLastValue';
    import React, { useState } from 'react';
    
	export default function App() {
		
		const [id, setId] = useState(0); 
		const lastValue   = useLastValue(id); // Hook will set the old value of state
		
		return (
			<div>
				<p>{id}</p> {/* If id is set to 10 and then 11, lastValue will take the old value. (10) */}
				<p>{lastValue}</p> {/* If id was 10 and then set to 11, lastValue will be 10.*/}
			</div>
		)
	}

   Project is open to development, if you want to support, just create issues or pull-		requests. 

#### To-Do ☑️

 1. [ ] Better documentation
 2. [ ] Better type-safe
 3. [ ] More hooks 
 4. [ ] Better usage

---
### Author: emrebakkal
### License: MIT
