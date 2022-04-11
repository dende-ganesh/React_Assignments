
type Greetprops={
    name:string
}
function Greet(props:Greetprops){
    return (
    <div>
        <h2>Hi!, this is {props.name}</h2>
        <p>I did TypeScript Assignment-1</p>
    </div>
    )
    
}
export default Greet;

/*this component takes name as prop and prints it along with p tag*/