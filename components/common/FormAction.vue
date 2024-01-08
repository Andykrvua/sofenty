<template>
  <form class="form">
    <input
      :class="{
        error: v$.name.$error,
        valid: !v$.name.$invalid,
      }"
      type="text"
      v-model="formData.name"
      @change="v$.name.$touch"
      name="name"
      placeholder="Ваше Ім’я"
    />
    <div class="phone-wrapper">
      <input
        :class="{
          error: v$.phone.$error,
          valid: !v$.phone.$invalid,
          active: formData.phone,
        }"
        type="tel"
        v-model="formData.phone"
        @change="v$.phone.$touch"
        name="phone"
        placeholder="Номер телефону"
      />
      <span class="prefix" :class="{ active: formData.phone }">+380</span>
    </div>
    <button :disabled="isLoading" class="btn lead-btn lead-btn__blue" type="submit" @click="send">
      Замовити дзвінок
      <Transition name="fade">
        <!-- <p v-if="isError" class="status-message color-error">Сталась помилка, спробуйте пізніше</p> -->
        <p v-if="isError" class="status-message color-error">
          {{ errorMessage ?? 'Сталась помилка, спробуйте пізніше' }}
        </p>
      </Transition>
      <Transition name="fade">
        <!-- <p v-if="isComplete" class="status-message color-primary">Відправлено</p> -->
        <p v-if="isComplete" class="status-message color-primary">{{ successMessage }}</p>
      </Transition>
    </button>
  </form>
</template>

<script setup>
import { useVuelidate } from '@vuelidate/core';
import { required, email, minLength, maxLength, numeric } from '@vuelidate/validators';

const config = useRuntimeConfig();
const isLoading = ref(false);
const isError = ref(false);
const isComplete = ref(false);
const successMessage = ref('');
const errorMessage = ref('');

const route = useRoute();

const formData = reactive({
  name: '',
  phone: '',
  url: route.fullPath,
});

const rules = computed(() => {
  return {
    name: {
      required,
      minLength: minLength(2),
    },
    phone: {
      required,
      minLength: minLength(9),
      maxLength: maxLength(9),
      numeric,
    },
  };
});

const v$ = useVuelidate(rules, formData);

const send = async (e) => {
  e.preventDefault();

  v$.value.$validate();
  if (v$.value.$error) {
    return;
  }

  isLoading.value = true;

  try {
    const data = await $fetch(`${config.public.api}/incomings`, {
      method: 'post',
      body: {
        name: formData.name,
        phone: `+380${formData.phone}`,
        email: formData.email,
        service: formData.selected,
        message: formData.comment,
        url: formData.url,
      },
    });

    if (data.message) {
      successMessage.value = data.message;
      isLoading.value = false;
      isComplete.value = true;

      formData.name = '';
      formData.phone = '';
      formData.email = '';
      formData.selected = '';
      formData.comment = '';
      v$.value.$reset();

      setTimeout(() => {
        isComplete.value = false;
        successMessage.value = '';
      }, 3000);
    }
  } catch (error) {
    errorMessage.value = error.data.message;
    isError.value = true;
    isLoading.value = false;
    setTimeout(() => {
      errorMessage.value = '';
      isError.value = false;
    }, 3000);
    return;
  }
};

onMounted(() => {});
</script>

<style lang="scss" scoped>
.form {
  max-width: 400px;
}
/* br mobile */
@media (max-width: 767px) {
  .form {
    max-width: unset;
  }
}
.action-btn {
  position: relative;
  .status-message {
    position: absolute;
    top: -100%;
    padding-top: 16px;
    text-align: center;
    font-size: 16px;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(12px);
}

.form {
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  // br mobile
  @media (max-width: 767px) {
    row-gap: 16px;
  }
}

input {
  display: flex;
  align-items: center;
  padding: 10px 0 20px;
  border: none;
  border-bottom: 1px solid var(--white);
  font-size: 14px;
  line-height: 14px;
  color: var(--f-w-40);
  background: transparent;
  &::placeholder {
    color: var(--f-w-40);
  }
}

.phone-wrapper {
  position: relative;
  display: flex;
  overflow: hidden;
  input {
    flex-grow: 1;
  }
  .prefix {
    position: absolute;
    top: 12px;
    font-size: 14px;
    line-height: 14px;
    color: var(--white);
    display: none;
  }
  .prefix.active {
    display: block;
  }
  input:focus-within {
    padding-left: 40px;
  }
  input:focus-within::placeholder {
    opacity: 0;
  }
  input:focus-within ~ .prefix {
    display: block;
  }
  input.active {
    padding-left: 40px;
  }
}

.lead-btn {
  margin-top: 10px;
}

.valid {
  border-color: var(--primary);
  color: var(--white);
}
.error {
  color: var(--f-w-40);
}

// browser autofill
.form {
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-background-clip: text;
    -webkit-text-fill-color: var(--white);
    border-color: var(--white);
    transition: background-color 5000s ease-in-out 0s;
    box-shadow: inset 0 0 20px 20px var(--black);
  }
}
</style>
