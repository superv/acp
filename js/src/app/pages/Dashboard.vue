<template>
    <div class="sv-page-2 bg-gray-100 flex-grow">
        <sv-page-header title="Dashboard"></sv-page-header>

        <div class="p-8 pb-10">
            <sv-card title="Picker">
                <sv-picker
                    :payload="pickerPayload"
                    source="http://acp.supreme.dev.io:8090/api/supreme/dashboard"
                    target="http://acp.supreme.dev.io:8090/api/supreme/dashboard"
                >
                </sv-picker>
            </sv-card>
        </div>

        <div class="p-8 pb-10">
            <sv-card title="Notifications">
                <div class="text-right">
                    <sv-button @click="success" color="green" size="xs">Success</sv-button>
                    <sv-button @click="error" color="red" size="xs">Error</sv-button>
                </div>
            </sv-card>
        </div>
    </div>
</template>

<script>
import { SvButton, SvCard, SvPageHeader } from 'superv-js'
import SvPicker from './SvPicker'

export default {
  name: 'Dashboard',
  components: { SvPicker, SvCard, SvButton, SvPageHeader },
  data() {
    return {
      pickerPayload: { provision: 'pass' }
    }
  },
  created() {
    // this.fetch()
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
