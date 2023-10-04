<script>
    import HeroDesktop from '$lib/images/hero-desktop.png';
    import HeroMobile from '$lib/images/hero-mobile.webp';
</script>

<div class="bg-gradient-to-b from-[#EF233C] to-[#FAA307] rounded-b-[64px] relative -z-20">
    
    <div class="rounded-b-[64px] flex justify-center">
        <div>
            <img src={HeroMobile} alt="" class="absolute -z-10 object-fill h-full right-0 rounded-b-[64px] sm:hidden">
            <img src={HeroDesktop} alt="" class="absolute -z-10 object-fill h-full right-0 rounded-b-[64px] max-sm:hidden">
        </div>
        <div class="flex flex-col gap-4 md:gap-6 justify-center py-20 md:py-32 pl-4 pr-12 lg:pl-0 lg:pr-0 max-w-6xl" >
            <div class="bg-white self-start px-4 py-2 font-medium rounded-lg">Hi there! 😍</div>
            <div class="bg-white self-start px-4 py-2 font-medium rounded-lg">Yes, you! 😁</div>
            <div  class="bg-white self-start px-4 py-2 font-medium rounded-lg">
                <div>Welcome to</div>
                <div class="font-bold">Project Naharkatia! 🤩</div>
            </div>
            <div  class="bg-white self-start px-4 py-2 font-medium rounded-lg max-w-2xl">
                We work towards the development of our town by bringing new ideas, promoting talents, and helping businesses thrive.
            </div>       
        </div>
    </div>
    
</div>