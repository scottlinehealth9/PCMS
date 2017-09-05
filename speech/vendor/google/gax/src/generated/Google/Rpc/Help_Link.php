<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: google/rpc/error_details.proto

namespace Google\Rpc;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Describes a URL link.
 *
 * Protobuf type <code>Google\Rpc\Help\Link</code>
 */
class Help_Link extends \Google\Protobuf\Internal\Message
{
    /**
     * Describes what the link offers.
     *
     * Generated from protobuf field <code>string description = 1;</code>
     */
    private $description = '';
    /**
     * The URL of the link.
     *
     * Generated from protobuf field <code>string url = 2;</code>
     */
    private $url = '';

    public function __construct() {
        \GPBMetadata\Google\Rpc\ErrorDetails::initOnce();
        parent::__construct();
    }

    /**
     * Describes what the link offers.
     *
     * Generated from protobuf field <code>string description = 1;</code>
     * @return string
     */
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * Describes what the link offers.
     *
     * Generated from protobuf field <code>string description = 1;</code>
     * @param string $var
     */
    public function setDescription($var)
    {
        GPBUtil::checkString($var, True);
        $this->description = $var;
    }

    /**
     * The URL of the link.
     *
     * Generated from protobuf field <code>string url = 2;</code>
     * @return string
     */
    public function getUrl()
    {
        return $this->url;
    }

    /**
     * The URL of the link.
     *
     * Generated from protobuf field <code>string url = 2;</code>
     * @param string $var
     */
    public function setUrl($var)
    {
        GPBUtil::checkString($var, True);
        $this->url = $var;
    }

}

