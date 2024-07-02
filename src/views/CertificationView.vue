<script setup>
import { ref, onMounted, computed } from 'vue';
import CertificationComp from '../components/certificationComponent/CertificationComp.vue';
import certificationList from '../stores/certList.json';

const mainCertList = ref([]);
const currentIndex = ref(0);

onMounted(() => {
    const mainFolder = certificationList[0].Sertifikat.find((folder) => folder.Folder === 'Main');
    mainCertList.value = mainFolder ? mainFolder.ListSertifikat : [];
});

const totalCertificates = computed(() => mainCertList.value.length);
const currentCert = computed(() => mainCertList.value[currentIndex.value]);

const goToNext = () => {
    currentIndex.value = (currentIndex.value + 1) % totalCertificates.value;
};

const goToPrevious = () => {
    currentIndex.value =
        (currentIndex.value - 1 + totalCertificates.value) % totalCertificates.value;
};
</script>

<template>
    <!-- About header -->
    <div class="mt-12">
        <div class="flex flex-row items-center font-fira-code">
            <div
                class="flex flex-col items-center justify-between w-full gap-4 lg:pl-4 lg:items-start"
            >
                <h2 class="text-4xl font-semibold lg:pl-0 text-accent">
                    <span class="text-primary">/</span>certification
                </h2>
                <p class="mx-8 text-center lg:mx-0 lg:text-start text-wrap lg:text-nowrap">
                    certifications i've acquired thus far
                </p>
            </div>
        </div>
    </div>
    <!-- About Content -->
    <div
        class="flex flex-col items-center justify-between gap-4 px-4 my-10 lg:gap-0 lg:flex-row font-fira-code"
    >
        <div class="certOuter">
            <CertificationComp
                v-if="currentCert"
                :Url="currentCert.Url"
                :FileId="currentCert.FileId"
                :index="currentIndex"
                :total="totalCertificates"
            />
            <div class="btnWrapper">
                <button @click="goToPrevious" class="btnPrevNext !rounded-bl-md lg:!rounded-bl-lg">
                    ❮
                </button>
                <a :href="currentCert?.Url" target="_blank" class="btnPrevNext !px-6 lg:!btn-wide"
                    >Visit</a
                >
                <button @click="goToNext" class="btnPrevNext !rounded-br-md lg:!rounded-br-lg">
                    ❯
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.certOuter {
    @apply flex relative flex-col mx-auto border-2 border-solid lg:w-3/4 border-success/40 rounded-lg lg:rounded-xl;
}

.btnWrapper {
    @apply flex absolute justify-between w-full bottom-0 bg-base-100 bg-opacity-70;
}
.btnPrevNext {
    @apply btn btn-accent text-accent-content btn-square rounded-none btn-xs lg:btn-md;
}
</style>
