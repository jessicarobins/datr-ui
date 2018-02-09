<template>
  <div class="zipcode-container">
    <div class="zipcode">
      <span class="subheading">1 ZIP CODE</span>
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
  name: 'Zipcode',
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
<style scoped lang="scss">
@import '../styles/variables';

.zipcode {
  background: linear-gradient(90deg, #fff 0, #BDBDBD 115%);
  border: $silver-border;
  border-radius: 10px;
  padding: 10px 20px;
  width: 180px;
  border-top: 0;
  margin-top: -2px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.input-container {
  position: relative;
}

.subheading {
  font-family: 'Orbitron', sans-serif;
}

.spinner {
  position: absolute;
  top: calc(50% - 16px);
  left: calc(50% - 16px);
  z-index: 2;
}
</style>
