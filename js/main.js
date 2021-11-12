/*
 * Vue Slider
 */
const app =new Vue({
    el:"#root",
    
    data:{
        slides: [
        {
            image: 'img/01.jpg',
            title: 'Svezia',
            text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
        },
        {
            image: 'img/02.jpg',
            title: 'Svizzera',
            text: 'Lorem ipsum.',
        },
        {
            image: 'img/03.jpg',
            title: 'Gran Bretagna',
            text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
        },
        {
            image: 'img/04.jpg',
            title: 'Germania',
            text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
        },
        {
            image: 'img/05.jpg',
            title:
                'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
        },
        ],
        active:1,
    },
    methods: {
        prevSlide(){
            this.active--;
            if (this.active<0) {
                this.active = this.slides.length-1;
            }
        },
        nextSlide(){
            this.active++;
            if (this.active>this.slides.length-1) {
                this.active = 0;
            }
        }
    }
})
setInterval(app.nextSlide, 3000);
