import "./Gallery.css"
import {galleryData} from "./Data/galleryData.js"

function GallerySection() {
  return (
    <div>
        <div className="client-galleries">
          {galleryData.map(data => (
            <div>
              <a href={data.galleryLink} target="_blank">
              <img src={data.imageUrl} alt={data.imageUrl} />
              </a>
              <p>{data.businessName}</p>
            </div>
          ))}
        </div>
    </div>
  )
}

export default GallerySection