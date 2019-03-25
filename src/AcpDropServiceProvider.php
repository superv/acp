<?php namespace SuperV\Drops\Acp;

use SuperV\Platform\Domains\Addon\AddonServiceProvider;

class AcpDropServiceProvider extends AddonServiceProvider
{
    public function register()
    {
        parent::register();
        $this->publishAssets();
    }

    protected function publishAssets()
    {
        $this->publishes([
            __DIR__.'/../resources/assets' => public_path('vendor/superv/acp'),
        ], 'superv.acp.assets');
    }
}