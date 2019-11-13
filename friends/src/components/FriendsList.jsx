import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchFriends } from '../actions';
import uuid from 'uuid';

import Friend from './Friend';

const FriendsList = props => {

  const dispatch = props.dispatch;

  useEffect( () => { 
    async function getFriends() {
      await dispatch( fetchFriends() );
    }
    getFriends();
  }, [dispatch] );

  return (
    <div>
      {
        props.friends.map( friend => (
          <Friend key={ uuid.v4() } friend={ friend } />
        ) )
      }
    </div>
  );
};

const mapDispatchToProps = {
  fetchFriends
};

export default connect( state => state )( FriendsList );
