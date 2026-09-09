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
    aria-label="bars outline"
    class="shrink-0 {klass} {sized ? '' : 'w-5 h-5'}"
>
    <path
    stroke="currentColor"
    stroke-linecap="round"
    stroke-width="2"
    d="M5 7h14M5 12h14M5 17h14"
    />
</svg>
