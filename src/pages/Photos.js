import Image from "../components/Image"
import {Context} from "../Context"
import { useContext } from "react"
import {getClass} from "../utilits/index"

export default function Photos() {
    const {allPhotos} = useContext(Context)

    const imageElements = allPhotos.map((img, i) => {
       return <Image key={img.id} img={img} className={getClass(i)}/> 
    })
        

    return (
        <main className="photos">
            {imageElements}
        </main>
    )
}