<script>
    export let type = "button";
    export let css = "";
</script>

<button type={type} class={`btn ${css}`}>
    <slot></slot>
</button>
