import './CreditCard.css'
import visaImage from '../assets/images/visa.png'
import masterImage from '../assets/images/master-card.svg'

const CreditCard = ({type, number, expirationMonth,expirationYear,bank,owner,bgColor,color }) => {
    const divStyle = {
        backgroundColor: bgColor,
        color: color,
    }
    return <div className='creditCard' style={divStyle}>
       <img className='cardLogo' src={type==="Visa"?visaImage:masterImage} alt={type}/>
       <p className='cardNumber'>**** **** **** {number.slice(-4)}</p>
       <p>Expire {expirationMonth}/{expirationYear}{`              `}{bank}</p>
       <p>{owner}</p>
    </div>

}
export default CreditCard

/*
<CreditCard
  type="Visa"
  number="0123456789018845"
  expirationMonth={3}
  expirationYear={2021}
  bank="BNP"
  owner="Maxence Bouret"
  bgColor="#11aa99"
  color="white" 
/>
*/