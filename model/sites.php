<?php
// This is a pseudo model.
// Normally this would be in a database and we would retrieve the values from there and use a function to make an object of them here.
namespace model;

use stdClass;

/**
 * Class sites
 * @package model
 */
class sites {
    /**
     * @var array
     */
    private static $sites = array();

    /**
     * sites constructor.
     */
    public function __construct()
    {
    }

    /**
     * Generates and returns the details of the available sites.
     * @return array
     */
    public static function getSites(): array
    {
        self::loadSites();
        return self::$sites;
    }

    /**
     * Loads the available sites into a private variable for future use.
     */
    public static function loadSites()
    {
        global $config;
        foreach ($config->sites as $site) {
            // This is where we'd make a DB call rather than switch.
            switch ($site) {
                case 'guardian':
                    $addSite = new stdClass();
                    $addSite->apiKey = '83ab950c-104d-4e34-adb0-a5ebbedb5f0a';
                    $addSite->apiKeyParam = 'api-key';
                    $addSite->path = '/search';
                    $addSite->responseBodyParam = 'response';
                    $addSite->responseOKParam = 'status';
                    $addSite->responseResultsParam = 'results';
                    $addSite->resultDateParam = 'webPublicationDate';
                    $addSite->resultIDParam = 'id';
                    $addSite->resultSectionParam = 'sectionName';
                    $addSite->resultTitleParam = 'webTitle';
                    $addSite->resultURLParam = 'webUrl';
                    $addSite->searchParam = 'q';
//                    TODO use secure API when off localhost.
                    $addSite->url = 'http://content.guardianapis.com';
                    self::$sites['guardian'] = $addSite;
                    break;
                default:
                    break;
            }
        }
    }
}
