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
                            <div class="inline-block rounded-lg bg-muted px-3 py-1 text-sm">End Point Management</div>
                            <h2 class="text-3xl font-bold tracking-tighter sm:text-5xl">
                                Comprehensive End Point Management Services
                            </h2>
                            <p class="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                Keep your IT infrastructure running smoothly with our all-inclusive End Point Management services, covering everything from remote monitoring to proactive device support.
                            </p>
                        </div>
                        <ul class="grid gap-2 py-4">
                            <li>
                                <CheckOutline class="mr-2 inline-block h-4 w-4" />
                                24/7 Remote Monitoring and Management (RMM) of servers, workstations, and laptops.
                            </li>
                            <li>
                                <CheckOutline class="mr-2 inline-block h-4 w-4" />
                                Comprehensive Asset Management with regular reporting.
                            </li>
                            <li>
                                <CheckOutline class="mr-2 inline-block h-4 w-4" />
                                Tier 1/2 Help Desk Support for day-to-day issues.
                            </li>
                            <li>
                                <CheckOutline class="mr-2 inline-block h-4 w-4" />
                                Unlimited and proactive support for workstations, servers, and network devices.
                            </li>
                        </ul>
                    </div>
                    <img
                            src="../services/endpoint-management.png"
                            width="550"
                            height="310"
                            alt="End Point Management"
                            class="mx-auto overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                    />
                </div>
            </div>
        </section>

        <section class="w-full py-12 md:py-24 lg:py-32 bg-muted px-[10vw]">
            <div class="container px-4 md:px-6">
                <div class="grid gap-6 lg:grid-cols-2 lg:gap-12">
                    <div class="space-y-4">
                        <h2 class="text-3xl font-bold tracking-tighter sm:text-5xl">
                            Tailored End Point Solutions
                        </h2>
                        <p class="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Our End Point Management services are designed to provide comprehensive support for your entire IT infrastructure, ensuring seamless operation and maximum uptime.
                        </p>
                    </div>
                    <div class="flex justify-center mt-10">
                        <img
                                src="../services/endpoint-secondary.svg"
                                alt="End Point Management"
                                class="w-80 overflow-hidden"
                        />
                    </div>
                </div>

                <div class="grid lg:grid-cols-3 gap-6 pt-12">
                    <div class="p-6 bg-white rounded-lg shadow-md space-y-4 support-type-block">
                        <h3 class="text-2xl font-bold">Base Support</h3>
                        <ul class="space-y-3 text-gray-700">
                            <li class="flex items-start">
                                <CheckOutline class="mr-2 h-5 w-5 text-green-500 flex-shrink-0" />
                                <span>
                                    <strong>Remote Monitoring and Management (RMM):</strong> Continuous 24/7 monitoring of your servers, workstations, and laptops to detect and address issues before they impact your business.
                                </span>
                            </li>
                            <li class="flex items-start">
                                <CheckOutline class="mr-2 h-5 w-5 text-green-500 flex-shrink-0" />
                                <span>
                                    <strong>Automated Maintenance Tasks:</strong> Regular tasks such as restarting failed services, drive cleanup, and defragmentation are automated to maintain optimal system performance.
                                </span>
                            </li>
                            <li class="flex items-start">
                                <CheckOutline class="mr-2 h-5 w-5 text-green-500 flex-shrink-0" />
                                <span>
                                    <strong>Patch Management:</strong> Automated deployment of patches for Microsoft servers, workstations, and laptops to keep your systems secure and up to date.
                                </span>
                            </li>
                            <li class="flex items-start">
                                <CheckOutline class="mr-2 h-5 w-5 text-green-500 flex-shrink-0" />
                                <span>
                                    <strong>Asset Management:</strong> Comprehensive tracking of hardware assets, including manufacturer details, operating system information, and warranty status, with monthly reporting.
                                </span>
                            </li>
                        </ul>
                    </div>

                    <div class="p-6 bg-white rounded-lg shadow-md space-y-4 support-type-block">
                        <h3 class="text-2xl font-bold">User Support</h3>
                        <ul class="space-y-3 text-gray-700">
                            <li class="flex items-start">
                                <CheckOutline class="mr-2 h-5 w-5 text-green-500 flex-shrink-0" />
                                <span>
                                    <strong>Help Desk Support:</strong> Tier 1/2 support for resolving user issues and service requests, with a focus on quick and efficient problem resolution.
                                </span>
                            </li>
                            <li class="flex items-start">
                                <CheckOutline class="mr-2 h-5 w-5 text-green-500 flex-shrink-0" />
                                <span>
                                    <strong>Moves, Adds, and Changes (MAC):</strong> Support for changes in user setups, including workstation adjustments and updates, with unlimited support during business hours.
                                </span>
                            </li>
                            <li class="flex items-start">
                                <CheckOutline class="mr-2 h-5 w-5 text-green-500 flex-shrink-0" />
                                <span>
                                    <strong>Printer/Copier Support:</strong> Remote and onsite assistance for resolving printer and copier issues, ensuring minimal disruption to your daily operations.
                                </span>
                            </li>
                            <li class="flex items-start">
                                <CheckOutline class="mr-2 h-5 w-5 text-green-500 flex-shrink-0" />
                                <span>
                                    <strong>Proactive Ticket Management:</strong> Continuous monitoring of support tickets, with feedback provided to users on the status of their requests.
                                </span>
                            </li>
                        </ul>
                    </div>

                    <div class="p-6 bg-white rounded-lg shadow-md space-y-4 support-type-block">
                        <h3 class="text-2xl font-bold">Computer Support</h3>
                        <ul class="space-y-3 text-gray-700">
                            <li class="flex items-start">
                                <CheckOutline class="mr-2 h-5 w-5 text-green-500 flex-shrink-0" />
                                <span>
                                    <strong>Unlimited Support:</strong> Comprehensive support for all workstations, laptops, and notebooks, covering both hardware and software issues to minimize downtime.
                                </span>
                            </li>
                            <li class="flex items-start">
                                <CheckOutline class="mr-2 h-5 w-5 text-green-500 flex-shrink-0" />
                                <span>
                                    <strong>Proactive Maintenance:</strong> Regular system checks and updates to prevent issues from arising and to keep your equipment running smoothly.
                                </span>
                            </li>
                            <li class="flex items-start">
                                <CheckOutline class="mr-2 h-5 w-5 text-green-500 flex-shrink-0" />
                                <span>
                                    <strong>3rd Party Software Support:</strong> Basic fault resolution for third-party software, ensuring compatibility and functionality across your IT environment.
                                </span>
                            </li>
                            <li class="flex items-start">
                                <CheckOutline class="mr-2 h-5 w-5 text-green-500 flex-shrink-0" />
                                <span>
                                    <strong>Installation and Configuration:</strong> Assistance with the installation and configuration of new software and hardware, tailored to your business needs.
                                </span>
                            </li>
                        </ul>
                    </div>

                    <div class="p-6 bg-white rounded-lg shadow-md space-y-4 support-type-block">
                        <h3 class="text-2xl font-bold">Server Support</h3>
                        <ul class="space-y-3 text-gray-700">
                            <li class="flex items-start">
                                <CheckOutline class="mr-2 h-5 w-5 text-green-500 flex-shrink-0" />
                                <span>
                                    <strong>Unlimited Remote and Onsite Support:</strong> Full support for your server infrastructure, including proactive maintenance and issue resolution.
                                </span>
                            </li>
                            <li class="flex items-start">
                                <CheckOutline class="mr-2 h-5 w-5 text-green-500 flex-shrink-0" />
                                <span>
                                    <strong>Proactive Server Monitoring:</strong> Continuous monitoring of server performance, with alerts and issue resolution to prevent downtime.
                                </span>
                            </li>
                            <li class="flex items-start">
                                <CheckOutline class="mr-2 h-5 w-5 text-green-500 flex-shrink-0" />
                                <span>
                                    <strong>Hardware and Software Maintenance:</strong> Regular updates and maintenance of server hardware and operating systems to ensure long-term reliability.
                                </span>
                            </li>
                            <li class="flex items-start">
                                <CheckOutline class="mr-2 h-5 w-5 text-green-500 flex-shrink-0" />
                                <span>
                                    <strong>Monthly Reporting:</strong> Detailed reports on server health, performance, and any maintenance tasks performed, keeping you informed about your infrastructure.
                                </span>
                            </li>
                        </ul>
                    </div>

                    <div class="p-6 bg-white rounded-lg shadow-md space-y-4 support-type-block">
                        <h3 class="text-2xl font-bold">Managed Device Support</h3>
                        <ul class="space-y-3 text-gray-700">
                            <li class="flex items-start">
                                <CheckOutline class="mr-2 h-5 w-5 text-green-500 flex-shrink-0" />
                                <span>
                                    <strong>Network Device Monitoring:</strong> Continuous monitoring of firewalls, routers, switches, and access points to ensure optimal performance and security.
                                </span>
                            </li>
                            <li class="flex items-start">
                                <CheckOutline class="mr-2 h-5 w-5 text-green-500 flex-shrink-0" />
                                <span>
                                    <strong>Firmware Updates:</strong> Regular updates to network device firmware to protect against vulnerabilities and maintain up-to-date functionality.
                                </span>
                            </li>
                            <li class="flex items-start">
                                <CheckOutline class="mr-2 h-5 w-5 text-green-500 flex-shrink-0" />
                                <span>
                                    <strong>Configuration Backups:</strong> Frequent backups of network device configurations, ensuring quick recovery in case of hardware failure or configuration errors.
                                </span>
                            </li>
                            <li class="flex items-start">
                                <CheckOutline class="mr-2 h-5 w-5 text-green-500 flex-shrink-0" />
                                <span>
                                    <strong>Performance Reporting:</strong> Periodic reports on network device performance, including insights into any alerts or issues that occurred, helping you stay ahead of potential problems.
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </main>
</div>
