<script>
    let name = '';
    let email = '';
    let message = '';
    let submitted = false;

    function handleSubmit(event) {
        event.preventDefault();
        // Implement form submission logic here
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);
        submitted = true;
    }
</script>

<div class="flex flex-col min-h-[100dvh]">
    <main class="flex-1">
        <!-- Hero Section -->
        <section class="w-full py-12 md:py-24 flex justify-center">
            <div class="container px-4 md:px-6">
                <div class="space-y-6 text-center">
                    <h1 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        Contact Us
                    </h1>
                    <p class="max-w-[600px] mx-auto text-muted-foreground md:text-xl">
                        Have a question or need assistance? Fill out the form below and we'll get back to you as soon as possible.
                    </p>
                </div>
                <!-- Contact Form and Address Sections -->
                <div class="mt-12 flex flex-col md:flex-row align-middle justify-center">
                    <!-- Contact Form -->
                    <div class="flex-1 max-w-lg px-8" style="margin-top: 4rem">
                        {#if submitted}
                            <div class="space-y-2 bg-white rounded-lg p-4">
                                <p class="text-xl font-bold">Thank you for contacting us!</p>
                                <p class="text-muted-foreground">We'll be in touch shortly.</p>
                            </div>
                        {:else}
                            <form class="space-y-6" on:submit|preventDefault={handleSubmit}>
                                <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                    <div class="space-y-2">
                                        <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
                                        <input
                                                id="name"
                                                type="text"
                                                placeholder="Enter your name"
                                                class="w-full px-3 py-2 border border-input bg-background rounded-md text-sm shadow-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                                                bind:value={name}
                                        />
                                    </div>
                                    <div class="space-y-2">
                                        <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                                        <input
                                                id="email"
                                                type="email"
                                                placeholder="Enter your email"
                                                class="w-full px-3 py-2 border border-input bg-background rounded-md text-sm shadow-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                                                bind:value={email}
                                        />
                                    </div>
                                </div>
                                <div class="space-y-2">
                                    <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
                                    <textarea
                                            id="message"
                                            placeholder="Enter your message"
                                            class="w-full min-h-[120px] px-3 py-2 border border-input bg-background rounded-md text-sm shadow-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                                            bind:value={message}
                                    ></textarea>
                                </div>
                                <button
                                        type="submit"
                                        class="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus:outline-none focus:ring-1 focus:ring-ring disabled:pointer-events-none disabled:opacity-50"
                                >
                                    Submit
                                </button>
                            </form>
                        {/if}
                    </div>
                    <!-- Address Block -->
                    <div class="flex-1 max-w-md px-8" style="margin-top: 4rem">
                        <div class="space-y-8">
                            <div class="space-y-4">
                                <h2 class="text-2xl font-bold">Our Address</h2>
                                <div class="space-y-1 text-muted-foreground">
                                    <p>Unit B1/92 Russley Road</p>
                                    <p>Russley, Christchurch 8042</p>
                                </div>
                            </div>
                            <div class="space-y-4">
                                <h2 class="text-2xl font-bold">Phone</h2>
                                <div class="text-muted-foreground">
                                    <p>033 810 333</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Google Maps Embed -->
                <div class="mt-12 flex justify-center" style="margin-top: 5rem">
                    <div style="width: 80%">
                        <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11573.80776468875!2d172.5382404!3d-43.5137675!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d321fda58eb5c55%3A0x9b014512a73764dd!2sManage%20IT%20Digital%20Ltd!5e0!3m2!1sen!2snz!4v1727007793128!5m2!1sen!2snz"
                                width="100%"
                                height="400"
                                style="border:0;"
                                allowfullscreen=""
                                loading="lazy"
                                title="Google Maps"
                                referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    </main>
</div>
