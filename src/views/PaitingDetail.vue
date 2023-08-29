<script>
// import {ref, uploadBytesResumable, getDownloadURL} from 'firebase/storage';
import {getDocs, getDoc, doc, collection} from 'firebase/firestore';
import {db} from '../firebase.js';

// import PaintingComponent from '../components/PaintingComponent.vue';

export default {
    data() {
        return {
            paintingDetail: {},

            viewDetail: false,
        }
    },

    created() {
        let params = this.$route.params;
        this.viewDetails(params['id']);
    },
    mounted() {

        // console.log(this.paintingDetail)
        // console.log('teststestset')
    },

    methods: {
        async viewDetails(item_id){
            let docRef = doc(db, "cuadros", item_id)
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()){
                let getDocument = docSnap.data();
                getDocument['id'] = docSnap.id;

                this.paintingDetail = getDocument;
                console.log(this.paintingDetail)
                this.$router.push({
                    name: 'details',
                    params: { id: item_id }
                });

                this.viewDetail = true;
            } else {
                console.log('No document');
            }
        }
    },
}
</script>
<template>

    <div class="container w-screen mx-auto mt-12 px-7">
        <div class="lg:w-3/4 lg:h-104 h-64  mx-auto mb-10 w-full">
            <img :src="paintingDetail.url" class="w-full h-64 lg:h-104 rounded-2xl" alt="">
        </div>
        <div class="text-center">
            <h2 class="sm:text-5xl text-4xl font-bold text-slate-950 mb-5"> {{ paintingDetail.name }} </h2>
            <p class="sm:text-3xl text-2xl text-slate-950">
                {{ paintingDetail.description }}
            </p>
        </div>
    </div>


</template>
<style>
    
</style>