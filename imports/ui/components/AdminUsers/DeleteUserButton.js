import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
class DeleteUserButton extends React.Component {
    constructor(props){
      super(props);
    }
  
    deleteUser = () => {
      const { userId } = this.props;
      if (confirm('Delete user? This is permanent!')) {
          Meteor.call('users.adminRemoveAccount', userId);
      }
    }
  
    render() {
      return ( 
          <Button color="danger" onClick={() => this.deleteUser()}>Delete</Button>
      );
    }
  }
  
  DeleteUserButton.defaultProps = {
    userId: '',
  }
  DeleteUserButton.propTypes = {
    userId: PropTypes.string,
  }
  
  export default DeleteUserButton;