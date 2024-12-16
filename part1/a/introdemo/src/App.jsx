const Hello = (props) =>{
  return(       
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}


const App = () => {
	return (
		<>
			<h1>Greetings</h1>
			<Hello name ="Billy" age ={30}/>
      <Hello name="Toast"/>
      <Hello />

		</>
	);
};

export default App;
