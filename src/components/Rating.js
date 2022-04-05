const Rating = ({children}) => {
    switch(Math.floor(children)){
        case 0:
            return <p>☆☆☆☆☆</p>
        case 1:
            return <p>★☆☆☆☆</p>
        case 2:
            return <p>★★☆☆☆</p>
        case 3:
            return <p>★★★☆☆</p>
        case 4:
            return <p>★★★★☆</p>
        case 5:
            return <p>★★★★★</p>
        default:
            return <p>default</p>
    }
}
export default Rating
