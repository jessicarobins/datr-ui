<template>
  <v-dialog value="true" v-if="open" max-width="600" scrollable>
    <v-card>
      <v-card-text class="text-xs-left">
        <iframe
          class="map"
          width="600"
          height="300"
          frameborder="0" style="border:0"
          :src="mapsUrl" allowfullscreen>
        </iframe>
        <PlaceDetail
          :name="key"
          :details="value.details"
          :icon="value.icon"
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
import PlaceDetail from '../PlaceDetail.vue'

export default {
  name: 'Ticket',
  components: {
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
          details: this.place('food')
        },
        activity: {
          icon: 'local_activity',
          details: this.place('activity')
        },
        drinks: {
          icon: 'local_bar',
          details: this.place('night')
        }
      })
    },
    place() {
      return type => this.$store.getters.place(type)
    },
    mapsUrl() {
      return `https://www.google.com/maps/embed/v1/directions?key=${process.env.VUE_APP_GOOGLE_MAPS_EMBED_API_KEY}&origin=place_id:${this.placeTypes.food.details.place_id}&destination=place_id:${this.placeTypes.drinks.details.place_id}&waypoints=place_id:${this.placeTypes.activity.details.place_id}&mode=walking`
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
