<?php

require_once ('../config.php');

use model\sites;
use controller\search;

/**
 * Class api
 */
class api {

    /**
     * api constructor.
     */
    public function __construct()
    {
        global $config;
        // TODO security checks.
        $response = null;
        if (isset($_GET['action']) && in_array($_GET['action'], $config->apiActions)) {
            switch ($_GET['action']) {
                case 'search':
                    // TODO sanity checks on q.
                    $q = $_GET['q'];
                    $response = $this->searchSites($q);
                    break;
                default:
                    break;
            }
        }
        $this->jsonEncodeResponse($response);
    }

    /**
     * Encodes the response sent to the client.
     * @param $response
     */
    private function jsonEncodeResponse($response)
    {
        echo json_encode($response);
        die;
    }

    /**
     * Searches the available sites for the given string.
     * @param $search string
     * @return stdClass
     */
    private function searchSites(string $search): stdClass
    {
        $sites = sites::getSites();
        return search::getSearchResults($sites, $search);
    }
}

$api = new api();
