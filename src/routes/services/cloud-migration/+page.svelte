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
                            <div class="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Cloud Migration Services</div>
                            <h2 class="text-3xl font-bold tracking-tighter sm:text-5xl">
                                Seamless and Secure Cloud Migration
                            </h2>
                            <p class="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                Our Cloud Migration Services help your business transition to the cloud with minimal disruption, enhanced security, and ongoing support to ensure smooth operations.
                            </p>
                        </div>
                        <ul class="grid gap-2 py-4">
                            <li>
                                <CheckOutline class="mr-2 inline-block h-4 w-4" />
                                Business continuity during and after the migration process.
                            </li>
                            <li>
                                <CheckOutline class="mr-2 inline-block h-4 w-4" />
                                Enhanced security measures to protect your data.
                            </li>
                            <li>
                                <CheckOutline class="mr-2 inline-block h-4 w-4" />
                                Scalable solutions to grow with your business.
                            </li>
                        </ul>
                    </div>
                    <img
                            src="../services/cloud-migration.svggit "
                            width="550"
                            height="310"
                            alt="Cloud Migration"
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
                                    Comprehensive Cloud Migration Solutions
                                </h2>
                                <p class="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Our team provides a range of services to ensure a smooth and efficient migration to the cloud.
                                </p>
                            </div>
                            <div class="flex justify-center mt-10">
                                <img
                                        src="../services/cloud-migration-secondary.svg"
                                        alt="Cloud Migration"
                                        class="w-80 overflow-hidden "
                                />
                            </div>
                        </div>
                    </div>
                    <div class="grid gap-6">
                        <div class="grid gap-1">
                            <h3 class="text-lg font-bold">Migration Planning and Strategy</h3>
                            <p class="text-muted-foreground">
                                We work with you to develop a customized migration plan that meets your business requirements.
                            </p>
                        </div>
                        <div class="grid gap-1">
                            <h3 class="text-lg font-bold">Data Migration</h3>
                            <p class="text-muted-foreground">
                                Secure and efficient transfer of your data to the cloud, ensuring minimal disruption to your business operations.
                            </p>
                        </div>
                        <div class="grid gap-1">
                            <h3 class="text-lg font-bold">Post-Migration Support</h3>
                            <p class="text-muted-foreground">
                                Ongoing support to ensure your cloud environment runs smoothly and efficiently after the migration is complete.
                            </p>
                        </div>
                        <div class="grid gap-1">
                            <h3 class="text-lg font-bold">Enhanced Security</h3>
                            <p class="text-muted-foreground">
                                Robust security measures to protect your data during and after the migration process.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</div>
