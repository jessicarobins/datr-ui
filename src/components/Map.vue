<template>
  <gmap-map ref="map" :center="center" :zoom="14" style="width: 100%; height: 300px">
    <gmap-marker
      :key="key"
      v-for="(value, key) in places"
      :place="place(value.details)"
      :label="label(value.details)"
      :clickable="true"
      :icon="icon(value.svg)"
      :title="value.details.name"
      @click="toggleInfoWindow(value.details, key)">
      <gmap-info-window
        :opened="infoOpen(key)"
        @closeclick="openInfoKey=null">
        <strong>
          <a
            :href="infoContent.website"
            target="_blank"
            v-if="infoContent.website">{{ infoContent.name }}</a>
          <span v-html="infoContent.name" v-else />
        </strong>
        <div>{{ infoContent.formatted_address }}</div>
        <div>{{ infoContent.formatted_phone_number }}</div>
      </gmap-info-window>
    </gmap-marker>
  </gmap-map>
</template>

<script>
export default {
  name: 'Map',
  props: {
    places: Object
  },
  data() {
    return {
      openInfoKey: null,
      infoContent: ''
    }
  },
  computed: {
    place() {
      return ({ place_id: placeId, geometry: { location } }) => ({ placeId, location })
    },
    icon() {
      return svg => ({
        url: svg,
        labelOrigin: new window.google.maps.Point(15, 30)
      })
    },
    label() {
      return ({ name }) => ({
        fontWeight: 'bold',
        text: name
      })
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
      this.infoContent = details
      if (this.openInfoKey === key) {
        this.openInfoKey = null
      } else {
        this.openInfoKey = key
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
