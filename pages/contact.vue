<template>
    <div>
        <PageLabel>Contact</PageLabel>
        <div class="w-full flex flex-col gap-6 text-[#909090] py-10 px-0 sm:px-6 md:px-12 lg:px-6 xl:px-24 ">
            <div class="flex flex-col gap-4 w-full text-center justify-center items-center">
                <h1 class="text-4xl md:text-5xl font-bold">Let's <span class="text-black">Talk</span></h1>
                <p class=" max-w-sm">Feel free to get in touch with me and let me know what you're looking for</p>
            </div>
            <div class="w-7/12 mx-auto shadow-2xl">
                <iframe class="w-full h-full aspect-video "
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126214.40561898882!2d115.1418722715959!3d-8.672504761542138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd2409b0e5e80db%3A0xe27334e8ccb9374a!2sDenpasar%2C%20Denpasar%20City%2C%20Bali!5e0!3m2!1sen!2sid!4v1695734922976!5m2!1sen!2sid"
                    style="border:0;" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-3 justify-center gap-10 mt-14 xs:px-10 sm:px-15 lg:px-25 w-full">
                <!-- contact 1 -->
                <a href="https://wa.me/62812345678" target="_blank"
                    class="rounded-lg border dark:border-primary p-7 flex flex-col justify-center items-center transition-all ease-in-out duration-[700ms] hover:bg-black hover:text-white hover:scale-[1.03]">
                    <div class="text-primary dark:text-primary-dark transition-colors-linier w-16 h-16 p-4">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path
                                d="M21 16.42v3.536a1 1 0 0 1-.93.998c-.437.03-.794.046-1.07.046-8.837 0-16-7.163-16-16 0-.276.015-.633.046-1.07A1 1 0 0 1 4.044 3H7.58a.5.5 0 0 1 .498.45c.023.23.044.413.064.552A13.901 13.901 0 0 0 9.35 8.003c.095.2.033.439-.147.567l-2.158 1.542a13.047 13.047 0 0 0 6.844 6.844l1.54-2.154a.462.462 0 0 1 .573-.149 13.901 13.901 0 0 0 4 1.205c.139.02.322.042.55.064a.5.5 0 0 1 .449.498z" />
                        </svg>
                    </div>
                    <span class="sm:hidden xl:inline-block">+62 123-456-789</span>
                </a>
                <!-- contact 2 -->
                <a href="mailto:todhy@gmail.com" target="_blank"
                    class="rounded-lg border dark:border-primary p-7 flex flex-col justify-center items-center transition-all ease-in-out duration-[700ms] hover:bg-black hover:text-white hover:scale-[1.03]">
                    <div class="text-primary dark:text-primary-dark transition-colors-linier w-16 h-16 p-4">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path
                                d="M2 5.5V3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V19h18V7.3l-8 7.2-10-9zM0 10h5v2H0v-2zm0 5h8v2H0v-2z" />
                        </svg>
                    </div>
                    <span class="sm:hidden xl:inline-block">todhy@gmail.com</span>
                </a>
                <!-- contact 3 -->
                <form
                    action="https://www.google.com/maps/dir//Denpasar,+Denpasar+City,+Bali/@-8.6703711,115.1714297,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x2dd2409b0e5e80db:0xe27334e8ccb9374a!2m2!1d115.2126293!2d-8.6704582?entry=ttu"
                    method="get" target="_blank">
                    <button type="submit"
                        class="rounded-lg border w-full dark:border-primary p-7 flex flex-col justify-center items-center transition-all ease-in-out duration-[700ms] hover:bg-black hover:text-white hover:scale-[1.03]">
                        <div class="text-inherit transition-colors-linier w-16 h-16 p-4">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path
                                    d="M18.364 17.364L12 23.728l-6.364-6.364a9 9 0 1 1 12.728 0zM12 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0-2a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
                            </svg>
                        </div>
                        <input type="hidden" name="saddr" value="" />
                        <input type="hidden" name="daddr" value="Denpasar, Denpasar City, Bali" />
                        <span class="link-h sm:hidden xl:inline-block focus:outline-none">Denpasar, Bali, Indonesia</span>
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    pageTransition: {
        name: 'page'
    }
})
</script>

<style scoped></style>