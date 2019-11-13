import React from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { addFriend } from '../actions';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  margin: 0 auto;
  box-shadow: 0 0 12px black;

  button {
    margin: 5px 0;
    align-self: center;
    width: 100px;
  }
`;

const StyledLabel = styled.label`
  width: 200px;
  align-self: center;
  padding: 5px;
`;


class FriendForm extends React.Component {
  constructor() {
    super();
    this.state = {
      newFriend: { name: '', age: 0, email: '' }
    };
  }

  handleChange = e => {
    this.setState( {
      newFriend: {
        ...this.state.newFriend,
        [e.target.name]: e.target.value
      }
    } );
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.dispatch( addFriend( { ...this.state.newFriend, id: uuid.v4() } ) );
    this.setState(  { newFriend: { name: '', age: 0, email: '' } } );
  };

  render() {
    return (
      <StyledForm onSubmit={ this.handleSubmit }>
        <StyledLabel>
          Name
          <input
            type="text"
            name="name"
            id="name"
            placeholder='name'
            value={ this.state.newFriend.name }
            onChange={ this.handleChange }
          />
        </StyledLabel>
        <StyledLabel>
          Age
          <input
            type="number"
            name="age"
            id="age"
            placeholder='age'
            value={ this.state.newFriend.age }
            onChange={ this.handleChange }
          />
        </StyledLabel>
        <StyledLabel>
          Email
          <input
            type="text"
            name="email"
            id="email"
            placeholder='email'
            value={ this.state.newFriend.email }
            onChange={ this.handleChange }
          />
        </StyledLabel>
        <button>Add</button>
      </StyledForm>
    );
  }
}

const mapDispatchToProps = {
  addFriend
};

export default connect( state => state )(FriendForm);
