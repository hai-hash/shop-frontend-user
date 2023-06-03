<template>
    <div class="simple-table-template">
        <v-card>
        <v-simple-table>
            <template v-slot:default>
                <thead>
                    <tr>
                        <th v-for="header in headers" :key="header" class="text-left">
                            {{ header }}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in dataTable" :key="index">
                        <td v-for="value in item" :key="`${index}-${value}`">{{ value }}</td>
                    </tr>
                </tbody>
            </template>
        </v-simple-table>
    </v-card>
        <PaginationCustom />
    </div>
</template>
<script>
import PaginationCustom from './Pagination.vue';
export default {
    name: "SimpleTable",
    components: {
        PaginationCustom,
    },
    props:{
        headers:Array,
        dataTable: Array
    },
    data() {
        return {
            
        }
    }
}
</script>
<style>
.simple-table-template table thead{
    background-color: #e9ecef;
}

</style>