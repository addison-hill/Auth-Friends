import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from './axiosWithAuth';
import FriendsCard from './FriendsCard';
import AddFriend from './AddFriend';

const Friends = () => {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        axiosWithAuth()
            .get('http://localhost:5000/api/friends')
            .then(res => setFriends(res.data))
            .catch(err => console.log(err));
    });

    return (
        <div className="friends-container">
            <h1>MySpace Top Friends</h1>
            <div>
                <h3>Add Friend</h3>
                <AddFriend />
            </div>
            <div className="friends-list">
            {friends.map((friend, index) => {
                return <FriendsCard key={index} friends={friend} />;
            })}
            </div>
        </div>
    );
};

export default Friends;