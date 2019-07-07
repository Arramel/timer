<template>
<div class="circle">
    <div class="num">{{ repeat || 0 }}</div>
    <canvas id="canvas"></canvas>
</div>
</template>

<script>
export default {
    name: 'DisplayCircle',
    props: ['started', 'repeat', 'data'],
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
