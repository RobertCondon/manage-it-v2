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
                            <div class="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Cloud Backup Services</div>
                            <h2 class="text-3xl font-bold tracking-tighter sm:text-5xl">
                                Secure and Reliable Cloud Backup Solutions
                            </h2>
                            <p class="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                Protect your critical business data with our comprehensive cloud backup services. From daily backups to disaster recovery, we've got you covered.
                            </p>
                        </div>
                        <ul class="grid gap-2 py-4">
                            <li>
                                <CheckOutline class="mr-2 inline-block h-4 w-4" />
                                Daily backups for Microsoft 365, Google Workplace, and critical business data.
                            </li>
                            <li>
                                <CheckOutline class="mr-2 inline-block h-4 w-4" />
                                Regular recoverability testing to ensure data integrity.
                            </li>
                            <li>
                                <CheckOutline class="mr-2 inline-block h-4 w-4" />
                                Flexible storage options to suit your business needs.
                            </li>
                        </ul>
                    </div>
                    <img
                            src="../services/networking.png"
                            width="550"
                            height="310"
                            alt="Cloud Backup"
                            class="mx-auto overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                    />
                </div>
            </div>
        </section>
        <section class="w-full py-12 md:py-24 lg:py-32 bg-muted px-[10vw]">
            <div class="container px-4 md:px-6">
                <div class="grid gap-6 lg:grid-cols-2 lg:gap-12">
                    <div class="space-y-4">
                        <div class="space-y-2">
                            <div>
                                <h2 class="text-3xl font-bold tracking-tighter sm:text-5xl">
                                    Comprehensive Cloud Backup Solutions
                                </h2>
                                <p class="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    From configuration to recovery, our cloud backup solutions are designed to keep your data secure and accessible.
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
                            <h3 class="text-lg font-bold">Microsoft 365 & Google Workplace Backup</h3>
                            <p class="text-muted-foreground">
                                Our cloud backup services include daily backups for your Microsoft 365 and Google Workplace environments, ensuring your emails, contacts, calendars, and documents are always protected.
                            </p>
                        </div>
                        <div class="grid gap-1">
                            <h3 class="text-lg font-bold">Flat File Backup</h3>
                            <p class="text-muted-foreground">
                                We offer daily backups for critical business data stored on servers, workstations, and laptops, with regular testing to ensure data integrity and recoverability.
                            </p>
                        </div>
                        <div class="grid gap-1">
                            <h3 class="text-lg font-bold">Disaster Recovery Plan</h3>
                            <p class="text-muted-foreground">
                                Our customized disaster recovery plans provide a fully functional recovery point for your network core services, regularly tested to ensure readiness in case of an emergency.
                            </p>
                        </div>
                        <div class="grid gap-1">
                            <h3 class="text-lg font-bold">Scalable Storage</h3>
                            <p class="text-muted-foreground">
                                We offer flexible storage options, with pooled storage available per license and additional cloud storage units available as needed, ensuring your data is always backed up and accessible.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</div>
