import "./ListOfferItem.css"

function formatCurrency(currency_code, price) {
	switch (currency_code) {
		case "USD":
			return `$${price}`
		case "EUR":
			return `€${price}`

		default:
			return `${price} ${currency_code}`
	}
}

function formationClasses(quantity) {
	const classDefault = "item-quantity"

	switch (true) {
		case quantity <= 10:
			return `${classDefault} level-low`
		case quantity > 10 && quantity <= 20:
			return `${classDefault} level-medium`
		default:
			return `${classDefault} level-high`
	}
}

export default function ListOfferItem({ item }) {
	const { url, MainImage, title, currency_code, price, quantity } = item

	return (
		<div className="item">
			<div className="item-image">
				<a href={url}>
					<img src={MainImage ? MainImage.url_570xN : ""} />
				</a>
			</div>
			<div className="item-details">
				<p className="item-title">{title && title.length > 50 ? title.slice(0, 59) : title}</p>
				<p className="item-price">{formatCurrency(currency_code, price)}</p>
				<p className={formationClasses(quantity)}>{quantity} left</p>
			</div>
		</div>
	)
}
