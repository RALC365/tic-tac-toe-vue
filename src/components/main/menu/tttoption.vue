<template>
    <router-link :to="obj_menu.to" tag="li">
        <a class="btn"> {{obj_menu.label}}  </a>
    </router-link>
</template>

<script>
export default {
    props:["menu"],
    data(){
        return{
            obj_menu: this.menu
        }
    }
}
</script>