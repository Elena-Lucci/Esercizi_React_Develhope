import Age from "./Age"
import Message from "./Message";

function Welcome(props) {
const showAgeOver18 = props.age > 18;

  const showAgeIfPresent = props.age != null;

  const showAgeBetween = props.age > 18 && props.age < 65;

  const showAgeForJohn = props.age > 18 && props.name === 'John';

    return(
        <>
        <p> Welcome, {props.name}! </p>
        {showAgeOver18 && <Age age = {props.age}/>}
        {showAgeIfPresent && <Age age = {props.age}/>}
        {showAgeBetween && <Age age = {props.age}/>}
        {showAgeForJohn && <Age age = {props.age}/>}
        <Age age={props.age}/>
        <Message age = {props.age} ></Message>
        </>
    )
}

export default Welcome