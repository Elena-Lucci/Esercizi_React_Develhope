import Age from "./Age"

function Welcome(props){
    return(
        <>
        <p> Welcome, {props.name}! </p>
        <Age age = {props.age}></Age>
        </>
    )
}

Welcome.defaultProps = { name: 'User'};

export default Welcome