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
                            <div class="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Networking Services</div>
                            <h2 class="text-3xl font-bold tracking-tighter sm:text-5xl">
                                Reliable and Efficient Network Management
                            </h2>
                            <p class="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                Our Networking Services ensure your business stays connected with reduced system downtimes, optimal performance, and disaster recovery.
                            </p>
                        </div>
                        <ul class="grid gap-2 py-4">
                            <li>
                                <CheckOutline class="mr-2 inline-block h-4 w-4" />
                                Proactive monitoring and maintenance of network devices.
                            </li>
                            <li>
                                <CheckOutline class="mr-2 inline-block h-4 w-4" />
                                Timely upgrades and replacements of firewalls, routers, switches, and access points.
                            </li>
                            <li>
                                <CheckOutline class="mr-2 inline-block h-4 w-4" />
                                Comprehensive disaster recovery and business continuity planning.
                            </li>
                        </ul>
                    </div>
                    <img
                            src="../services/networking.png"
                            width="550"
                            height="310"
                            alt="Networking"
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
                                    Comprehensive Networking Solutions
                                </h2>
                                <p class="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    From proactive monitoring to timely upgrades, we've got you covered.
                                </p>
                            </div>
                            <div class="flex justify-center mt-10">
                                <img
                                        src="../services/networking-secondary.svg"
                                        alt="Networking"
                                        class="w-80 overflow-hidden "
                                />
                            </div>
                        </div>
                    </div>
                    <div class="grid gap-6">
                        <div class="grid gap-1">
                            <h3 class="text-lg font-bold">Proactive Monitoring</h3>
                            <p class="text-muted-foreground">
                                Our team of experts continuously monitors your network infrastructure to identify and address issues before they impact your business.
                            </p>
                        </div>
                        <div class="grid gap-1">
                            <h3 class="text-lg font-bold">Regular Maintenance</h3>
                            <p class="text-muted-foreground">
                                We perform regular maintenance tasks to ensure your network devices are running at optimal performance and security levels.
                            </p>
                        </div>
                        <div class="grid gap-1">
                            <h3 class="text-lg font-bold">Timely Upgrades</h3>
                            <p class="text-muted-foreground">
                                Our team proactively upgrades and replaces network devices like firewalls, routers, switches, and access points to keep your infrastructure up-to-date.
                            </p>
                        </div>
                        <div class="grid gap-1">
                            <h3 class="text-lg font-bold">Disaster Recovery</h3>
                            <p class="text-muted-foreground">
                                We develop comprehensive disaster recovery and business continuity plans to ensure your network and data are protected in the event of an emergency.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</div>