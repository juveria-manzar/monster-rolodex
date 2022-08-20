import { useEffect } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";
import { useState } from "react";


const App = ()=>{
	console.log('render')
	const [searchField, setSearchField] = useState('');
	const [monsters, setMonsters] = useState([]);
	const [filteredMonsters, setFilterMonsters] = useState(monsters);
	console.log({searchField});

	const onSearchChange = (event)=>{
		const searchFieldString = event.target.value.toLocaleLowerCase();
		setSearchField(searchFieldString);
	}

	useEffect(()=>{
		fetch('https://jsonplaceholder.typicode.com/users')
		.then((response)=> response.json())
		.then((users)=>{
			setMonsters(users);
		})
	},[])

	useEffect(()=>{
			const newFilteredMonsters = monsters.filter((monster) => {
			return monster.name.toLowerCase().includes(searchField);
		})
		setFilterMonsters(newFilteredMonsters);
	},[monsters, searchField]);

	return (
		<div className='App'>
			<h1 className="app-title">Monsters Rolodex</h1>
			<SearchBox onChangeHandler={onSearchChange} placeholder="search monsters" className="search-box"/>
			<CardList monsters={filteredMonsters}/>
		</div>
	);
}

export default App;
