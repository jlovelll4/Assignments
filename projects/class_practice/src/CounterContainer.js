import React, { Component } from "react"

class  CounterContainer extends Component {
	constructor(){
		super()
		this.state = {
			counter: 0,
			reset: 0
		};
		// this.handleClick = this.handleClick.bind(this)
	};

	// Render is what displays the JSX.
	render() {

		const styles = {
			div:{
				display: "flex",
				alignItems: "center"
			},
			span1:{

			}
		}
		return (
			<div>
				<div style = {styles.div}>
					<span>
						<button onClick = {()=>this.handleIncrement(4)}>Add</button>
						<div>{this.state.counter} times</div>
					</span>
					<span>
						<button onClick = {()=>this.handleDecrement(4)}>Subtract</button>
						<div>{this.state.counter} times</div>
					</span>
					<span>
						{/* <button onClick = {this.}>Reset</button> */}
						<div>{this.state.counter} times</div>
					</span>
				</div>
			</div>
		)		

	};

	handleIncrement = (amount) =>{
		// Takes an object
		// this.setState({title: “Did a thing”}) 
		// OR a function that returns an object
		this.setState(prevState =>{
			return {counter: prevState.counter +amount}
		});
  	};
	handleDecrement = (amount) =>{
		// Takes an object
		// this.setState({title: “Did a thing”}) 
		// OR a function that returns an object
		this.setState(prevState =>{
			return {counter: prevState.counter -amount}
		});
  	};
};

export default CounterContainer