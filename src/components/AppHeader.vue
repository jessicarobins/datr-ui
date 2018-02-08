<template>
  <div class="app-header">
    <h1 class="display-3">date-o-matic</h1>
    <div class="zip-code-container">
      <span class="subheading">INSERT ZIP CODE INTO SLOT</span>
      <v-text-field
        :value="zipcode"
        @input="updateZipcode"
        append-icon="location_searching"
        solo></v-text-field>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { SET_ZIPCODE } from '@/store/types'

export default {
  name: 'AppHeader',
  computed: {
    ...mapState({
      zipcode: state => state.location.zipcode
    })
  },
  methods: {
    updateZipcode(value) {
      this.$store.commit(SET_ZIPCODE, value)
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
</style>
