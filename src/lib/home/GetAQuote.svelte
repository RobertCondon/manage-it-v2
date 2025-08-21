<script>
    import { onMount } from 'svelte';

    let showAdditionalFields = false;
    let sentEmail = false;
    let isSubmitting = false;
    
    // Form data
    let formData = {
        email: '',
        name: '',
        company: '',
        message: '',
        phone: ''
    };
    
    // Validation errors
    let errors = {
        email: '',
        name: '',
        message: ''
    };

    function handleEmailInput(event) {
        formData.email = event.target.value.trim();
        showAdditionalFields = formData.email !== '';
        validateEmail();
    }
    
    function validateEmail() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email) {
            errors.email = 'Email is required';
        } else if (!emailRegex.test(formData.email)) {
            errors.email = 'Please enter a valid email address';
        } else {
            errors.email = '';
        }
    }
    
    function validateName() {
        if (!formData.name.trim()) {
            errors.name = 'Name is required';
        } else if (formData.name.trim().length < 2) {
            errors.name = 'Name must be at least 2 characters';
        } else {
            errors.name = '';
        }
    }
    
    function validateMessage() {
        if (!formData.message.trim()) {
            errors.message = 'Please tell us about your needs';
        } else if (formData.message.trim().length < 10) {
            errors.message = 'Please provide more details (at least 10 characters)';
        } else {
            errors.message = '';
        }
    }
    
    function validateForm() {
        validateEmail();
        if (showAdditionalFields) {
            validateName();
            validateMessage();
        }
        
        return !errors.email && (!showAdditionalFields || (!errors.name && !errors.message));
    }

    async function handleSubmit(event) {
        event.preventDefault();
        
        if (!validateForm()) {
            return;
        }
        
        isSubmitting = true;
        
        try {
            // Use native form submission for Netlify Forms
            const formElement = event.target;
            const response = await fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams(new FormData(formElement)).toString()
            });
            
            if (!response.ok) {
                throw new Error('Failed to submit form');
            }
            
            sentEmail = true;
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('There was an error submitting your request. Please try again or contact us directly.');
        } finally {
            isSubmitting = false;
        }
    }
</script>

<style>
    .container {
        max-width: 42rem;
        margin: 0 auto;
    }

    .input,
    .textarea {
        width: 100%;
        padding: 0.75rem;
        border: 2px solid #e5e7eb;
        border-radius: 0.5rem;
        font-size: 0.875rem;
        transition: border-color 0.2s ease;
    }
    
    .input:focus,
    .textarea:focus {
        outline: none;
        border-color: #16a34a;
        box-shadow: 0 0 0 3px rgba(22, 163, 74, 0.1);
    }
    
    .input.border-red-500,
    .textarea.border-red-500 {
        border-color: #ef4444;
    }

    .button {
        padding: 0.75rem 1.5rem;
        background-color: #16a34a;
        color: white;
        border: none;
        border-radius: 0.5rem;
        cursor: pointer;
        font-weight: 500;
        font-size: 0.875rem;
        transition: all 0.2s ease;
        white-space: nowrap;
    }

    .button:hover {
        background-color: #15803d;
        transform: translateY(-1px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
    
    .button:disabled {
        cursor: not-allowed;
        transform: none;
        box-shadow: none;
    }
</style>

<section class="w-full bg-muted py-12 md:py-24 lg:py-32">
    <div class="container px-4 md:px-6">
        <div class="mx-auto max-w-2xl space-y-4 text-center">
            <div class="space-y-2">
                <h2 class="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Get Started?</h2>
                <p class="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Contact us today to learn how Manage IT can help your business optimize its IT infrastructure and achieve its goals.
                </p>
            </div>
            {#if sentEmail}
                <div class="space-y-2 bg-white flex rounded-lg p-1 flex-col">
                    <p class="text-xl font-bold">Thank you for your interest!</p>
                    <p class="text-muted-foreground">We'll be in touch shortly to discuss your needs.</p>
                </div>
            {:else}
                <form class="space-y-4" on:submit={handleSubmit} netlify name="quote-request" netlify-honeypot="bot-field">
                    <input type="hidden" name="form-name" value="quote-request" />
                    <input name="bot-field" style="display: none;" />
                    <div class="space-y-2">
                        <div class="flex items-start gap-2">
                            <div class="flex-1 space-y-1">
                                <input 
                                    type="email" 
                                    name="email"
                                    placeholder="Enter your email" 
                                    class="input flex-1 {errors.email ? 'border-red-500' : ''}" 
                                    bind:value={formData.email}
                                    on:input={handleEmailInput}
                                    on:blur={validateEmail}
                                    required
                                />
                                {#if errors.email}
                                    <p class="text-red-500 text-sm">{errors.email}</p>
                                {/if}
                            </div>
                            <button 
                                type="submit" 
                                class="button bg-green-600 hover:bg-green-700 {isSubmitting || !formData.email ? 'opacity-50 cursor-not-allowed' : ''}" 
                                disabled={isSubmitting || !formData.email}
                            >
                                {isSubmitting ? 'Submitting...' : 'Get a Quote'}
                            </button>
                        </div>
                    </div>
                    
                    {#if showAdditionalFields}
                        <div class="space-y-4 bg-white p-6 rounded-lg shadow-sm border">
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div class="space-y-1">
                                    <input 
                                        type="text" 
                                        name="name"
                                        placeholder="Your name *" 
                                        class="input {errors.name ? 'border-red-500' : ''}"
                                        bind:value={formData.name}
                                        on:blur={validateName}
                                        required
                                    />
                                    {#if errors.name}
                                        <p class="text-red-500 text-sm">{errors.name}</p>
                                    {/if}
                                </div>
                                <div>
                                    <input 
                                        type="text" 
                                        name="company"
                                        placeholder="Company (optional)" 
                                        class="input"
                                        bind:value={formData.company}
                                    />
                                </div>
                            </div>
                            <div>
                                <input 
                                    type="tel" 
                                    name="phone"
                                    placeholder="Phone number (optional)" 
                                    class="input"
                                    bind:value={formData.phone}
                                />
                            </div>
                            <div class="space-y-1">
                                <textarea 
                                    name="message"
                                    placeholder="Tell us about your IT needs and requirements *" 
                                    class="textarea min-h-[120px] {errors.message ? 'border-red-500' : ''}"
                                    bind:value={formData.message}
                                    on:blur={validateMessage}
                                    required
                                ></textarea>
                                {#if errors.message}
                                    <p class="text-red-500 text-sm">{errors.message}</p>
                                {/if}
                            </div>
                            <div class="flex justify-end">
                                <button 
                                    type="submit" 
                                    class="button bg-green-600 hover:bg-green-700 px-8 {isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}" 
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? 'Submitting Request...' : 'Submit Quote Request'}
                                </button>
                            </div>
                        </div>
                    {/if}
                </form>
            {/if}
        </div>
    </div>
</section>
