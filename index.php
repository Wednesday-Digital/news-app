<?php

use controller\router;

require_once ('config.php');

// TODO set up proper routing, ideally canonical.
$router = new router();
$router->routePage();
