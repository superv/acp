<?php namespace SuperV\Drops\Acp;

use Artisan;
use SuperV\Platform\Domains\Addon\Types\Droplet;

class AcpDrop extends Droplet
{
    public function onInstalled()
    {
       Artisan::call('vendor:publish', ['--tag' => 'superv.acp.assets', '--force' => true]);
    }
}