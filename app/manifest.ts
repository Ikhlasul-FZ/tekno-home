import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Tekno Home Services',
    short_name: 'TeknoHome',
    description: 'Jasa Servis Kompor Listrik & Water Heater Profesional Surabaya',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#004aad',
    icons: [
      {
        src: '/icon.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  }
}
