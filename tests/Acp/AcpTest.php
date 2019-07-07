<?php

namespace Tests\Acp;

class AcpTest extends TestCase
{
    function test__module_is_installed()
    {
        $this->assertNotNull(superv('addons')->get('superv.drops.acp'));
    }
}