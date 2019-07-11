<template>
<button :class="{start: !started, stop: started}" @click="start">{{ started ? 'Stop' : 'Start' }}</button>
</template>

<script>
export default {
    name: 'Start',
    props: ['started'],
    methods: {
        start() {
            this.started = !this.started;
            this.$emit('start', this.started);
        }
    }
}
</script>

<style lang="scss" scoped>
@mixin button() {
    height: 50px;
    width: 100px;
    font-size: 16px;
    border: none;
    flex: 1;
    margin-right: 10px;

    &:hover {
        cursor: pointer;
    }
}

.start {
    @include button();
    background: hsl(284, 91%, 18%);
}

.stop {
    @include button();
    background: hsl(105, 61%, 13%);
}
</style>
    