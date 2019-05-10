AddBountyForm (No state/data on Component)
- Uses props for
    -handleChange (props.handleChange)
    -handleSubmit (props.handleSubmit)
    -name (props.name)
    
AddBountyPage (Has state)
    - Using Context, it uses values from this.state, 
        this.getBounties, and this.addNewBounty
    - this.state has all properties that are available with
        the imported BountyProvider state, which are initially
        set to state.
    - Using only props (no Context), AddBountyForm is imported. 
    - When changes are made to form by user, the handleChange
        function is fired. The actual function is used on this
        component. The imported form knows when to use it
        because of the passed props. 
    - The user changes to the form are dynamically changing
        state.
    - On the render, AddBountyForm is returned with props 
        from the AddBountyForm Component (handleChange & handleSubmit).
        
    - On submit, addNewBounty is called. It uses this.state from
        the BountyProvider Component via Context props as a parameter.
    - It then resets AddBountyPage state to ", which clear out the form.
    - A "Back" button using this.props.history.goBack() allows
        user to go back one page. 
        
Bounty (No state)
    - Serves as template for displaying a bounty
    - Uses props (no Context) for needed data:  
        - firstname
        -lastname
        -alignswith
        -living
    - This bounty template gets imported into BountyList, 
        where it can access the data 
    BountyList (no state, but Context Data from BountyProvider).
    - imports bounty, which allows bounty to use data from Context
    - imports Context from BountyProvider 
    - Returns div with...
        ..."Get Bounties" button. Using Context,
        it calls getBounties function.
        ..."Add New Bounty button" which uses Contexts (props.history) passed 
            to AddBountyPage from BountyProvider.
        ... it then maps bounties (Context props) and displays the data
            in the imported Bounty Component
                It simply uses bounty._id and ...bounty
        
    