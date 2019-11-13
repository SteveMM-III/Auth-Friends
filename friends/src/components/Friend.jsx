import React from 'react';
import styled from 'styled-components';

const StyledFriend = styled.div`
  margin: 5px auto;
  box-shadow: 0 0 4px grey;
  width: 400px;
`;

const Friend = props => {
  const friend = props.friend;
  return (
    <StyledFriend>
      <p>name: { friend.name }</p>
      <p>age: { friend.age }</p>
      <p>email: { friend.email }</p>
    </StyledFriend>
  );
};

export default Friend;