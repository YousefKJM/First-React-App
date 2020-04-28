import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// The observant student might've noticed that my index.js file does not include the line registerServiceWorker();
// that's showing in your project. The call to the Service Worker was added in the version of Create React App right
// after I recorded this video. Since we're not using Service Workers in this project, it won't affect anything.
// If you want to remove it, though. Feel free!
