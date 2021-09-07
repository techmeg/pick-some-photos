import React,{useEffect, useState} from 'react'

const Context = React.createContext()

function ContextProvider({children}) {
    const [allPhotos, setAllPhotos] = useState([])
    const [cartItems, setCartItems] = useState([])

    // localStorage.clear()

    function addToCart(newItem) {
       setCartItems(prevCart => [...prevCart, newItem])
       addItemToStorage(newItem)
    }
    console.log('cart items: ', cartItems)

    function addItemToStorage(newItem) {
        let itemsSelected;
        if(localStorage.getItem('itemsSelected') === null){
            itemsSelected = [];
        } else {
            itemsSelected = JSON.parse(localStorage.getItem('itemsSelected'))
        }
        itemsSelected.push(newItem);
        localStorage.setItem('itemsSelected', JSON.stringify(itemsSelected));
    }

    function removeFromCart(id) {
        const filteredCart = cartItems.filter(item => item.id !== id)
        setCartItems(filteredCart)
        removeItemFromStorage(id)
    }

    function removeItemFromStorage(id) {
        let itemsSelected;
        if(localStorage.getItem('itemsSelected') === null){
            itemsSelected = [];
        } else {
            itemsSelected = JSON.parse(localStorage.getItem('itemsSelected'))
        }
        const filteredItems = itemsSelected.filter(item => item.id !== id)
        localStorage.setItem('itemsSelected', JSON.stringify(filteredItems));
    }

    function emptyCart (){
        setCartItems([])
        emptyStorage()
    }

    function emptyStorage(){
        let itemsSelected = JSON.parse(localStorage.getItem('itemsSelected'))
        itemsSelected = []
        localStorage.setItem('itemsSelected', JSON.stringify(itemsSelected));
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
        // get local storage data
        if(localStorage.getItem('itemsSelected')){
            setCartItems(JSON.parse(localStorage.getItem('itemsSelected')))
        }

        //get all photo data
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
