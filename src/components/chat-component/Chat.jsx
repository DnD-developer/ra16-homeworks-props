import "./Chat.css"
import Message from "./includes/message-include/Message"

export default function Chat({ messages }) {
	return <ul>{messages.length ? messages.map(mes => <Message key={mes.id} from={mes.from} message={mes} />) : null}</ul>
}
