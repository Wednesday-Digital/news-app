<?php

namespace controller;

use stdClass;

/**
 * Class search
 * @package controller
 */
class search {

    /**
     * search constructor.
     */
    public function __construct()
    {
    }

    /**
     * Performs the actual cURL request.
     * @param $url string
     * @return bool|string
     */
    private static function curlRequest(string $url)
    {
        $ch = curl_init();
        curl_setopt_array($ch, array(
            CURLOPT_URL => $url,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 0,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => 'GET',
        ));
        $output = curl_exec($ch);
        curl_close($ch);
        return $output;
    }

    /**
     *  Outputs the content of the search page.
     */
    public function display()
    {
        global $config, $strings;
        $title = $strings->appTitle . ' | ' . $strings->searchTitle;
        $header = $strings->searchTitle;
        $footer = $strings->footerText;
        $page = new page();
        $page->header($title, $header);
        require_once ($config->viewpath . 'search.php');
        $page->footer($footer);
    }

    /**
     * Grabs the search results from the available sites.
     * @param $sites array
     * @param $search string
     * @return stdClass
     */
    public static function getSearchResults(array $sites, string $search): stdClass
    {
        global $strings;
        $return = new stdClass();
        $return->success = true;
        $searchArray = array();
        $successfulSearches = 0;
        foreach ($sites as $site) {
            $url = $site->url . $site->path . '?' . $site->searchParam . '=' . urlencode($search) . '&' . $site->apiKeyParam . '=' . $site->apiKey;
            $responseJSON = json_decode(self::curlRequest($url));
            $response = $responseJSON->{$site->responseBodyParam};
            if ($response->{$site->responseOKParam} === 'ok' && !empty($response->{$site->responseResultsParam})) {
                $successfulSearches ++;
                foreach ($response->{$site->responseResultsParam} as $item) {
                    $newsItem = new stdClass();
                    $newsItem->id = $item->{$site->resultIDParam};
//                    TODO cater for unexpected date types.
                    $unixtime = strtotime($item->{$site->resultDateParam});
                    $newsItem->date = date('d/m/Y', $unixtime);
                    $newsItem->section = $item->{$site->resultSectionParam};
                    $newsItem->title = $item->{$site->resultTitleParam};
                    $newsItem->url = $item->{$site->resultURLParam};
                    if (!in_array($newsItem->section, array_keys($searchArray))) {
                        $searchArray[$newsItem->section] = array();
                    }
                    $searchArray[$newsItem->section][] = $newsItem;
                }
            }
        }
//        TODO make errors more informative.
        if ($successfulSearches === 0) {
            $return->success = false;
            $return->error = $strings->emptySearch;
        } else {
            $return->results = $searchArray;
        }
        return $return;
    }
}
