<!-- FIXME : Contact logic, from supabase -->

<script setup>
import { ref, watch, onMounted } from 'vue';
import { discordChatId, discordBotToken } from '../../../src/libs/discordEnv.js';
import { telegramChatId, telegramBotToken } from '../../../src/libs/telegramEnv.js';

// Contact Form
const full_name = ref('');
const email = ref('');
const phone_number = ref('+');
const subject = ref('');
const message = ref('');

// validation for phone number
const isValid = ref(true);
const phonePattern = /^\+[1-9]{1}[0-9]{1,14}$/ || /^\+[1-9]{1}[0-9]{1,2}[0-9]{1,14}$/;

watch(phone_number, (newVal) => {
    isValid.value = phonePattern.test(newVal);
});

onMounted(() => {
    if (!phone_number.value.startsWith('+')) {
        phone_number.value = '+' + phone_number.value;
    }
});

// Reset Form
const resetForm = () => {
    full_name.value = '';
    email.value = '';
    phone_number.value = '';
    subject.value = '';
    message.value = '';
};

// Toast Notification
const showToast = (message, isSuccess = true) => {
    const toast = document.createElement('div');
    toast.className = 'toast toast-middle toast-center whitespace-normal lg:whitespace-nowrap';
    const alertDiv = document.createElement('div');
    alertDiv.className = isSuccess ? 'alert alert-info text-white' : 'alert alert-error text-white';
    const span = document.createElement('span');
    span.textContent = message;
    alertDiv.appendChild(span);
    toast.appendChild(alertDiv);
    document.body.appendChild(toast);
    setTimeout(() => {
        toast.remove();
    }, 5000);
};

// Submit Form
const submitForm = async () => {
    const data = {
        full_name: full_name.value,
        email: email.value,
        phone_number: phone_number.value,
        subject: subject.value,
        message: message.value,
    };

    const teleMessagePayload = `<b>New Contact Submitted</b>\n<i>${new Date().toString()}</i>\n\n<b>Full Name</b>: ${
        data.full_name
    }\n<b>Email</b>: ${data.email}\n<b>Phone Number</b>: <i>${
        data.phone_number
    }</i>\n<b>Subject</b>: <u>${data.subject}</u>\n<b>Message</b>: \n<tg-spoiler>${
        data.message
    }</tg-spoiler>\n\n<b>Sent From</b>: <a href="https://axell.my.id/">AxPortfolio</a>`;

    const discordMessagePayload = `
    **New Contact Submitted**
    _${new Date().toString()}_

    **Full Name**: ${data.full_name}
    **Email**: ${data.email}
    **Phone Number**: _${data.phone_number}_
    **Subject**: __${data.subject}__
    **Message**:
    ||${data.message}||

    **Sent From**: [AxPortfolio](https://axell.my.id/)
    `;

    const telegramUrl = `https://api.telegram.org/`;
    const discordUrl = `https://discord.com/api/webhooks/`;

    try {
        await fetch(`${telegramUrl}bot${telegramBotToken}/sendMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: telegramChatId,
                text: teleMessagePayload,
                parse_mode: 'HTML',
            }),
        });

        await fetch(`${discordUrl}${discordChatId}/${discordBotToken}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                content: discordMessagePayload,
            }),
        });

        showToast('✨ Message sent successfully, ありがとうございます！ 🎉', true);
        resetForm();
    } catch (error) {
        showToast('❌ Failed to send message, もう一度お試しください！ 😞', false);
        console.error(error);
    }
};
</script>

<template>
    <form @submit.prevent="submitForm" class="gap-4 card-body">
        <div class="gap-4 lg:flex-row form-control">
            <input
                v-model="full_name"
                type="text"
                placeholder="Full Name"
                class="input lg:max-w-[13.5rem] input-bordered"
                required
            />
            <input
                v-model="email"
                type="email"
                pattern="^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$"
                placeholder="Email"
                class="input lg:max-w-[13.5rem] input-bordered"
                required
            />
        </div>
        <div class="form-control">
            <div class="label" :class="{ hidden: isValid }">
                <span class="text-red-500 label-text"
                    >Must be a valid country code (example: +62 or +123)</span
                >
            </div>
            <input
                v-model="phone_number"
                type="tel"
                placeholder="Phone Number"
                class="input input-bordered"
            />
        </div>
        <div class="form-control">
            <input
                v-model="subject"
                type="text"
                placeholder="Subject"
                class="input input-bordered"
                required
            />
        </div>
        <div class="form-control">
            <textarea
                v-model="message"
                placeholder="Message"
                class="w-full pl-4 textarea textarea-bordered textarea-lg"
                required
            ></textarea>
        </div>
        <div class="form-control">
            <button type="submit" class="btn submit">Send Message</button>
        </div>
    </form>
</template>

<style scoped>
.submit {
    @apply mt-6  p-0 text-base text-accent bg-inherit font-medium font-fira-code  border-primary hover:border-primary active:text-accent/60 active:border-primary/50;
}
</style>
