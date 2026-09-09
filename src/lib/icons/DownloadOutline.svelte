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
    aria-label="download outline"
    class="shrink-0 {klass} {sized ? '' : 'w-5 h-5'}"
>
    <path
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="2"
    d="M12 13V4M7 14H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2m-1-5-4 5-4-5m9 8h.01"
    />
</svg>
