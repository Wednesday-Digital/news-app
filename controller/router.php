<?php

namespace controller;

/**
 * Class router
 * @package controller
 */
class router {

    /**
     * router constructor.
     */
    public function __construct()
    {
    }

    /**
     * Routes the page or returns a 404.
     */
    public function routePage()
    {
        global $config;
        $controller = 'search';
        if (isset($_GET['page']) && in_array($_GET['page'], $config->pages)) {
            $controller = $_GET['page'];
        }
        $function = 'display';
        if (isset($_GET['action']) && in_array($_GET['action'], $config->actions)) {
            $function = $_GET['action'];
        }
        if (class_exists('controller\\' . $controller) && method_exists('controller\\' . $controller, $function)) {
            $class = 'controller\\' . $controller;
            $instance = new $class();
            $instance->$function();
        } else {
            $page = new page();
            $page->fourOhFour();
        }
    }
}
