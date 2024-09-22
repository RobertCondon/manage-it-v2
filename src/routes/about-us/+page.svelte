<script lang="ts">
    import { BriefcaseOutline, LightbulbOutline, UsersGroupOutline, StarOutline } from "flowbite-svelte-icons";
</script>

<div>
    <section class="w-full py-12 md:py-24 lg:py-32 px-[10vw]">
        <div class="container px-4 md:px-6">
            <div class="grid gap-6 lg:grid-cols-[1fr_550px] lg:gap-12 xl:grid-cols-[1fr_650px]">
                <div class="flex flex-col justify-center space-y-4">
                    <div class="space-y-2">
                        <h1 class="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">About Us</h1>
                        <p class="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Welcome to ManageIT, where we make technology simple and stress-free. In today’s fast-paced digital world, businesses are more reliant on IT than ever before. We understand the frustration that often accompanies technology issues, which is why our focus is on clear communication and personalized service. Our tight-knit, locally-based team prides itself on understanding your unique needs and providing innovative, creative solutions tailored just for you.
                        </p>
                    </div>
                </div>
                <img
                        src="/about-us/main.svg"
                        width="550"
                        height="310"
                        alt="About Us"
                        class="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                />
            </div>
        </div>
    </section>

    <section class="w-full py-12 md:py-24 lg:py-32 bg-muted px-[10vw]">
        <div class="container px-4 md:px-6">
            <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
                <div class="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
                    <div class="bg-primary rounded-full p-4 mb-4">
                        <BriefcaseOutline class="w-8 h-8 text-white" />
                    </div>
                    <h3 class="text-xl font-semibold mb-2">Who We Are</h3>
                    <p class="text-muted-foreground">
                        ManageIT was established on April 2, 2004, by Tony Condon, a seasoned IT professional
                        with extensive experience in large corporate service providers in New Zealand and the
                        UK. Tony believed that the same professional services provided to large corporations
                        could be offered to the Small and Medium Business (SMB) market at a fair and reasonable
                        price. Our mantra is simple: Turning complex problems into simple solutions.
                    </p>
                </div>

                <div class="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
                    <div class="bg-secondary rounded-full p-4 mb-4">
                        <LightbulbOutline class="w-8 h-8 text-white" />
                    </div>
                    <h3 class="text-xl font-semibold mb-2">What We Do</h3>
                    <p class="text-muted-foreground">
                        Any company doing business today is tied to their technology in unprecedented ways.
                        Without computers to streamline work processes, email for communication, and the
                        collaboration and networking advantages that the web brings, your business would
                        struggle to move forward. As a Managed Service Provider (MSP), we offer proactive
                        services and solutions to optimize your business’s IT infrastructure, actively monitoring
                        your systems 24/7 to keep problems at bay, all for a fixed fee.
                    </p>
                </div>

                <div class="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
                    <div class="rounded-full p-4 mb-4" style="background-color: #059669">
                        <UsersGroupOutline class="w-8 h-8 text-white" />
                    </div>
                    <h3 class="text-xl font-semibold mb-2">Our Approach</h3>
                    <p class="text-muted-foreground">
                        Our approach is people-driven, ensuring long-term business relationships built on trust
                        and mutual understanding. We see your challenges from multiple perspectives and offer
                        options that you can easily understand and choose from, ensuring you are always in
                        control of your technology decisions.
                    </p>
                </div>

                <div class="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
                    <div class="rounded-full p-4 mb-4" style="background-color: #0d9488">
                        <StarOutline class="w-8 h-8 text-white" />
                    </div>
                    <h3 class="text-xl font-semibold mb-2">Experience the Difference</h3>
                    <p class="text-muted-foreground">
                        Experience the difference with ManageIT – your trusted partner in IT solutions. Our
                        commitment to clear communication, personalized service, and technical excellence ensures
                        that you receive the best support tailored to your needs. Let us handle your IT
                        challenges, so you can concentrate on growing your business.
                    </p>
                </div>
            </div>
        </div>
    </section>
</div>
