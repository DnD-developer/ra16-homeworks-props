function formationClassesOFType(type) {
	const classes = {
		liWrapper: "",
		messageData: "message-data",
		textMessage: "message"
	}

	switch (type) {
		case "response":
			classes.liWrapper = "clearfix"
			classes.messageData = `${classes.messageData} align-right`
			classes.textMessage = `${classes.messageData} other-message float-right`
			break

		default:
			classes.textMessage = `${classes.messageData} my-message`
			break
	}

	return classes
}

function Sender({ data }) {
	const { time, name, type } = data
	switch (type) {
		case "response":
			return (
				<>
					<span className="message-data-time">{time}</span> &nbsp; &nbsp;
					<span className="message-data-name">{name}</span>
					<i className="fa fa-circle me"></i>
				</>
			)

		default:
			return (
				<>
					<span className="message-data-name">
						<i className="fa fa-circle online"></i>
						{name}
					</span>
					<span className="message-data-time">{time}</span>
				</>
			)
	}
}

export default function Message({ from, message }) {
	const { type, time, text } = message
	const { liWrapper, messageData, textMessage } = formationClassesOFType(type)

	return (
		<li className={liWrapper}>
			<div className={messageData}>
				<Sender data={{ name: from.name, time, type }} />
			</div>
			<div className={textMessage}>{text ? text : "..."}</div>
		</li>
	)
}
