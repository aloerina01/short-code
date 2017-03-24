<template>
    <div>
        <transition name="fade" mode="out-in">
            <router-view class="view"></router-view>
        </transition>
    </div>
</template>

<script>
export default {
    /** [Required] Unique name for this component */
    name: 'app',
    /** [Required] You must declare PATH in each feature index file */
    ROOT_PATH: '/'
}
</script>