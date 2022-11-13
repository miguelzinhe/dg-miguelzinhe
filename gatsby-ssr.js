import React from 'react'

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="preload"
      href="/fonts/CovikSansMonoDemo-Bold.ttf"
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
      key="covikSansBoldFont"
    />,
    <link
      rel="preload"
      href="/fonts/CovikSansMonoDemo-Regular.ttf"
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
      key="covikSansFont"
    />,
  ])
}
