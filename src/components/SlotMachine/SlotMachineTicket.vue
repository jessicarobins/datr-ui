<template>
  <v-dialog value="true" v-if="open" max-width="600" scrollable>
    <v-card>
      <v-card-text class="text-xs-left">
        <Map :places="placeTypes" />
        <PlaceDetail
          :name="key"
          :details="value.details"
          :icon="value.icon"
          :svg="value.svg"
          v-for="(value, key) in placeTypes"
          :key="key" />
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" flat @click.stop="toggle">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import activitySvg from '@/assets/activity.svg'
import barSvg from '@/assets/bar.svg'
import restaurantSvg from '@/assets/restaurant.svg'
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
  computed: {
    placeTypes() {
      return ({
        food: {
          icon: 'restaurant',
          svg: restaurantSvg,
          details: this.place('food')
        },
        activity: {
          icon: 'local_activity',
          svg: activitySvg,
          details: this.place('activity')
        },
        drinks: {
          icon: 'local_bar',
          svg: barSvg,
          details: this.place('night')
        }
      })
    },
    place() {
      return type => this.$store.getters.place(type)
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
