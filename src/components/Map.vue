<template>
  <gmap-map ref="map" :center="center" :zoom="13" style="width: 100%; height: 300px">
    <gmap-marker
      :key="key"
      v-for="(value, key) in places"
      :place="place(value.details)"
      :clickable="true"
      :icon="icon(value.svgPath)"
      :title="value.details.name"
      @click="toggleInfoWindow(value.details, key)">
      <gmap-info-window
        :opened="isSelected(key)"
        @closeclick="setSelected(null)">
        <strong>
          <a
            :href="infoContent(key).website"
            target="_blank"
            v-if="infoContent(key).website">{{ infoContent(key).name }}</a>
          <span v-html="infoContent(key).name" v-else />
        </strong>
        <div>{{ infoContent(key).formatted_address }}</div>
        <div>{{ infoContent(key).formatted_phone_number }}</div>
      </gmap-info-window>
    </gmap-marker>
  </gmap-map>
</template>

<script>
export default {
  name: 'Map',
  props: {
    places: Object,
    isSelected: Function,
    setSelected: Function
  },
  computed: {
    place() {
      return ({ place_id: placeId, geometry: { location } }) => ({ placeId, location })
    },
    icon() {
      return svgPath => ({
        fillColor: this.$vuetify.theme.primary,
        fillOpacity: 1,
        scale: 1.25,
        strokeColor: 'white',
        strokeWeight: 0.5,
        path: svgPath
      })
    },
    infoContent() {
      return key => this.places[key].details
    },
    infoOpen() {
      return key => (this.openInfoKey === key)
    },
    center() {
      return this.bounds.getCenter()
    },
    bounds() {
      const bound = new window.google.maps.LatLngBounds()
      Object.values(this.places)
        .forEach(({ details }) => {
          bound.extend(details.geometry.location)
        })
      return bound
    }
  },
  mounted() {
    this.$refs.map.fitBounds(this.bounds)
  },
  methods: {
    toggleInfoWindow(details, key) {
      if (this.openInfoKey === key) {
        this.setSelected(null)
      } else {
        this.setSelected(key)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
