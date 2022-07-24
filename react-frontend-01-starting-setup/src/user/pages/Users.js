import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
    const USERS = [
        {id: 'u1', name: 'Chinzorig', image: 'https://images.pexels.com/photos/5614114/pexels-photo-5614114.jpeg', places: 33}
    ];

    return <UsersList items={USERS} />;
};

export default Users;