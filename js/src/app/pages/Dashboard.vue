<template>
  <div class="sv-page-2 bg-gray-100 flex-grow">
    <sv-page-header title="Dashboard"></sv-page-header>

    <div class="p-8 pb-16">

      <sv-button color="green" @click="success">Success</sv-button>
      <sv-button color="red" @click="error">Error</sv-button>

    </div>

  </div>
</template>

<script>
import { SvButton, SvPageHeader } from 'superv-js'

export default {
  name: 'Dashboard',
  components: { SvButton, SvPageHeader },
  created() {
    this.fetch()
  },
  methods: {
    success() {
      this.$notifySuccess('Clicked..')
    },
    error() {
      this.$notifyError('Clicked..')
    },
    async fetch() {
      this.$api.get('supreme/dashboard')
    },
  },
}
</script>
