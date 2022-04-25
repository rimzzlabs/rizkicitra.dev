import CustomImage from '@/components/atoms/CustomImage'

import { useEffect, useState } from 'react'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'

interface ContentImageProps {
  alt: string
  src: string
  title: string
}

const ContentImage: React.FC<ContentImageProps> = ({ src, alt, ...props }) => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const html = document.documentElement

      if (isOpen) html.classList.add('overflow-hidden')

      if (html.classList.contains('overflow-hidden') && !isOpen) {
        html.classList.remove('overflow-hidden')
      }
    }
  }, [isOpen])

  return (
    <>
      <CustomImage
        {...props}
        display='intrinsic'
        onClick={() => setIsOpen(true)}
        src={src}
        alt={alt}
        width={672}
        height={400}
        className='rounded-lg cursor-pointer'
        objectFit='cover'
      />

      {isOpen && (
        <Lightbox
          mainSrc={src}
          onCloseRequest={() => setIsOpen(false)}
          reactModalStyle={{
            maxWidth: '500px'
          }}
        />
      )}
    </>
  )
}

export default ContentImage
