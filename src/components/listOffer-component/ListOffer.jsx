import "./ListOffer.css"
import ListOfferItem from "./includes/ListOfferItem/ListOfferItem"

export default function ListOffer({ data }) {
	return (
		<div className="item-list">
			{data.map(item => {
				return item.state === "active" ? <ListOfferItem key={item.listing_id} item={item} /> : null
			})}
		</div>
	)
}
