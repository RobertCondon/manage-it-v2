<script>
    import Testimonials from "$lib/home/Testimonials.svelte";
    import GetAQuote from "$lib/home/GetAQuote.svelte";
    import { onMount } from "svelte";

    export let email = '';
</script>


<div class="flex flex-col min-h-[100dvh]">
    <main class="flex-1">
        <section class="w-full py-12 md:py-24 flex justify-center">
            <div class="container px-4 md:px-6 flex flex-row-reverse gap-8 lg:grid-cols-2 lg:gap-16">
                <div class="space-y-4">
                    <h1 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        Reliable IT Solutions for Your Business
                    </h1>
                    <p class="max-w-[600px] text-muted-foreground md:text-xl">
                        Manage IT is a leading provider of comprehensive computer networking services, helping businesses of all sizes optimize their IT infrastructure and achieve their goals.
                    </p>
                    <div class="flex gap-2">
                        <a href="/contact" class="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                            Get a Quote
                        </a>
                        <a href="/services/endpoint-management" class="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                            Learn More
                        </a>
                    </div>
                </div>
                <img src="/home/home-banner.png" width="550" height="550" alt="Hero" class="mx-auto max-w-[50%] overflow-hidden rounded-xl object-cover sm:w-full lg:order-last " />
            </div>
            <img src="/home/logo-diced.png" alt="Diced" class="absolute right-0 -z-10" />
        </section>
        <section class="w-full py-12 md:py-24 lg:py-32 bg-muted flex justify-center">
            <div class="container px-4 md:px-6">
                <div class="flex flex-col items-center justify-center space-y-4 text-center">
                    <div class="space-y-2">
                        <h2 class="text-3xl font-bold tracking-tighter sm:text-5xl">Our Expertise</h2>
                        <p class="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Manage IT offers a wide range of computer networking services to help businesses of all sizes optimize their IT infrastructure and achieve their goals.
                        </p>
                    </div>
                </div>
                <div class="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                    <img src="/home/experts.png" width="550" height="310" alt="Expertise" class="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last" />
                    <div class="flex flex-col justify-center space-y-4">
                        <ul class="grid gap-6">
                            <li>
                                <div class="flex justify-center items-center">
                                    <svg data-id="30" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="inline-block mr-2 w-9 h-9"><rect x="16" y="16" width="6" height="6" rx="1"></rect><rect x="2" y="16" width="6" height="6" rx="1"></rect><rect x="9" y="2" width="6" height="6" rx="1"></rect><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"></path><path d="M12 12V8"></path></svg>
                                    <div class="grid gap-1">
                                        <h3 class="text-xl font-bold">
                                            Network Design
                                        </h3>
                                        <p class="text-muted-foreground">
                                            Our experts will design a custom network infrastructure to meet your business needs.
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="flex justify-center items-center">
                                    <svg data-id="35" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="inline-block mr-2 w-9 h-9"><path d="M12 2v10"></path><path d="M18.4 6.6a9 9 0 1 1-12.77.04"></path></svg>
                                    <div class="grid gap-1">
                                        <h3 class="text-xl font-bold">
                                            IT Support
                                        </h3>
                                        <p class="text-muted-foreground">
                                            Our team of experienced technicians provides reliable and responsive IT support.
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="flex justify-center items-center">
                                    <svg data-id="40" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="inline-block mr-2 w-10 h-10"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path></svg>
                                    <div class="grid gap-1">
                                        <h3 class="text-xl font-bold">
                                            Cloud Solutions
                                        </h3>
                                        <p class="text-muted-foreground">
                                            We can help you migrate your infrastructure to the cloud and optimize your cloud-based services.
                                        </p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div class="flex justify-center align-middle">
                        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 max-w-2xl">
                            <a
                                    href="/services/cloud-migration"
                                    class="inline-flex h-12 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                            >
                                Cloud Migration
                            </a>
                            <a
                                    href="/services/endpoint-management"
                                    class="inline-flex h-12 items-center justify-center rounded-md border border-input bg-background px-6 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                            >
                                Endpoint Management
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Testimonials></Testimonials>
        <GetAQuote></GetAQuote>
    </main>
</div>

