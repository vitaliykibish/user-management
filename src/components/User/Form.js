import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

import { v4 } from 'uuid';
import { validationUser } from '../../utils/validation';

class Form extends Component {
  state = {
    form: {
      name: '',
      phone: '',
      company: '',
    },
    errors: {
      fields: {},
      hasError: false,
    },
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { form } = this.state;
    const { addUser, handleClose } = this.props;

    const errors = validationUser(form);

    if (errors.hasError) {
      this.setState({ errors });
    } else {
      const user = Object.assign({}, form, { id: v4() });
      addUser(user);
      handleClose();
    }
  }

  handleFildChange = (e) => {
    const { form } = this.state;
    const { name, value } = e.target;

    this.setState({
      form: {
        ...form,
        [name]: value
      }
    })
  }

  handleResetError = (e) => {
    const { errors } = this.state;
    const { name } = e.target;

    if (!errors.hasError) {
      return;
    }

    this.setState({
      errors: {
        ...errors,
        fields: {
          ...errors.fields,
          [name]: '',
        }
      }
    });
  }

  render () {
    const { handleClose } = this.props;

    const {
      form: {
        name,
        phone,
        company,
      },
      errors: {
        fields,
      }
    } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <TextField
            autoFocus={true}
            name="name"
            fullWidth={true}
            value={name}
            errorText={fields.name}
            onFocus={this.handleResetError}
            onChange={this.handleFildChange}
            hintText="Name" />
        </div>
        <div>
          <TextField
            name="company"
            fullWidth={true}
            value={company}
            errorText={fields.company}
            onFocus={this.handleResetError}
            onChange={this.handleFildChange}
            hintText="Company" />
        </div>
        <div>
          <TextField
            name="phone"
            fullWidth={true}
            value={phone}
            errorText={fields.phone}
            onFocus={this.handleResetError}
            onChange={this.handleFildChange}
            hintText="Phone" />
        </div>
        <div style={{ float: 'right' }}>
          <FlatButton
            label="cancel"
            onTouchTap={handleClose}
            primary={true} />
          <FlatButton
            label="Add"
            primary={true}
            type="submit" />
        </div>
      </form>
    );
  }
}

export default Form;
