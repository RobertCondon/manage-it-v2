<script lang="ts">
    import { CheckOutline } from 'flowbite-svelte-icons';
</script>

<div class="flex flex-col min-h-dvh">
    <main class="flex-1">
        <section class="w-full py-12 md:py-24 lg:py-24 px-[10vw]">
            <div class="container px-4 md:px-6">
                <div class="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
                    <div class="space-y-4">
                        <div class="space-y-2">
                            <div class="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Office 365 Services</div>
                            <h2 class="text-3xl font-bold tracking-tighter sm:text-5xl">
                                Comprehensive Office 365 Solutions
                            </h2>
                            <p class="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                Our Office 365 Services provide your business with the latest Microsoft Office applications, enhanced security, and daily backups to ensure seamless operations.
                            </p>
                        </div>
                        <ul class="grid gap-2 py-4">
                            <li>
                                <CheckOutline class="mr-2 inline-block h-4 w-4" />
                                Business class email with enhanced security.
                            </li>
                            <li>
                                <CheckOutline class="mr-2 inline-block h-4 w-4" />
                                Cloud-hosted and fully installed Microsoft Office apps.
                            </li>
                            <li>
                                <CheckOutline class="mr-2 inline-block h-4 w-4" />
                                Daily backups of email and calendar to prevent data loss.
                            </li>
                        </ul>
                    </div>
                    <img
                            src="../services/office365.png"
                            width="550"
                            height="310"
                            alt="Office 365"
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
                                    Tailored Office 365 Packages
                                </h2>
                                <p class="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Choose from our range of Office 365 packages designed to fit your business needs.
                                </p>
                            </div>
                            <div class="flex justify-center mt-10">
                                <img
                                        src="../services/office365-secondary.svg"
                                        alt="Office 365"
                                        class="w-80 overflow-hidden "
                                />
                            </div>
                        </div>
                    </div>
                    <div class="grid gap-6">
                        <div class="grid gap-1">
                            <h3 class="text-lg font-bold">Business Essentials</h3>
                            <p class="text-muted-foreground">
                                Get business class email, antivirus for security, and daily backups of your email and calendar.
                            </p>
                        </div>
                        <div class="grid gap-1">
                            <h3 class="text-lg font-bold">Business Pro</h3>
                            <p class="text-muted-foreground">
                                Includes everything in Business Essentials, plus cloud-hosted Microsoft Office apps and proactive monitoring.
                            </p>
                        </div>
                        <div class="grid gap-1">
                            <h3 class="text-lg font-bold">Business Superior</h3>
                            <p class="text-muted-foreground">
                                Comprehensive package with fully installed Microsoft Office apps, spam and phishing filters, and enhanced security measures.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</div>
