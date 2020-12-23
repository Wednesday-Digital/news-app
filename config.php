<?php
// TODO move config to a database and create a UI to manage it.
$config = new stdClass();
$config->actions = array(
    'display'
);
$config->apiActions = array(
    'search'
);
$config->langs = array(
    'en'
);
$config->pages = array(
    'search'
);
$config->path = '/Users/antipath/Sites/WednesdayDigital/Portable/news-app/';
$config->viewpath = $config->path . 'view/';
$config->sites = array(
    'guardian'
);
$config->webpath = 'http://localhost/WednesdayDigital/Portable/news-app/';
$config->apipath = $config->webpath . '/api/api.php';

$lang = 'en';
if (isset($_GET['lang']) && in_array($_GET['lang'], $config->langs)) {
    $lang = $_GET['lang'];
}
if (file_exists($config->path . 'lang/' . $lang . 'php')) {
    require_once ($config->path . 'lang/' . $lang . 'php');
} else {
    require_once ($config->path . 'lang/en.php');
}

// TODO implement an autoloader.
require_once ('controller/page.php');
require_once ('controller/router.php');
require_once ('controller/search.php');
require_once ('model/sites.php');
