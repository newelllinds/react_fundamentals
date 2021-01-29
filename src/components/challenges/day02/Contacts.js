const Contacts = (props) => { //property returning react element
    return (
    <div>
        <h3>{ props.name }</h3>
        <p> { props.age } {props.school} {props.graduationYear}</p>
    </div>
    );
}

export default Contacts;

//Create a component named Contacts
//Pass name, age, school, graduationYear props into it
//Return an h3 with name, and a p with remaining information