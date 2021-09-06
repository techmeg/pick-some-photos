import React,{useEffect, useState} from 'react'

const Context = React.createContext()

function ContextProvider({children}) {
    const [allPhotos, setAllPhotos] = useState([])
    const [cartItems, setCartItems] = useState([])

    function addToCart(newItem) {
       setCartItems(prevCart => [...prevCart, newItem])
    }
    console.log(cartItems)

    function removeFromCart(id) {
        const filteredCart = cartItems.filter(item => item.id !== id)
        setCartItems(filteredCart)
    }
    function emptyCart (){
        setCartItems([])
    }

    function toggleFavorite(id){
        const updatedArray = allPhotos.map(photo => {
            if(photo.id === id) {
                return {
                    ...photo,
                    isFavorite: !photo.isFavorite
                } 
            } 
            return photo   
        })
        setAllPhotos(updatedArray)
    }

    useEffect(() => {
        const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
        fetch(url)
            .then(res => res.json())
            .then(data => setAllPhotos(data))         
    }, [])
    // console.log(allPhotos)
        return (
            <Context.Provider value={{allPhotos, cartItems, toggleFavorite, addToCart, removeFromCart, emptyCart}}>
                {children}
            </Context.Provider>
        )
    }

export {ContextProvider, Context}
