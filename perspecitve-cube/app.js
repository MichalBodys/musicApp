Vue.createApp({
    data(){
        return{
            perspecitve: 100,
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0
        }
    },

    computed:{
        box(){
            return{
                transform:`
                perspective(${this.perspecitve}px)
                rotateX(${this.rotateX}deg)
                rotateY(${this.rotateY}deg)
                rotateZ(${this.rotateZ}deg)`
            }
        }
    },
    methods:{
        reset(){
            this.perspecitve = 100
            this.rotateX = 0
            this.rotateY = 0
            this.rotateZ = 0
        },
        async copy(){
            let text = `transform:${this.box.transform};`
            await navigator.clipboard.writeText(text)

            alert('CSS copied to clipBoard')
        }
    }
}).mount('#app')