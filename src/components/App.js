import React, { useState } from "react";
import Nav from "./Nav";
import HogsContainer from './HogsContainer'

import hogs from "../porkers_data";

function App() {

	const [sort, setSort] = useState('all')

	const [greased, setGreased] = useState(false)

	const handleGreased = () => setGreased( !greased )

	const handleChange = (e) => setSort( e.target.value )

	return (
		<div className="App">
			<Nav handleGreased={handleGreased} handleChange={handleChange} />
			<HogsContainer sort={sort} hogs={ hogs } greased={greased} />
		</div>
	);
}

export default App;
