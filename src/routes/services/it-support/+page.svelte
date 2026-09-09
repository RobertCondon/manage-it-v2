<script lang="ts">
    import ServiceCta from "$lib/components/ServiceCta.svelte";
    import { CheckOutline } from 'flowbite-svelte-icons';
</script>

<svelte:head>
    <title>IT Support Services - Manage IT Digital | 24/7 IT Help Christchurch</title>
    <meta name="description" content="24/7 IT support and managed services for Christchurch businesses. Proactive monitoring, helpdesk support, and strategic IT consulting." />
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "IT Support",
        "serviceType": "Managed IT support",
        "description": "Remote and on-site IT support for Christchurch and New Zealand businesses: helpdesk, password resets, virus removal, proactive monitoring and regular maintenance.",
        "url": "https://manageit.nz/services/it-support",
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
                                    <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5zM15 7v2a4 4 0 11-8 0V7a4 4 0 118 0z"/>
                                </svg>
                                IT Support Services
                            </div>
                            
                            <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl xl:text-6xl">
                                Dedicated <span class="text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600">IT Support</span><br>
                                <span class="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-green-600 to-emerald-600">Solutions</span>
                            </h1>
                            
                            <p class="max-w-2xl text-gray-700 text-lg md:text-xl leading-relaxed">
                                Our IT Support Services provide comprehensive support to manage and resolve technical issues efficiently, ensuring your business operations run smoothly.
                            </p>
                        </div>
                        
                        <!-- Key Benefits -->
                        <div class="space-y-4">
                            <div class="flex items-start space-x-4">
                                <div class="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mt-1">
                                    <CheckOutline class="w-4 h-4 text-white" />
                                </div>
                                <div>
                                    <h2 class="text-lg font-semibold text-gray-900 mb-1">Cost-Effective Solutions</h2>
                                    <p class="text-gray-600">Cost-effective IT support tailored to your business needs.</p>
                                </div>
                            </div>
                            
                            <div class="flex items-start space-x-4">
                                <div class="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mt-1">
                                    <CheckOutline class="w-4 h-4 text-white" />
                                </div>
                                <div>
                                    <h2 class="text-lg font-semibold text-gray-900 mb-1">Scalable Services</h2>
                                    <p class="text-gray-600">Scalable services to grow with your business.</p>
                                </div>
                            </div>
                            
                            <div class="flex items-start space-x-4">
                                <div class="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-teal-500 to-green-600 rounded-full flex items-center justify-center mt-1">
                                    <CheckOutline class="w-4 h-4 text-white" />
                                </div>
                                <div>
                                    <h2 class="text-lg font-semibold text-gray-900 mb-1">Proactive Monitoring</h2>
                                    <p class="text-gray-600">Proactive monitoring and regular maintenance to prevent issues.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="relative">
                        <div class="absolute inset-0 bg-gradient-to-br from-green-200/20 to-emerald-300/20 rounded-3xl blur-2xl transform rotate-6"></div>
                        <img
                            src="../services/it-support.svg"
                            width="550"
                            height="310"
                            alt="IT Support"
                            class="relative mx-auto overflow-hidden rounded-3xl object-cover object-center sm:w-full lg:order-last shadow-2xl border border-green-100/50"
                        />
                    </div>
                </div>
            </div>
        </section>
        <!-- Services Section -->
        <section class="relative w-full py-16 md:py-24 lg:py-32 px-[10vw] bg-white">
            <div class="container px-4 md:px-6">
                <!-- Section Header -->
                <div class="text-center space-y-4 mb-16">
                    <div class="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 text-sm font-medium">
                        <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                        Our Support Services
                    </div>
                    <h2 class="text-3xl md:text-4xl font-bold text-gray-900">
                        Comprehensive <span class="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">IT Support</span> Services
                    </h2>
                    <p class="max-w-3xl mx-auto text-gray-600 text-lg">
                        From remote support to on-site assistance, we provide a range of IT support services to meet your business needs.
                    </p>
                </div>
                
                <div class="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
                    <div class="relative order-2 lg:order-1">
                        <div class="absolute inset-0 bg-gradient-to-br from-green-200/30 to-emerald-300/30 rounded-3xl blur-2xl transform -rotate-3"></div>
                        <div class="relative bg-white rounded-3xl p-8 shadow-2xl border border-green-100/50">
                            <img
                                src="../services/it-support-secondary.svg"
                                alt="IT Support"
                                class="w-full h-64 object-contain"
                            />
                        </div>
                    </div>
                    
                    <div class="space-y-8 order-1 lg:order-2">
                        <!-- Remote User Support -->
                        <div class="group relative bg-gradient-to-br from-white to-green-50/30 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-green-100/50">
                            <div class="flex items-start space-x-4">
                                <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                    </svg>
                                </div>
                                <div>
                                    <h3 class="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-700 transition-colors">Remote User Support</h3>
                                    <p class="text-gray-600 leading-relaxed">
                                        Our team provides remote assistance for password resets, file recovery, virus removal, and more.
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        <!-- On-Site Support -->
                        <div class="group relative bg-gradient-to-br from-white to-emerald-50/30 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-emerald-100/50">
                            <div class="flex items-start space-x-4">
                                <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                                    </svg>
                                </div>
                                <div>
                                    <h3 class="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors">On-Site Support</h3>
                                    <p class="text-gray-600 leading-relaxed">
                                        If issues cannot be resolved remotely, our engineers will visit your site to provide the necessary support.
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Proactive Monitoring -->
                        <div class="group relative bg-gradient-to-br from-white to-teal-50/30 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-teal-100/50">
                            <div class="flex items-start space-x-4">
                                <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-teal-500 to-green-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                                    </svg>
                                </div>
                                <div>
                                    <h3 class="text-xl font-bold text-gray-900 mb-2 group-hover:text-teal-700 transition-colors">Proactive Monitoring</h3>
                                    <p class="text-gray-600 leading-relaxed">
                                        Continuous monitoring of your IT infrastructure to identify and address potential issues early.
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Regular Maintenance -->
                        <div class="group relative bg-gradient-to-br from-white to-green-50/30 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-green-100/50">
                            <div class="flex items-start space-x-4">
                                <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                                    </svg>
                                </div>
                                <div>
                                    <h3 class="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-700 transition-colors">Regular Maintenance</h3>
                                    <p class="text-gray-600 leading-relaxed">
                                        Scheduled maintenance to ensure your systems are running optimally and securely.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <ServiceCta service="IT support" />
    </div>
</div>
