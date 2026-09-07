<script>
    import "../app.css";
    import { page } from "$app/stores";
    import { onNavigate } from "$app/navigation";
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

    // Soft cross-fade between pages in browsers with the View Transitions API
    onNavigate((navigation) => {
        if (!document.startViewTransition) return;
        return new Promise((resolve) => {
            document.startViewTransition(async () => {
                resolve();
                await navigation.complete;
            });
        });
    });

    function closePortalModal() {
        showPortalModal = false;
    }

    onMount(() => {
        updateIsMobile();
        window.addEventListener('resize', updateIsMobile);
        
        // Unregister any existing service workers to prevent errors
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.getRegistrations().then(function(registrations) {
                for(let registration of registrations) {
                    registration.unregister();
                }
            });
        }
        
        return () => window.removeEventListener('resize', updateIsMobile);
    });
</script>

<svelte:head>
    <link rel="canonical" href={`https://manageit.nz${$page.url.pathname}`} />
</svelte:head>

<!-- Skip Navigation Links -->
<a href="#main-content" class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-green-700 text-white px-4 py-2 rounded-md z-50">
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

<footer class="w-full border-t bg-muted/50">
    <div class="max-w-6xl mx-auto px-4 md:px-6 py-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div class="space-y-3">
            <img src="/manageit-logo.png" alt="Manage IT" width="273" height="82" class="h-8 w-auto" loading="lazy" />
            <p class="text-sm text-muted-foreground max-w-[28ch]">
                Reliable IT solutions and computer networking services for New Zealand businesses.
            </p>
        </div>
        <div>
            <h2 class="text-sm font-semibold mb-3">Services</h2>
            <ul class="space-y-2 text-sm text-muted-foreground">
                <li><a href="/services/it-support" class="hover:underline underline-offset-4">IT Support</a></li>
                <li><a href="/services/cloud-backup" class="hover:underline underline-offset-4">Cloud Backups</a></li>
                <li><a href="/services/cloud-migration" class="hover:underline underline-offset-4">Cloud Migration</a></li>
                <li><a href="/services/endpoint-management" class="hover:underline underline-offset-4">Endpoint Management</a></li>
            </ul>
        </div>
        <div>
            <h2 class="text-sm font-semibold mb-3">Company</h2>
            <ul class="space-y-2 text-sm text-muted-foreground">
                <li><a href="/about-us" class="hover:underline underline-offset-4">About Us</a></li>
                <li><a href="/contact" class="hover:underline underline-offset-4">Contact</a></li>
                <li>
                    <button type="button" class="hover:underline underline-offset-4" on:click={openPortalModal}>
                        Client Portal
                    </button>
                </li>
            </ul>
        </div>
        <div>
            <h2 class="text-sm font-semibold mb-3">Get in Touch</h2>
            <address class="not-italic space-y-2 text-sm text-muted-foreground">
                <p>Unit 1/27A Sir William Pickering Drive<br />Burnside, Christchurch 8053</p>
                <p><a href="tel:+6433810333" class="hover:underline underline-offset-4">03 381 0333</a></p>
                <p><a href="tel:0800648787" class="hover:underline underline-offset-4">0800 648 787</a></p>
                <p><a href="mailto:info@manageit.nz" class="hover:underline underline-offset-4">info@manageit.nz</a></p>
            </address>
        </div>
    </div>
    <div class="border-t">
        <p class="max-w-6xl mx-auto px-4 md:px-6 py-4 text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Manage IT. All rights reserved.
        </p>
    </div>
</footer>