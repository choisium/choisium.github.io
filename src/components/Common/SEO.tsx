import { useSiteMetadata } from 'hooks/useSiteMetadata'
import React, { FunctionComponent, ReactNode } from 'react'

type SEOProps = {
  title?: string
  description?: string
  pathname?: string
  image?: string
  children?: ReactNode
}

export const SEO: FunctionComponent<SEOProps> = ({
  title,
  description,
  pathname,
  image,
  children,
}) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    siteUrl,
    image: defaultImage,
    author,
  } = useSiteMetadata()

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname || ``}`,
    image: `${siteUrl}${image || defaultImage}`,
    author,
  }

  return (
    <>
      <html lang="ko" />
      <title>{seo.title}</title>

      <meta name="description" content={seo.description} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:site_name" content={seo.title} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:site" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:creator" content={seo.author} />

      {/* Google Search Console */}
      <meta
        name="google-site-verification"
        content="oja2ncMcMQUc44cwkK4ToMOyttxXU8LNCSMbjQJX2QI"
      />
      {/* Naver Search Advisor */}
      <meta
        name="naver-site-verification"
        content="0407ddd244a16c2b2bcac064bfeb4c08786cd1a7"
      />

      {children}
    </>
  )
}
