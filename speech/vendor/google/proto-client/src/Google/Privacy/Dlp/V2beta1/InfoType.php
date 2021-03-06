<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: google/privacy/dlp/v2beta1/storage.proto

namespace Google\Privacy\Dlp\V2beta1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Type of information detected by the API.
 *
 * Generated from protobuf message <code>google.privacy.dlp.v2beta1.InfoType</code>
 */
class InfoType extends \Google\Protobuf\Internal\Message
{
    /**
     * Name of the information type. For built-in info types, this is provided by
     * the API call ListInfoTypes. For user-defined info types, this is
     * provided by the user. All user-defined info types must have unique names,
     * and cannot conflict with built-in info type names.
     *
     * Generated from protobuf field <code>string name = 1;</code>
     */
    private $name = '';

    public function __construct() {
        \GPBMetadata\Google\Privacy\Dlp\V2Beta1\Storage::initOnce();
        parent::__construct();
    }

    /**
     * Name of the information type. For built-in info types, this is provided by
     * the API call ListInfoTypes. For user-defined info types, this is
     * provided by the user. All user-defined info types must have unique names,
     * and cannot conflict with built-in info type names.
     *
     * Generated from protobuf field <code>string name = 1;</code>
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Name of the information type. For built-in info types, this is provided by
     * the API call ListInfoTypes. For user-defined info types, this is
     * provided by the user. All user-defined info types must have unique names,
     * and cannot conflict with built-in info type names.
     *
     * Generated from protobuf field <code>string name = 1;</code>
     * @param string $var
     */
    public function setName($var)
    {
        GPBUtil::checkString($var, True);
        $this->name = $var;
    }

}

