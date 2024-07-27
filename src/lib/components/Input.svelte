<script>
    export let placeholder = "";
    export let css = "";
    export let value = "";
</script>

<input type="text" placeholder={placeholder} class={`input ${css}`} bind:value={value} />
