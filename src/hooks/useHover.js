import {useState, useRef, useEffect} from 'react'

function useHover() {
    const [isHovered, setIsHovered] = useState(false)
    const hoveredRef = useRef(null)

    useEffect(() => {
        const ref = hoveredRef.current
        hoveredRef.current.addEventListener("mouseenter", enter)
        hoveredRef.current.addEventListener("mouseleave", leave)

        return () => {
            ref.removeEventListener("mouseenter", enter)
            ref.removeEventListener("mouseleave", leave)
        }
    }, [])

    function enter () {
        setIsHovered(true)
    }
    function leave() {
        setIsHovered(false)
    }

    return[isHovered, hoveredRef]
}

export default useHover