var vueAppParams = {
    dynamicParams: {
        page_id: 'some strung 11 ++!',
        urlApp: 'http://phone_book.loc/',
        imagePathFolder: 'img/',
    }
};

Vue.component('edit-user', {
    props: {
        current_user_key: '', //for identifier of user
        current_user_data: '', //for data of single user
        path_to_image_user: '', //path to folfer with User images
    },
    data: function(){
        return {
            userKey:'', newName:'', newLastName:'', newCity:'', newEmail:'', newPhone1:'', newPhone2:'', newStreet:'', newZcode:'', newGroup:'', newPhoto:'',
            statusBtnEditContact: true,
            statusBtnSaveChange: false,
            statusInputDisabled: true,
        }
    },
    methods: {
        OnEmitNewUserData: function(){  //lift the event to up (to parent)
            this.statusBtnSaveChange = false;
            this.statusBtnEditContact = true;
            this.statusInputDisabled = true;

            var userKey = this.userKey;
            var newName = this.newName;
            var newLastName = this.newLastName;
            var newCity = this.newCity;
            var newEmail = this.newEmail;
            var newPhone1 = this.newPhone1;
            var newPhone2 = this.newPhone2;
            var newStreet = this.newStreet;
            var newZcode = this.newZcode;
            var newGroup = this.newGroup;
            var newPhoto = this.newPhoto;
            this.$emit('on_new_user_data', userKey, newName, newLastName, newCity, newEmail, newPhone1, newPhone2, newStreet, newZcode, newGroup, newPhoto);
        },
        onEmitReturnPhoneBook: function() {
            this.statusBtnSaveChange = false;
            this.statusBtnEditContact = true;
            this.statusInputDisabled = true;

            this.$emit('on_return_phone_book');
        },
        enableEditing: function() {
            this.statusBtnSaveChange = true;
            this.statusBtnEditContact = false;
            this.statusInputDisabled = false;
        },
    },
    computed: {
        GettingCurrentUserKey() {
            var customerKey = this.current_user_key;
            return customerKey;
        },
        GettingCurrentUserData() {
            var infoCustomer = this.current_user_data;
            return infoCustomer;
        },
    },
    template: `
        <div class="edit-user-block">
            <img v-bind:src="path_to_image_user+GettingCurrentUserData.photo" alt="">
            <div class="form-group">
              <input type="text" class="form-control" v-model="newName = GettingCurrentUserData.name" v-bind:disabled="statusInputDisabled">
            </div>
            <div class="form-group">
                <input type="text" class="form-control" v-model="newLastName = GettingCurrentUserData.lastname" v-bind:disabled="statusInputDisabled">
            </div>
            <div class="form-group">
                <input type="text" class="form-control" v-model="newCity = GettingCurrentUserData.city" v-bind:disabled="statusInputDisabled">
            </div>
            <div class="form-group">
                <input type="text" class="form-control" v-model="newEmail = GettingCurrentUserData.email" v-bind:disabled="statusInputDisabled">
            </div>
            <div class="form-group">
                <input type="text" class="form-control" v-model="newPhone1 = GettingCurrentUserData.phone1" v-bind:disabled="statusInputDisabled">
            </div>
            <div class="form-group">
                <input type="text" class="form-control" v-model="newPhone2 = GettingCurrentUserData.phone2" v-bind:disabled="statusInputDisabled">
            </div>
            <div class="form-group">
                <input type="text" class="form-control" v-model="newStreet = GettingCurrentUserData.street" v-bind:disabled="statusInputDisabled">
            </div>
            <div class="form-group">
                <input type="text" class="form-control" v-model="newZcode = GettingCurrentUserData.zcode" v-bind:disabled="statusInputDisabled">
            </div>
            <div class="form-group">
                <input type="text" class="form-control" v-model="newGroup = GettingCurrentUserData.group" v-bind:disabled="statusInputDisabled">
            </div>
            <input type="hidden" v-model="newPhoto = GettingCurrentUserData.photo">
            <input type="hidden" v-model="userKey = GettingCurrentUserKey">
            <button type="button" class="btn btn-default" v-show="statusBtnSaveChange" v-on:click="OnEmitNewUserData" >Save change</button>
            <button type="button" class="btn btn-default" v-show="statusBtnEditContact" v-on:click="enableEditing" >Edit Contact?</button>
            
            <button type="button" class="btn btn-default" v-on:click="onEmitReturnPhoneBook" >To Phone Book</button>
        </div>
            `
});

const app = new Vue({
    el: '#app',
    data: function(){
        return {
            //testMessage: window['vueAppParams'].dynamicParams.page_id,

            statusBtnOpenBook: true,
            statusBtnCloseBook: false,
            statusUsersList: false,
            statusCurrentUser: false,

            statusApp: '',
            responseAllUsers: '', //response with all Users from DB
            responseCurrentUser: '',  //response with current User from DB
            idUser: '', //identity key of User

            valLastName: [],
        }
    },
    methods: {
        loadPhoneBook: function(){  //Get All Users for Phone Book
            this.statusBtnOpenBook = false;
            this.statusUsersList = true;
            this.statusBtnCloseBook = true;
            this.statusApp = 'Loading...';
            var vm = this;

            /* get All Users from DB */
            axios.get( window['vueAppParams'].dynamicParams.urlApp+'customers_list.php' )
                .then(function (response) {
                    //console.log(response);
                    vm.responseAllUsers = response.data;
                })
                .catch(function (error) {
                    console.log(error);
                    vm.status = 'An error occured.' + error;
                });
        },
        unloadPhoneBook: function(){  //Close Phone Book (hide all content)
            this.statusBtnOpenBook = true;
            this.statusUsersList = false;
            this.statusBtnCloseBook = false;
            this.statusCurrentUser = false;
        },
        getCurrentUser: function(index){  //Get current User
            this.statusUsersList = false;
            this.statusCurrentUser = true;
            this.statusBtnCloseBook = false;
            this.statusApp = 'Loading...';
            var idUser = index.slice(4); //console.log(idUser);
            this.idUser = idUser;
            var vm = this;

            /* get current User from DB */
            axios.get( window['vueAppParams'].dynamicParams.urlApp+'customer_data.php?id='+idUser )
                .then(function (response) {
                    //console.log(response.data);
                    vm.responseCurrentUser = response.data;
                })
                .catch(function (error) {
                    console.log(error);
                    vm.status = 'An error occured.' + error;
                });
        },
        newUserSaveNewData: function(userKey,name,lastname,city,email,phone1,phone2,street,zcode,group,photo){
            //var vm = this;
            axios.get(window['vueAppParams'].dynamicParams.urlApp+'save_customer.php?userkey='+userKey+'&name='+name+'&lastname='+lastname+'&city='+city+'&email='+email+'&phone1='+phone1+'&phone2='+phone2+'&street='+street+'&zcode='+zcode+'&group='+group+'&photo='+photo)
                .then(function (response) {
                    console.log(response.data);
                })
                .catch(function (error) {
                    console.log(error);
                });
            this.statusCurrentUser = false;
            this.loadPhoneBook();
        },
        returnToPhoneBook: function(){
            this.loadPhoneBook();
            this.statusCurrentUser = false;
        }

    },
    computed: {
        pathToImageUser() {
            var imagePathFolder = window['vueAppParams'].dynamicParams.imagePathFolder;
            return imagePathFolder;
        },
    },

});