<script setup>
definePageMeta({})
useHead({
  title: 'Solla',
})
const date = new Date()

date.setFullYear(date.getFullYear() - 18)
const dates = date.toISOString().split('T')[0]

const schema = [
  {
    $el: 'h1',
    children: 'Ingresa los siguientes datos',
    attrs: {
      class: 'text-center text-3xl font-bold mb-8 text-green-900',
    },
  },
  {
    $formkit: 'text',
    name: 'nombre',
    label: 'Nombre',
    help: 'Ingresa tu nombre completo con apellidos',
    validation: 'required',
  },
  {
    $formkit: 'text',
    name: 'cedula',
    label: 'Cédula',
    help: 'Ingresa tu cédula',
    validation: 'required',
  },
  {
    $formkit: 'date',
    value: dates,
    label: 'Fecha de nacimiento',
    help: 'Ingresa tu fecha de nacimiento',
    validation: 'required|before:' + dates,
    validationVisibility: 'live',
    max: dates,
    lang: 'es-CO',
  },
  {
    $formkit: 'text',
    name: 'departamento',
    label: 'Departamento',
    validation: 'required',
  },

  {
    $formkit: 'text',
    name: 'municipio',
    label: 'Municipio',
    validation: 'required',
  },
  {
    $formkit: 'tel',
    label: 'Número de teléfono',
    placeholder: 'xxx-xxx-xxxx',
    validation: 'required',
  },
  {
    $formkit: 'text',
    name: 'email',
    label: 'Correo',
    help: 'ingresa tu correo electrónico',
    validation: 'required|email',
  },
  {
    $formkit: 'radio',
    label: '¿Tiene negocio propio? ',
    value: 'Si',
    options: ['Si', 'No'],
  },
  {
    $formkit: 'checkbox',
    name: 'autorizacion_datos',
    label: 'Política de autorización de datos',
    __raw__sectionsSchema: {
      label: {
        children: [
          'Acepto la ',
          {
            $el: 'a',
            attrs: {
              href: '#',
              target: '_blank',
              class: 'text-green-800 hover:text-green-600 underline',
            },
            children: 'Política de autorización.',
          },
        ],
      },
    },
    validation: 'required',
  },
]
</script>

<template>
  <div class="wrapper">
    <div class="port">
      <div class="port-title">
        <img src="@/assets/images/title-desk.png" alt="Solla" />
      </div>
      <div class="port-titlem">
        <img src="@/assets/images/title.png" alt="Solla" />
        <img src="@/assets/images/foto.png" alt="Solla" />
      </div>
    </div>
    <div class="form">
      <FormKit type="form">
        <FormKitSchema :schema="schema" />
      </FormKit>
    </div>
  </div>
  <footer>
    <div class="logo">
      <a href="https://www.solla.com/" target="_blank">
        <img src="@/assets/images/logo.png" alt="Solla" />
      </a>
    </div>
    <div class="logos">
      <img src="@/assets/images/logos.png" alt="Solla" />
    </div>
  </footer>
</template>

<style lang="postcss">
.wrapper {
  @apply flex w-full flex-col md:min-h-screen md:flex-row;
  .port {
    background-image: url('@/assets/images/bg.jpg');
    @apply relative mx-auto flex w-full flex-col justify-center bg-cover pt-8 pb-0 text-white md:h-screen md:w-1/2 md:pt-8 md:pb-24 md:sticky md:top-0;
    &-title {
      @apply hidden md:block mx-auto mt-auto max-w-md lg:max-w-md sm:max-w-sm;
    }
    &-titlem {
      @apply md:hidden flex space-x-7 items-center px-7;
      img {
        @apply w-1/2 h-auto;
      }
    }
  }

  .form {
    @apply min-h-screen w-full bg-yellow-50 px-8 pt-8 pb-8 md:w-1/2 flex items-center justify-center;
    h3 {
      @apply mb-8 text-center text-2xl font-bold;
    }
  }
}
footer {
  background-image: url('@/assets/images/onda.svg');
  @apply md:fixed md:bottom-0 left-0 right-0 z-20 flex w-full md:w-1/2 items-baseline bg-cover bg-left-top bg-no-repeat px-12 pt-12 pb-6;
  .logo {
    @apply w-auto;
    a {
      img {
        @apply w-full max-w-2xs;
      }
    }
  }
  .logos {
    @apply ml-24 w-auto;
  }
}
</style>
