import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Tekno Home Services',
    short_name: 'TeknoHome',
    description: 'Spesialis Servis Kompor Listrik & Water Heater Surabaya',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#1a56db',
    icons: [
      {
        src: '/logos1.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  }
}
