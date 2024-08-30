<template>
        <Menubar >
            <template #start>
                <i class="pi pi-play-circle" style="color: #554EBE; font-size: 2rem"></i>
                <h1 class="text-2xl font-bold">
                    Películas
                </h1>
            </template>
            <template #end>
               <p style="color: #9296ff5b;">David Felipe Cortes Cortes</p>
            </template>
        </Menubar>   
</template>

<script setup>
import { ref } from 'vue';

const loading = ref(false);

const props = defineProps({
  query: String,
});

const emit = defineEmits(['search']);

const search = () => {
    loading.value = true;
    setTimeout(() => {
        loading.value = false;
    }, 2000);
  emit('search');
};

</script>

<style lang="scss" scoped>

i{
    margin: 0.5rem;
}
 .p-menubar {
    border-radius: 0 !important;
 }
 
 .p-button:hover{
    background-color: #9295ff;
    color:white;
 }
</style>