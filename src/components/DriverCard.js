import './DriverCard.css'
import Rating from './Rating'
const DriverCard = ({name,rating,img,car}) => {
    return (
    <div className='driverCard'>
            <picture><img src={img} alt={name}/></picture>
            <div>
                <h3>{name}</h3>
                <Rating>{rating}</Rating>
                <p>{car.model} - {car.licensePlate}</p>
        </div>
    </div>
    )
}
export default DriverCard


/*
<DriverCard
  name="Travis Kalanick"
  rating={4.2}
  img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
  car={{
    model: "Toyota Corolla Altis",
    licensePlate: "CO42DE"
  }}
/>
*/