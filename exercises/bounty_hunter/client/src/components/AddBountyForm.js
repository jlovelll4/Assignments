import React from 'react'

const AddBountyForm = props => {
    const { handleChange, handleSubmit, name } = props
    return(
        <div className="form-wrapper">
            <h3>Add a bounty.</h3>
            <form onSubmit={handleSubmit}>
                <ul className="form">
                    <li><label>Full Name</label>
                        <input
                            type="text"
                            name="firstname"
                            className="field-divided"
                            placeholder="First"
                            onChange={handleChange}
                            value={name}
                        />
                        <input
                            type="text"
                            name="lastname"
                            className="field-divided"
                            placeholder="Last"
                            onChange={handleChange}
                            value={name}
                        />
                    </li>
                    <li>
                        <label> Bounty Amount
                        </label>
                        <input
                            type="number"
                            name="bountyamount"
                            className="field-divided"
                            onChange={handleChange}
                            value={name}
                        />
                    </li>
                    <li>
                        <label>Alive?</label>
                        <select name="living" className="field-select" onChange={handleChange}>
                            <option value="">- Is Bounty Alive?-</option>
                            <option value={true}>Yes</option>
                            <option value={false}>No</option>
                        </select>
                    </li>
                    <li>
                        <label>Type</label>
                        <select name="alignswith" onChange={handleChange} className="field-select">
                            <option value="">-Select Alliance-</option>
                            <option value="sith">Sith</option>
                            <option value="jedi">Jedi</option>
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