<template>
  <div class="flex justify-center items-center h-screen w-full">
    <sv-login-form>
      <div slot="logo" class="md:w-1/5 w-2/3">
        <svg-image file="logo"></svg-image>
      </div>
    </sv-login-form>
  </div>

</template>

<script>
import { SvLoginForm } from 'superv-js'

export default {
  name: 'Login',
  components: { SvLoginForm },
}
</script>
