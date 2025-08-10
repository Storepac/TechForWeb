import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          backgroundColor: '#0a0a0a',
          color: 'white',
          padding: 80,
          fontSize: 64,
        }}
      >
        <div style={{ opacity: 0.8, fontSize: 28 }}>TechForWeb</div>
        <div style={{ fontWeight: 800 }}>Desenvolvimento Web Profissional</div>
        <div style={{ opacity: 0.7, fontSize: 28 }}>Sites, E-commerce e Sistemas</div>
      </div>
    ),
    { ...size }
  )
}

