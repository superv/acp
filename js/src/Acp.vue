<template>

    <layout-default>

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
    data() {
        return {
            // layout: this.$store.layout
        }
    },
    created() {
        // this.$sv.$layout.tabsActive = true
    }
}
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
body {
    @apply bg-bg;
}

.font-sans {
  font-family: 'Montserrat', 'Helvetica Neue', Arial, sans-serif;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}

.material-icons {
  font-size: 20px !important;
}
</style>
