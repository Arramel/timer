<template>
<div id="app">

    <DisplayCircle :started="started" :repeat="repeat" :data="intervals" />
    <Intervals :intervals="intervals" @intervalChange="editInterval" @addInterval="addInterval" @start="startStop" />

</div>
</template>

<script>
import DisplayCircle from './components/DisplayCircle';
import Intervals from './components/Intervals';

export default {
    name: 'app',
    components: {
        DisplayCircle,
        Intervals
    },
    data() {
        return {
            started: null,
            repeat: null,
            intervals: [{
                id: 0,
                last: '10',
                colour: '#ff23cc'
            }]
        }
    },
    methods: {
        editInterval(input) {
            for (let i = 0; i < this.intervals.lenght; i++) {
                if (this.intervals[i].id === input.id) {
                    this.intervals[i] = input;
                    break;
                }
            }
        },
        addInterval() {
            const id = this.intervals.length;
            const colour = this.randColour();
            const newInterval = {
                id,
                last: '0',
                colour
            };
            
            this.intervals.push(newInterval);
        },
        randColour() {
            const colours = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
            let colour = '#';

            for (let i = 0; i < 6; i++) {
                colour += colours[Math.floor(Math.random() * colours.length)];
            }
            return colour;
        },
        startStop(start, repeat) {
            this.started = start;
            this.repeat = repeat;
        }
    }
}
</script>

<style lang="scss">
body {
    background: hsl(209, 95%, 8%);
    display: flex;
    flex-direction: column;
    align-items: center;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: rgba(255, 255, 255, 0.815);
}

input {
    color: black;
}
</style>
