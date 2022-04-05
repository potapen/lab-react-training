import './IdCard.css'

const IdCard = ({lastName, firstName, gender, height, birth, picture}) => {
    return(
        <div className="IdCard">
            <picture>
                <img src={picture} alt={picture}/>
            </picture>
            <article>
                <p><b>first name:</b> {firstName}</p>
                <p><b>last name:</b> {lastName}</p>
                <p><b>gender:</b> {gender}</p>
                <p><b>height:</b> {height}</p>
                <p><b>birth:</b> {birth.toString()}</p>
            </article>
        </div>
    )
}
export default IdCard
