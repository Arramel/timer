<template>
<div class="intervals">
    <div class="repeat">
        <label for="repeat">Number of repeats: </label>
        <input id="repeat" type="number" @input="checkNum" :value="repeat">
    </div>

    <div v-for="interval in intervals" :key="interval.id" class="interval">
        <Interval :interval="interval" @intervalChange="$emit('intervalChange', interval)" @deleteInterval="$emit('deleteInterval', interval.id)" />
    </div>

    <div class="buttons">
        <Start :started="started" @start="start"/>
        <button class="add" @click="$emit('addInterval')">
            <div class="crossY"></div>
            <div class="crossX"></div>
        </button>
    </div>
</div>
</template>

<script>
import Interval from './Interval';
import Start from './Start';

export default {
    name: 'Intervals',
    components: {
        Interval,
        Start
    },
    props: ['intervals', 'started'],
    data() {
        return {
            repeat: 1
        }
    },
    methods: {
        checkNum(e) {
            const val = e.srcElement.value;

            if (isNaN(parseInt(val))) {
                this.repeat = 1;
            } else {
                this.repeat = Math.abs(parseInt(val));
            }

        },
        start(val) {
            this.$emit('start', val, this.repeat);
        }
    }
}
</script>

<style lang="scss" scoped>
.add {
    background: hsl(152, 94%, 25%);
    width: 50px;
    height: 50px;
    border: none;
    position: relative;

    &:hover {
        cursor: pointer;
    }

    @mixin cross($width, $height) {
        width: $width;
        height: $height;
        background: hsla(204, 100%, 1%, 0.87);
    }

    .crossY {
        position: absolute;
        top: 5px;
        left: 20px;
        @include cross(10px, 40px);
    }

    .crossX {
        position: absolute;
        top: 20px;
        left: 5px;
        @include cross(40px, 10px);
    }

}

.intervals {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.interval {
    width: 100%;
    padding-bottom: 10px;
}

.buttons {
    display: flex;
    justify-content: space-evenly;
    padding-top: 20px;
    width: 100%;
}

.repeat {
    margin-bottom: 20px;
}
</style>
