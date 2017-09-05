<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: google/api/system_parameter.proto

namespace Google\Api;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Define a system parameter rule mapping system parameter definitions to
 * methods.
 *
 * Protobuf type <code>Google\Api\SystemParameterRule</code>
 */
class SystemParameterRule extends \Google\Protobuf\Internal\Message
{
    /**
     * Selects the methods to which this rule applies. Use '*' to indicate all
     * methods in all APIs.
     * Refer to [selector][google.api.DocumentationRule.selector] for syntax details.
     *
     * Generated from protobuf field <code>string selector = 1;</code>
     */
    private $selector = '';
    /**
     * Define parameters. Multiple names may be defined for a parameter.
     * For a given method call, only one of them should be used. If multiple
     * names are used the behavior is implementation-dependent.
     * If none of the specified names are present the behavior is
     * parameter-dependent.
     *
     * Generated from protobuf field <code>repeated .google.api.SystemParameter parameters = 2;</code>
     */
    private $parameters;

    public function __construct() {
        \GPBMetadata\Google\Api\SystemParameter::initOnce();
        parent::__construct();
    }

    /**
     * Selects the methods to which this rule applies. Use '*' to indicate all
     * methods in all APIs.
     * Refer to [selector][google.api.DocumentationRule.selector] for syntax details.
     *
     * Generated from protobuf field <code>string selector = 1;</code>
     * @return string
     */
    public function getSelector()
    {
        return $this->selector;
    }

    /**
     * Selects the methods to which this rule applies. Use '*' to indicate all
     * methods in all APIs.
     * Refer to [selector][google.api.DocumentationRule.selector] for syntax details.
     *
     * Generated from protobuf field <code>string selector = 1;</code>
     * @param string $var
     */
    public function setSelector($var)
    {
        GPBUtil::checkString($var, True);
        $this->selector = $var;
    }

    /**
     * Define parameters. Multiple names may be defined for a parameter.
     * For a given method call, only one of them should be used. If multiple
     * names are used the behavior is implementation-dependent.
     * If none of the specified names are present the behavior is
     * parameter-dependent.
     *
     * Generated from protobuf field <code>repeated .google.api.SystemParameter parameters = 2;</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getParameters()
    {
        return $this->parameters;
    }

    /**
     * Define parameters. Multiple names may be defined for a parameter.
     * For a given method call, only one of them should be used. If multiple
     * names are used the behavior is implementation-dependent.
     * If none of the specified names are present the behavior is
     * parameter-dependent.
     *
     * Generated from protobuf field <code>repeated .google.api.SystemParameter parameters = 2;</code>
     * @param array|\Google\Protobuf\Internal\RepeatedField $var
     */
    public function setParameters(&$var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::MESSAGE, \Google\Api\SystemParameter::class);
        $this->parameters = $arr;
    }

}

