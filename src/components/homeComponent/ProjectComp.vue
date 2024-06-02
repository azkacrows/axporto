<!-- eslint-disable vue/no-parsing-error -->
<template>
    <!-- project header -->
    <div class="flex flex-row items-center gap-4 font-fira-code">
        <div class="flex flex-row items-center justify-between w-2/3 gap-4">
            <h2 class="pl-4 text-2xl font-semibold lg:pl-0 text-accent">
                <span class="text-primary">#</span>Projects
            </h2>
            <hr class="w-full h-px border-0 bg-primary/30" />
        </div>
        <div class="flex justify-end w-1/3">
            <router-link to="/project" class="btn view">View All ~~></router-link>
        </div>
    </div>
    <!-- project Content -->
    <div class="flex flex-col items-center justify-between my-10 font-fira-code">
        <!-- project at Desktop -->
        <div class="hidden grid-cols-3 gap-4 lg:grid font-fira-code">
            <div
                class="border border-solid rounded-none shadow-xl card w-72 bg-base-100 border-success"
            >
                <div class="w-full border-b border-solid border-success">
                    <img
                        class="w-[95%] max-h-40 max-w-[270px] m-auto my-2 border border-solid border-success"
                        src="https://source.unsplash.com/random/?programming"
                        alt="Shoes"
                    />
                </div>
                <div class="badge-container">
                    <p class="badge-text">Fashion</p>
                </div>
                <div class="gap-4 p-3 card-body">
                    <h2 class="card-title text-accent">
                        Portfolio
                        <span class="badge-text-secondary">NEW</span>
                    </h2>
                    <p class="truncate">projects description</p>
                    <div class="justify-around card-actions">
                        <button class="btn live">Live <~></button>
                        <button class="btn live code">Code >=</button>
                    </div>
                </div>
            </div>
            <div
                class="border border-solid rounded-none shadow-xl card w-72 bg-base-100 border-success"
            >
                <div class="w-full border-b border-solid border-success">
                    <img
                        class="w-[95%] max-h-40 max-w-[270px] m-auto my-2 border border-solid border-success"
                        src="https://source.unsplash.com/random/?programming"
                        alt="Shoes"
                    />
                </div>
                <div class="badge-container">
                    <p class="badge-text">Fashion</p>
                </div>
                <div class="gap-4 p-3 card-body">
                    <h2 class="card-title text-accent">
                        Portfolio
                        <span class="badge-text-secondary">NEW</span>
                    </h2>
                    <p class="truncate">projects description</p>
                    <div class="justify-around card-actions">
                        <button class="btn live">Live <~></button>
                        <button class="btn live code">Code >=</button>
                    </div>
                </div>
            </div>
            <div
                class="border border-solid rounded-none shadow-xl card w-72 bg-base-100 border-success"
            >
                <div class="w-full border-b border-solid border-success">
                    <img
                        class="w-[95%] max-h-40 max-w-[270px] m-auto my-2 border border-solid border-success"
                        src="https://source.unsplash.com/random/?programming"
                        alt="Shoes"
                    />
                </div>
                <div class="badge-container">
                    <p class="badge-text">Fashion</p>
                </div>
                <div class="gap-4 p-3 card-body">
                    <h2 class="card-title text-accent">
                        Portfolio
                        <span class="badge-text-secondary">NEW</span>
                    </h2>
                    <p class="truncate">projects description</p>
                    <div class="justify-around card-actions">
                        <button class="btn live">Live <~></button>
                        <button class="btn live code">Code >=</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- project at Mobile -->
        <div class="gap-4 w-80 carousel lg:hidden">
            <div class="w-full carousel-item">
                <div
                    class="w-full border border-solid rounded-none shadow-xl card bg-base-100 border-success"
                >
                    <div class="w-full border-b border-solid border-success">
                        <img
                            class="w-[95%] max-h-40 max-w-[270px] m-auto my-2 border border-solid border-success"
                            src="https://source.unsplash.com/random/?programming"
                            alt="Shoes"
                        />
                    </div>
                    <div class="badge-container">
                        <p class="badge-text">Fashion</p>
                    </div>
                    <div class="gap-4 p-3 card-body">
                        <h2 class="card-title text-accent">
                            Portfolio
                            <span class="badge-text-secondary">NEW</span>
                        </h2>
                        <p class="truncate">projects description</p>
                        <div class="justify-around card-actions">
                            <button class="btn live">Live <~></button>
                            <button class="btn live code">Code >=</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full carousel-item">
                <div
                    class="w-full border border-solid rounded-none shadow-xl card bg-base-100 border-success"
                >
                    <div class="w-full border-b border-solid border-success">
                        <img
                            class="w-[95%] max-h-40 max-w-[270px] m-auto my-2 border border-solid border-success"
                            src="https://source.unsplash.com/random/?programming"
                            alt="Shoes"
                        />
                    </div>
                    <div class="badge-container">
                        <p class="badge-text">Fashion</p>
                    </div>
                    <div class="gap-4 p-3 card-body">
                        <h2 class="card-title text-accent">
                            Portfolio
                            <span class="badge-text-secondary">NEW</span>
                        </h2>
                        <p class="truncate">projects description</p>
                        <div class="justify-around card-actions">
                            <button class="btn live">Live <~></button>
                            <button class="btn live code">Code >=</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full carousel-item">
                <div
                    class="w-full border border-solid rounded-none shadow-xl card bg-base-100 border-success"
                >
                    <div class="w-full border-b border-solid border-success">
                        <img
                            class="w-[95%] max-h-40 max-w-[270px] m-auto my-2 border border-solid border-success"
                            src="https://source.unsplash.com/random/?programming"
                            alt="Shoes"
                        />
                    </div>
                    <div class="badge-container">
                        <p class="badge-text">Fashion</p>
                    </div>
                    <div class="gap-4 p-3 card-body">
                        <h2 class="card-title text-accent">
                            Portfolio
                            <span class="badge-text-secondary">NEW</span>
                        </h2>
                        <p class="truncate">projects description</p>
                        <div class="justify-around card-actions">
                            <button class="btn live">Live <~></button>
                            <button class="btn live code">Code >=</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.view {
    @apply bg-inherit outline-none border-transparent shadow-none gap-0;
}
.badge-container {
    @apply self-stretch justify-start w-full gap-0 p-2 border-b border-solid  card-actions border-success;
}
.badge-text {
    @apply text-base border-none rounded-none badge bg-none text-success;
}
.badge-text-secondary {
    @apply badge badge-secondary bg-primary border-primary text-white;
}
.live {
    @apply px-4 py-2 h-full min-h-full text-base text-accent bg-inherit font-medium font-fira-code rounded-none border-primary hover:border-primary active:text-accent/60 active:border-primary/50;
}
.code {
    @apply border-success text-accent hover:border-success active:text-accent/60 active:border-success/50;
}
</style>
