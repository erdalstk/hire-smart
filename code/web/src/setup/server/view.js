const view = (env = { NODE_ENV: '', APP_URL: '', GA_TRACKING_ID: '' }, params, app = { meta: null, html: '', css: '', initialState: {} } ) => (
`<!doctype html>
<html lang="en">
<head>
  <!-- Meta -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="theme-color" content="#2196f3">
  <meta name="msapplication-TileColor" content="#2196f3">
  ${ app.meta.title.toString() }
  ${ app.meta.meta.toString() }
  
  <!-- Favicon -->
  <link rel="apple-touch-icon" sizes="180x180" href="${ env.APP_URL }/images/favicon/apple-touch-icon.png" />
  <link rel="icon" type="image/png" sizes="32x32" href="${ env.APP_URL }/images/favicon/favicon-32x32.png" />
  <link rel="icon" type="image/png" sizes="16x16" href="${ env.APP_URL }/images/favicon/favicon-16x16.png" />
  <link rel="shortcut icon" href="${ env.APP_URL }/images/favicon/favicon.ico?v=0.1" type="image/x-icon" />
  
  <!-- Fonts -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway:400,600" />
  
  <!-- CSS - Reset -->
  <style type="text/css">
    html {
      box-sizing: border-box;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    }
    *, *::before, *::after {
      box-sizing: inherit;
    }
    body {
      margin: 0;
      background-color: #fff;
    }
    a {
      color: inherit;
      text-decoration: none;
    }
  </style>
  <!-- CSS - Generated -->
  <style type="text/css">${ app.css }</style>
  <!-- CSS - Datetime -->
  <link rel="stylesheet" media="all" href="${ env.APP_URL }/css/datetime.css" />
</head>
<body>  
  <!-- App -->
  <div id="app">${ app.html }</div>
  
  <!-- Initial State -->
  <script>
    window.__INITIAL_STATE__ = ${ JSON.stringify(app.initialState) }
  </script>
  
  <!-- JS Bundles -->
  <script type="text/javascript" src="${ env.APP_URL }/js/bundles/vendor.js?v=0.2"></script>
  <script type="text/javascript" src="${ env.APP_URL }/js/bundles/app.js?v=${ env.NODE_ENV !== 'production' ? Math.random() : params.site.version }"></script>
  
  <!-- Global site tag (gtag.js) - Google Analytics -->
  ${ 
    env.NODE_ENV === 'production'
      ? `<script async src="https://www.googletagmanager.com/gtag/js?id=${ env.GA_TRACKING_ID }"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', '${ env.GA_TRACKING_ID }');
        </script>`
      : ''
  }
</body>
</html>`
)

export default view
