<script>
    import { createEventDispatcher } from 'svelte';
    import { fly, fade } from 'svelte/transition';
    import { sineIn } from 'svelte/easing';
    import UsersGroupOutline from "$lib/icons/UsersGroupOutline.svelte";
    import DesktopPcOutline from "$lib/icons/DesktopPcOutline.svelte";
    import EnvelopeOpenOutline from "$lib/icons/EnvelopeOpenOutline.svelte";
    import HomeOutline from "$lib/icons/HomeOutline.svelte";
    import LinkOutline from "$lib/icons/LinkOutline.svelte";
    import BarsOutline from "$lib/icons/BarsOutline.svelte";
    import CloseOutline from "$lib/icons/CloseOutline.svelte";

    const dispatch = createEventDispatcher();

    let open = false;
    let servicesOpen = false;

    function close() {
        open = false;
    }

    function openPortal() {
        close();
        dispatch('openPortal');
    }

    /** @param {KeyboardEvent} event */
    function handleKeydown(event) {
        if (event.key === 'Escape' && open) close();
    }

    const itemClass =
        'flex items-center gap-3 p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100';
    const iconClass = 'w-5 h-5 text-gray-500 transition duration-75';
</script>

<svelte:window on:keydown={handleKeydown} />

<div class="w-full">
    <div class="flex items-center justify-between">
        <button
            on:click={() => (open = true)}
            aria-label="Open navigation menu"
            class="p-1 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
            <BarsOutline class="w-8 h-8 text-accentForeground" />
        </button>

        <a href="/" aria-label="Manage IT home">
            <img src="/manageit-logo.png" alt="Manage IT" width="133" height="40" class="h-10 w-auto" />
        </a>
    </div>
</div>

{#if open}
    <!-- Backdrop -->
    <button
        class="fixed inset-0 z-40 bg-gray-900/50 cursor-default"
        transition:fade={{ duration: 150 }}
        on:click={close}
        aria-label="Close navigation menu"
        tabindex="-1"
    ></button>

    <!-- Drawer panel -->
    <div
        class="fixed top-0 left-0 z-50 h-screen w-80 max-w-[85vw] overflow-y-auto bg-white p-4"
        transition:fly={{ x: -320, duration: 200, easing: sineIn }}
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
    >
        <div class="flex items-center justify-between mb-4">
            <h5 class="text-base font-semibold text-gray-500 uppercase">Manage It</h5>
            <button
                on:click={close}
                aria-label="Close navigation menu"
                class="p-1.5 rounded-lg text-gray-400 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
                <CloseOutline class="w-5 h-5" />
            </button>
        </div>

        <nav class="py-4 px-3">
            <ul class="space-y-2">
                <li>
                    <a href="/" class={itemClass} on:click={close}>
                        <HomeOutline class={iconClass} />
                        <span>Home</span>
                    </a>
                </li>
                <li>
                    <button
                        type="button"
                        class="{itemClass} w-full"
                        aria-expanded={servicesOpen}
                        on:click={() => (servicesOpen = !servicesOpen)}
                    >
                        <DesktopPcOutline class={iconClass} />
                        <span class="flex-1 text-left">Services</span>
                        <svg class="w-4 h-4 text-gray-500 transition-transform {servicesOpen ? 'rotate-180' : ''}" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7" />
                        </svg>
                    </button>
                    {#if servicesOpen}
                        <ul class="space-y-1 pt-1">
                            <li><a href="/services/cloud-backup" class="{itemClass} pl-11" on:click={close}>Cloud Backups</a></li>
                            <li><a href="/services/endpoint-management" class="{itemClass} pl-11" on:click={close}>Endpoint Management</a></li>
                            <li><a href="/services/it-support" class="{itemClass} pl-11" on:click={close}>IT Support</a></li>
                            <li><a href="/services/cloud-migration" class="{itemClass} pl-11" on:click={close}>Cloud Migration</a></li>
                        </ul>
                    {/if}
                </li>
                <li>
                    <a href="/about-us" class={itemClass} on:click={close}>
                        <UsersGroupOutline class={iconClass} />
                        <span>About</span>
                    </a>
                </li>
                <li>
                    <a href="/contact" class={itemClass} on:click={close}>
                        <EnvelopeOpenOutline class={iconClass} />
                        <span>Contact</span>
                    </a>
                </li>
                <li>
                    <button type="button" class="{itemClass} w-full" on:click={openPortal}>
                        <LinkOutline class={iconClass} />
                        <span class="flex-1 text-left">Portal</span>
                    </button>
                </li>
            </ul>
        </nav>
    </div>
{/if}
