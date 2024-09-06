function Profile (props) {
    console.log (props);
   return (
    <h1>
        Hubby: {props.name} coach: {props.coach}
        {props.children}
    </h1>
    
   )
};

export default Profile; 