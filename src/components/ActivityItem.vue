<template>
    <div>
        <ActivityItemUpdate v-if="isUpdateActive"
                        :activity="activity"
                        :categories="categories"
                        @toggleUpdate="changeUpdateState"
        />
        <ActivityItemDetail v-else
                        :activity="activity" 
                        :categories="categories"
                        @toggleUpdate="changeUpdateState"/>
    </div>
</template>

<script>
import ActivityItemUpdate from "@/components/ActivityItemUpdate"
import ActivityItemDetail from "@/components/ActivityItemDetail"
export default {
   components : {
       ActivityItemDetail,
       ActivityItemUpdate
   },
   props : {
       activity : {
           type : Object,
           required : true
       },
       categories : {
           type : Object,
           required : true
       }
   },
   data () {
       return {
           isUpdateActive : false
       }
   },
   methods : {
       changeUpdateState(isUpdate){
           this.isUpdateActive = isUpdate
       }
   }
}
</script>

<style  scoped></style>
