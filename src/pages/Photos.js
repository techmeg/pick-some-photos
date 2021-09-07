import {useContext} from "react"
import {Context} from '../Context'
import Image from '../components/Image'
import {getClass} from "../utils"

function Photos() {
    const {allPhotos} = useContext(Context)
    const imageElements = allPhotos.map((photo, index) => 
    <Image key={photo.id} photo={photo} className={getClass(index)} />)
    return (
        <main>
            <div className="intro">
                <h1>A pho-tastic site for ordering and favoriting beautiful photos.</h1>
                <p> Click on the heart icon to show some love as you hover over our photo selection. To order, simply click on the plus icon in the upper right corner to add images to your shopping cart.</p>
            </div>
            <div className="photos">
            {imageElements}
            </div>
        </main>
    )
}

export default Photos