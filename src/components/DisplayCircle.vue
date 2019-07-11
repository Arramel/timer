<template>
<div class="circle">
    <div class="num">{{ toRepeat || 0 }}</div>
    <canvas id="canvas"></canvas>
</div>
</template>

<script>
import {
    clearInterval,
    setInterval
} from 'timers';
export default {
    name: 'DisplayCircle',
    props: ['started', 'repeat', 'data'],
    data() {
        return {
            toRepeat: null,
            intervals: null,
            intervalRun: false
        }
    },
    methods: {
        doInterval() {

            if (!this.intervalRun) {

                if (this.intervals.length != 0) {
                    this.setStart();

                } else {
                    if (this.toRepeat > 1) {

                        this.intervals = [...this.data];
                        this.toRepeat--;

                        this.setStart();
                    } else {
                        this.$emit('stop');
                    }
                }

            }

        },
        setStart() {
            this.intervalRun = true;
            let time = 0;
            const canvas = document.querySelector('#canvas');
            const ctx = canvas.getContext('2d');

            const draw = setInterval(() => {

                if (time * 1000 / 60 <= this.intervals[0].last * 1000) {

                    let width;
                    let height;

                    if (window.innerWidth > 400) {
                        width = 400;
                        height = 400;
                        canvas.width = 400;
                        canvas.height = 400;
                    } else {
                        width = window.innerWidth - 10;
                        height = window.innerWidth - 10;
                        canvas.width = width;
                        canvas.height = height;
                    }

                    ctx.beginPath();
                    const arc = Math.PI * 2 * ((time * 1000 / 60) / (this.intervals[0].last * 1000));
                    ctx.arc(width / 2, height / 2, (width - 10) / 2, 0, arc);
                    ctx.lineWidth = 10;
                    ctx.strokeStyle = this.intervals[0].colour;
                    ctx.stroke();

                } else {
                    this.intervalRun = false;
                    this.intervals.shift();
                    clearInterval(draw);
                }

                time++;
            }, 1000 / 60);
        }
    },
    watch: {
        started() {
            if (this.started) {

                this.toRepeat = this.repeat;
                this.intervals = [...this.data];

                this.doInterval();

            } else {
                this.intervals = null;
                this.toRepeat = null;

                const canvas = document.querySelector('#canvas');
                const ctx = canvas.getContext('2d');

                let width;
                let height;

                if (window.innerWidth > 400) {
                    width = 400;
                    height = 400;
                    canvas.width = 400;
                    canvas.height = 400;
                } else {
                    width = window.innerWidth - 10;
                    height = window.innerWidth - 10;
                    canvas.width = width;
                    canvas.height = height;
                }

                ctx.beginPath();
                ctx.arc(width / 2, height / 2, (width - 10) / 2, 0, 2 * Math.PI);
                ctx.lineWidth = 10;
                ctx.stroke();

            }
        },
        intervals() {
            if (this.intervals) {
                this.doInterval();
            }
        }
    },
    mounted() {
        const canvas = document.querySelector('#canvas');
        const ctx = canvas.getContext('2d');
        let width;
        let height;

        if (window.innerWidth > 400) {
            width = 400;
            height = 400;
            canvas.width = 400;
            canvas.height = 400;
        } else {
            width = window.innerWidth - 10;
            height = window.innerWidth - 10;
            canvas.width = width;
            canvas.height = height;
        }

        ctx.beginPath();
        ctx.arc(width / 2, height / 2, (width - 10) / 2, 0, Math.PI * 2);
        ctx.lineWidth = 10;
        ctx.stroke();

        window.addEventListener('resize', (height, width) => {

            if (!this.intervalRun) {

                if (window.innerWidth > 400) {
                    width = 400;
                    height = 400;
                    canvas.width = 400;
                    canvas.height = 400;
                } else {
                    width = window.innerWidth - 10;
                    height = window.innerWidth - 10;
                    canvas.width = width;
                    canvas.height = height;
                }

                ctx.clearRect(0, 0, width, width);
                ctx.beginPath();
                ctx.arc(width / 2, height / 2, (width - 10) / 2, 0, Math.PI * 2);
                ctx.lineWidth = 10;
                ctx.stroke();
            }
        });
    }
}
</script>

<style lang="scss" scoped>
.circle {
    margin-top: 20px;

    .num {
        text-align: center;
        font-size: 70px;
        color: rgba(255, 255, 255, 0.815);
        padding-bottom: 10px;
    }
}
</style>
