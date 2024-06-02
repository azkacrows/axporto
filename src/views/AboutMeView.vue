<!-- TODO : About Pages -->
<template>
    <div class="container mx-auto">
        <!-- About header -->
        <div class="mt-12">
            <div class="flex flex-row items-center font-fira-code">
                <div class="flex flex-col items-start justify-between w-full gap-4">
                    <h2 class="pl-4 text-4xl font-semibold lg:pl-0 text-accent">
                        <span class="text-primary">/</span>about-me
                    </h2>
                    <p>Who am i?</p>
                </div>
            </div>
        </div>
        <!-- About Content -->
        <div class="flex flex-row items-center justify-between gap-10 my-10 font-fira-code">
            <!-- left side -->
            <div class="flex flex-col w-1/2 gap-6">
                <p>illustration Hello, i’m Jamal!</p>
                <p>
                    I’m a self-taught front-end developer based in East java, Indonesia. I can
                    develop responsive websites from scratch and raise them into modern
                    user-friendly web experiences.
                </p>
                <p>
                    For over a year, I've been transforming my creativity and expertise into
                    websites. I've been assisting many clients in establishing their web presence. I
                    am always looking for new technologies and frameworks to learn about.
                </p>
            </div>
            <!-- right side -->
            <div class="relative flex flex-col w-1/2">
                <div class="self-end w-full max-w-md">
                    <!-- FIXME : Photo -->
                    <div class="relative">
                        <img
                            src="../assets/img/Me.png"
                            class="object-scale-down contrast-125 saturate-200"
                            alt=""
                        />
                        <hr
                            class="absolute flex w-60 h-3 border-0 -z-10 bottom-[30px] right-24 bg-primary rotate-[10deg]"
                        />
                        <hr class="absolute flex w-full h-px border-0 bg-primary" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
