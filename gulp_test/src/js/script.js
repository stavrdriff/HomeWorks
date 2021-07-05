

let app = new Vue({
   el: '#vue',
   data: {
      title: 'support your local artisans',
      text_notify: 'Free Delivery over $100. Gift with Purchase over $150',
      show_notify: true,
      show: true,
      input_text: null,
      show_input_text: false,
      templateText: '',
      show_time: false,
      leftMouse: 'left click',
      rightMouse: 'right click',
      whatMouse: '',
      formatTime: '',
      products: [
         {
            id: 123,
            title: 'Pepperoni Pizza',
            price: 24.99,
            discount: 5,
            image: 'image1.jpg'
         },
         {
            id: 234,
            title: 'Baked Pancakes',
            price: 44.89,
            discount: 3,
            image: 'image1.jpg'
         },
         {
            id: 345,
            title: 'Avocado',
            price: 20.00,
            image: 'image1.jpg'
         },
         {
            id: 456,
            title: 'Bunch of Orange',
            price: 29.99,
            image: 'image1.jpg'
         }
      ],
      headerLinks: [
         {
            name: 'Occasions',
            href: '#',
            title: 'push me',
         },
         {
            name: 'All Categories',
            href: '#',
            title: 'push me',
         },
         {
            name: 'Gifts & Bundles',
            href: '#',
            title: 'push me',
         },
         {
            name: 'Our Brands',
            href: '#',
            title: 'push me',
         },
         {
            name: 'About Us',
            href: '#',
            title: 'push me',
         }
      ],
      headerButtons: [
         {
            src: 'loupe.png',
            alt: '',
            href: '#',
            title: 'Searching',
         },
         {
            src: 'user.png',
            alt: '',
            href: '#',
            title: 'Account',
         },
         {
            src: 'shopping-cart.png',
            alt: '',
            href: '#',
            title: 'Cart',
         },
      ]
   },
   methods: {
      firstLetterToUpperCase(text) {
         let text_arr = text.split(' ')
         let arr_Upper = text_arr.map(item => {
            return item[0].toUpperCase() + item.slice(1)
         })
         return arr_Upper.join(' ');
      },
      hideNotify() {
         this.show_notify = false
      },
      showText() {

         this.show_input_text = true;
         this.templateText = this.input_text;
         this.input_text = null;

      },
      showTime() {
         this.show_time = true;
         const DayTime = new Date();
         let hours = DayTime.getHours();
         let minutes = DayTime.getMinutes();
         if (minutes < 10) {
            minutes = '0' + minutes;
         }
         let seconds = DayTime.getSeconds();
         if (seconds < 10) {
            seconds = '0' + seconds;
         }
         this.formatTime = hours + ':' + minutes + ':' + seconds;
      },
      showMouse(key) {
         this.whatMouse = key;
      },
      getNewPrice(product) {
         let newPrice = product.discount ?
            (product.price * (1 - product.discount / 100)) :
            product.price;
         return newPrice;
      },
   },
   filters: {
      viewPrice(value, currency) {
         return currency + value.toFixed(2);
      }
   },
   computed: {
      averagePrice: {
         get: function () {
            return this.prices_summ / this.products.length;
         },
         set: function (value) {
            let summ_price = 0;
            value.forEach(el => {
               summ_price += +el.price
            })
            this.prices_summ = summ_price;
         }
      },
   }
})