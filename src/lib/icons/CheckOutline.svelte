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
    aria-label="check outline"
    class="shrink-0 {klass} {sized ? '' : 'w-5 h-5'}"
>
    <path
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="2"
    d="M5 11.917 9.724 16.5 19 7.5"
    />
</svg>
