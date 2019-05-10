import React from 'react'
import Bounty from './Bounty.js'
import { withBounties } from '../context/BountyProvider.js'

const BountyList = (props) => {
    const { getBounties, bounties, history } = props
    return (
        <div>
            <button onClick={getBounties}>Get Bounties</button>
            <button onClick={() => history.push("/addbounty")}>Add New Bounty</button>
            { bounties.map(bounty => <Bounty key={bounty._id} {...bounty}/>)}
        </div>
    )
}

export default withBounties(BountyList)