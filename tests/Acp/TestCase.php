<?php

namespace Tests\Acp;

use Illuminate\Foundation\Testing\RefreshDatabase;
use SuperV\Platform\Testing\PlatformTestCase;

class TestCase extends PlatformTestCase
{
    use RefreshDatabase;

    protected $installs = ['superv.drops.acp'];
}