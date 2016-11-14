<template>
    <div class="container">
        <div class="row">
          <Sidebar></Sidebar>
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">Example Component</div>

                    <div class="panel-body">
                        I'm an example component!
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Sidebar from './layouts/Sidebar.vue'
    export default {
        components: {
          Sidebar
        },
        mounted() {
            console.log('Component ready.')
        }
    }
</script>
