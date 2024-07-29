<script lang="ts">
    import { CheckOutline } from 'flowbite-svelte-icons';
</script>

<div class="flex flex-col min-h-dvh">
    <main class="flex-1">
        <section class="w-full py-12 md:py-24 lg:py-32 px-[10vw]">
            <div class="container px-4 md:px-6">
                <div class="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
                    <div class="space-y-4">
                        <div class="space-y-2">
                            <div class="inline-block rounded-lg bg-muted px-3 py-1 text-sm">IT Support Services</div>
                            <h2 class="text-3xl font-bold tracking-tighter sm:text-5xl">
                                Dedicated IT Support Solutions
                            </h2>
                            <p class="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                Our IT Support Services provide comprehensive support to manage and resolve technical issues efficiently, ensuring your business operations run smoothly.
                            </p>
                        </div>
                        <ul class="grid gap-2 py-4">
                            <li>
                                <CheckOutline class="mr-2 inline-block h-4 w-4" />
                                Cost-effective IT support tailored to your business needs.
                            </li>
                            <li>
                                <CheckOutline class="mr-2 inline-block h-4 w-4" />
                                Scalable services to grow with your business.
                            </li>
                            <li>
                                <CheckOutline class="mr-2 inline-block h-4 w-4" />
                                Proactive monitoring and regular maintenance to prevent issues.
                            </li>
                        </ul>
                    </div>
                    <img
                            src="../services/it-support.png"
                            width="550"
                            height="310"
                            alt="IT Support"
                            class="mx-auto overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                    />
                </div>
            </div>
        </section>
        <section class="w-full py-12 md:py-24 lg:py-32 bg-muted px-40">
            <div class="container px-4 md:px-6">
                <div class="grid gap-6 lg:grid-cols-2 lg:gap-12">
                    <div class="space-y-4">
                        <div class="space-y-2">
                            <div>
                                <h2 class="text-3xl font-bold tracking-tighter sm:text-5xl">
                                    Comprehensive IT Support Services
                                </h2>
                                <p class="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    From remote support to on-site assistance, we provide a range of IT support services to meet your business needs.
                                </p>
                            </div>
                            <div class="flex justify-center mt-10">
                                <img
                                        src="../services/it-support-secondary.svg"
                                        alt="IT Support"
                                        class="w-80 overflow-hidden "
                                />
                            </div>
                        </div>
                    </div>
                    <div class="grid gap-6">
                        <div class="grid gap-1">
                            <h3 class="text-lg font-bold">Remote User Support</h3>
                            <p class="text-muted-foreground">
                                Our team provides remote assistance for password resets, file recovery, virus removal, and more.
                            </p>
                        </div>
                        <div class="grid gap-1">
                            <h3 class="text-lg font-bold">On-Site Support</h3>
                            <p class="text-muted-foreground">
                                If issues cannot be resolved remotely, our engineers will visit your site to provide the necessary support.
                            </p>
                        </div>
                        <div class="grid gap-1">
                            <h3 class="text-lg font-bold">Proactive Monitoring</h3>
                            <p class="text-muted-foreground">
                                Continuous monitoring of your IT infrastructure to identify and address potential issues early.
                            </p>
                        </div>
                        <div class="grid gap-1">
                            <h3 class="text-lg font-bold">Regular Maintenance</h3>
                            <p class="text-muted-foreground">
                                Scheduled maintenance to ensure your systems are running optimally and securely.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</div>
