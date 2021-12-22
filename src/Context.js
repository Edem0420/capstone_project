import React, { useState, useEffect } from "react"

const Context = React.createContext()

function ContextProvider(props) {
    const [allPhotos, setAllPhotos] = useState([])
    const [cartItems, setCartItems] = useState([])

    const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setAllPhotos(data))
    }, [])
    
    function toggleFav(id) {
        const updatedArr = allPhotos.map(photo => {
            if(photo.id === id) {
                return {...photo, isFavorite: !photo.isFavorite}
            } 
            return photo
        })

        setAllPhotos(updatedArr)
    }

    function addToCart(newItems) {
        setCartItems(prevItems => [...prevItems, newItems])
    }

    function removeFromCart(id) {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id))
    }

    function emptyCart() {
        setCartItems([])
    }

    console.log(cartItems)
    
    return (
        <Context.Provider value={{allPhotos, toggleFav, addToCart, cartItems, removeFromCart, emptyCart}}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}