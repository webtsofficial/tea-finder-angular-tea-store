<?php
require_once 'vendor/autoload.php';
require_once 'config.php';

// set extra time-window in seconds for jwt
\Firebase\JWT\JWT::$leeway = 75;

// Whitelists

// instanciate classes
$server = new \api\classes\Server\Server();
$app = new \api\classes\App();

$server->fetchApiPostData();
