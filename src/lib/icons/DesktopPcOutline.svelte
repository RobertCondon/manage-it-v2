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
    aria-label="desktop pc outline"
    class="shrink-0 {klass} {sized ? '' : 'w-5 h-5'}"
>
    <path
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="2"
    d="M12 15v5m-3 0h6M4 11h16M5 15h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1Z"
    />
</svg>
