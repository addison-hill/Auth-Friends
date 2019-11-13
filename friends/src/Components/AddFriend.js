import React, { useState } from 'react';
import { axiosWithAuth } from './axiosWithAuth';

const AddFriend = () => {
    const [addFriend, setAddFriend] = useState({
        name: '',
        age: '',
        email: ''
    });

    const handleChanges = e => {
        setAddFriend({ ...addFriend, [e.target.name]: e.target.value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
            .post('http://localhost:5000/api/friends', addFriend)
            .then(res => setAddFriend(res.data))
            .catch(err => console.log(err));
        document.getElementById("clear-input").reset();
    };

    return (
        <form className="form" id="clear-input" onSubmit={handleSubmit}>
            <input className="input"
                type="text"
                name="name"
                label="Name"
                placeholder="Name"
                value={addFriend.name}
                onChange={handleChanges}
            />
            <input className="input"
                type="text"
                name="age"
                label="Age"
                placeholder="Age"
                value={addFriend.age}
                onChange={handleChanges}
            />
            <input className="input"
                type="text"
                name="email"
                label="Email"
                placeholder="Email"
                value={addFriend.email}
                onChange={handleChanges}
            />
            <button className="btn">Add Friend</button>
        </form>
    );
};

export default AddFriend;