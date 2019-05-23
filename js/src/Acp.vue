<template>

  <layout-default router-type="tabbed">

    <template slot="site-header">
      <sv-site-header>
        <template slot="logo">
          <svg class="fill-current w-24" viewBox="0 0 226 62" xmlns="http://www.w3.org/2000/svg">-->
                        <g fill="none" fill-rule="evenodd" font-weight="500" stroke="none" stroke-width="1">
                          <g fill="#999999" transform="translate(-1.000000, -25.000000)">
                            <text font-family="Montserrat" font-size="60">
                              <tspan x="0" y="71">supreme</tspan>
                            </text>
                            <text fill="#67c23a" font-family=""
                                  font-size="70" font-style="italic">
                              <tspan x="156" y="72">E</tspan>
                            </text>
                          </g>
                        </g>
                      </svg>
        </template>
      </sv-site-header>
    </template>

    <template slot="sidebar">
      <sv-sidebar>

      </sv-sidebar>
    </template>
<!--    <template slot="site-header">-->
<!--      <sv-site-header>-->
<!--        <template slot="logo">-->
<!--&lt;!&ndash;-->
<!--        </template>-->
<!--      </sv-site-header>-->
<!--    </template>-->

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
