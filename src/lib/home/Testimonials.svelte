<script>
    import Avatar from "$lib/components/Avatar.svelte";
    import AvatarImage from "$lib/components/AvatarImage.svelte";
    import Card from "$lib/components/Card.svelte";

    let currentIndex = 0;
    let items = [
        {
            src: 'testimonials/WindowTreatments.jpg',
            name: 'Keith Shaw',
            position: 'Financial Controller, Windows Treatment.',
            quote: 'They will always go the extra mile to get a solution to work for us. They have proven to be a very professional, competent and innovative ICT support for our business. From general day-to-day maintenance through to complex IT challenges, their knowledge of technology and how this fits within our business has proven to be a great asset to our company.'
        },
        {
            src: 'testimonials/ShantyTown.jpg',
            name: 'Andrea Forrest',
            position: 'CEO, Shanty Town.',
            quote: 'Manage IT scope and provide Shantytown\'s hardware and software, manage and maintain the server - its capacity and performance, system backups, troubleshooting and are generally our go-to team for all aspects of IT support. The best in responsive support, adaptability and professional courtesy.'
        }
    ];

    function next() {
        currentIndex = (currentIndex + 1) % items.length;
    }

    function previous() {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
    }
</script>

<style>
    .carousel {
        position: relative;
    }

    .carousel-content {
        transition: transform 0.5s ease-in-out;
    }

    .carousel-previous,
    .carousel-next {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        background: none;
        border: none;
        cursor: pointer;
    }

    .carousel-previous {
        left: 1rem;
    }

    .carousel-next {
        right: 1rem;
    }

    .icon {
        width: 1.5rem;
        height: 1.5rem;
        color: #a0aec0;
    }
</style>

<section class="w-full py-12 md:py-24 lg:py-32 flex justify-center">
    <div class="container px-4 md:px-6">
        <div class="flex flex-col items-center justify-center space-y-4 text-center">
            <div class="space-y-2">
                <h2 class="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Clients Say</h2>
                <p class="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Hear from our satisfied clients about their experience working with Manage IT.
                </p>
            </div>
            <div class="grid max-w-3xl gap-6 sm:grid-cols-2">
                {#each items as item}
                    <Card class="p-6 shadow-md">
                        <div class="space-y-4">
                            <div class="flex items-center gap-2">
                                <Avatar>
                                    <AvatarImage src={item.src} />
                                </Avatar>
                                <div>
                                    <h4 class="font-semibold">{item.name}</h4>
                                    <p class="text-sm text-muted-foreground">{item.position}</p>
                                </div>
                            </div>
                            <p class="text-muted-foreground">
                                "{item.quote}"
                            </p>
                        </div>
                    </Card>
                {/each}
            </div>
        </div>
    </div>
</section>