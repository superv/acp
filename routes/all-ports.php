<?php

return [
    'superv{path}' => [
        'uses'  => function () {
            if (! $port = Hub::getDefaultPort()) {
                return 'No registered ports found';
            }

            return view('superv.drops.acp::home', [
                'config' => [
                    'apiUrl' => $port->url(),
                    'baseUrl' => 'superv'
                ]
            ]);
        },
        'where' => ['path' => '.*'],
    ],

];
