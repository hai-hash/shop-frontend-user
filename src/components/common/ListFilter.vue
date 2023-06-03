<template>
      <v-list dense>
        <v-subheader>Blog Type</v-subheader>
        <v-list-item-group
          v-model="selectedItem"
          color="primary"
        >
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
  </template>
<script>
export default{
    name:"ListFilter",
    data: () => ({
      selectedItem: 1,
      items: [
        { text: 'All', icon: 'mdi-post' },
        { text: 'Beatiful', icon: 'mdi-account' },
        { text: 'Conversions', icon: 'mdi-flag' },
      ],
    }),
}
</script>