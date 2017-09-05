<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: google/logging/v2/logging.proto

namespace Google\Logging\V2;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * The parameters to WriteLogEntries.
 *
 * Generated from protobuf message <code>google.logging.v2.WriteLogEntriesRequest</code>
 */
class WriteLogEntriesRequest extends \Google\Protobuf\Internal\Message
{
    /**
     * Optional. A default log resource name that is assigned to all log entries
     * in `entries` that do not specify a value for `log_name`:
     *     "projects/[PROJECT_ID]/logs/[LOG_ID]"
     *     "organizations/[ORGANIZATION_ID]/logs/[LOG_ID]"
     *     "billingAccounts/[BILLING_ACCOUNT_ID]/logs/[LOG_ID]"
     *     "folders/[FOLDER_ID]/logs/[LOG_ID]"
     * `[LOG_ID]` must be URL-encoded. For example,
     * `"projects/my-project-id/logs/syslog"` or
     * `"organizations/1234567890/logs/cloudresourcemanager.googleapis.com%2Factivity"`.
     * For more information about log names, see
     * [LogEntry][google.logging.v2.LogEntry].
     *
     * Generated from protobuf field <code>string log_name = 1;</code>
     */
    private $log_name = '';
    /**
     * Optional. A default monitored resource object that is assigned to all log
     * entries in `entries` that do not specify a value for `resource`. Example:
     *     { "type": "gce_instance",
     *       "labels": {
     *         "zone": "us-central1-a", "instance_id": "00000000000000000000" }}
     * See [LogEntry][google.logging.v2.LogEntry].
     *
     * Generated from protobuf field <code>.google.api.MonitoredResource resource = 2;</code>
     */
    private $resource = null;
    /**
     * Optional. Default labels that are added to the `labels` field of all log
     * entries in `entries`. If a log entry already has a label with the same key
     * as a label in this parameter, then the log entry's label is not changed.
     * See [LogEntry][google.logging.v2.LogEntry].
     *
     * Generated from protobuf field <code>map<string, string> labels = 3;</code>
     */
    private $labels;
    /**
     * Required.  The log entries to write. Values supplied for the fields
     * `log_name`, `resource`, and `labels` in this `entries.write` request are
     * inserted into those log entries in this list that do not provide their own
     * values.
     * Stackdriver Logging also creates and inserts values for `timestamp` and
     * `insert_id` if the entries do not provide them. The created `insert_id` for
     * the N'th entry in this list will be greater than earlier entries and less
     * than later entries.  Otherwise, the order of log entries in this list does
     * not matter.
     * To improve throughput and to avoid exceeding the
     * [quota limit](/logging/quota-policy) for calls to `entries.write`,
     * you should write multiple log entries at once rather than
     * calling this method for each individual log entry.
     *
     * Generated from protobuf field <code>repeated .google.logging.v2.LogEntry entries = 4;</code>
     */
    private $entries;
    /**
     * Optional. Whether valid entries should be written even if some other
     * entries fail due to INVALID_ARGUMENT or PERMISSION_DENIED errors. If any
     * entry is not written, then the response status is the error associated
     * with one of the failed entries and the response includes error details
     * keyed by the entries' zero-based index in the `entries.write` method.
     *
     * Generated from protobuf field <code>bool partial_success = 5;</code>
     */
    private $partial_success = false;

    public function __construct() {
        \GPBMetadata\Google\Logging\V2\Logging::initOnce();
        parent::__construct();
    }

    /**
     * Optional. A default log resource name that is assigned to all log entries
     * in `entries` that do not specify a value for `log_name`:
     *     "projects/[PROJECT_ID]/logs/[LOG_ID]"
     *     "organizations/[ORGANIZATION_ID]/logs/[LOG_ID]"
     *     "billingAccounts/[BILLING_ACCOUNT_ID]/logs/[LOG_ID]"
     *     "folders/[FOLDER_ID]/logs/[LOG_ID]"
     * `[LOG_ID]` must be URL-encoded. For example,
     * `"projects/my-project-id/logs/syslog"` or
     * `"organizations/1234567890/logs/cloudresourcemanager.googleapis.com%2Factivity"`.
     * For more information about log names, see
     * [LogEntry][google.logging.v2.LogEntry].
     *
     * Generated from protobuf field <code>string log_name = 1;</code>
     * @return string
     */
    public function getLogName()
    {
        return $this->log_name;
    }

    /**
     * Optional. A default log resource name that is assigned to all log entries
     * in `entries` that do not specify a value for `log_name`:
     *     "projects/[PROJECT_ID]/logs/[LOG_ID]"
     *     "organizations/[ORGANIZATION_ID]/logs/[LOG_ID]"
     *     "billingAccounts/[BILLING_ACCOUNT_ID]/logs/[LOG_ID]"
     *     "folders/[FOLDER_ID]/logs/[LOG_ID]"
     * `[LOG_ID]` must be URL-encoded. For example,
     * `"projects/my-project-id/logs/syslog"` or
     * `"organizations/1234567890/logs/cloudresourcemanager.googleapis.com%2Factivity"`.
     * For more information about log names, see
     * [LogEntry][google.logging.v2.LogEntry].
     *
     * Generated from protobuf field <code>string log_name = 1;</code>
     * @param string $var
     */
    public function setLogName($var)
    {
        GPBUtil::checkString($var, True);
        $this->log_name = $var;
    }

    /**
     * Optional. A default monitored resource object that is assigned to all log
     * entries in `entries` that do not specify a value for `resource`. Example:
     *     { "type": "gce_instance",
     *       "labels": {
     *         "zone": "us-central1-a", "instance_id": "00000000000000000000" }}
     * See [LogEntry][google.logging.v2.LogEntry].
     *
     * Generated from protobuf field <code>.google.api.MonitoredResource resource = 2;</code>
     * @return \Google\Api\MonitoredResource
     */
    public function getResource()
    {
        return $this->resource;
    }

    /**
     * Optional. A default monitored resource object that is assigned to all log
     * entries in `entries` that do not specify a value for `resource`. Example:
     *     { "type": "gce_instance",
     *       "labels": {
     *         "zone": "us-central1-a", "instance_id": "00000000000000000000" }}
     * See [LogEntry][google.logging.v2.LogEntry].
     *
     * Generated from protobuf field <code>.google.api.MonitoredResource resource = 2;</code>
     * @param \Google\Api\MonitoredResource $var
     */
    public function setResource(&$var)
    {
        GPBUtil::checkMessage($var, \Google\Api\MonitoredResource::class);
        $this->resource = $var;
    }

    /**
     * Optional. Default labels that are added to the `labels` field of all log
     * entries in `entries`. If a log entry already has a label with the same key
     * as a label in this parameter, then the log entry's label is not changed.
     * See [LogEntry][google.logging.v2.LogEntry].
     *
     * Generated from protobuf field <code>map<string, string> labels = 3;</code>
     * @return \Google\Protobuf\Internal\MapField
     */
    public function getLabels()
    {
        return $this->labels;
    }

    /**
     * Optional. Default labels that are added to the `labels` field of all log
     * entries in `entries`. If a log entry already has a label with the same key
     * as a label in this parameter, then the log entry's label is not changed.
     * See [LogEntry][google.logging.v2.LogEntry].
     *
     * Generated from protobuf field <code>map<string, string> labels = 3;</code>
     * @param array|\Google\Protobuf\Internal\MapField $var
     */
    public function setLabels(&$var)
    {
        $arr = GPBUtil::checkMapField($var, \Google\Protobuf\Internal\GPBType::STRING, \Google\Protobuf\Internal\GPBType::STRING);
        $this->labels = $arr;
    }

    /**
     * Required.  The log entries to write. Values supplied for the fields
     * `log_name`, `resource`, and `labels` in this `entries.write` request are
     * inserted into those log entries in this list that do not provide their own
     * values.
     * Stackdriver Logging also creates and inserts values for `timestamp` and
     * `insert_id` if the entries do not provide them. The created `insert_id` for
     * the N'th entry in this list will be greater than earlier entries and less
     * than later entries.  Otherwise, the order of log entries in this list does
     * not matter.
     * To improve throughput and to avoid exceeding the
     * [quota limit](/logging/quota-policy) for calls to `entries.write`,
     * you should write multiple log entries at once rather than
     * calling this method for each individual log entry.
     *
     * Generated from protobuf field <code>repeated .google.logging.v2.LogEntry entries = 4;</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getEntries()
    {
        return $this->entries;
    }

    /**
     * Required.  The log entries to write. Values supplied for the fields
     * `log_name`, `resource`, and `labels` in this `entries.write` request are
     * inserted into those log entries in this list that do not provide their own
     * values.
     * Stackdriver Logging also creates and inserts values for `timestamp` and
     * `insert_id` if the entries do not provide them. The created `insert_id` for
     * the N'th entry in this list will be greater than earlier entries and less
     * than later entries.  Otherwise, the order of log entries in this list does
     * not matter.
     * To improve throughput and to avoid exceeding the
     * [quota limit](/logging/quota-policy) for calls to `entries.write`,
     * you should write multiple log entries at once rather than
     * calling this method for each individual log entry.
     *
     * Generated from protobuf field <code>repeated .google.logging.v2.LogEntry entries = 4;</code>
     * @param \Google\Logging\V2\LogEntry[]|\Google\Protobuf\Internal\RepeatedField $var
     */
    public function setEntries(&$var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::MESSAGE, \Google\Logging\V2\LogEntry::class);
        $this->entries = $arr;
    }

    /**
     * Optional. Whether valid entries should be written even if some other
     * entries fail due to INVALID_ARGUMENT or PERMISSION_DENIED errors. If any
     * entry is not written, then the response status is the error associated
     * with one of the failed entries and the response includes error details
     * keyed by the entries' zero-based index in the `entries.write` method.
     *
     * Generated from protobuf field <code>bool partial_success = 5;</code>
     * @return bool
     */
    public function getPartialSuccess()
    {
        return $this->partial_success;
    }

    /**
     * Optional. Whether valid entries should be written even if some other
     * entries fail due to INVALID_ARGUMENT or PERMISSION_DENIED errors. If any
     * entry is not written, then the response status is the error associated
     * with one of the failed entries and the response includes error details
     * keyed by the entries' zero-based index in the `entries.write` method.
     *
     * Generated from protobuf field <code>bool partial_success = 5;</code>
     * @param bool $var
     */
    public function setPartialSuccess($var)
    {
        GPBUtil::checkBool($var);
        $this->partial_success = $var;
    }

}

