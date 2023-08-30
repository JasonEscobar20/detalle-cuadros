<script>
import {ref, uploadBytesResumable, getDownloadURL} from 'firebase/storage';
import {addDoc} from 'firebase/firestore';
import {storage, cuadrosColecctionRef} from '../firebase.js';

export default {
    data() {
        return {
            uploadValue: 0,
            img1: null,
            imageData: '',
            state: '',
            hasFailed: false,
            showLoader: false
            // progress: 0
        }
    },
    mounted() {

    },
    methods: {
        saveImage(){
            console.log(storage);
            
        },
        click1(){
            this.$refs.input1.click()  
        },
        createCuadro(data){
            addDoc(cuadrosColecctionRef, data);
            alert('Dato creado')
            document.getElementById('form_save_data').reset();
            this.showLoader = false;
        },
        previewImage(event) {
            this.uploadValue=0;
            this.img1=null;
            this.imageData = event.target.files[0];
        },
        saveForm(){
            // this.previewImage()
            console.log('entra aca')
            this.img1 = null;
            const storageRef = ref(storage, this.imageData.name);
            let uploadTask = uploadBytesResumable(storageRef, this.imageData);
            let form = document.getElementById('form_save_data');
            let formData = new FormData(form);

            this.showLoader = true;
            uploadTask.on(
                'state_changed',
                (snapshot) => {
                    let calculateUploadValue =(snapshot.bytesTransferred/snapshot.totalBytes) * 100;
                    this.uploadValue = calculateUploadValue;
                    
                    this.state = snapshot.state;
                },
                (error) => {
                    console.log({error})
                    this.hasFailed = true;
                },
                () => {
                    // this.uploadValue = 100;
                    getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                        this.img1 = url;
                        
                        const data = {
                            name: formData.get('name'),
                            description: formData.get('description'),
                            url: url,
                        }

                        this.createCuadro(data);
                    })
                }
            )
        }
    },
}


</script>

<template>
 
    <!-- <div class="navbar bg-base-100">
        <div class="navbar-start">
            <a class="btn btn-ghost normal-case text-4xl"> Creacion de cuadro </a>
        </div>
        <div class="navbar-center">
            
        </div>
        <div class="navbar-end">
        </div>
    </div> -->
    <!-- <a class="btn btn-ghost normal-case text-4xl"> Creacion de cuadro </a> -->
    <div class="navbar bg-base-100">
        <div class="navbar-start">
            <div class="dropdown">
                <label tabindex="0" class="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                
                <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-56">
                    <li><a class="btn btn-ghost normal-case text-xl"> Lista de cuadros </a></li>
                </ul>
            </div>
            <!-- <a class="btn btn-ghost normal-case text-xl hidden lg:flex"> Lista de cuadros </a> -->
            <router-link :to="{ name: 'cuadros'}" class="btn btn-ghost normal-case text-xl hidden lg:flex">
                Lista de cuadros
            </router-link>
        </div>
        <div class="navbar-center hidden lg:flex">
            <a class="btn btn-ghost normal-case text-xl"> Creacion de cuadro </a>
        </div>
        <div class="navbar-end">
            <!-- <a class="btn">Button</a> -->
        </div>
    </div>
    <div class="container w-full mx-auto">
        
        <!-- <span> test </span> -->
        <div class="flex justify-center mt-10">
            
            <button class="btn btn-outline btn-info hidden" @click="click1">Info</button>
            <div class="card lg:w-2/4 sm:w-full w-full b-secondary-content">
                <div class="card-body">
                    
                    <form action="" id="form_save_data" @submit.prevent="saveForm">
                        <div class=" mb-4">
                            <input type="text" name="name" placeholder="Nombre del cuadro" class="input input-bordered w-full" required/>
                        </div>
                        <div class=" mb-4">
                            <!-- <input type="text" name="description" placeholder="Descripcion del cuadro" class="input input-bordered " required/> -->
                            <textarea class="textarea textarea-bordered w-full" name="description" placeholder="Descripcion del cuadro"></textarea>
                        </div>
                        <div class="mb-4">
                            <input type="file" @change.prevent="previewImage" class="file-input w-full input-bordered mb-4" ref="input1" accept="image/" required/>
                        </div>
                        <div class="mb-4">
                            <button type="submit" class="btn btn-neutral">
                                <span class="loading loading-spinner loading-xs" v-show="showLoader"></span>
                                Guardar </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>    
    </div>
    
</template>

<style scoped></style>
