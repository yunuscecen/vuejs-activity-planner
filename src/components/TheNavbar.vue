<template>
    <nav class="navbar is-white">
      <div class="container">
        <div class="navbar-menu is-active">
          <div class="navbar-start">
            <a  :class="{'is-active' : filterOption === 'all'}" 
                @click="emitFilter('all')" 
                class="navbar-item">
              All
            </a>
            <a  :class="{'is-active' : filterOption === 'inprogress'}"
                @click="emitFilter('inprogress')" 
                class="navbar-item">
              In Progress
              </a>
            <a  :class="{'is-active' : filterOption === 'finished'}"
                @click="emitFilter('finished')" 
                class="navbar-item">
              Finished
            </a>
            <a  :class="{'is-active' : filterOption === 'notstarted'}"
                @click="emitFilter('notstarted')" 
                class="navbar-item">
              Not Started
            </a>
          </div>
        </div>
      </div>
    </nav>
</template>

<script>
export default {
  data () {
    return {
      filterOption : "all"
    }
  },
  methods : {
    emitFilter(filterOption) {
      this.filterOption = filterOption
      this.$emit("filterSelected", filterOption)
    }
  }
}
</script>

<style>

</style>
