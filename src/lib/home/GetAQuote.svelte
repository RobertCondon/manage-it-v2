<script>
    import { onMount } from 'svelte';

    let showAdditionalFields = false;
    let sentEmail = false;
    let emailInput = '';

    function handleEmailInput(event) {
        emailInput = event.target.value.trim();
        showAdditionalFields = emailInput !== '';
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log('Email:', emailInput);
        alert('Would send email here from ' + emailInput);
        sentEmail = true;
    }
</script>

<style>
    .container {
        max-width: 42rem;
        margin: 0 auto;
    }

    .input,
    .textarea {
        width: 100%;
        padding: 0.5rem;
        border: 1px solid #ccc;
        border-radius: 0.25rem;
    }

    .button {
        padding: 0.5rem 1rem;
        background-color: #007bff;
        color: white;
        border: none;
        border-radius: 0.25rem;
        cursor: pointer;
    }

    .button:hover {
        background-color: #0056b3;
    }
</style>

<section class="w-full bg-muted py-12 md:py-24 lg:py-32">
    <div class="container px-4 md:px-6">
        <div class="mx-auto max-w-2xl space-y-4 text-center">
            <div class="space-y-2">
                <h2 class="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Get Started?</h2>
                <p class="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Contact us today to learn how Manage IT can help your business optimize its IT infrastructure and achieve its goals.
                </p>
            </div>
            {#if sentEmail}
                <div class="space-y-2 bg-white flex rounded-lg p-1 flex-col">
                    <p class="text-xl font-bold">Thank you for your interest!</p>
                    <p class="text-muted-foreground">We'll be in touch shortly to discuss your needs.</p>
                </div>
            {:else}
                <form class="space-y-4">
                    <div class="flex items-center gap-2">
                        <input type="email" placeholder="Enter your email" class="input flex-1" on:input={handleEmailInput} />
                        <button type="submit" class="button" on:click={handleSubmit}>Get a Quote</button>
                    </div>
                    {#if showAdditionalFields}
                        <div class="space-y-2">
                            <textarea placeholder="Tell us more about your needs" class="textarea min-h-[100px]"></textarea>
                        </div>
                    {/if}
                </form>
            {/if}
        </div>
    </div>
</section>
