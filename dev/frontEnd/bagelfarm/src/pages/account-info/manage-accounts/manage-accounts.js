import React, {Component} from 'react'
import Button from '../../../components/UI/ButtonRelative/ButtonRelative'

class ManageAccounts extends Component {
    render() {
        var manageAccounts = 
            <div>
                <Button clicked={this.props.backToAccountPage}>Back To Account Page</Button>
                <div>
                    stuff
                </div>
            </div>
        
        return manageAccounts;
    }
}

export default ManageAccounts;