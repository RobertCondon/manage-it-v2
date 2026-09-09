<script>
    let klass = '';
    export { klass as class };
    // Default size only when the caller didn't specify one
    $: sized = /(^|\s)(w-|h-)/.test(klass);
</script>

<svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    role="img"
    aria-label="close outline"
    class="shrink-0 {klass} {sized ? '' : 'w-5 h-5'}"
>
    <path
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="2"
    d="M6 18 17.94 6M18 18 6.06 6"
    />
</svg>
