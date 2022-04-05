const Random = ({min,max}) => {
    const randomNumber = Math.floor((max-min)*Math.random())+min
    return(<p>{`Random value between ${min} and ${max} => ${randomNumber}`}</p>)
}
export default Random
