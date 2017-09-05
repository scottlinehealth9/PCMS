<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: google/privacy/dlp/v2beta1/storage.proto

namespace Google\Privacy\Dlp\V2beta1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Record key for a finding in a Cloud Storage file.
 *
 * Generated from protobuf message <code>google.privacy.dlp.v2beta1.CloudStorageKey</code>
 */
class CloudStorageKey extends \Google\Protobuf\Internal\Message
{
    /**
     * Path to the file.
     *
     * Generated from protobuf field <code>string file_path = 1;</code>
     */
    private $file_path = '';
    /**
     * Byte offset of the referenced data in the file.
     *
     * Generated from protobuf field <code>int64 start_offset = 2;</code>
     */
    private $start_offset = 0;

    public function __construct() {
        \GPBMetadata\Google\Privacy\Dlp\V2Beta1\Storage::initOnce();
        parent::__construct();
    }

    /**
     * Path to the file.
     *
     * Generated from protobuf field <code>string file_path = 1;</code>
     * @return string
     */
    public function getFilePath()
    {
        return $this->file_path;
    }

    /**
     * Path to the file.
     *
     * Generated from protobuf field <code>string file_path = 1;</code>
     * @param string $var
     */
    public function setFilePath($var)
    {
        GPBUtil::checkString($var, True);
        $this->file_path = $var;
    }

    /**
     * Byte offset of the referenced data in the file.
     *
     * Generated from protobuf field <code>int64 start_offset = 2;</code>
     * @return int|string
     */
    public function getStartOffset()
    {
        return $this->start_offset;
    }

    /**
     * Byte offset of the referenced data in the file.
     *
     * Generated from protobuf field <code>int64 start_offset = 2;</code>
     * @param int|string $var
     */
    public function setStartOffset($var)
    {
        GPBUtil::checkInt64($var);
        $this->start_offset = $var;
    }

}

