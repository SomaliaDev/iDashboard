<template>
<nav class="navbar-default navbar-static-side" role="navigation">
    <div class="sidebar-collapse">
        <ul class="nav metismenu" id="side-menu">
            <li class="nav-header">
                <div class="dropdown profile-element"> <span>
                              <img alt="image" class="img-circle" src="/admin/img/profile_small.jpg">
                               </span>
                    <a data-toggle="dropdown" class="dropdown-toggle" href="#">
                        <span class="clear"> <span class="block m-t-xs"> <strong class="font-bold">David Williams</strong>
                               </span> <span class="text-muted text-xs block">Art Director <b class="caret"></b></span> </span>
                    </a>
                    <ul class="dropdown-menu animated fadeInRight m-t-xs">
                        <li><a href="">Profile</a></li>
                        <li><a href="">Contacts</a></li>
                        <li><a href="">Mailbox</a></li>
                        <li class="divider"></li>
                        <li><a href="">Logout</a></li>
                    </ul>
                </div>
                <div class="logo-element">
                    IN+
                </div>
            </li>
            <template v-for="item of sidebar">
              <template v-if="item.child.length > 0">
                <li class="bg-info m-t-xs m-b-xs title">
                  <i v-bind:class="item.icon"></i> <span class="nav-label"> {{item.name}}
                </li>
                <router-link v-for="v of item.child" v-bind:to="v.url" tag="li">
                  <a><i v-bind:class="v.icon"></i> <span class="nav-label"> {{v.name}}</a>
                </router-link>
              </template>
              <router-link v-if="item.child.length == 0" v-bind:to="item.url" tag="li">
                <a><i v-bind:class="item.icon"></i> <span class="nav-label">{{item.name}}</span></a>
              </router-link>
            </template>
        </ul>
    </div>
</nav>
</template>
<script>
export default {
    data() {
        return {
            sidebar: {}
        }
    },
    created() {
        this.fetchSidebarMenu()
    },
    methods: {
        fetchSidebarMenu() {
            this.$http.get('http://idashboard.app/menu').then(response => {
                this.sidebar = response.data
            });
        }
    }
}
</script>
<style>
  .title{
    font-weight: 700;
    padding: 14px 20px 14px 25px;
  }
</style>
