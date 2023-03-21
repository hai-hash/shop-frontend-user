<template>
    <div class="blog">
        <h1>This is editor, please write anythinh in here</h1>
        <Editor/>
    </div>

</template>

<script>
import Editor from '@/components/common/Editor.vue'
export default{
    name:'BlogEditor',
    components:{
        Editor
    }
}
</script>