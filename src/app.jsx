import React from "react"
import ReactDOM from "react-dom/client"
import Stars from "./components/stars-component/stars"

ReactDOM.createRoot(document.getElementById("root")).render(
	<>
		<Stars count={0} />
		<Stars count={4} />
		<Stars count={1} />
		<Stars count={5} />
		<Stars count={9} />
	</>
)
