import React, { useState } from 'react'
import ImageCards from '../components/core/Gallery/ImageCards'
import Footer from '../components/core/Footer/Index'
import ViewInFull from '../components/core/Gallery/ViewInFull'

const Gallery = () => {
  const [imageModal, setImageModal] = useState(null)
  return (
    <>
      <div className='bg-light dark:bg-dark/95 min-h-screen'>
        <section className='container'>
          <ImageCards
            setImageModal={setImageModal}
            imageModal={imageModal}
          />
          {
            imageModal && <ViewInFull
              modalData={imageModal}
              onClose={() => setImageModal(null)}

            />
          }
        </section>

        <Footer />
      </div>
    </>
  )
}

export default Gallery