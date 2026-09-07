<script>
    import Testimonials from "$lib/home/Testimonials.svelte";
    import GetAQuote from "$lib/home/GetAQuote.svelte";
</script>

<svelte:head>
    <title>ManageIT - Reliable IT Solutions & Computer Networking Services NZ</title>
    <meta name="description" content="Leading provider of comprehensive IT solutions, computer networking, cloud migration, and IT support services in New Zealand. 20+ years experience, 24/7 support, 100+ happy clients." />
    <meta name="keywords" content="IT support, computer networking, cloud migration, IT solutions, managed services, New Zealand, Auckland, business IT" />
    
    <!-- Open Graph -->
    <meta property="og:title" content="ManageIT - Reliable IT Solutions & Computer Networking Services NZ" />
    <meta property="og:description" content="Leading provider of comprehensive IT solutions, computer networking, cloud migration, and IT support services in New Zealand." />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://manageit.nz" />
    <meta property="og:image" content="https://manageit.nz/home/home-banner.png" />
    <meta property="og:locale" content="en_NZ" />
    <meta property="og:site_name" content="ManageIT" />
    
    <!-- Twitter Cards -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="ManageIT - Reliable IT Solutions & Computer Networking Services NZ" />
    <meta name="twitter:description" content="Leading provider of comprehensive IT solutions, computer networking, cloud migration, and IT support services in New Zealand." />
    <meta name="twitter:image" content="https://manageit.nz/home/home-banner.png" />
    
    <!-- Structured Data -->
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "ManageIT",
        "description": "Leading provider of comprehensive IT solutions and computer networking services in New Zealand",
        "url": "https://manageit.nz",
        "logo": "https://manageit.nz/manageit-logo.png",
        "foundingDate": "2004-04-02",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Unit 1/27A Sir William Pickering Drive",
            "addressLocality": "Burnside, Christchurch",
            "postalCode": "8053",
            "addressCountry": "NZ"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer service",
            "availableLanguage": "English"
        },
        "sameAs": [
            "https://oc.ninjarmm.com/connect/#/",
            "https://aus.myconnectwise.net/support/index.htm?Company=Manag31t"
        ],
        "serviceArea": "New Zealand",
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "IT Services",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Cloud Migration",
                        "description": "Professional cloud migration services"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "IT Support",
                        "description": "24/7 IT support and managed services"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Endpoint Management",
                        "description": "Comprehensive endpoint management solutions"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Cloud Backup",
                        "description": "Secure cloud backup solutions"
                    }
                }
            ]
        }
    }
    </script>
</svelte:head>


<div class="flex flex-col min-h-[100dvh]">
    <div class="flex-1">
        <section class="w-full py-12 md:py-24 flex justify-center relative">
            <div class="container px-4 md:px-6 flex flex-row-reverse gap-8 lg:grid-cols-2 lg:gap-16 relative z-10">
                <div class="space-y-4">
                    <h1 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        Reliable IT Solutions for Your Business
                    </h1>
                    <p class="max-w-[600px] text-muted-foreground md:text-xl">
                        Manage IT is a leading provider of comprehensive computer networking services, helping businesses of all sizes optimize their IT infrastructure and achieve their goals.
                    </p>
                    <div class="flex gap-2">
                        <a href="/contact" class="inline-flex h-10 items-center justify-center rounded-md bg-green-600 hover:bg-green-700 px-8 text-sm font-medium text-white shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
                            Get a Quote
                        </a>
                        <a href="/services/endpoint-management" class="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
                            Learn More
                        </a>
                    </div>
                </div>
                <img 
                    src="/home/home-banner.png" 
                    srcset="/home/home-banner.png 550w"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    width="550" 
                    height="550" 
                    alt="IT professionals working on network infrastructure and computer systems" 
                    class="mx-auto max-w-[50%] overflow-hidden rounded-xl object-cover sm:w-full lg:order-last hidden md:block"
                    fetchpriority="high"
                />
            </div>
            <img 
                src="/home/logo-diced.png" 
                alt="ManageIT logo decorative element" 
                class="absolute right-0 top-0 w-1/3 h-full object-cover opacity-30 -z-10" 
            />
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
                    <img 
                        src="/home/experts.png" 
                        srcset="/home/experts.png 550w"
                        sizes="(max-width: 1024px) 100vw, 550px"
                        width="550" 
                        height="310" 
                        alt="IT experts collaborating on technical solutions and computer networking" 
                        class="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last" 
                        loading="lazy" 
                    />
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
                                    class="inline-flex h-12 items-center justify-center rounded-md bg-green-600 hover:bg-green-700 px-6 text-sm font-medium text-white shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                            >
                                Cloud Migration
                            </a>
                            <a
                                    href="/services/endpoint-management"
                                    class="inline-flex h-12 items-center justify-center rounded-md border border-input bg-background px-6 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
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
    </div>
</div>

