var vueAppParams = {
    dynamicParams: {
        page_id: '11'
    }
};

const app = new Vue({
    el: '#app',
    data: function(){
        return {
            message: '',
            message2: window['vueAppParams'].dynamicParams.page_id,

            checkShow: true,
            statusApp: '',
        }
    },

    methods: {
        loadPhoneBook: function(){
            this.checkShow = true;
            this.status = 'Loading...';
            console.log('loadPhoneBook ++');
           // var vm = this;

        },
    },


});