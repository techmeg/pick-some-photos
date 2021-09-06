import {useContext} from "react"
import {Context} from '../Context'
import Image from '../components/Image'
import {getClass} from "../utils"

function Photos() {
    const {allPhotos} = useContext(Context)
    const imageElements = allPhotos.map((photo, index) => 
    <Image key={photo.id} photo={photo} className={getClass(index)} />)
    return (
        <main className="photos">
            {imageElements}

        </main>
    )
}

export default Photos