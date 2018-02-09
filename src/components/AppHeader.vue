<template>
  <div class="app-header">
    <h1 class="display-3">date-o-matic</h1>
    <div class="zip-code-container">
      <span class="subheading">INSERT ZIP CODE</span>
      <div class="input-container">
        <v-text-field
          :value="zipcode"
          @input="updateZipcode"
          append-icon="location_on"
          :append-icon-cb="getZipcode"
          :disabled="loadingLocation"
          color="primary"
          solo></v-text-field>
        <v-progress-circular
          v-if="loadingLocation"
          class="spinner"
          indeterminate
          color="primary"></v-progress-circular>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { RESET_LOCATION, SET_ZIPCODE } from '@/store/types'

export default {
  name: 'AppHeader',
  data() {
    return {
      loadingLocation: false
    }
  },
  computed: {
    ...mapState({
      zipcode: state => state.location.zipcode
    })
  },
  methods: {
    async getZipcode() {
      this.loadingLocation = true
      await this.$store.dispatch('getZipcode')
      this.loadingLocation = false
    },
    updateZipcode(value) {
      this.$store.commit(SET_ZIPCODE, value)
      this.$store.commit(RESET_LOCATION)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.app-header {
  display: flex;
  margin-bottom: 10px;
}

.subheading {
  color: #fff;
}

.display-3 {
  flex: 1;
  align-self: center;
}

.zip-code-container {
  background-color: #1565C0;
  border-radius: 10px;
  padding: 10px 20px;
  width: 175px;
}

.input-container {
  position: relative;
}

.spinner {
  position: absolute;
  top: calc(50% - 16px);
  left: calc(50% - 16px);
  z-index: 2;
}
</style>
