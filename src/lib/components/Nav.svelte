<script>
    import {
        ArrowRightOutline,
        LifeSaverOutline,
        ChartLineUpOutline,
        MailBoxOutline,
        CloudArrowUpOutline,
        DesktopPcOutline,
    } from 'flowbite-svelte-icons';

    let showServices = false;
    let service = "Services";
    let services = {
        "Services": {
            "description": "We do it all! From networking to cloud migration, we have you covered.",
            "icon": LifeSaverOutline
        },
        "Networking": {
            "description": "We handle your internet and computer connections. Our team regularly checks and maintains your Wi-Fi routers and network devices to ensure everything works smoothly. We also save important settings and data to help you recover quickly if something goes wrong.",
            "icon": MailBoxOutline
        },
        "Office 365": {
            "description": "Managed Office 365 gives you access to Microsoft programs like Word, Excel, and Outlook online. This means you always have the latest versions. It also includes professional email services and daily backups to keep your data safe.",
            "icon": ChartLineUpOutline
        },
        "IT Support": {
            "description": "Our friendly support team helps with common computer problems like forgotten passwords, slow computers, printers, or email issues. If we can’t fix it remotely, we’ll send someone to your office to help.",
            "icon": DesktopPcOutline
        },
        "Cloud Migration": {
            "description": "Moving to the cloud means storing your data and applications online instead of on your computer. This makes it easier to access your information from anywhere and keeps it safe. We help you move to the cloud smoothly and keep your data secure with regular check-ups.",
            "icon": CloudArrowUpOutline
        }
    };

    function toggleServices() {
        showServices = !showServices;
    }

    function setService(serviceName) {
        service = serviceName;
    }
</script>

<style>
    nav {
        display: flex;
        align-items: center;
        gap: 1rem;
        position: relative;
        justify-content: space-between;
        flex-direction: row;
        width: 100%;
        transition: background-color 0.2s, color 0.2s;
    }

    .nav-link {
        font-size: 0.875rem;
        font-weight: 500;
        transition: 0.2s;
        padding: 0.4rem 0.65rem;
        border-radius: 5px;
    }

    .nav-link:hover {
        box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
        color: #005700
    }

    .portal-link {
        display: inline-flex;
        height: 2.25rem;
        align-items: center;
        justify-content: center;
        border-radius: 0.375rem;
        background-color: var(--primary);
        padding: 0 1rem;
        font-size: 0.875rem;
        font-weight: 500;
        color: var(--primary-foreground);
        box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
        transition: background-color 0.2s;
    }

    .portal-link:hover {
        background-color: var(--primary-hover);
    }

    .portal-link:focus-visible {
        outline: none;
        ring: 1px var(--ring);
    }

    .portal-link:disabled {
        pointer-events: none;
        opacity: 0.5;
    }

    .active-services-button {
        box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
        transition: background-color 0.2s, color 0.2s;
    }

    .dropdown {
        position: absolute;
        top: 140%;
        left: -400px;
        background-color: white;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        border-radius: 0.375rem;
        padding: 1rem;
        visibility: hidden;
        z-index: 1000;
        width: 700px;
        opacity: 0;
        transform: translateY(-100px);
        transition: opacity 0.15s ease, transform 0.1s ease;
    }

    .dropdown.show {
        visibility: visible;
        opacity: 1;
        transform: translateY(0);
    }

    .dropdown .grid {
        display: grid;
        grid-template-columns: 200px 1fr;
        gap: 1rem;
    }

    .dropdown .link-group {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        background-color: white;
        z-index: 99
    }

    .dropdown-link {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.5rem;
        border-radius: 0.375rem;
        transition: background-color 0.2s, color 0.2s;
    }

    .dropdown-link:hover {
        background-color: #F5FFF5;
    }

    .dropdown-link.active {
        background-color: #E0FFE0;
    }

    .service-description {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
        border-radius: 40px;
        padding: 1rem;
        position: relative;
    }

    .service-description h3 {
        font-size: 1.125rem;
        font-weight: 600;
    }

    .service-description p {
        color: var(--muted-foreground);
        font-size: 0.875rem
    }

    .service-description .learn-more {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-size: 0.875rem;
        font-weight: 500;
        color: var(--primary);
    }

    .service-description .learn-more:hover {
        text-decoration: underline;
    }

    .arrow {
        color: #008000;
        display: none;
    }

    .links {
        display: flex;
        gap: 1rem;
        align-content: center;
        align-items: center;
    }

    .arrow-icon .show {
        display: block;
        transition: 4s;
    }
</style>

<nav>
    <a href="/" class="link mt-4">
        <img src="../manageit-logo.png" alt="ManageIt Logo" width="180" height="64" />
    </a>

    <div class="links">
        <div class="relative">
            <a href="#" class="nav-link {showServices ? 'active-services-button' : ''}" on:click|preventDefault={toggleServices}>Services</a>
            <div class="dropdown {showServices ? 'show' : ''}">
                <div class="grid">
                    <div class="link-group">
                        <a href="/services/networking" class="dropdown-link {service === 'Networking' ? 'active' : ''}" on:mouseenter={() => setService('Networking')}>
                            <ArrowRightOutline class="arrow {service === 'Networking' ? 'show' : 'hidden'}" />
                            <span>Networking</span>
                        </a>
                        <a href="/services/office365" class="dropdown-link {service === 'Office 365' ? 'active' : ''}" on:mouseenter={() => setService('Office 365')}>
                            <ArrowRightOutline class="arrow w-7 {service === 'Office 365' ? 'show' : 'hidden'}" />
                            <span>Office 365</span>
                        </a>
                        <a href="/services/it-support" class="dropdown-link {service === 'IT Support' ? 'active' : ''}" on:mouseenter={() => setService('IT Support')}>
                            <ArrowRightOutline class="arrow {service === 'IT Support' ? 'show' : 'hidden'}" />
                            <span>IT Support</span>
                        </a>
                        <a href="/services/cloud-migration" class="dropdown-link {service === 'Cloud Migration' ? 'active' : ''}" on:mouseenter={() => setService('Cloud Migration')}>
                            <ArrowRightOutline class="arrow {service === 'Cloud Migration' ? 'show' : 'hidden'}" />
                            <span>Cloud Migration</span>
                        </a>
                    </div>
                    <div class="service-description">
                        <div class="relative">
                            <svelte:component this={services[service].icon} class="text-accentForeground absolute w-40 h-40 top -left-1 opacity-5"></svelte:component>
                            <h3>{service}</h3>
                            <p>{services[service].description}</p>
                            <a href="#" class="learn-more">Learn more</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <a href="#" class="nav-link">About</a>
        <a href="#" class="nav-link">Contact</a>
        <a href="#" class="portal-link">Portal</a>
    </div>
</nav>
