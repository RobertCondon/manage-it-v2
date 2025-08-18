<script>
    import "../app.css";
    import MobileNav from "$lib/components/MobileNav.svelte";
    import Nav from "$lib/components/Nav.svelte";
    import PortalModal from "$lib/components/PortalModal.svelte";
    import {onMount} from "svelte";

    let isMobile = false;
    let showPortalModal = false;

    function updateIsMobile() {
        isMobile = window.innerWidth < 768;
    }

    function openPortalModal() {
        showPortalModal = true;
    }

    function closePortalModal() {
        showPortalModal = false;
    }

    onMount(() => {
        updateIsMobile();
        window.addEventListener('resize', updateIsMobile);
        
        // Register service worker for caching
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/sw.js')
                .then((registration) => {
                    console.log('SW registered successfully');
                })
                .catch((error) => {
                    console.log('SW registration failed');
                });
        }
        
        return () => window.removeEventListener('resize', updateIsMobile);
    });
</script>

<!-- Skip Navigation Links -->
<a href="#main-content" class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-green-600 text-white px-4 py-2 rounded-md z-50">
    Skip to main content
</a>

<header class="px-4 lg:px-6 h-14 flex items-center">
    {#if isMobile}
        <MobileNav on:openPortal={openPortalModal} />
    {:else}
        <Nav on:openPortal={openPortalModal} />
    {/if}
</header>

<main id="main-content">
    <slot></slot>
</main>

<!-- Portal Modal -->
<PortalModal isOpen={showPortalModal} on:close={closePortalModal} />

<footer>
    <footer class="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p class="text-xs text-muted-foreground">&copy; 2024 Manage IT. All rights reserved.</p>
        <nav class="sm:ml-auto flex gap-4 sm:gap-6">
            <a href="/terms" class="text-xs hover:underline underline-offset-4">Terms of Service</a>
            <a href="/privacy" class="text-xs hover:underline underline-offset-4">Privacy Policy</a>
        </nav>
    </footer>
</footer>