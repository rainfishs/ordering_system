<template>
    <div id="p5Canvas"/>
</template>

<style scoped>
</style>

<script setup>
    import { onMounted } from 'vue';
    import P5 from 'p5'
  
    onMounted(() => {
        const script = (p5)=>{
        // NOTE: Set up is here   
            p5.setup = () => {
                var canvas = p5.createCanvas(500, 500);
                p5.background(0);
                p5.stroke(255);
                canvas.parent("p5Canvas");
            }     
            // NOTE: Draw is here
            p5.draw = () => {
                if (p5.mouseIsPressed === true) {
                p5.line(p5.mouseX, p5.mouseY, p5.pmouseX, p5.pmouseY);
                }
            }
        }
        // NOTE: Use p5 as an instance mode
        new P5(script)
    })
</script>
  