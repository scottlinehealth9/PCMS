<?php
# Includes the autoloader for libraries installed with composer
require  '/vendor/autoload.php';

# Imports the Google Cloud client library
use Google\Cloud\Speech\SpeechClient;

# Your Google Cloud Platform project ID
$projectId = 'third-ridge-176211';

# Instantiates a client
$speech = new SpeechClient([
    'projectId' => $projectId,
    'languageCode' => 'en-US',
]);

# The name of the audio file to transcribe
$fileName =  '/resources/audio.raw';

# The audio file's encoding and sample rate
$options = [
    'encoding' => 'LINEAR16',
    'sampleRateHertz' => 16000,
];

# Detects speech in the audio file
$results = $speech->recognize(fopen($fileName, 'r'), $options);

foreach ($results[0]->alternatives() as $alternative) {
    echo 'Transcription: ' . $alternative['transcript'] . PHP_EOL;
}
error_reporting(E_ALL);
?>