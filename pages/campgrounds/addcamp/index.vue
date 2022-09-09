<template>
<div class="main-container">
    <h1>Add New Campground</h1>
    <div class="inputFields">
        <p>Campground Name</p>
        <BaseInputField v-model="campName.val" :margin="false" bgColor="grey" :placeholder="campName.placeholder"/>
        <p>Price</p>
        <BaseInputField v-model="campPrice.val" :margin="false" bgColor="grey" :placeholder="campPrice.placeholder"/>
        <p>Image</p>
        <BaseInputField v-model="campImgLink.val" :margin="false" bgColor="grey" :placeholder="campImgLink.placeholder"/>
        <p>Description</p>
        <BaseInputField v-model="campDescription.val" :margin="false" bgColor="grey" textarea :placeholder="campDescription.placeholder"/>
    </div>
    <div class="btn">
        <BaseButton size="medium">Add Campgrounds</BaseButton>
    </div>
    
</div>
</template>

<script>
import BaseInputField from '@/components/BaseComponents/BaseInputField.vue'
import BaseButton from '@/components/BaseComponents/BaseButton.vue'
export default {
    components: {
        BaseInputField,
        BaseButton
    },
    data() {
        return {
            campName: {
                val: '',
                placeholder: 'Seven Sisters Waterfall'
            },
            campPrice: {
                val: '',
                placeholder: '$149'
            },
            campImgLink: {
                val: '',
                placeholder: 'www.thepinoytraveler.com/2018/0...'
            },
            campDescription: {
                val: '',
                placeholder: 'The Seven Sisters is the 39th tallest waterfall in Norway. The 410-metre tall waterfall consist of seven separate streams, and the tallest of the seven has a free fall that measures 250 metres. The waterfall is located along the Geirangerfjorden in Stranda Municipality in Møre og Romsdal county, Norway.'
            },
        }
    }
}
</script>

<style scoped>
.main-container {
    width: 95%;
    margin: 2rem auto;
}

.main-container h1 {
    margin-bottom: 2rem;
}

.inputFields p {
    margin: 1rem 0;
}

.btn {
    margin-top: 2rem;
}

@media screen and (min-width: 768px) {
    .main-container {
        max-width: 500px;
        margin-left: 2rem;
        margin-right: 0;
    }
}

@media screen and (min-width: 1024px) {
    .main-container {
        margin-left: auto;
        margin-right: auto;
    }
}



</style>