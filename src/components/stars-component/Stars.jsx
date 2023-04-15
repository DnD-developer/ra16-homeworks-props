import Star from "./includes/star/star"
import "./Stars.css"

export default function Stars({ count }) {
	if (typeof +count === "number" && +count >= 1 && +count <= 5) {
		const renderArray = []
		for (let index = 0; index < count; index += 1) {
			renderArray.push(index)
		}

		return (
			<ul className="stars-raiting">
				{renderArray.map(star => (
					<Star key={star} />
				))}
			</ul>
		)
	}

	return null
}
