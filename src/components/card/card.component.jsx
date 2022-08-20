import './card.styles.css'

const Card = (props) => {
 const {monster} =props
		return (
			<div className='card-container'>
				<img
					alt={`monster ${monster.name}`}
					src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
				/>
				<h2 key={monster.id}>{monster.name}</h2>
				<p>{monster.email}</p>
			</div>
		);
}

export default Card;