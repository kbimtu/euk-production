import { jsxRenderer } from 'hono/jsx-renderer'

export const renderer = jsxRenderer(({ children, title, description }) => {
  const pageTitle = title ? `${title} — Eulerus Universität Königsberg` : 'Eulerus Universität Königsberg'
  const pageDesc = description || 'A European virtual university rooted in the intellectual heritage of Königsberg — where science, mathematics, engineering, arts, and technovation converge.'
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{pageTitle}</title>
        <meta name="description" content={pageDesc} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@300;400;500;600&family=EB+Garamond:ital,wght@0,400;0,500;1,400&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" />
        <link href="/static/style.css" rel="stylesheet" />
      </head>
      <body>
        <div id="page-wrapper">
          {children}
        </div>
        <script src="/static/main.js"></script>
      </body>
    </html>
  )
}, {
  docType: true
})
