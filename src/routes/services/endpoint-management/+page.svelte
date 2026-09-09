<script lang="ts">
    import ServiceCta from "$lib/components/ServiceCta.svelte";
    import { CheckOutline } from 'flowbite-svelte-icons';
</script>

<svelte:head>
    <title>Endpoint Management Services - Manage IT Digital | Device Management</title>
    <meta name="description" content="Complete endpoint management solutions for businesses. Secure, monitor, and manage all devices from a single dashboard with expert IT support." />
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Endpoint Management",
        "serviceType": "Endpoint management",
        "description": "Remote monitoring and management of business devices: patching, security baselines and proactive device support.",
        "url": "https://manageit.nz/services/endpoint-management",
        "provider": {
            "@id": "https://manageit.nz/#business"
        },
        "areaServed": {
            "@type": "Country",
            "name": "New Zealand"
        }
    }
    </script>
</svelte:head>

<div class="bg-gradient-to-br from-emerald-50 via-teal-50 to-green-50 min-h-screen">
    <div class="flex-1">
        <!-- Hero Section -->
        <section class="relative w-full py-16 md:py-24 lg:py-32 px-[10vw] overflow-hidden">
            <!-- Background decorative elements -->
            <div class="absolute inset-0 overflow-hidden">
                <div class="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-green-200/30 to-emerald-300/20 rounded-full blur-3xl"></div>
                <div class="absolute top-1/2 -left-20 w-60 h-60 bg-gradient-to-br from-teal-200/20 to-green-300/10 rounded-full blur-3xl"></div>
            </div>
            
            <!-- Logo Background -->
            <picture class="contents">
                <source type="image/avif" srcset="/home/logo-diced-461.avif" />
                <source type="image/webp" srcset="/home/logo-diced-461.webp" />
                <img
                    src="/home/logo-diced.png"
                    alt=""
                    class="absolute right-0 top-0 w-1/3 h-full object-cover opacity-30 z-0"
                />
            </picture>
            
            <div class="container px-4 md:px-6 relative z-10">
                <div class="grid items-center gap-8 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
                    <div class="space-y-6">
                        <div class="space-y-4">
                            <!-- Service Badge -->
                            <div class="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 text-sm font-medium">
                                <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                                </svg>
                                End Point Management
                            </div>
                            
                            <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl xl:text-6xl">
                                Comprehensive <span class="text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600">End Point</span><br>
                                <span class="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-green-600 to-emerald-600">Management</span> Services
                            </h1>
                            
                            <p class="max-w-2xl text-gray-700 text-lg md:text-xl leading-relaxed">
                                Keep your IT infrastructure running smoothly with our all-inclusive End Point Management services, covering everything from remote monitoring to proactive device support.
                            </p>
                        </div>
                        
                        <!-- Key Benefits -->
                        <div class="space-y-4">
                            <div class="flex items-start space-x-4">
                                <div class="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mt-1">
                                    <CheckOutline class="w-4 h-4 text-white" />
                                </div>
                                <div>
                                    <h2 class="text-lg font-semibold text-gray-900 mb-1">24/7 Monitoring</h2>
                                    <p class="text-gray-600">24/7 Remote Monitoring and Management (RMM) of servers, workstations, and laptops.</p>
                                </div>
                            </div>
                            
                            <div class="flex items-start space-x-4">
                                <div class="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mt-1">
                                    <CheckOutline class="w-4 h-4 text-white" />
                                </div>
                                <div>
                                    <h2 class="text-lg font-semibold text-gray-900 mb-1">Asset Management</h2>
                                    <p class="text-gray-600">Comprehensive Asset Management with regular reporting.</p>
                                </div>
                            </div>
                            
                            <div class="flex items-start space-x-4">
                                <div class="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-teal-500 to-green-600 rounded-full flex items-center justify-center mt-1">
                                    <CheckOutline class="w-4 h-4 text-white" />
                                </div>
                                <div>
                                    <h2 class="text-lg font-semibold text-gray-900 mb-1">Help Desk Support</h2>
                                    <p class="text-gray-600">Tier 1/2 Help Desk Support for day-to-day issues.</p>
                                </div>
                            </div>
                            
                            <div class="flex items-start space-x-4">
                                <div class="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-green-600 to-emerald-600 rounded-full flex items-center justify-center mt-1">
                                    <CheckOutline class="w-4 h-4 text-white" />
                                </div>
                                <div>
                                    <h2 class="text-lg font-semibold text-gray-900 mb-1">Proactive Support</h2>
                                    <p class="text-gray-600">Unlimited and proactive support for workstations, servers, and network devices.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="relative">
                        <div class="absolute inset-0 bg-gradient-to-br from-green-200/20 to-emerald-300/20 rounded-3xl blur-2xl transform rotate-6"></div>
                        <img
                            src="../services/endpoint-management.svg"
                            width="550"
                            height="310"
                            alt="End Point Management"
                            class="relative mx-auto overflow-hidden rounded-3xl object-cover object-center sm:w-full lg:order-last shadow-2xl border border-green-100/50"
                        />
                    </div>
                </div>
            </div>
        </section>

        <!-- Services Overview Section -->
        <section class="relative w-full py-16 md:py-24 lg:py-32 px-[10vw] bg-white">
            <div class="container px-4 md:px-6">
                <!-- Section Header -->
                <div class="text-center space-y-4 mb-16">
                    <div class="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 text-sm font-medium">
                        <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                        Tailored Solutions
                    </div>
                    <h2 class="text-3xl md:text-4xl font-bold text-gray-900">
                        Tailored <span class="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">End Point</span> Solutions
                    </h2>
                    <p class="max-w-3xl mx-auto text-gray-600 text-lg">
                        Our End Point Management services are designed to provide comprehensive support for your entire IT infrastructure, ensuring seamless operation and maximum uptime.
                    </p>
                </div>
                
                <div class="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center mb-16">
                    <div class="relative order-2 lg:order-1">
                        <div class="absolute inset-0 bg-gradient-to-br from-green-200/30 to-emerald-300/30 rounded-3xl blur-2xl transform -rotate-3"></div>
                        <div class="relative bg-white rounded-3xl p-8 shadow-2xl border border-green-100/50">
                            <img
                                src="../services/endpoint-secondary.svg"
                                alt="End Point Management"
                                class="w-full h-64 object-contain"
                            />
                        </div>
                    </div>
                    
                    <div class="space-y-6 order-1 lg:order-2">
                        <div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-100">
                            <h3 class="text-xl font-bold text-gray-900 mb-3">Complete Infrastructure Coverage</h3>
                            <p class="text-gray-600 leading-relaxed">
                                From servers and workstations to network devices and laptops, our comprehensive endpoint management ensures every component of your IT infrastructure is monitored, maintained, and supported.
                            </p>
                        </div>
                        
                        <div class="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 border border-emerald-100">
                            <h3 class="text-xl font-bold text-gray-900 mb-3">Proactive Maintenance</h3>
                            <p class="text-gray-600 leading-relaxed">
                                Our proactive approach identifies and resolves potential issues before they impact your business operations, ensuring maximum uptime and productivity.
                            </p>
                        </div>
                        
                        <div class="bg-gradient-to-br from-teal-50 to-green-50 rounded-2xl p-6 border border-teal-100">
                            <h3 class="text-xl font-bold text-gray-900 mb-3">Scalable Support</h3>
                            <p class="text-gray-600 leading-relaxed">
                                Whether you have 10 devices or 1000, our endpoint management solutions scale with your business needs while maintaining consistent service quality.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Support Categories Grid -->
                <div class="grid md:grid-cols-2 gap-8 pt-12">
                    <!-- Base Support Column -->
                    <div class="group relative bg-gradient-to-br from-white to-green-50/30 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-green-100/50">
                        <div class="absolute inset-0 bg-gradient-to-br from-green-500/0 to-emerald-500/0 group-hover:from-green-500/5 group-hover:to-emerald-500/5 rounded-3xl transition-all duration-300"></div>
                        <div class="relative">
                            <div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                            </div>
                            <h3 class="text-2xl font-bold text-gray-900 mb-6 group-hover:text-green-700 transition-colors">Base Support</h3>
                            <ul class="space-y-4">
                                <li class="flex items-start">
                                    <CheckOutline class="mr-3 h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                                    <span class="text-gray-700 leading-relaxed">
                                        <strong class="text-gray-900">Remote Monitoring and Management (RMM):</strong> Continuous 24/7 monitoring of your servers, workstations, and laptops to detect and address issues before they impact your business.
                                    </span>
                                </li>
                                <li class="flex items-start">
                                    <CheckOutline class="mr-3 h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                                    <span class="text-gray-700 leading-relaxed">
                                        <strong class="text-gray-900">Automated Maintenance Tasks:</strong> Regular tasks such as restarting failed services, drive cleanup, and defragmentation are automated to maintain optimal system performance.
                                    </span>
                                </li>
                                <li class="flex items-start">
                                    <CheckOutline class="mr-3 h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                                    <span class="text-gray-700 leading-relaxed">
                                        <strong class="text-gray-900">Patch Management:</strong> Automated deployment of patches for Microsoft servers, workstations, and laptops to keep your systems secure and up to date.
                                    </span>
                                </li>
                                <li class="flex items-start">
                                    <CheckOutline class="mr-3 h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                                    <span class="text-gray-700 leading-relaxed">
                                        <strong class="text-gray-900">Asset Management:</strong> Comprehensive tracking of hardware assets, including manufacturer details, operating system information, and warranty status, with monthly reporting.
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <!-- User Support Column -->
                    <div class="group relative bg-gradient-to-br from-white to-emerald-50/30 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-emerald-100/50">
                        <div class="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-teal-500/0 group-hover:from-emerald-500/5 group-hover:to-teal-500/5 rounded-3xl transition-all duration-300"></div>
                        <div class="relative">
                            <div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"/>
                                </svg>
                            </div>
                            <h3 class="text-2xl font-bold text-gray-900 mb-6 group-hover:text-emerald-700 transition-colors">User Support</h3>
                            <ul class="space-y-4">
                                <li class="flex items-start">
                                    <CheckOutline class="mr-3 h-5 w-5 text-emerald-600 flex-shrink-0 mt-1" />
                                    <span class="text-gray-700 leading-relaxed">
                                        <strong class="text-gray-900">Help Desk Support:</strong> Tier 1/2 support for resolving user issues and service requests, with a focus on quick and efficient problem resolution.
                                    </span>
                                </li>
                                <li class="flex items-start">
                                    <CheckOutline class="mr-3 h-5 w-5 text-emerald-600 flex-shrink-0 mt-1" />
                                    <span class="text-gray-700 leading-relaxed">
                                        <strong class="text-gray-900">Moves, Adds, and Changes (MAC):</strong> Support for changes in user setups, including workstation adjustments and updates, with unlimited support during business hours.
                                    </span>
                                </li>
                                <li class="flex items-start">
                                    <CheckOutline class="mr-3 h-5 w-5 text-emerald-600 flex-shrink-0 mt-1" />
                                    <span class="text-gray-700 leading-relaxed">
                                        <strong class="text-gray-900">Printer/Copier Support:</strong> Remote and onsite assistance for resolving printer and copier issues, ensuring minimal disruption to your daily operations.
                                    </span>
                                </li>
                                <li class="flex items-start">
                                    <CheckOutline class="mr-3 h-5 w-5 text-emerald-600 flex-shrink-0 mt-1" />
                                    <span class="text-gray-700 leading-relaxed">
                                        <strong class="text-gray-900">Proactive Ticket Management:</strong> Continuous monitoring of support tickets, with feedback provided to users on the status of their requests.
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Additional Support Services -->
                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 pt-16">
                    <div class="group relative bg-gradient-to-br from-white to-teal-50/30 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-teal-100/50">
                        <div class="absolute inset-0 bg-gradient-to-br from-teal-500/0 to-green-500/0 group-hover:from-teal-500/5 group-hover:to-green-500/5 rounded-3xl transition-all duration-300"></div>
                        <div class="relative">
                            <div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-500 to-green-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                </svg>
                            </div>
                            <h3 class="text-2xl font-bold text-gray-900 mb-6 group-hover:text-teal-700 transition-colors">Computer Support</h3>
                            <ul class="space-y-4">
                                <li class="flex items-start">
                                    <CheckOutline class="mr-3 h-5 w-5 text-teal-600 flex-shrink-0 mt-1" />
                                    <span class="text-gray-700 leading-relaxed">
                                        <strong class="text-gray-900">Unlimited Support:</strong> Comprehensive support for all workstations, laptops, and notebooks, covering both hardware and software issues to minimize downtime.
                                    </span>
                                </li>
                                <li class="flex items-start">
                                    <CheckOutline class="mr-3 h-5 w-5 text-teal-600 flex-shrink-0 mt-1" />
                                    <span class="text-gray-700 leading-relaxed">
                                        <strong class="text-gray-900">Proactive Maintenance:</strong> Regular system checks and updates to prevent issues from arising and to keep your equipment running smoothly.
                                    </span>
                                </li>
                                <li class="flex items-start">
                                    <CheckOutline class="mr-3 h-5 w-5 text-teal-600 flex-shrink-0 mt-1" />
                                    <span class="text-gray-700 leading-relaxed">
                                        <strong class="text-gray-900">3rd Party Software Support:</strong> Basic fault resolution for third-party software, ensuring compatibility and functionality across your IT environment.
                                    </span>
                                </li>
                                <li class="flex items-start">
                                    <CheckOutline class="mr-3 h-5 w-5 text-teal-600 flex-shrink-0 mt-1" />
                                    <span class="text-gray-700 leading-relaxed">
                                        <strong class="text-gray-900">Installation and Configuration:</strong> Assistance with the installation and configuration of new software and hardware, tailored to your business needs.
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="group relative bg-gradient-to-br from-white to-green-50/30 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-green-100/50">
                        <div class="absolute inset-0 bg-gradient-to-br from-green-500/0 to-emerald-500/0 group-hover:from-green-500/5 group-hover:to-emerald-500/5 rounded-3xl transition-all duration-300"></div>
                        <div class="relative">
                            <div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"/>
                                </svg>
                            </div>
                            <h3 class="text-2xl font-bold text-gray-900 mb-6 group-hover:text-green-700 transition-colors">Server Support</h3>
                            <ul class="space-y-4">
                                <li class="flex items-start">
                                    <CheckOutline class="mr-3 h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                                    <span class="text-gray-700 leading-relaxed">
                                        <strong class="text-gray-900">Unlimited Remote and Onsite Support:</strong> Full support for your server infrastructure, including proactive maintenance and issue resolution.
                                    </span>
                                </li>
                                <li class="flex items-start">
                                    <CheckOutline class="mr-3 h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                                    <span class="text-gray-700 leading-relaxed">
                                        <strong class="text-gray-900">Proactive Server Monitoring:</strong> Continuous monitoring of server performance, with alerts and issue resolution to prevent downtime.
                                    </span>
                                </li>
                                <li class="flex items-start">
                                    <CheckOutline class="mr-3 h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                                    <span class="text-gray-700 leading-relaxed">
                                        <strong class="text-gray-900">Hardware and Software Maintenance:</strong> Regular updates and maintenance of server hardware and operating systems to ensure long-term reliability.
                                    </span>
                                </li>
                                <li class="flex items-start">
                                    <CheckOutline class="mr-3 h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                                    <span class="text-gray-700 leading-relaxed">
                                        <strong class="text-gray-900">Monthly Reporting:</strong> Detailed reports on server health, performance, and any maintenance tasks performed, keeping you informed about your infrastructure.
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="group relative bg-gradient-to-br from-white to-emerald-50/30 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-emerald-100/50 md:col-span-2 lg:col-span-1">
                        <div class="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-teal-500/0 group-hover:from-emerald-500/5 group-hover:to-teal-500/5 rounded-3xl transition-all duration-300"></div>
                        <div class="relative">
                            <div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                                </svg>
                            </div>
                            <h3 class="text-2xl font-bold text-gray-900 mb-6 group-hover:text-emerald-700 transition-colors">Managed Device Support</h3>
                            <ul class="space-y-4">
                                <li class="flex items-start">
                                    <CheckOutline class="mr-3 h-5 w-5 text-emerald-600 flex-shrink-0 mt-1" />
                                    <span class="text-gray-700 leading-relaxed">
                                        <strong class="text-gray-900">Network Device Monitoring:</strong> Continuous monitoring of firewalls, routers, switches, and access points to ensure optimal performance and security.
                                    </span>
                                </li>
                                <li class="flex items-start">
                                    <CheckOutline class="mr-3 h-5 w-5 text-emerald-600 flex-shrink-0 mt-1" />
                                    <span class="text-gray-700 leading-relaxed">
                                        <strong class="text-gray-900">Firmware Updates:</strong> Regular updates to network device firmware to protect against vulnerabilities and maintain up-to-date functionality.
                                    </span>
                                </li>
                                <li class="flex items-start">
                                    <CheckOutline class="mr-3 h-5 w-5 text-emerald-600 flex-shrink-0 mt-1" />
                                    <span class="text-gray-700 leading-relaxed">
                                        <strong class="text-gray-900">Configuration Backups:</strong> Frequent backups of network device configurations, ensuring quick recovery in case of hardware failure or configuration errors.
                                    </span>
                                </li>
                                <li class="flex items-start">
                                    <CheckOutline class="mr-3 h-5 w-5 text-emerald-600 flex-shrink-0 mt-1" />
                                    <span class="text-gray-700 leading-relaxed">
                                        <strong class="text-gray-900">Performance Reporting:</strong> Periodic reports on network device performance, including insights into any alerts or issues that occurred, helping you stay ahead of potential problems.
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <ServiceCta service="endpoint management" />
    </div>
</div>
