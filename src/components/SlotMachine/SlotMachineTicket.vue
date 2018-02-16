<template>
  <v-dialog value="true" max-width="600" scrollable>
    <v-card>
      <v-card-text class="text-xs-left">
        <Map
          :places="placeTypes"
          :set-selected="setSelected"
          :is-selected="isSelected" />
        <PlaceDetail
          v-for="(value, key) in placeTypes"
          :name="key"
          :details="value.details"
          :icon="value.icon"
          :svg="value.svg"
          :selected="isSelected(key)"
          :set-selected="setSelected.bind(this, key)"
          :key="key" />
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" flat @click.stop="toggle">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { activitySvg, restaurantSvg, barSvg } from './icons'
import PlaceDetail from '../PlaceDetail.vue'
import Map from '../Map.vue'

export default {
  name: 'Ticket',
  components: {
    Map,
    PlaceDetail
  },
  props: {
    open: Boolean,
    toggle: Function
  },
  data() {
    return {
      selected: null
    }
  },
  methods: {
    setSelected(selected) {
      this.selected = selected
    }
  },
  watch: {
    open(value) {
      if (!value) {
        this.selected = null
      }
    }
  },
  computed: {
    placeTypes() {
      return ({
        food: {
          icon: 'restaurant',
          svgPath: restaurantSvg,
          details: this.place('restaurant')
        },
        activity: {
          icon: 'local_activity',
          svgPath: activitySvg,
          details: this.place('activity')
        },
        drinks: {
          icon: 'local_bar',
          svgPath: barSvg,
          details: this.place('bar')
        }
      })
    },
    place() {
      return type => this.$store.getters.place(type)
    },
    isSelected() {
      return type => this.selected === type
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../../styles/variables';
.map {
  width: 100%;
}
</style>
