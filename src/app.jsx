import React from "react"
import ReactDOM from "react-dom/client"
import Stars from "./components/stars-component/stars"
import data from "./components/listOffer-component/includes/db"
import messages from "./components/chat-component/db"
import ListOffer from "./components/listOffer-component/listOffer"
import Chat from "./components/chat-component/chat"

ReactDOM.createRoot(document.getElementById("root")).render(
	<>
		<Stars count={0} />
		<Stars count={4} />
		<Stars count={1} />
		<Stars count={5} />
		<Stars count={9} />
		<ListOffer data={data} />
		<div className="clearfix container">
			<div className="chat">
				<div className="chat-history">
					<Chat messages={messages} />
				</div>
			</div>
		</div>
	</>
)
