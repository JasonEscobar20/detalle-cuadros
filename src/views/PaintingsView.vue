<script>
// import {ref, uploadBytesResumable, getDownloadURL} from 'firebase/storage';
import {getDocs, getDoc, doc, collection} from 'firebase/firestore';
import {db} from '../firebase.js';

// import PaintingComponent from '../components/PaintingComponent.vue';

export default {
    data() {
        return {
            paintingList: [],
            imageReady: false,
        }
    },
    created() {
    },
    mounted() {
        
        this.getPaintingsData();
    },

    methods: {
        async getPaintingsData(){
            let getCollection = collection(db, 'cuadros');
            const querySnapshot = await getDocs(getCollection);

            querySnapshot.forEach(element => {
                let newDocument = element.data();
                newDocument['id'] = element.id;
                this.paintingList.push(newDocument);
            })
        },
    },
}
</script>
<template>
    
    <div class="container mx-auto py-12">

        <div class="grid grid-cols-12 gap-5 gap-y-10 place-items-center px-7" v-if="!viewDetail">
            <div class="card w-full bg-base-100 shadow-xl col-span-12 lg:col-span-4" style="height: 36rem;"
                    v-for="(item, index) in paintingList" :key="index">
                <figure class="w-full h-72">
                    <div class="animate-pulse bg-green-100">
                    
                    </div>
                    <img :src="item.url" alt="Shoes" class="object-cover" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title"> {{ item.name }} </h2>
                    <p> {{ item.description }} </p>
                    <div class="card-actions justify-end">
                         <!-- </button> -->
                        <router-link :to="{ name: 'details', params: { id: item.id }}"  class="btn btn-primary">
                            Ver detalle
                        </router-link>
                    </div>
                </div>
            </div>
            
        </div>
    </div>              


</template>
<style>
    
</style>