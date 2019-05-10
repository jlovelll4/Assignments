import React, { Component } from 'react'
import AddBountyForm from './AddBountyForm.js'
import { withBounties } from '../context/BountyProvider.js'

class AddBountyPage extends Component {
    constructor(){
        super()
        this.state = {
            firstname: "",
            lastname: "",
            living: true,
            bountyamount: "",
            alignswith: "",
        }
    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.addNewBounty(this.state)
        this.setState({ firstname: "", lastname: "", living: true, bountyamount: "", alignswith: "" })
    }

    render(){
        return (
            <div>
                <button onClick={() => this.props.history.goBack()}>Back</button>
                <AddBountyForm
                    {...this.state}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                />
            </div>
        )
    }
}

export default withBounties(AddBountyPage)