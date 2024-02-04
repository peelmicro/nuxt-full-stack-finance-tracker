# Master Nuxt 3 - Full Stack Complete Guide - Financial

In this document, we will create a Financial website using Nuxt 3 based on the [Master Nuxt 3 - Full-Stack Complete Guide
](https://www.udemy.com/course/master-nuxt-full-stack-complete-guide) Udemy Course.

- We are going to use [Nuxt UI](https://ui.nuxt.com/), [headless UI](https://headlessui.com/) and [Supabase](https://supabase.com/docs/).

## 1. Create a new project

### 1.1. Create the Nuxt 3 project

- We are going to use Bun to proceed with the creation of the project. Bun is a CLI tool that helps you create Nuxt 3 projects.

```bash
juanpabloperez@jpp-PROX15-AMD:~/Work/Projects/EdiEz/Examples$ bunx nuxi@latest init nuxt3-ts-portfolio

✔ Which package manager would you like to use?
bun
◐ Installing dependencies...                                                                                                                     18:29:30
bun install v1.0.23 (83f2432d)

 + nuxt@3.9.3
 + vue@3.4.15
 + vue-router@4.2.5

warn: nuxt-app's postinstall script took 1.7s

 670 packages installed [7.07s]
✔ Installation completed.                                                                                                                       18:29:37

✔ Initialize git repository?
No
                                                                                                                                                 18:29:43
✨ Nuxt project has been created with the v3 template. Next steps:
 › cd nuxt3-ts-portfolio                                                                                                                         18:29:43
 › Start development server with bun run dev                                                                                                     18:29:43
juanpabloperez@jpp-PROX15-AMD:~/Work/Projects/EdiEz/Examples$ 
 *  History restored 

juanpabloperez@jpp-PROX15-AMD:~/Work/Projects/EdiEz/Examples$ bunx nuxi@latest init nuxt3-ts-financial

[16:36:57]  WARN  Current version of Node.js (16.20.2) is unsupported and might cause issues.
       Please upgrade to a compatible version >= 18.0.0.


✔ Which package manager would you like to use?
bun
◐ Installing dependencies...                                                  16:37:04
bun install v1.0.23 (83f2432d)

 + nuxt@3.10.0
 + vue@3.4.15
 + vue-router@4.2.5

warn: nuxt-app's postinstall script took 1.9s

 670 packages installed [7.68s]
✔ Installation completed.                                                    16:37:11

✔ Initialize git repository?
Yes
ℹ Initializing git repository...                                             16:37:18

hint: Using 'master' as the name for the initial branch. This default branch name
hint: is subject to change. To configure the initial branch name to use in all
hint: of your new repositories, which will suppress this warning, call:
hint: 
hint:   git config --global init.defaultBranch <name>
hint: 
hint: Names commonly chosen instead of 'master' are 'main', 'trunk' and
hint: 'development'. The just-created branch can be renamed via this command:
hint: 
hint:   git branch -m <name>
Initialized empty Git repository in /home/juanpabloperez/Work/Projects/EdiEz/Examples/nuxt3-ts-financial/.git/
                                                                              16:37:18
✨ Nuxt project has been created with the v3 template. Next steps:
 › cd nuxt3-ts-financial                                                      16:37:18
 › Start development server with bun run dev                                  16:37:18
juanpabloperez@jpp-PROX15-AMD:~/Work/Projects/EdiEz/Examples$ nvm use stable
Now using node v21.1.0 (npm v10.2.0)
```

- We are going to rename the branch to `main` and push the code to the repository.

```bash
juanpabloperez@jpp-PROX15-AMD:~/Work/Projects/EdiEz/Examples$ cd nuxt3-ts-financial/
juanpabloperez@jpp-PROX15-AMD:~/Work/Projects/EdiEz/Examples/nuxt3-ts-financial$ git branch -m master main
```

### 1.2. Add the NuxtUI package

- We are going to add the NuxtUI package to the project.

```bash
juanpabloperez@jpp-PROX15-AMD:~/Work/Projects/EdiEz/Examples/nuxt3-ts-financial$ bun add @nuxt/ui
bun add v1.0.23 (83f2432d)

 installed @nuxt/ui@2.13.0

warn: nuxt-app's postinstall script took 1.7s

 142 packages installed [8.84s]
```

- It will install the `@nuxtjs/tailwindcss`, `@nuxtjs/color-mode` and `nuxt-icon` modules.

- We need to modify the `nuxt.config.js` file to add the `@nuxt/ui` module.

> nuxt.config.ts

```ts
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/ui'],
})
```

- We need to modify the `App.vue` file to add the `NuxtLayout` components.

> app.vue

```vue
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
```

- We need to create the `default.vue` layout file.

> layouts/default.vue

```vue
<template>
  <div class="container mx-auto max-w-4xl">
    <AppHeader />
    <main class="my-10">
      <slot />
    </main>
  </div>
</template>

<script setup>
// Link to Google Fonts
useHead({
  link: [
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com'
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Inter&display=swap',
      crossorigin: ''
    }
  ]
})
</script>

<style>
/* Set the font family for the entire site */
body {
  font-family: 'Inter';
}
/* Set the background color for the entire site */
body {
  @apply dark:bg-gray-900 bg-white
}
</style>
```

- We need to create the `AppHeader.vue` component file.

> components/app-header.vue

```vue
<template>
  <header class="flex justify-between items-center mt-10">
    <NuxtLink to="/" class="text-xl font-bold">
      Finance Tracker
    </NuxtLink>
    <div>
      <UAvatar src="https://avatars.githubusercontent.com/u/739984?v=4" alt="Avatar" />
    </div>
  </header>
</template>
```

- We need to create the `index.vue` page file.

> pages/index.vue

```vue
<template>
  <div>Index page!</div>
</template>
```

- We need to create the `tailwind.config.ts` file.

> tailwind.config.ts

```ts
import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: ['./app.vue'],
  darkMode: 'class',
  theme: {
    extend: {},
  },
}
```

- We need to run the project.

```bash
juanpabloperez@jpp-PROX15-AMD:~/Work/Projects/EdiEz/Examples/nuxt3-ts-financial$ bun dev
$ nuxt dev
Nuxt 3.10.0 with Nitro 2.8.1                                                                                                                             17:56:19
                                                                                                                                                         17:56:19
  ➜ Local:    http://localhost:3000/
  ➜ Network:  use --host to expose

ℹ Using default Tailwind CSS file                                                                                                      nuxt:tailwindcss 17:56:20
  ➜ DevTools: press Shift + Alt + D in the browser (v1.0.8)                                                                                              17:56:20

ℹ Tailwind Viewer: http://localhost:3000/_tailwind/                                                                                    nuxt:tailwindcss 17:56:20
ℹ Vite server warmed up in 4102ms                                                                                                                       17:56:26
ℹ Vite client warmed up in 4734ms                                                                                                                       17:56:26
✔ Nitro built in 485 ms 
```

- We can see the `Index page!` message in the browser.

![Index page! message](nuxt3-ts-financial.001.png)

## 2. Create the Initial Financial website

### 2.1. Add the NuxtUI USelectMenu component

- We are going to add the `USelectMenu` component to the `index.vue` component.
- We are going to create a `constants.ts` document to store the `menu options` constants.

> constants.ts

```ts
export const transactionViewOptions = ['Yearly', 'Monthly', 'Daily']
```

> pages/index.vue

```vue
<template>
  <section class="flex items-center justify-between mb-10">
    <h1 class="text-4xl font-extrabold">
      Summary
    </h1>
    <div>
      <USelectMenu :options="transactionViewOptions" v-model="selectedView" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { transactionViewOptions } from '~/constants'
const selectedView = ref(transactionViewOptions[1])
</script>
```

![USelectMenu example](nuxt3-ts-financial.002.png)

### 2.2. Add the NuxtUI USkeleton and UIcon components

- We are going to add the `USkeleton` and `UIcon` components to the `index.vue` component.
- The `UICon` component is based on the [iconify](https://iconify.design/getting-started/) library.
- We are going to create the `Trend` component to display the `trend` of the `transactions`.

> components/trend.vue

```vue
<template>
  <div>
    <div class="font-bold" :class="[color]">{{ title }}</div>

    <div class="text-2xl font-extrabold text-black dark:text-white mb-2">
      <USkeleton class="h-8 w-full" v-if="loading" />
      <div v-else>{{ amount }}</div>
    </div>

    <div>
      <USkeleton class="h-6 w-full" v-if="loading" />
      <div v-else class="flex space-x-1 items-center text-sm">
        <UIcon name="i-heroicons-arrow-trending-up" class="w-6 h-6" :class="[color]" />
        <div class="text-gray-500 dark:text-gray-400">
          30% vs last period
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: String,
  amount: Number,
  lastAmount: Number,
  color: String,
  loading: Boolean
})
</script>

<style scoped>
.green {
  @apply text-green-600 dark:text-green-400
}
.red {
  @apply text-red-600 dark:text-red-400
}
</style>
```

> pages/index.vue

```vue
<template>
  <section class="flex items-center justify-between mb-10">
    <h1 class="text-4xl font-extrabold">
      Summary
    </h1>
    <div>
      <USelectMenu :options="transactionViewOptions" v-model="selectedView" />
    </div>
  </section>

  <section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 sm:gap-16 mb-10">
    <Trend color="green" title="Income" :amount="4000" :last-amount="3000" :loading="false" />
    <Trend color="red" title="Income" :amount="4000" :last-amount="3000" :loading="false" />
    <Trend color="green" title="Income" :amount="4000" :last-amount="3000" :loading="false" />
    <Trend color="red" title="Income" :amount="4000" :last-amount="3000" :loading="true" />
  </section>
</template>

<script setup lang="ts">
import { transactionViewOptions } from '~/constants'
const selectedView = ref(transactionViewOptions[1])
</script>
```

![Using Trend Component](nuxt3-ts-financial.003.png)

- We can improve the `Trend` component.

> components/trend.vue

```vue
<template>
  <div>
    <div class="font-bold" :class="[color]">{{ title }}</div>

    <div>
      <USkeleton class="h-6 w-full" v-if="loading" />
      <div v-else class="flex space-x-1 items-center text-sm">
        <UIcon :name="icon" class="w-6 h-6" :class="{ 'green': trendingUp, 'red': !trendingUp }" />
        <div class="text-gray-500 dark:text-gray-400">
          {{ percentageTrend }} vs last period
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  amount: Number,
  lastAmount: Number,
  color: String,
  loading: Boolean
})
const trendingUp = computed(
  () => props.amount >= props.lastAmount
)
const icon = computed(
  () => trendingUp.value ? 'i-heroicons-arrow-trending-up' : 'i-heroicons-arrow-trending-down'
)
const percentageTrend = computed(() => {
  if (props.amount === 0 || props.lastAmount === 0) return '∞%'
  const bigger = Math.max(props.amount, props.lastAmount)
  const lower = Math.min(props.amount, props.lastAmount)
  const ratio = ((bigger - lower) / lower) * 100
  // console.log(bigger, lower, ratio, Math.ceil(ratio))
  return `${Math.ceil(ratio)}%`
})
</script>

<style scoped>
.green {
  @apply text-green-600 dark:text-green-400
}
.red {
  @apply text-red-600 dark:text-red-400
}
</style>
```

> pages/index.vue

```vue
<template>
  <section class="flex items-center justify-between mb-10">
    <h1 class="text-4xl font-extrabold">
      Summary
    </h1>
    <div>
      <USelectMenu :options="transactionViewOptions" v-model="selectedView" />
    </div>
  </section>

  <section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 sm:gap-16 mb-10">
    <Trend color="green" title="Income" :amount="4000" :last-amount="3000" :loading="false" />
    <Trend color="red" title="Expense" :amount="4000" :last-amount="5000" :loading="false" />
    <Trend color="green" title="Investments" :amount="4000" :last-amount="3000" :loading="false" />
    <Trend color="red" title="Saving" :amount="4000" :last-amount="4100" :loading="false" />
  </section>
</template>

<script setup lang="ts">
import { transactionViewOptions } from '~/constants'
const selectedView = ref(transactionViewOptions[1])
</script>
```

![Improving the Trend component](nuxt3-ts-financial.004.png)

### 2.3. Adding a composable to improve manage amounts

- We are going to create a `useAmount` composable to manage the amounts.
- We are going to use the standard [Intl.NumberFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat) to format the amounts.

> composables/useCurrency.ts

```ts
import { computed, isRef } from 'vue'
import type { Ref } from 'vue'

export const useCurrency = (amount: Ref<number> | number) => {
  const currency = computed(() => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'EUR',
    }).format(isRef(amount) ? amount.value : amount)
  })

  return {
    currency,
  }
}
```

> components/trend.vue

```vue
<template>
  <div>
    <div class="font-bold" :class="[color]">{{ title }}</div>

    <div class="text-2xl font-extrabold text-black dark:text-white mb-2">
      <USkeleton class="h-8 w-full" v-if="loading" />
      <div v-else>{{ currency }}</div>
    </div>

    <div>
      <USkeleton class="h-6 w-full" v-if="loading" />
      <div v-else class="flex space-x-1 items-center text-sm">
        <UIcon :name="icon" class="w-6 h-6" :class="{ 'green': trendingUp, 'red': !trendingUp }" />
        <div class="text-gray-500 dark:text-gray-400">
          {{ percentageTrend }} vs last period
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  amount: Number,
  lastAmount: Number,
  color: String,
  loading: Boolean
})
const trendingUp = computed(
  () => props.amount >= props.lastAmount
)
const icon = computed(
  () => trendingUp.value ? 'i-heroicons-arrow-trending-up' : 'i-heroicons-arrow-trending-down'
)
const { currency } = useCurrency(props.amount)
const percentageTrend = computed(() => {
  if (props.amount === 0 || props.lastAmount === 0) return '∞%'
  const bigger = Math.max(props.amount, props.lastAmount)
  const lower = Math.min(props.amount, props.lastAmount)
  const ratio = ((bigger - lower) / lower) * 100
  return `${Math.ceil(ratio)}%`
})
</script>

<style scoped lang="scss">
.green {
  @apply text-green-600 dark:text-green-400
}
.red {
  @apply text-red-600 dark:text-red-400
}
</style>
```

### 2.4. Add the use of NuxtUI UBadge, UDropdown and UButton components

- We are going to add the `UBadge`, `UDropdown` and `UButton` components to the new `transaction.vue` component that we are going to create.

> components/transaction.vue

```vue
<template>
  <div class="grid grid-cols-2 py-4 border-b border-gray-200 dark:border-gray-800 text-gray-900 dark:text-gray-100">
    <div class="flex items-center justify-between">
      <div class="flex items-center space-x-1">
        <UIcon name="i-heroicons-arrow-up-right" class="text-green-600" />
        <div>Salary</div>
      </div>

      <div>
        <UBadge color="white">Category</UBadge>
      </div>
    </div>

    <div class="flex items-center justify-end space-x-2">
      <div>{{ currency }}</div>
      <div>
        <UDropdown :items="items" :popper="{ placement: 'bottom-start' }">
          <UButton color="white" variant="ghost" trailing-icon="i-heroicons-ellipsis-horizontal" />
        </UDropdown>
      </div>
    </div>
  </div>
</template>

<script setup>
const { currency } = useCurrency(3000)
const items = [
  [
    {
      label: 'Edit',
      icon: 'i-heroicons-pencil-square-20-solid',
      click: () => console.log('Edit')
    },
    {
      label: 'Delete',
      icon: 'i-heroicons-trash-20-solid',
      click: () => console.log('Delete')
    }
  ]
]
</script>
```

> pages/index.vue

```vue
<template>
  <section class="flex items-center justify-between mb-10">
    <h1 class="text-4xl font-extrabold">
      Summary
    </h1>
    <div>
      <USelectMenu :options="transactionViewOptions" v-model="selectedView" />
    </div>
  </section>

  <section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 sm:gap-16 mb-10">
    <Trend color="green" title="Income" :amount="4000" :last-amount="3000" :loading="false" />
    <Trend color="red" title="Expense" :amount="4000" :last-amount="5000" :loading="false" />
    <Trend color="green" title="Investments" :amount="4000" :last-amount="3000" :loading="false" />
    <Trend color="red" title="Saving" :amount="4000" :last-amount="4100" :loading="false" />
  </section>

  <section>
    <Transaction />
    <Transaction />
    <Transaction />
    <Transaction />
  </section>
    
</template>

<script setup lang="ts">
import { transactionViewOptions } from '~/constants'
const selectedView = ref(transactionViewOptions[1])
</script>
```

![Transactions Initial Version](nuxt3-ts-financial.005.png)

## 3.- Using Supabase to manage the backend

### 3.1. Signing up for Supabase

- We are going to use the [Supabase](https://supabase.com/) service to manage the backend.
- We need to sign up for the service and create a new project.
- From <https://supabase.com/dashboard/sign-in?returnTo=%2Fprojects> we can click on `Sign up Now` to create a new account.

![Sign Up Now](nuxt3-ts-financial.006.png)

- We can register by clicking on `Continue with GitHub`.

![Continue with GitHub](nuxt3-ts-financial.007.png)

- We need to `Authorize supabase`.

![Authorize supabase](nuxt3-ts-financial.008.png)

### 3.2. Creating a new project

- And from <https://supabase.com/dashboard/projects> we need to create a new project.

![Click on new project](nuxt3-ts-financial.009.png)

- Put the project name, click on `Generate a password` to assign a password, leave the default assigned Region and click on `Create new project`.

![Create new project](nuxt3-ts-financial.010.png)

- We can see the new project created but with a message of being `Setting up project`.

![Setting up project](nuxt3-ts-financial.011.png)

- We can see welcome page with the access to build a new database and the access to other products.

![welcome page](nuxt3-ts-financial.012.png)

- We can also see `project URL` and `API Key` that we need to use in our project to connect it.

![Project URL and API Key](nuxt3-ts-financial.013.png)

- We can see other client libraries that we can use to connect to the Supabase service.

![Client Libraries](nuxt3-ts-financial.014.png)

- We can see the settings of the project by clicking on the `Settings` icon.

![Available Settings](nuxt3-ts-financial.015.png)

- We can copy the `Reference ID`.

![Reference ID](nuxt3-ts-financial.016.png)

- We can see the `database` settings and copy the `URI`, `Host`, `Database name`, `Port` and `User`.

![Database Settings](nuxt3-ts-financial.017.png)

### 3.3 Installing the Supabase client

- We are going to use the `@nuxtjs/supabase` Nuxt module to connect to the Supabase service.
- We need to install the module.

```bash
juanpabloperez@jpp-PROX15-AMD:~/Work/Projects/EdiEz/Examples/nuxt3-ts-financial$ bun add -D @nuxtjs/supabase
bun add v1.0.23 (83f2432d)

 installed @nuxtjs/supabase@1.1.6

warn: nuxt-app's postinstall script took 2.5s

 10 packages installed [8.10s]
```

- We need to modify the `nuxt.config.ts` file to add the `@nuxtjs/supabase` module.

> nuxt.config.ts

```ts
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxtjs/supabase'],
  ui: {
    global: true,
  },
})
```

### 3.4. Create the `.env` file where we are going to store the Supabase settings

- We need to create the `.env` file to store the Supabase `URL` and `KEY` settings.

> .env

```env
SUPABASE_URL="https://myid.supabase.co"
SUPABASE_KEY="myKey"
```

- When we start the project we can see an error of `404 Page not found: /login` because we it redirected automatically as we can see on [Nuxt Supabase Redirect](https://supabase.nuxtjs.org/get-started#redirect).

![404 Page not found](nuxt3-ts-financial.018.png)

- We need to modify the `nuxt.config.ts` file to add the temporary `supabase` settings.

> nuxt.config.ts

```ts
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxtjs/supabase'],
  ui: {
    global: true,
  },
  supabase: {
    redirect: false
  }
})
```

### 3.5. Create the `Transaction` table in Supabase

- We need to create the `Transaction` table in the Supabase service.
- We need to click on the `Table Editor` to create the new table.

![Access Table Editor](nuxt3-ts-financial.019.png)

- Click on `Create a new table`.

![Create a new table](nuxt3-ts-financial.020.png)

- We need to put the `name` with `transactions` and the `description` with `This holds all the financial transactions of all the users`.

![Put the name and description](nuxt3-ts-financial.021.png)

- Temporary we are going to disable the `[X] Enable Row Level Security (RLS)`.

![Unselect RLS](nuxt3-ts-financial.022.png)

- We need to confirm the message of `Turn off Row Level Security`.

![Turn off Row Level Security](nuxt3-ts-financial.023.png)

- We need to add the `id`, `created_at`, `amount`, `type`, `description` and `category` columns.

Column| Type
---------|----------
id | int8
created_at | timestamp
amount | int8
type | text
description | text
category | text

![Save new table](nuxt3-ts-financial.024.png)

- We can see the message of `Adding 6 columns to transactions...`

![Adding Columns ...](nuxt3-ts-financial.025.png)

- And we can see the `transactions` table created.
- We can click on the `insert` button to add a new transaction.

![Table created](nuxt3-ts-financial.026.png)

- We need to select `insert row` to add a new transaction.

![Insert Row](nuxt3-ts-financial.027.png)

- We need to add a new transaction with the `amount` of `1000`, the `type` of `Income`, the `description` of `Salary` and leave the `category` empty at the moment.

![Add data](nuxt3-ts-financial.028.png)

- And we can see the new transaction added.

![Data added](nuxt3-ts-financial.029.png)

- We could see how the `SQL Script` used to create the `transactions` table looks like.

```sql
create table
  public.transactions (
    id bigint primary key generated always as identity,
    created_at timestamp with time zone default current_timestamp not null,
    amount bigint null,
    type text null,
    description text null,
    category text null
  ) tablespace pg_default;
```

### 3.6 Getting the transaction data from the Supabase service

- We are going to use [useSupabaseClient](https://supabase.nuxtjs.org/usage/composables/usesupabaseclient) composable to get the `transactions` from the Supabase service.
- We need to modify the `index.vue` file to use the `useSupabaseClient` composable.

> pages/index.vue

```vue
<template>
  <section class="flex items-center justify-between mb-10">
    <h1 class="text-4xl font-extrabold">
      Summary
    </h1>
    <div>
      <USelectMenu :options="transactionViewOptions" v-model="selectedView" />
    </div>
  </section>

  <section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 sm:gap-16 mb-10">
    <Trend color="green" title="Income" :amount="4000" :last-amount="3000" :loading="false" />
    <Trend color="red" title="Expense" :amount="4000" :last-amount="5000" :loading="false" />
    <Trend color="green" title="Investments" :amount="4000" :last-amount="3000" :loading="false" />
    <Trend color="red" title="Saving" :amount="4000" :last-amount="4100" :loading="false" />
  </section>

  <section>
    <Transaction v-for="transaction in transactions" :key="transaction.id" :transaction="transaction" />
  </section>
</template>

<script setup>
import { transactionViewOptions } from '~/constants'
const supabase = useSupabaseClient()

const selectedView = ref(transactionViewOptions[1])
const transactions = ref([])

const { data, pending } = await useAsyncData('transactions', async () => {
  const { data, error } = await supabase
    .from('transactions')
    .select()

  if (error) return []

  return data
})

transactions.value = data.value
</script>
```

- We need to modify the `Transaction` component to use the `transaction` prop.

> components/transaction.vue

```vue
<template>
  <div class="grid grid-cols-2 py-4 border-b border-gray-200 dark:border-gray-800 text-gray-900 dark:text-gray-100">
    <div class="flex items-center justify-between">
      <div class="flex items-center space-x-1">
        <UIcon name="i-heroicons-arrow-up-right" class="text-green-600" />
        <div>{{ transaction.description }}</div>
      </div>

      <div>
        <UBadge color="white" v-if="transaction.category">{{ transaction.category }}</UBadge>
      </div>
    </div>

    <div class="flex items-center justify-end space-x-2">
      <div>{{ currency }}</div>
      <div>
        <UDropdown :items="items" :popper="{ placement: 'bottom-start' }">
          <UButton color="white" variant="ghost" trailing-icon="i-heroicons-ellipsis-horizontal" />
        </UDropdown>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  transaction: Object
})
const { currency } = useCurrency(props.transaction.amount)
const items = [
  [
    {
      label: 'Edit',
      icon: 'i-heroicons-pencil-square-20-solid',
      click: () => console.log('Edit')
    },
    {
      label: 'Delete',
      icon: 'i-heroicons-trash-20-solid',
      click: () => console.log('Delete')
    }
  ]
]
</script>
```

- We can see the transactions in the browser.

![Transactions](nuxt3-ts-financial.030.png)

