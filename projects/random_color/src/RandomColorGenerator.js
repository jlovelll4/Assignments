import React from "react"
import axios from "axios"

class RandomColorGenerator extends React.Component{
    constructor(){
        super()
        this.state = {
            colorz: []
        }

    }

    componentDidMount() {
        axios.get("http://www.colr.org/json/scheme/random").then( response=>{
            console.log([response.data.schemes[0].colors])
            this.setState({
                colorz: [response.data.schemes[0].colors]

            })
        })
    }

    render(){
        const randomColor = this.state.colorz.map(color=>{
            return(
                "#" + color[1]
            )
        })
        console.log(`Random Color = ${randomColor}`)
        const styles ={
            backgroundColor: randomColor,
            height: 200,

        }
        return(
            <div style={styles}>
                <p>Random Colored Box</p>
            </div>
        )
    }

}

export default RandomColorGenerator