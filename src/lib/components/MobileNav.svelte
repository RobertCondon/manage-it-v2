<script>
    import {
        Drawer,
        CloseButton,
        Sidebar,
        SidebarDropdownItem,
        SidebarDropdownWrapper,
        SidebarGroup,
        SidebarItem,
        SidebarWrapper
    } from 'flowbite-svelte';
    import {
        UsersGroupOutline,
        DesktopPcOutline,
        EnvelopeOpenOutline,
        HomeOutline,
        LinkOutline,
        BarsOutline
    } from 'flowbite-svelte-icons';
    import {sineIn} from 'svelte/easing';

    let hidden2 = true;
    let transitionParams = {
        x: -320,
        duration: 200,
        easing: sineIn
    };
</script>

<div class="text-center">
    <div on:click={() => (hidden2 = false)}><BarsOutline class="w-10 h-10 text-accentForeground"></BarsOutline></div>
</div>
<Drawer transitionType="fly" {transitionParams} bind:hidden={hidden2} id="sidebar2">
    <div class="flex items-center">
        <h5 id="drawer-navigation-label-3" class="text-base font-semibold text-gray-500 uppercase dark:text-gray-400">
            Menu</h5>
        <CloseButton on:click={() => (hidden2 = true)} class="mb-4 dark:text-white"/>
    </div>
    <Sidebar>
        <SidebarWrapper divClass="overflow-y-auto py-4 px-3 rounded dark:bg-gray-800">
            <SidebarGroup>
                <SidebarItem label="Home">
                    <svelte:fragment slot="icon">
                        <HomeOutline
                                class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"/>
                    </svelte:fragment>
                </SidebarItem>
                <SidebarDropdownWrapper label="Services">
                    <svelte:fragment slot="icon">
                        <DesktopPcOutline
                                class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"/>
                    </svelte:fragment>
                    <SidebarDropdownItem label="Networking"/>
                    <SidebarDropdownItem label="Office 365"/>
                    <SidebarDropdownItem label="IT Support"/>
                    <SidebarDropdownItem label="Cloud Migration"/>
                </SidebarDropdownWrapper>
                <SidebarItem label="About">
                    <svelte:fragment slot="icon">
                        <UsersGroupOutline
                                class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"/>
                    </svelte:fragment>
                </SidebarItem>
                <SidebarItem label="Contact">
                    <svelte:fragment slot="icon">
                        <EnvelopeOpenOutline
                                class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"/>
                    </svelte:fragment>
                </SidebarItem>
                <SidebarItem label="Portal">
                    <svelte:fragment slot="icon">
                        <LinkOutline
                                class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"/>
                    </svelte:fragment>
                </SidebarItem>
            </SidebarGroup>
        </SidebarWrapper>
    </Sidebar>
</Drawer>