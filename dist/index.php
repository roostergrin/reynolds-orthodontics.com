<!DOCTYPE html>
<html <?php language_attributes(); ?> lang="en" role='main'>
<head>
  <meta charset="<?php bloginfo( 'charset' ); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <?php wp_head(); ?>
  <script async="" defer="" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB105NxpkVIDtjJeUTEt-9Ahtb0Qpb1Djo&amp"></script>

  <!-- Global site tag (gtag.js) - Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=UA-144282042-1"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'UA-144282042-1');
  </script>
  <!-- Global site tag (gtag.js) - Google Analytics -->

</head>
<body>
  <div id='app' role='application'></div>
  <?php wp_footer(); ?>
  <script type="text/javascript">
    var $buoop = {notify:{e:-6,f:-4,o:-4,s:-2,c:-4},insecure:true,api:5};

    function $buo_f(){
      var e = document.createElement("script");
      e.src = "//browser-update.org/update.min.js";
      document.body.appendChild(e);
    };

    try {document.addEventListener("DOMContentLoaded", $buo_f,false)}
    catch(e){window.attachEvent("onload", $buo_f)}
  </script>
</body>
</html>
