<?php 

$title = isset($comp_config['feature']['title']) ? $comp_config['feature']['title'] : '';
$subtitle = isset($comp_config['feature']['subtitle']) ? $comp_config['feature']['subtitle'] : '';

?>


<div id="feature-section">
    <img src="/img/stock-photo-lg.jpeg" class="fs-feature-img">
    <div class="fs-feature-filter"></div>
    <div class="fs-content-block lazy-fade lazy-fade-left">
        <div class="theme-container">
            <h1 class="fs-title"><?php echo $title; ?></h1>
            <h4 class="fs-subtitle"><?php echo $subtitle; ?></h4>
        </div>
    </div>
</div>