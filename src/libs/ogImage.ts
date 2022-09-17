type generateOgImagePayload = {
  title: string
  subTitle?: string
  theme?: 'light' | 'dark'
}

export const generateOgImage = (payload: generateOgImagePayload) => {
  const hyperLogo = {
    light: 'hyper-color-logo.svg',
    dark: 'hyper-color-logo.svg'
  }

  return (
    'https://og-image.vercel.app/' +
    '**' +
    payload.title.replaceAll(' ', '%20') +
    '**' +
    '%3Cbr%2F%3E' +
    (payload.subTitle?.replaceAll(' ', '%20') ?? '') +
    '.png?theme=' +
    (payload.theme ?? 'dark') +
    '&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2F' +
    hyperLogo[payload.theme ?? 'dark']
  )
}