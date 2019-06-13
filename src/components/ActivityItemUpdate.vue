<template>
    <article class="post">
        <div class="activity-title">
        <i class="fas fa-cog activity-settings" @click="isMenuDisplayed = !isMenuDisplayed" />
        <input v-model="modifiedActivity.title" type="text" class="input">
        </div>
        <div class="activity-category">
        <select v-model="modifiedActivity.category" class="select">
            <option disabled value="">Please select one</option>
            <option v-for="category in categories"
                    :key="category.id"
                    :value="category.id">{{ category.text }}</option>
        </select>
        </div>
        <div class="control activity-notes">
        <textarea v-model="modifiedActivity.notes"
                    class="textarea"
                    placeholder="Write some notes here" />
        </div>
        <div class="media">
        <div class="media-left">
            <p class="image is-32x32">
            <img src="../assets/user.png">
            </p>
        </div>
        <div class="media-content">
            <div class="content">
            <p>
                <a href="#">Filip Jerga</a> updated {{ modifiedActivity.updatedAt | prettyTime }} &nbsp;
            </p>
            </div>
        </div>
        <div class="media-right">
            <!-- TODO: Add v-model here -->
            <input v-model.number="modifiedActivity.progress"
                id="progress"
                type="range"
                name="progress"
                min="0" max="100" value="90" step="10">
            <label for="progress">{{ modifiedActivity.progress }} %</label>
        </div>
        </div>
        <div v-if="isMenuDisplayed" class="activity-controll">
        <!-- TODO: create function 'updateActivity' to console log 'activity' -->
        <a class="button is-warning" @click="updateActivity">Commit Update</a>
        <!-- TODO: Emit Event to Cancel Edit Mode -->
        <a class="button is-danger" @click="$emit('toggleUpdate', false)">Cancel</a>
        </div>
    </article>
</template>

<script>
import store from "@/store"
import textUtility from "@/mixins/textUtility"
export default {
    mixins : [textUtility],
    props : {
        categories : {
            type : Object,
            required : true
        },
        activity : {    
            type : Object,
            required : true
        }
    },
    data () {
        return {
            isMenuDisplayed : false,
            modifiedActivity : {...this.activity}
        }
    },
    methods : {
        updateActivity () {
            store.updateActivity(this.modifiedActivity)
            .then(() => {
                this.$emit("toggleUpdate",false)
            })
        }
    }
}
</script>

<style lang="scss" scoped>

.select {
    display: block;
    width: 100%!important;
    border: none;
    font-weight: bold;
    color: #6588ab;
    background: #e9f4ff;
    font-family: inherit;
    padding: 10px 15px;
    height: inherit!important;
}

.activity-title {
  margin-bottom: 10px;
}
.activity-category {
    margin-bottom : 10px;
}
.activity-notes {
    margin-bottom : 10px;
}
.activity-settings {
  margin-bottom: 10px;
  float: right;
  font-size: 22px;
  &:hover {
    cursor: pointer;
  }
}
.activity-controll {
  margin: 20px 0 0 0;
  a {
    margin-right: 5px;
  }
}


.post .title {
    margin-bottom: 5px;
}
.post .category {
    display: inline-block;
    background: #dbedff;
    padding: 4px 10px;
    border-radius: 3px;
    font-size: 12px;
    color: #148ed0;
}

</style>
