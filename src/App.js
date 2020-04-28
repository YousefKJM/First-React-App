import React from "react";
// import logo from "./logo.svg";
// import "./App.css";

class ContactList extends React.Component {
	render() {
		// const people = [
		// 	{ name: "Yousef" },
		// 	{ name: "Khalid" },
		// 	{ name: "Majeed" },
		// ];
		const people = this.props.contacts;

		return (
			<ol>
				{people.map((person) => (
					<li key={person.name}>{person.name}</li>
				))}
			</ol>
		);
	}
}

function App() {
	return (
		<div className="App">
			{/* <header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<h1 className="App-title">Hello World!</h1>
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header> */}
			<ContactList
				contacts={[{ name: "Yousef" }, { name: "Khalid" }, { name: "Majeed" }]}
			/>
			<ContactList
				contacts={[{ name: "Amanda" }, { name: "Justin" }, { name: "John" }]}
			/>
		</div>
	);
}

export default App;
