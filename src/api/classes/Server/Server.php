<?php

namespace api\classes\Server;


class Server
{
    public function fetchApiPostData() {
        if($_SERVER['REQUEST_METHOD'] == 'POST') {
            $POST = file_get_contents("php://input");
            $_POST = json_decode($POST, true);
        }
    }

    public function getUrlArgs(string $url) : array {
        $allUrlArgs =  explode('/', $url);
        //todo: filter url args from link
        return $allUrlArgs;
    }
}