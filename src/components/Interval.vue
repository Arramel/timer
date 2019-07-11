<template>
<div class="interval">
    <input type="number" class="number" v-model="interval.last" @input="timeChange">
    <input type="color" class="colour" v-model="interval.colour" @input="colourChange">
    <button class="delete" @click="$emit('deleteInterval', interval.id)"></button>
</div>
</template>

<script>
export default {
    name: 'Interval',
    props: ['interval'],
    methods: {
        timeChange(e) {

            const val = e.srcElement.value;

            if (isNaN(parseInt(val))) {
                this.interval.last = '0';
            } else {
                this.interval.last = String(Math.abs(parseInt(val)));
            }

            this.$emit('intervalChange', this.interval);
        },
        colourChange() {
            this.$emit('intervalChange', this.interval);
        }

    }
}
</script>

<style scoped>
.interval {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}

.number {
    border: none;
    flex-basis: 50%;
    height: 23px;
}

.colour {
    border: 1px solid black;
    flex-basis: 30%;
}

.delete {
    border: none;
    background: hsl(0, 100%, 51%);
    flex-basis: 10%;
    height: 7px;
    margin: 3px 0;
}

.colour:hover, .delete:hover {
    cursor: pointer;
}

</style>
