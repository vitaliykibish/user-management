import React, { Component } from 'react';

import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';

import Form from './Form';

class AddUser extends Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render () {
    const { open } = this.state;
    const { addUser } = this.props;

    return (
      <div>
        <RaisedButton
          label="add user"
          primary={true}
          onTouchTap={this.handleOpen} />
        <Dialog
          title="Add User"
          modal={false}
          open={open}
          contentStyle={{ maxWidth: '500px' }}
          onRequestClose={this.handleClose}>
          <Form
            addUser={addUser}
            handleClose={this.handleClose}
            handleClose={this.handleClose} />
        </Dialog>
      </div>
    );
  }
}

export default AddUser;
