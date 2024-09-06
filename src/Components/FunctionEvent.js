function FunctionEvent(){
    function handleClick(){
        console.log('Button is clicked');
    }
    return (
        <div>
            <strong>Functional Component</strong>
            <button  onClick={handleClick}>Click Here</button>
        </div>
    )
}

export default FunctionEvent;