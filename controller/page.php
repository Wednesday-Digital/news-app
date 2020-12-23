<?php

namespace controller;

/**
 * Class page
 * @package controller
 */
class page {

    /**
     * page constructor.
     */
    public function __construct()
    {
    }

    /**
     * Outputs footer.
     * @param $footer string
     */
    public function footer(string $footer)
    {
        global $config, $strings;
        require_once ($config->viewpath . 'footer.php');
        require_once ($config->viewpath . 'foot.php');
    }

    /**
     * Outputs header.
     * @param $title string
     * @param $header string
     */
    public function header(string $title, string $header)
    {
        global $config, $strings;
        require_once ($config->viewpath . 'head.php');
        require_once ($config->viewpath . 'header.php');
    }

    /**
     * Outputs 404 page.
     */
    public function fourOhFour()
    {
        global $config, $strings;
        $title = $strings->appTitle . ' | ' . $strings->fourOhFour;
        $header = $strings->fourOhFour;
        $footer = $strings->footerText;
        $this->header($title, $header);
        require_once ($config->viewpath . '404.php');
        $this->footer($footer);
    }
}
