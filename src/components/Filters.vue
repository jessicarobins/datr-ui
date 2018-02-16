<template>
  <div class="filters">
    <div class="filter-container">
      <div class="radius">
        <h3 class="blue--text text--lighten-5 accent-font">{{ miles }}</h3>
        <v-slider
          dark
          label="search radius:"
          thumb-label
          step=".5"
          v-model="sliderValue"
          min=".5"
          max="10"
          ticks></v-slider>
      </div>
      <div class="categories">
        <div v-for="(value, category) in allCategories" :key="category" class="category">
          <h3 class="blue--text text--lighten-5 accent-font">{{ category }}</h3>
          <div class="checkbox-container">
            <v-checkbox
              dark
              v-for="type in value"
              :key="type"
              :label="label(type)"
              v-model="selectedCategories[category]"
              :value="type"
              hide-details></v-checkbox>
          </div>
        </div>
      </div>
    </div>
    <div>
      <v-btn flat dark @click="toggleOverlay">Cancel</v-btn>
      <v-btn color="primary" @click="save">Save</v-btn>
    </div>
  </div>
</template>

<script>
import cloneDeep from 'lodash/cloneDeep'
import { mapGetters, mapMutations } from 'vuex'
import { humanize } from 'inflection'
import { categories } from '@/store/modules/filters'
import * as types from '@/store/types'

export default {
  name: 'Filters',
  data() {
    return {
      allCategories: categories,
      selectedCategories: cloneDeep(this.$store.getters.categories),
      sliderValue: this.$store.getters.radius
    }
  },
  methods: {
    ...mapMutations({
      setTypes: types.SET_TYPES,
      changeRadius: types.CHANGE_RADIUS,
      toggleOverlay: types.TOGGLE_OVERLAY
    }),
    save() {
      this.changeRadius(this.sliderValue)
      this.setTypes(this.selectedCategories)
      this.toggleOverlay()
    }
  },
  computed: {
    ...mapGetters([
      'category',
      'selected'
    ]),
    miles() {
      const label = this.sliderValue === 1 ? 'mile' : 'miles'
      return `${this.sliderValue} ${label}`
    },
    label() {
      return type => humanize(type)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../styles/variables';

.radius {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .input-group--slider {
    max-width: 800px;
  }
}

.filter-container {
  height: calc(100% - 48px);
  overflow: auto;
}

.filters {
  padding: 30px;
  width: 100%;
  overflow: scroll;
  height: 100%;

  .categories {
    display: flex;

    .category {
      flex: 1;
    }
  }

  @media (max-width: $tablet-breakpoint) {
    flex-direction: column;
    padding: 10px;

    .categories {
      flex-direction: column;
    }
  }
}
</style>
