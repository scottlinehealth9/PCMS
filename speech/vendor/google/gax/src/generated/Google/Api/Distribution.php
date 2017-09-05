<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: google/api/distribution.proto

namespace Google\Api;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Distribution contains summary statistics for a population of values and,
 * optionally, a histogram representing the distribution of those values across
 * a specified set of histogram buckets.
 * The summary statistics are the count, mean, sum of the squared deviation from
 * the mean, the minimum, and the maximum of the set of population of values.
 * The histogram is based on a sequence of buckets and gives a count of values
 * that fall into each bucket.  The boundaries of the buckets are given either
 * explicitly or by specifying parameters for a method of computing them
 * (buckets of fixed width or buckets of exponentially increasing width).
 * Although it is not forbidden, it is generally a bad idea to include
 * non-finite values (infinities or NaNs) in the population of values, as this
 * will render the `mean` and `sum_of_squared_deviation` fields meaningless.
 *
 * Protobuf type <code>Google\Api\Distribution</code>
 */
class Distribution extends \Google\Protobuf\Internal\Message
{
    /**
     * The number of values in the population. Must be non-negative.
     *
     * Generated from protobuf field <code>int64 count = 1;</code>
     */
    private $count = 0;
    /**
     * The arithmetic mean of the values in the population. If `count` is zero
     * then this field must be zero.
     *
     * Generated from protobuf field <code>double mean = 2;</code>
     */
    private $mean = 0.0;
    /**
     * The sum of squared deviations from the mean of the values in the
     * population.  For values x_i this is:
     *     Sum[i=1..n]((x_i - mean)^2)
     * Knuth, "The Art of Computer Programming", Vol. 2, page 323, 3rd edition
     * describes Welford's method for accumulating this sum in one pass.
     * If `count` is zero then this field must be zero.
     *
     * Generated from protobuf field <code>double sum_of_squared_deviation = 3;</code>
     */
    private $sum_of_squared_deviation = 0.0;
    /**
     * If specified, contains the range of the population values. The field
     * must not be present if the `count` is zero.
     *
     * Generated from protobuf field <code>.google.api.Distribution.Range range = 4;</code>
     */
    private $range = null;
    /**
     * Defines the histogram bucket boundaries.
     *
     * Generated from protobuf field <code>.google.api.Distribution.BucketOptions bucket_options = 6;</code>
     */
    private $bucket_options = null;
    /**
     * If `bucket_options` is given, then the sum of the values in `bucket_counts`
     * must equal the value in `count`.  If `bucket_options` is not given, no
     * `bucket_counts` fields may be given.
     * Bucket counts are given in order under the numbering scheme described
     * above (the underflow bucket has number 0; the finite buckets, if any,
     * have numbers 1 through N-2; the overflow bucket has number N-1).
     * The size of `bucket_counts` must be no greater than N as defined in
     * `bucket_options`.
     * Any suffix of trailing zero bucket_count fields may be omitted.
     *
     * Generated from protobuf field <code>repeated int64 bucket_counts = 7;</code>
     */
    private $bucket_counts;

    public function __construct() {
        \GPBMetadata\Google\Api\Distribution::initOnce();
        parent::__construct();
    }

    /**
     * The number of values in the population. Must be non-negative.
     *
     * Generated from protobuf field <code>int64 count = 1;</code>
     * @return int|string
     */
    public function getCount()
    {
        return $this->count;
    }

    /**
     * The number of values in the population. Must be non-negative.
     *
     * Generated from protobuf field <code>int64 count = 1;</code>
     * @param int|string $var
     */
    public function setCount($var)
    {
        GPBUtil::checkInt64($var);
        $this->count = $var;
    }

    /**
     * The arithmetic mean of the values in the population. If `count` is zero
     * then this field must be zero.
     *
     * Generated from protobuf field <code>double mean = 2;</code>
     * @return float
     */
    public function getMean()
    {
        return $this->mean;
    }

    /**
     * The arithmetic mean of the values in the population. If `count` is zero
     * then this field must be zero.
     *
     * Generated from protobuf field <code>double mean = 2;</code>
     * @param float $var
     */
    public function setMean($var)
    {
        GPBUtil::checkDouble($var);
        $this->mean = $var;
    }

    /**
     * The sum of squared deviations from the mean of the values in the
     * population.  For values x_i this is:
     *     Sum[i=1..n]((x_i - mean)^2)
     * Knuth, "The Art of Computer Programming", Vol. 2, page 323, 3rd edition
     * describes Welford's method for accumulating this sum in one pass.
     * If `count` is zero then this field must be zero.
     *
     * Generated from protobuf field <code>double sum_of_squared_deviation = 3;</code>
     * @return float
     */
    public function getSumOfSquaredDeviation()
    {
        return $this->sum_of_squared_deviation;
    }

    /**
     * The sum of squared deviations from the mean of the values in the
     * population.  For values x_i this is:
     *     Sum[i=1..n]((x_i - mean)^2)
     * Knuth, "The Art of Computer Programming", Vol. 2, page 323, 3rd edition
     * describes Welford's method for accumulating this sum in one pass.
     * If `count` is zero then this field must be zero.
     *
     * Generated from protobuf field <code>double sum_of_squared_deviation = 3;</code>
     * @param float $var
     */
    public function setSumOfSquaredDeviation($var)
    {
        GPBUtil::checkDouble($var);
        $this->sum_of_squared_deviation = $var;
    }

    /**
     * If specified, contains the range of the population values. The field
     * must not be present if the `count` is zero.
     *
     * Generated from protobuf field <code>.google.api.Distribution.Range range = 4;</code>
     * @return \Google\Api\Distribution_Range
     */
    public function getRange()
    {
        return $this->range;
    }

    /**
     * If specified, contains the range of the population values. The field
     * must not be present if the `count` is zero.
     *
     * Generated from protobuf field <code>.google.api.Distribution.Range range = 4;</code>
     * @param \Google\Api\Distribution_Range $var
     */
    public function setRange(&$var)
    {
        GPBUtil::checkMessage($var, \Google\Api\Distribution_Range::class);
        $this->range = $var;
    }

    /**
     * Defines the histogram bucket boundaries.
     *
     * Generated from protobuf field <code>.google.api.Distribution.BucketOptions bucket_options = 6;</code>
     * @return \Google\Api\Distribution_BucketOptions
     */
    public function getBucketOptions()
    {
        return $this->bucket_options;
    }

    /**
     * Defines the histogram bucket boundaries.
     *
     * Generated from protobuf field <code>.google.api.Distribution.BucketOptions bucket_options = 6;</code>
     * @param \Google\Api\Distribution_BucketOptions $var
     */
    public function setBucketOptions(&$var)
    {
        GPBUtil::checkMessage($var, \Google\Api\Distribution_BucketOptions::class);
        $this->bucket_options = $var;
    }

    /**
     * If `bucket_options` is given, then the sum of the values in `bucket_counts`
     * must equal the value in `count`.  If `bucket_options` is not given, no
     * `bucket_counts` fields may be given.
     * Bucket counts are given in order under the numbering scheme described
     * above (the underflow bucket has number 0; the finite buckets, if any,
     * have numbers 1 through N-2; the overflow bucket has number N-1).
     * The size of `bucket_counts` must be no greater than N as defined in
     * `bucket_options`.
     * Any suffix of trailing zero bucket_count fields may be omitted.
     *
     * Generated from protobuf field <code>repeated int64 bucket_counts = 7;</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getBucketCounts()
    {
        return $this->bucket_counts;
    }

    /**
     * If `bucket_options` is given, then the sum of the values in `bucket_counts`
     * must equal the value in `count`.  If `bucket_options` is not given, no
     * `bucket_counts` fields may be given.
     * Bucket counts are given in order under the numbering scheme described
     * above (the underflow bucket has number 0; the finite buckets, if any,
     * have numbers 1 through N-2; the overflow bucket has number N-1).
     * The size of `bucket_counts` must be no greater than N as defined in
     * `bucket_options`.
     * Any suffix of trailing zero bucket_count fields may be omitted.
     *
     * Generated from protobuf field <code>repeated int64 bucket_counts = 7;</code>
     * @param array|\Google\Protobuf\Internal\RepeatedField $var
     */
    public function setBucketCounts(&$var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::INT64);
        $this->bucket_counts = $arr;
    }

}

