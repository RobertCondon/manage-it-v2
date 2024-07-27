<script>
    import "../app.css";
    import MobileNav from "$lib/components/MobileNav.svelte";
    import Nav from "$lib/components/Nav.svelte";
    import {onMount} from "svelte";

    let isMobile = false;

    function updateIsMobile() {
        isMobile = window.innerWidth < 768;
    }

    onMount(() => {
        updateIsMobile();
        window.addEventListener('resize', updateIsMobile);
        return () => window.removeEventListener('resize', updateIsMobile);
    });
</script>

<header class="px-4 lg:px-6 h-14 flex items-center">
    {#if isMobile}
        <MobileNav />
    {:else}
        <Nav />
    {/if}
</header>

<main>
    <slot></slot>
</main>

<footer>
    <footer class="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p class="text-xs text-muted-foreground">&copy; 2024 Manage IT. All rights reserved.</p>
        <nav class="sm:ml-auto flex gap-4 sm:gap-6">
            <a href="#" class="text-xs hover:underline underline-offset-4">Terms of Service</a>
            <a href="#" class="text-xs hover:underline underline-offset-4">Privacy Policy</a>
        </nav>
    </footer>
</footer>