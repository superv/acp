<template>
    <div>
        <div><input @keyup="search" class="sv-input" placeholder="Search" v-model="query"></div>
        <div class="inline-flex justify-between items-center bg-gray-300 rounded m-2 p-2 " v-for="item in items">
            <h1 class="mx-2">{{item.data.handle}}</h1>
            <label class="switch">
                <input type="checkbox" v-model="item.selected">
                <span class="switch-slider round"></span>
            </label>
        </div>
        <div class="text-right">
            <sv-button @click="submit" color="green" size="xs">Submit</sv-button>
        </div>
    </div>
</template>

<script>
import { debounce } from 'lodash'

export default {
  name: 'SvPicker',
  props: ['source', 'target', 'payload'],
  data() {
    return {
      query: null,
      items: [],
    }
  },
  created() {
    this.fetch()
  },
  computed: {
    selectedItems() {
      return this.items
      .filter(item => item.selected === true)
      .map(item => item.data.id)
    },
  },
  methods: {
    search: debounce(function () {
      this.fetch()
    }, 500),
    async submit() {
      const resp = await this.$api.post('supreme/dashboard', {
        items: this.selectedItems,
        payload: this.payload,
      })
      if (resp.fail) {
        return this.$notifyError(resp)
      }

      this.$notifySuccess('Items submitted')
    },
    async fetch() {
      const endpoint =
        'supreme/dashboard' + (this.query ? '?query=' + this.query : '')
      const resp = await this.$api.get(endpoint)
      if (resp.fail) {
        return this.$notifyError(resp)
      }

      if (resp.data.items) {
        this.items = []
        resp.data.items.map(item =>
          this.items.push({
            selected: false,
            data: item,
          }),
        )
      }
    },
  },
}
</script>

<style scoped>
</style>
