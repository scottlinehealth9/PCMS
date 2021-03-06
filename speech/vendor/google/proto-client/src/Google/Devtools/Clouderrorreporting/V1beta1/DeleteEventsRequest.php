<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: google/devtools/clouderrorreporting/v1beta1/error_stats_service.proto

namespace Google\Devtools\Clouderrorreporting\V1beta1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Deletes all events in the project.
 *
 * Generated from protobuf message <code>google.devtools.clouderrorreporting.v1beta1.DeleteEventsRequest</code>
 */
class DeleteEventsRequest extends \Google\Protobuf\Internal\Message
{
    /**
     * [Required] The resource name of the Google Cloud Platform project. Written
     * as `projects/` plus the
     * [Google Cloud Platform project
     * ID](https://support.google.com/cloud/answer/6158840).
     * Example: `projects/my-project-123`.
     *
     * Generated from protobuf field <code>string project_name = 1;</code>
     */
    private $project_name = '';

    public function __construct() {
        \GPBMetadata\Google\Devtools\Clouderrorreporting\V1Beta1\ErrorStatsService::initOnce();
        parent::__construct();
    }

    /**
     * [Required] The resource name of the Google Cloud Platform project. Written
     * as `projects/` plus the
     * [Google Cloud Platform project
     * ID](https://support.google.com/cloud/answer/6158840).
     * Example: `projects/my-project-123`.
     *
     * Generated from protobuf field <code>string project_name = 1;</code>
     * @return string
     */
    public function getProjectName()
    {
        return $this->project_name;
    }

    /**
     * [Required] The resource name of the Google Cloud Platform project. Written
     * as `projects/` plus the
     * [Google Cloud Platform project
     * ID](https://support.google.com/cloud/answer/6158840).
     * Example: `projects/my-project-123`.
     *
     * Generated from protobuf field <code>string project_name = 1;</code>
     * @param string $var
     */
    public function setProjectName($var)
    {
        GPBUtil::checkString($var, True);
        $this->project_name = $var;
    }

}

