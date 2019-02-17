<!DOCTYPE html>
<html lang="en-us">

<head>

    <?php 
$title = 'BSFM | Home';
include 'head.php'; 
?>
</head>

<body>

    <?php

    $comp_config = array(
        'feature' => array(
            'title' => 'Visit Us',
            'subtitle' => 'During the month of November to add that special, local something to your Thanksgiving meal.'
        )
    );
    
    require 'config.php';

    include 'navigation.php'; 

    include 'components/feature.php';

    include 'footer.php';
    
    ?>

</body>

</html>