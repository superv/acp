<template>

    <layout-default router-type="tabbed">

        <template slot="site-header">
            <sv-site-header>
            </sv-site-header>
        </template>

        <template slot="sidebar">
            <sv-sidebar></sv-sidebar>
        </template>
    </layout-default>

</template>

<script>
import { LayoutDefault, SvSidebar, SvSiteHeader } from 'superv-js'

export default {
  name: 'Acp',
  components: { SvSiteHeader, SvSidebar, LayoutDefault },
}
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
body {
  @apply bg-base;
}

.font-sans {
  font-size: 14px;
  font-family: 'Montserrat', 'Helvetica Neue', Arial, sans-serif;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}

.material-icons {
  font-size: 20px !important;
}
</style>
