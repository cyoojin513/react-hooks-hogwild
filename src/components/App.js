import React, {useState} from "react";
import Nav from "./Nav";
import Hogs from "./Hogs"
import hogs from "../porkers_data";
import SortHogs from "./SortHogs";

function App() {
	const [greased, setGreased] = useState(false)
	const [name, setName] = useState("")
	const [hogData, setHogData] = useState(hogs)


	function toggleGreased() {
		setGreased(!greased)
	}

	const filteredHogs = hogData.filter((hogs) => {
		if(greased === true){return hogs.greased === true
		} else { return true }
	})


	function handleSort(e){
		if (e.target.checked){
			const sortedHogs = [...hogData].sort((a, b) => {
				if (a.name < b.name) return -1;
				if (a.name > b.name) return 1;
				return 0; 
				})
			setHogData(sortedHogs)
		}
		else setHogData(hogs)
	}



	
	return (
		<div className="App">
			<Nav />
			<div>
				{/* <input onChange={ toggleName } placeholder="name"></input> */}
				{/* <input onChange={ toggleByWeight } placeholder="weight"></input> */}
			</div>
			<SortHogs handleSort={ handleSort }/>
			<div>
				<button onClick={ toggleGreased }>toggle greased</button>
			</div>
			<div className="ui grid container">
				{filteredHogs.map((hogs) => 
					<Hogs 
						key={ hogs.name } name={ hogs.name } image={ hogs.image }
						specialty={ hogs.specialty }
						weight={ hogs.weight }
						medal={ hogs["highest medal achieved"] }
					/>)}
			</div>
		</div>
	);
}

export default App;
