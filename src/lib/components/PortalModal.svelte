<script>
    import { createEventDispatcher } from 'svelte';
    import { 
        DesktopPcOutline,
        TicketOutline,
        MailBoxOutline,
        CloudArrowUpOutline,
        ShieldCheckOutline,
        DownloadOutline,
        CloseOutline
    } from 'flowbite-svelte-icons';

    export let isOpen = false;
    
    const dispatch = createEventDispatcher();

    const portalServices = [
        {
            name: 'Remote Access',
            description: 'Access your computer remotely from anywhere',
            icon: DesktopPcOutline,
            url: 'https://manage-it.screenconnect.com/',
            gradient: 'from-blue-500 to-blue-600'
        },
        {
            name: 'Ticket Management',
            description: 'Submit and track support tickets',
            icon: TicketOutline,
            url: 'https://aus.myconnectwise.net/support/index.htm?Company=Manag31t',
            gradient: 'from-green-500 to-emerald-600'
        },
        {
            name: 'Office 365 Emails',
            description: 'Access your Office 365 email',
            icon: MailBoxOutline,
            url: 'https://outlook.office365.com/',
            gradient: 'from-orange-500 to-red-500'
        },
        {
            name: 'Office 365 Portal',
            description: 'Access Office 365 applications and services',
            icon: CloudArrowUpOutline,
            url: 'https://portal.office365.com/',
            gradient: 'from-purple-500 to-indigo-600'
        },
        {
            name: 'FortiClient SSL VPN',
            description: 'Secure VPN access to your network',
            icon: ShieldCheckOutline,
            url: 'https://www.fortinet.com/products/endpoint-security/forticlient',
            gradient: 'from-red-500 to-red-600'
        },
        {
            name: 'Labtech Agent Install',
            description: 'Download and install monitoring agent',
            icon: DownloadOutline,
            url: 'https://labtech.manageit.nz/WCC2/Home/Login?ReturnUrl=%2fWCC2%2f',
            gradient: 'from-teal-500 to-green-600'
        }
    ];

    function closeModal() {
        isOpen = false;
        dispatch('close');
    }

    /** @param {MouseEvent} event */
    function handleBackdropClick(event) {
        if (event.target === event.currentTarget) {
            closeModal();
        }
    }

    /** @param {KeyboardEvent} event */
    function handleKeydown(event) {
        if (event.key === 'Escape') {
            closeModal();
        }
    }
</script>

<svelte:window on:keydown={handleKeydown} />

{#if isOpen}
    <!-- Modal backdrop -->
    <div 
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
        role="dialog"
        aria-modal="true"
        aria-labelledby="portal-modal-title"
    >
        <!-- Backdrop click handler -->
        <button 
            class="absolute inset-0 w-full h-full cursor-default"
            on:click={handleBackdropClick}
            aria-label="Close modal"
            tabindex="-1"
        ></button>
        <!-- Modal content -->
        <div class="relative w-full max-w-4xl max-h-[90vh] overflow-auto bg-white rounded-3xl shadow-2xl border border-gray-100 animate-modal-in">
            <!-- Modal header -->
            <div class="sticky top-0 bg-gradient-to-r from-green-50 to-emerald-50 px-6 py-4 border-b border-gray-100 rounded-t-3xl">
                <div class="flex items-center justify-between">
                    <div>
                        <h2 id="portal-modal-title" class="text-2xl font-bold text-gray-900">
                            Client <span class="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">Portal</span>
                        </h2>
                        <p class="text-gray-600 text-sm mt-1">Quick access to all your IT services and tools</p>
                    </div>
                    <button 
                        on:click={closeModal}
                        class="p-2 hover:bg-white/70 rounded-full transition-colors group"
                        aria-label="Close portal modal"
                    >
                        <CloseOutline class="w-6 h-6 text-gray-500 group-hover:text-gray-700" />
                    </button>
                </div>
            </div>
            
            <!-- Modal body -->
            <div class="p-6">
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {#each portalServices as service (service.url)}
                        <a 
                            href={service.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            class="group relative overflow-hidden bg-gradient-to-br from-white to-gray-50/50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 hover:border-gray-200"
                        >
                            <!-- Background decoration -->
                            <div class="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br {service.gradient} opacity-5 rounded-full transform group-hover:scale-110 transition-transform duration-500"></div>
                            
                            <!-- Service icon -->
                            <div class="relative mb-4">
                                <div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br {service.gradient} rounded-2xl shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300">
                                    <svelte:component this={service.icon} class="w-8 h-8 text-white" />
                                </div>
                            </div>
                            
                            <!-- Service content -->
                            <div class="relative">
                                <h3 class="text-lg font-semibold text-gray-900 mb-2 group-hover:text-gray-800 transition-colors">
                                    {service.name}
                                </h3>
                                <p class="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors">
                                    {service.description}
                                </p>
                            </div>
                            
                            <!-- Hover indicator -->
                            <div class="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div class="w-6 h-6 bg-gradient-to-br {service.gradient} rounded-full flex items-center justify-center">
                                    <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                                    </svg>
                                </div>
                            </div>
                        </a>
                    {/each}
                </div>
                
                <!-- Footer note -->
                <div class="mt-8 pt-6 border-t border-gray-100">
                    <p class="text-center text-sm text-gray-500">
                        Need help accessing any of these services? 
                        <a href="/contact" class="text-green-600 hover:text-green-700 font-medium hover:underline transition-colors" on:click={closeModal}>
                            Contact our support team
                        </a>
                    </p>
                </div>
            </div>
        </div>
    </div>
{/if}

<style>
    @keyframes modal-in {
        from {
            opacity: 0;
            transform: scale(0.95) translateY(-20px);
        }
        to {
            opacity: 1;
            transform: scale(1) translateY(0);
        }
    }
    
    .animate-modal-in {
        animation: modal-in 0.2s ease-out forwards;
    }
</style>