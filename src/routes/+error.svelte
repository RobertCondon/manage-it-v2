<script>
    import { page } from '$app/stores';
</script>

<svelte:head>
    <title>{$page.status === 404 ? 'Page Not Found' : 'Something Went Wrong'} - Manage IT</title>
</svelte:head>

<div class="flex flex-col items-center justify-center min-h-[60vh] px-4 py-16 text-center">
    <p class="text-7xl font-bold text-green-700 mb-4">{$page.status}</p>
    <h1 class="text-2xl font-bold mb-2">
        {$page.status === 404 ? "We couldn't find that page" : 'Something went wrong'}
    </h1>
    <p class="text-muted-foreground max-w-[45ch] mb-8">
        {$page.status === 404
            ? 'The page you were looking for may have moved or no longer exists.'
            : 'Sorry about that — please try again in a moment.'}
    </p>
    <div class="flex gap-3">
        <a
            href="/"
            class="inline-flex h-10 items-center justify-center rounded-md bg-green-700 hover:bg-green-800 px-8 text-sm font-medium text-white shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
        >
            Back to Home
        </a>
        <a
            href="/contact"
            class="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
        >
            Contact Us
        </a>
    </div>
</div>
