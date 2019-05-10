import React from 'react'

const AddBountyForm = (props) => {
    const { handleChange, handleSubmit, name } = props

    return (
        <div>
            <h3>Add a new Bounty</h3>
            <form onSubmit={handleSubmit}>
                <ul>
                    <li> <label>Full Name</label>
                        <input
                            type="text"
                            name="firstname"
                            className="field-division"
                            placeholder="First"
                            onChange={handleChange}
                            value={name}
                        />
                        <input
                            type="text"
                            name="lastname"
                            className="field-division"
                            placeholder="Last"
                            onChange={handleChange}
                            value={name}
                        />
                    </li>
                    <li><label>Bounty Amount</label>
                        <input
                            type="number"
                            name="bountyamount"
                            className="field-divided"
                            onChange={handleChange}
                            value={name}
                        />
                    </li>
                    <li><label>Still Breathing?</label>
                        <select name="living" className="field-select" onChange={handleChange}>
                            <option value="">--Is Bounty Alive?</option>
                            <option value={true}>Yes</option>
                            <option value={false}>No</option>
                        </select>
                    </li>
                    <li>
                        <input type="submit" value="Submit"/>
                    </li>
                </ul>
            </form>
        </div>
    )
}

export default AddBountyForm