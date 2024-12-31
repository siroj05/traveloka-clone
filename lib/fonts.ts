import localFont from 'next/font/local'

export const avenir = localFont({
  src : [
    {
      path: '../public/fonts/AvenirNextCyr-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/AvenirNextCyr-Medium.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../public/fonts/AvenirNextCyr-Heavy.woff2',
      weight: '100',
      style: 'normal',
    },
  ],
  variable: '--font-avenir'
})

import { Azeret_Mono as Geist_Mono } from 'next/font/google';

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});