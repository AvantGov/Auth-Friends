import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

import FriendList from '../Components/FriendList';

const ProtectedList = () => {

    const [data, setData] = useState([])
    // create isLoading states to communicate async behavior,
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {

        axiosWithAuth()
            .get('/friends')
            .then((response) => {
                console.log('hello look here:', response)
                setData(response.data)
                setIsLoaded(true)
            })
            .catch((error) => {
                console.log('error on the port bow!', error)
            })
    }, [])

    console.log('dataaa please', data)
    
    // abstract out list and render in this as parent component passing props
    return  ( 
    isLoaded 
    ? data.map((item) => (
        <FriendList key={item.id} friend={item} />
    ))
    : <div> Getting friends </div>
    )
}


export default ProtectedList;

