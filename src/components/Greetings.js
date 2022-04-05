const Greetings = ({lang,children}) => {
    switch(lang){
        case 'de':
            return (<p>hallo {children}</p>) //children is like the innerHtml
        case 'fr':
            return (<p>bonjour {children}</p>)
        default:
            return (<p>what are you talking about?</p>)
    }
}
export default Greetings
