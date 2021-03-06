<?php
// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Copyright 2017 Google Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
namespace Google\Privacy\Dlp\V2beta1;

/**
 * The DLP API is a service that allows clients
 * to detect the presence of Personally Identifiable Information (PII) and other
 * privacy-sensitive data in user-supplied, unstructured data streams, like text
 * blocks or images.
 * The service also includes methods for sensitive data redaction and
 * scheduling of data scans on Google Cloud Platform based data sets.
 */
class DlpServiceGrpcClient extends \Grpc\BaseStub {

    /**
     * @param string $hostname hostname
     * @param array $opts channel options
     * @param \Grpc\Channel $channel (optional) re-use channel object
     */
    public function __construct($hostname, $opts, $channel = null) {
        parent::__construct($hostname, $opts, $channel);
    }

    /**
     * Finds potentially sensitive info in a list of strings.
     * This method has limits on input size, processing time, and output size.
     * @param \Google\Privacy\Dlp\V2beta1\InspectContentRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function InspectContent(\Google\Privacy\Dlp\V2beta1\InspectContentRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/google.privacy.dlp.v2beta1.DlpService/InspectContent',
        $argument,
        ['\Google\Privacy\Dlp\V2beta1\InspectContentResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * Redacts potentially sensitive info from a list of strings.
     * This method has limits on input size, processing time, and output size.
     * @param \Google\Privacy\Dlp\V2beta1\RedactContentRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function RedactContent(\Google\Privacy\Dlp\V2beta1\RedactContentRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/google.privacy.dlp.v2beta1.DlpService/RedactContent',
        $argument,
        ['\Google\Privacy\Dlp\V2beta1\RedactContentResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * Schedules a job scanning content in a Google Cloud Platform data
     * repository.
     * @param \Google\Privacy\Dlp\V2beta1\CreateInspectOperationRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function CreateInspectOperation(\Google\Privacy\Dlp\V2beta1\CreateInspectOperationRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/google.privacy.dlp.v2beta1.DlpService/CreateInspectOperation',
        $argument,
        ['\Google\Longrunning\Operation', 'decode'],
        $metadata, $options);
    }

    /**
     * Returns list of results for given inspect operation result set id.
     * @param \Google\Privacy\Dlp\V2beta1\ListInspectFindingsRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function ListInspectFindings(\Google\Privacy\Dlp\V2beta1\ListInspectFindingsRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/google.privacy.dlp.v2beta1.DlpService/ListInspectFindings',
        $argument,
        ['\Google\Privacy\Dlp\V2beta1\ListInspectFindingsResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * Returns sensitive information types for given category.
     * @param \Google\Privacy\Dlp\V2beta1\ListInfoTypesRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function ListInfoTypes(\Google\Privacy\Dlp\V2beta1\ListInfoTypesRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/google.privacy.dlp.v2beta1.DlpService/ListInfoTypes',
        $argument,
        ['\Google\Privacy\Dlp\V2beta1\ListInfoTypesResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * Returns the list of root categories of sensitive information.
     * @param \Google\Privacy\Dlp\V2beta1\ListRootCategoriesRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function ListRootCategories(\Google\Privacy\Dlp\V2beta1\ListRootCategoriesRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/google.privacy.dlp.v2beta1.DlpService/ListRootCategories',
        $argument,
        ['\Google\Privacy\Dlp\V2beta1\ListRootCategoriesResponse', 'decode'],
        $metadata, $options);
    }

}
