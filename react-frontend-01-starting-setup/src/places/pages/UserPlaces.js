import React from "react";

import PlaceList from "../components/PlaceList";




const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Empire State Building',
        description: 'One of the famous sky scrapers in the world!',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/10/Empire_State_Building_%28aerial_view%29.jpg',
        address: '20 W 34th St., New York, NY 10001, United States',
        location: {
            lat: 40.7495617,
            lng: -73.9889517
        },
        creator: 'u1' 
    },
    {
        id: 'p2',
        title: 'Empire State Building',
        description: 'One of the famous sky scrapers in the world!',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/10/Empire_State_Building_%28aerial_view%29.jpg',
        address: '20 W 34th St., New York, NY 10001, United States',
        location: {
            lat: 40.7495617,
            lng: -73.9889517
        },
        creator: 'u2' 
    }
];

const UserPlaces = () => {


    return (
        <PlaceList items={DUMMY_PLACES} />
    )
};


export default UserPlaces;