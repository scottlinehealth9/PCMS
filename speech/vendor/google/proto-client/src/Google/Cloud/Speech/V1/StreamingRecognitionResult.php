<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: google/cloud/speech/v1/cloud_speech.proto

namespace Google\Cloud\Speech\V1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * A streaming speech recognition result corresponding to a portion of the audio
 * that is currently being processed.
 *
 * Generated from protobuf message <code>google.cloud.speech.v1.StreamingRecognitionResult</code>
 */
class StreamingRecognitionResult extends \Google\Protobuf\Internal\Message
{
    /**
     * *Output-only* May contain one or more recognition hypotheses (up to the
     * maximum specified in `max_alternatives`).
     *
     * Generated from protobuf field <code>repeated .google.cloud.speech.v1.SpeechRecognitionAlternative alternatives = 1;</code>
     */
    private $alternatives;
    /**
     * *Output-only* If `false`, this `StreamingRecognitionResult` represents an
     * interim result that may change. If `true`, this is the final time the
     * speech service will return this particular `StreamingRecognitionResult`,
     * the recognizer will not return any further hypotheses for this portion of
     * the transcript and corresponding audio.
     *
     * Generated from protobuf field <code>bool is_final = 2;</code>
     */
    private $is_final = false;
    /**
     * *Output-only* An estimate of the likelihood that the recognizer will not
     * change its guess about this interim result. Values range from 0.0
     * (completely unstable) to 1.0 (completely stable).
     * This field is only provided for interim results (`is_final=false`).
     * The default of 0.0 is a sentinel value indicating `stability` was not set.
     *
     * Generated from protobuf field <code>float stability = 3;</code>
     */
    private $stability = 0.0;

    public function __construct() {
        \GPBMetadata\Google\Cloud\Speech\V1\CloudSpeech::initOnce();
        parent::__construct();
    }

    /**
     * *Output-only* May contain one or more recognition hypotheses (up to the
     * maximum specified in `max_alternatives`).
     *
     * Generated from protobuf field <code>repeated .google.cloud.speech.v1.SpeechRecognitionAlternative alternatives = 1;</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getAlternatives()
    {
        return $this->alternatives;
    }

    /**
     * *Output-only* May contain one or more recognition hypotheses (up to the
     * maximum specified in `max_alternatives`).
     *
     * Generated from protobuf field <code>repeated .google.cloud.speech.v1.SpeechRecognitionAlternative alternatives = 1;</code>
     * @param \Google\Cloud\Speech\V1\SpeechRecognitionAlternative[]|\Google\Protobuf\Internal\RepeatedField $var
     */
    public function setAlternatives(&$var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::MESSAGE, \Google\Cloud\Speech\V1\SpeechRecognitionAlternative::class);
        $this->alternatives = $arr;
    }

    /**
     * *Output-only* If `false`, this `StreamingRecognitionResult` represents an
     * interim result that may change. If `true`, this is the final time the
     * speech service will return this particular `StreamingRecognitionResult`,
     * the recognizer will not return any further hypotheses for this portion of
     * the transcript and corresponding audio.
     *
     * Generated from protobuf field <code>bool is_final = 2;</code>
     * @return bool
     */
    public function getIsFinal()
    {
        return $this->is_final;
    }

    /**
     * *Output-only* If `false`, this `StreamingRecognitionResult` represents an
     * interim result that may change. If `true`, this is the final time the
     * speech service will return this particular `StreamingRecognitionResult`,
     * the recognizer will not return any further hypotheses for this portion of
     * the transcript and corresponding audio.
     *
     * Generated from protobuf field <code>bool is_final = 2;</code>
     * @param bool $var
     */
    public function setIsFinal($var)
    {
        GPBUtil::checkBool($var);
        $this->is_final = $var;
    }

    /**
     * *Output-only* An estimate of the likelihood that the recognizer will not
     * change its guess about this interim result. Values range from 0.0
     * (completely unstable) to 1.0 (completely stable).
     * This field is only provided for interim results (`is_final=false`).
     * The default of 0.0 is a sentinel value indicating `stability` was not set.
     *
     * Generated from protobuf field <code>float stability = 3;</code>
     * @return float
     */
    public function getStability()
    {
        return $this->stability;
    }

    /**
     * *Output-only* An estimate of the likelihood that the recognizer will not
     * change its guess about this interim result. Values range from 0.0
     * (completely unstable) to 1.0 (completely stable).
     * This field is only provided for interim results (`is_final=false`).
     * The default of 0.0 is a sentinel value indicating `stability` was not set.
     *
     * Generated from protobuf field <code>float stability = 3;</code>
     * @param float $var
     */
    public function setStability($var)
    {
        GPBUtil::checkFloat($var);
        $this->stability = $var;
    }

}

