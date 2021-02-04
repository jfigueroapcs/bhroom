import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link rel="stylesheet" href="styles/bootstrap.min.css" />
        <link rel="stylesheet" href="styles/vendor/font-awesom/css/font-awesome.min.css" />
        <link rel="stylesheet" href="styles/vendor/mmenu/jquery.mmenu.all.css" />
        <link rel="stylesheet" href="styles/vendor/animate-wow/animate.css" />
        <link rel="stylesheet" href="styles/vendor/labelauty/labelauty.css" />
        <link rel="stylesheet" href="styles/vendor/nouislider/nouislider.min.css" />
        <link rel="stylesheet" href="styles/vendor/easydropdown/easydropdown.css" />
        <link rel="stylesheet" href="styles/ui-spinner.css" />
        <link rel="stylesheet" href="styles/menu.css" />
        <link rel="stylesheet" href="styles/custom.css" />
        <link rel="stylesheet" href="styles/media-query.css" />
        <script	src="script/modernizr.min.js"></script>
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
        {/* <script	src="script/jquery.min.js"></script>
        <script	src="script/jquery-ui.min.js"></script>
        <script	src="script/bootstrap.min.js"></script>
        <script	src="script/vendor/mmenu/mmenu.min.all.js"></script>
        <script	src="script/vendor/animation-wow/wow.min.js"></script>
        <script src="script/vendor/labelauty/labelauty.min.js"></script>
        <script	src="script/vendor/parallax/parallax.min.js"></script>
        <script	src="script/vendor/images-fill/imagesloaded.min.js"></script>
        <script src="script/vendor/images-fill/imagefill.min.js"></script>
        <script	src="script/vendor/easydropdown/jquery.easydropdown.min.js"></script>
        <script	src="script/vendor/carousel/responsiveCarousel.min.js"></script>
        <script	src="script/custom.js"></script> */}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
