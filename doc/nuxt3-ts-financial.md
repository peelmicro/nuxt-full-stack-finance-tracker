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

### 3.7. Deleting a transaction from the Supabase service using a notification message

- We are going to add the `delete` functionality to the `Transaction` component.
- We are also going to use the `useSupabase` composable to delete the transaction from the Supabase service.
- We are going to use the `useToast` composable to show a message when the transaction is deleted.

- We need to modify the main `app.vue` file to add the `UNotifications` component.

> app.vue

```vue
<template>
  <NuxtLayout>
    <NuxtPage />
    <UNotifications />
  </NuxtLayout>
</template>
```

- We need to create the `DailyTransactionSummary` component to show a summary for each day.

> components/daily-transaction-summary.vue

```vue
<template>
  <div
    class="grid grid-cols-2 py-4 border-b border-gray-200 dark:border-gray-800 text-gray-500 dark:text-gray-400 font-bold">
    <div class="flex items-center justify-between">
      {{ date }}
    </div>

    <div class="flex items-center justify-end mr-10">
      {{ currency }}
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  date: String,
  transactions: Array
})

const sum = computed(() => {
  let sum = 0

  for (const transaction of props.transactions) {
    if (transaction.type === 'Income') {
      sum += transaction.amount
    } else {
      sum -= transaction.amount
    }
  }

  return sum
})

const { currency } = useCurrency(sum)
</script>
```

- We need to modify the `Transaction` component to add the `delete` functionality and the `DailyTransactionSummary` component.

> components/transaction.vue

```vue
<template>
  <div class="grid grid-cols-2 py-4 border-b border-gray-200 dark:border-gray-800 text-gray-900 dark:text-gray-100">
    <div class="flex items-center justify-between">
      <div class="flex items-center space-x-1">
        <UIcon :name="icon" :class="[iconColor]" />
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
          <UButton color="white" variant="ghost" trailing-icon="i-heroicons-ellipsis-horizontal" :loading="isLoading" />
        </UDropdown>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  transaction: Object
})
const emit = defineEmits(['deleted'])
const isIncome = computed(() => props.transaction.type === 'Income')
const icon = computed(
  () => isIncome.value ? 'i-heroicons-arrow-up-right' : 'i-heroicons-arrow-down-left'
)
const iconColor = computed(
  () => isIncome.value ? 'text-green-600' : 'text-red-600'
)

const { currency } = useCurrency(props.transaction.amount)

const isLoading = ref(false)
const toast = useToast()
const supabase = useSupabaseClient()

const deleteTransaction = async () => {
  isLoading.value = true

  try {
    await supabase.from('transactions')
      .delete()
      .eq('id', props.transaction.id)
    toast.add({
      title: 'Transaction deleted',
      icon: 'i-heroicons-check-circle',
    })
    emit('deleted', props.transaction.id)
  } catch (error) {
    toast.add({
      title: 'Transaction deleted',
      icon: 'i-heroicons-exclamation-circle',
    })
  } finally {
    isLoading.value = false
  }
}

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
      click: deleteTransaction
    }
  ]
]
</script>
```

- We need to modify the `index.vue` file to add the changes to delete the transaction.

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
    <Trend color="green" title="Income" :amount="4000" :last-amount="3000" :loading="isLoading" />
    <Trend color="red" title="Expense" :amount="4000" :last-amount="5000" :loading="isLoading" />
    <Trend color="green" title="Investments" :amount="4000" :last-amount="3000" :loading="isLoading" />
    <Trend color="red" title="Saving" :amount="4000" :last-amount="4100" :loading="isLoading" />
  </section>

  <section v-if="!isLoading">
    <div v-for="(transactionsOnDay, date) in transactionsGroupedByDate" :key="date" class="mb-10">
      <DailyTransactionSummary :date="date" :transactions="transactionsOnDay" />
      <Transaction v-for="transaction in transactionsOnDay" :key="transaction.id" :transaction="transaction"
        @deleted="refreshTransactions()" />
    </div>
  </section>
  <section v-else>
    <USkeleton class="h-8 w-full mb-2" v-for="i in 4" :key="i" />
  </section>
</template>

<script setup>
import { transactionViewOptions } from '~/constants'
const supabase = useSupabaseClient()

const selectedView = ref(transactionViewOptions[1])
const transactions = ref([])
const isLoading = ref(false)

const fetchTransactions = async () => {
  isLoading.value = true
  try {
    const { data } = await useAsyncData('transactions', async () => {
      const { data, error } = await supabase
        .from('transactions')
        .select()

      if (error) return []

      return data
    })

    return data.value
  } finally {
    isLoading.value = false
  }
}

const refreshTransactions = async () => transactions.value = await fetchTransactions()

await refreshTransactions()

const transactionsGroupedByDate = computed(() => {
  let grouped = {}

  for (const transaction of transactions.value) {
    const date = new Date(transaction.created_at).toISOString().split('T')[0]

    if (!grouped[date]) {
      grouped[date] = []
    }

    grouped[date].push(transaction)
  }

  return grouped
})

console.log(transactionsGroupedByDate.value)

</script>
```

- We can see the initial transactions in the browser.

![Initial](nuxt3-ts-financial.031.png)

- We can delete a transaction by clicking on the `Delete` button.

![Deleted transaction](nuxt3-ts-financial.032.png)

- We can see the final transactions in the browser.

![Alt text](nuxt3-ts-financial.033.png)

### 3.8 Adding/Modifying a transaction from the Supabase service using a modal

- We are going to add the `add` functionality to the `Transaction` component.
- We are going to use the `UModal` component from `NuxtUI` to manage the modal to add/modify a new transaction.
- We are going to use the `UCard`, `UForm`, `UFormGroup`, `UInput`, `USelect`, `UButton` components from `NuxtUI` to manage the form to add/modify a new transaction.
- We are going to use the [Zod](https://zod.dev/) library to validate the form to add/modify a new transaction. We need to install the library.

```bash
juanpabloperez@jpp-PROX15-AMD:~/Work/Projects/EdiEz/Examples/nuxt3-ts-financial$ bun add zod 
[0.02ms] ".env"
bun add v1.0.23 (83f2432d)

 installed zod@3.22.4

warn: nuxt-app's postinstall script took 3s

 1 package installed [4.12s]
```

- We have updated the `constants.ts` file to add the `categories` and `types` constant.

> constants.ts

```ts
export const transactionViewOptions = ['Yearly', 'Monthly', 'Daily']

export const categories = ['Food', 'Housing', 'Car', 'Entertainment']

export const types = ['Income', 'Expense', 'Saving', 'Investment']
```

- We have created the `TransactionModal` component to manage the modal to add/modify a new transaction.

> components/transaction-modal.vue

```vue
<template>
  <UModal v-model="isOpen">
    <UCard>
      <template #header>
        Add Transaction
      </template>

      <UForm :state="state" :schema="schema" ref="form" @submit.prevent="save">
        <UFormGroup :required="true" label="Transaction Type" name="type" class="mb-4">
          <USelect placeholder="Select the transaction type" :options="types" v-model="state.type" />
        </UFormGroup>

        <UFormGroup label="Amount" :required="true" name="amount" class="mb-4">
          <UInput type="number" placeholder="Amount" v-model.number="state.amount" />
        </UFormGroup>

        <UFormGroup label="Transaction date" :required="true" name="created_at" class="mb-4">
          <UInput type="date" icon="i-heroicons-calendar-days-20-solid" v-model="state.created_at" />
        </UFormGroup>

        <UFormGroup label="Description" hint="Optional" name="description" class="mb-4">
          <UInput placeholder="Description" v-model="state.description" />
        </UFormGroup>

        <UFormGroup :required="true" label="Category" name="category" class="mb-4" v-if="state.type === 'Expense'">
          <USelect placeholder="Category" :options="categories" v-model="state.category" />
        </UFormGroup>

        <UButton type="submit" color="black" variant="solid" label="Save" />
      </UForm>
    </UCard>
  </UModal>
</template>

<script setup>
import { categories, types } from '~/constants'
import { z } from 'zod'

const props = defineProps({
  modelValue: Boolean
})
const emit = defineEmits(['update:modelValue'])

const defaultSchema = z.object({
  created_at: z.string(),
  description: z.string().optional(),
  amount: z.number().positive('Amount needs to be more than 0')
})

const incomeSchema = z.object({
  type: z.literal('Income')
})
const expenseSchema = z.object({
  type: z.literal('Expense'),
  category: z.enum(categories)
})
const investmentSchema = z.object({
  type: z.literal('Investment')
})
const savingSchema = z.object({
  type: z.literal('Saving')
})

const schema = z.intersection(
  z.discriminatedUnion('type', [incomeSchema, expenseSchema, investmentSchema, savingSchema]),
  defaultSchema
)

const form = ref()

const save = async () => {
  if (form.value.errors.length) return

  // Store into the supabase
}

const initialState = {
  type: undefined,
  amount: 0,
  created_at: undefined,
  description: undefined,
  category: undefined
}
const state = ref({
  ...initialState
})
const resetForm = () => {
  Object.assign(state.value, initialState)
  form.value.clear()
}

const isOpen = computed({
  get: () => props.modelValue,
  set: (value) => {
    if (!value) resetForm()
    emit('update:modelValue', value)
  }
})
</script>
```

- We have modified the `index.vue` component to add the `add` functionality.

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
    <Trend color="green" title="Income" :amount="incomeTotal" :last-amount="4100" :loading="isLoading" />
    <Trend color="red" title="Expense" :amount="expenseTotal" :last-amount="3800" :loading="isLoading" />
    <Trend color="green" title="Investments" :amount="4000" :last-amount="3000" :loading="isLoading" />
    <Trend color="red" title="Saving" :amount="4000" :last-amount="4100" :loading="isLoading" />
  </section>

  <section class="flex justify-between mb-10">
    <div>
      <h2 class="text-2xl font-extrabold">Transactions</h2>
      <div class="text-gray-500 dark:text-gray-400">
        You have {{ incomeCount }} incomes and {{ expenseCount }} expenses this period
      </div>
    </div>
    <div>
      <TransactionModal v-model="isOpen" />
      <UButton icon="i-heroicons-plus-circle" color="white" variant="solid" label="Add" @click="isOpen = true" />
    </div>
  </section>

  <section v-if="!isLoading">
    <div v-for="(transactionsOnDay, date) in transactionsGroupedByDate" :key="date" class="mb-10">
      <DailyTransactionSummary :date="date" :transactions="transactionsOnDay" />
      <Transaction v-for="transaction in transactionsOnDay" :key="transaction.id" :transaction="transaction"
        @deleted="refreshTransactions()" />
    </div>
  </section>
  <section v-else>
    <USkeleton class="h-8 w-full mb-2" v-for="i in 4" :key="i" />
  </section>
</template>

<script setup>
import { transactionViewOptions } from '~/constants'
const supabase = useSupabaseClient()

const selectedView = ref(transactionViewOptions[1])
const transactions = ref([])
const isLoading = ref(false)
const isOpen = ref(false)

const income = computed(
  () => transactions.value.filter(t => t.type === 'Income')
)
const expense = computed(
  () => transactions.value.filter(t => t.type === 'Expense')
)

const incomeCount = computed(() => income.value.length)
const expenseCount = computed(() => expense.value.length)

const incomeTotal = computed(
  () => income.value.reduce((sum, transaction) => sum + transaction.amount, 0)
)
const expenseTotal = computed(
  () => expense.value.reduce((sum, transaction) => sum + transaction.amount, 0)
)

const fetchTransactions = async () => {
  isLoading.value = true
  try {
    const { data } = await useAsyncData('transactions', async () => {
      const { data, error } = await supabase
        .from('transactions')
        .select()

      if (error) return []

      return data
    })

    return data.value
  } finally {
    isLoading.value = false
  }
}

const refreshTransactions = async () => transactions.value = await fetchTransactions()

await refreshTransactions()

const transactionsGroupedByDate = computed(() => {
  let grouped = {}

  for (const transaction of transactions.value) {
    const date = new Date(transaction.created_at).toISOString().split('T')[0]

    if (!grouped[date]) {
      grouped[date] = []
    }

    grouped[date].push(transaction)
  }

  return grouped
})

console.log(transactionsGroupedByDate.value)

</script>
```

![Add Button](nuxt3-ts-financial.034.png)

- We can see the modal to add/modify a transaction.

![Modal](nuxt3-ts-financial.035.png)


### 3.9 Persisting the transaction data to the Supabase service

#### 3.9.1. Adding fake data to the Supabase service

- We are going to add fake data to the Supabase service to test the `add` functionality.
- We are going to use the [Faker](https://fakerjs.dev/) library to generate the fake data.

```bash
juanpabloperez@jpp-PROX15-AMD:~/Work/Projects/EdiEz/Examples/nuxt3-ts-financial$ bun add @faker-js/faker -d
[0.03ms] ".env"
bun add v1.0.23 (83f2432d)

 installed @faker-js/faker@8.4.0

warn: nuxt-app's postinstall script took 2s

 1 package installed [2.97s]
```

#### 3.9.2. Adding the seed script to the package.json file


> package.json

```json
{
  "name": "nuxt-app",
  "private": true,
  "type": "module",
  "scripts": {
    "build": "nuxt build",
    "dev": "nuxt dev",
    "generate": "nuxt generate",
    "preview": "nuxt preview",
    "postinstall": "nuxt prepare",
    "seed": "node seed.mjs"
  },
  "devDependencies": {
    "@faker-js/faker": "^8.4.0",
    "@nuxtjs/supabase": "^1.1.6",
    "nuxt": "^3.10.0",
    "vue": "^3.4.15",
    "vue-router": "^4.2.5"
  },
  "dependencies": {
    "@nuxt/ui": "^2.13.0",
    "zod": "^3.22.4"
  }
}
```

- We can run the `seed` script to add the fake data to the Supabase service.

```bash
juanpabloperez@jpp-PROX15-AMD:~/Work/Projects/EdiEz/Examples/nuxt3-ts-financial$ bun seed
$ node seed.mjs
Data inserted successfully.
```

#### 3.9.3. Persisting the transaction data to the Supabase service

- We are going to use the [date-fns](https://date-fns.org/) library to format the date.

```bash
juanpabloperez@jpp-PROX15-AMD:~/Work/Projects/EdiEz/Examples/nuxt3-ts-financial$ bun add date-fns
[0.06ms] ".env"
bun add v1.0.23 (83f2432d)

 installed date-fns@3.3.1

warn: nuxt-app's postinstall script took 2.6s

 1 package installed [4.18s]
```

> composables/useFetchTransactions.ss

```js
export const useFetchTransactions = (period) => {
  const supabase = useSupabaseClient()
  const transactions = ref([])
  const pending = ref(false)

  const income = computed(() =>
    transactions.value.filter((t) => t.type === 'Income')
  )
  const expense = computed(() =>
    transactions.value.filter((t) => t.type === 'Expense')
  )

  const incomeCount = computed(() => income.value.length)
  const expenseCount = computed(() => expense.value.length)

  const incomeTotal = computed(() =>
    income.value.reduce((sum, transaction) => sum + transaction.amount, 0)
  )
  const expenseTotal = computed(() =>
    expense.value.reduce((sum, transaction) => sum + transaction.amount, 0)
  )

  const fetchTransactions = async () => {
    pending.value = true
    try {
      const { data } = await useAsyncData(
        `transactions-${period.value.from.toDateString()}-${period.value.to.toDateString()}`,
        async () => {
          const { data, error } = await supabase
            .from('transactions')
            .select()
            .gte('created_at', period.value.from.toISOString())
            .lte('created_at', period.value.to.toISOString())
            .order('created_at', { ascending: false })

          if (error) return []

          return data
        }
      )

      return data.value
    } finally {
      pending.value = false
    }
  }

  const refresh = async () => (transactions.value = await fetchTransactions())

  watch(period, async () => await refresh())

  const transactionsGroupedByDate = computed(() => {
    let grouped = {}

    for (const transaction of transactions.value) {
      const date = new Date(transaction.created_at).toISOString().split('T')[0]

      if (!grouped[date]) {
        grouped[date] = []
      }

      grouped[date].push(transaction)
    }

    return grouped
  })

  return {
    transactions: {
      all: transactions,
      grouped: {
        byDate: transactionsGroupedByDate,
      },
      income,
      expense,
      incomeTotal,
      expenseTotal,
      incomeCount,
      expenseCount,
    },
    refresh,
    pending,
  }
}
```

> composables/useSelectedTimePeriod.js

```js
import {
  startOfYear,
  endOfYear,
  sub,
  startOfDay,
  endOfDay,
  startOfMonth,
  endOfMonth,
} from 'date-fns'

export const useSelectedTimePeriod = (period) => {
  const current = computed(() => {
    switch (period.value) {
      case 'Yearly':
        return {
          from: startOfYear(new Date()),
          to: endOfYear(new Date()),
        }
      case 'Monthly':
        return {
          from: startOfMonth(new Date()),
          to: endOfMonth(new Date()),
        }
      case 'Daily':
        return {
          from: startOfDay(new Date()),
          to: endOfDay(new Date()),
        }
    }
  })

  const previous = computed(() => {
    switch (period.value) {
      case 'Yearly':
        return {
          from: startOfYear(sub(new Date(), { years: 1 })),
          to: endOfYear(sub(new Date(), { years: 1 })),
        }
      case 'Monthly':
        return {
          from: startOfMonth(sub(new Date(), { months: 1 })),
          to: endOfMonth(sub(new Date(), { months: 1 })),
        }
      case 'Daily':
        return {
          from: startOfDay(sub(new Date(), { days: 1 })),
          to: endOfDay(sub(new Date(), { days: 1 })),
        }
    }
  })

  return { current, previous }
}
```

> components/transaction-modal.vue

```vue
<template>
  <UModal v-model="isOpen">
    <UCard>
      <template #header>
        Add Transaction
      </template>

      <UForm :state="state" :schema="schema" ref="form" @submit.prevent="save">
        <UFormGroup :required="true" label="Transaction Type" name="type" class="mb-4">
          <USelect placeholder="Select the transaction type" :options="types" v-model="state.type" />
        </UFormGroup>

        <UFormGroup label="Amount" :required="true" name="amount" class="mb-4">
          <UInput type="number" placeholder="Amount" v-model.number="state.amount" />
        </UFormGroup>

        <UFormGroup label="Transaction date" :required="true" name="created_at" class="mb-4">
          <UInput type="date" icon="i-heroicons-calendar-days-20-solid" v-model="state.created_at" />
        </UFormGroup>

        <UFormGroup label="Description" hint="Optional" name="description" class="mb-4">
          <UInput placeholder="Description" v-model="state.description" />
        </UFormGroup>

        <UFormGroup :required="true" label="Category" name="category" class="mb-4" v-if="state.type === 'Expense'">
          <USelect placeholder="Category" :options="categories" v-model="state.category" />
        </UFormGroup>

        <UButton type="submit" color="black" variant="solid" label="Save" :loading="isLoading" />
      </UForm>
    </UCard>
  </UModal>
</template>

<script setup>
import { categories, types } from '~/constants'
import { z } from 'zod'

const props = defineProps({
  modelValue: Boolean
})
const emit = defineEmits(['update:modelValue', 'saved'])

const defaultSchema = z.object({
  created_at: z.string(),
  description: z.string().optional(),
  amount: z.number().positive('Amount needs to be more than 0')
})

const incomeSchema = z.object({
  type: z.literal('Income')
})
const expenseSchema = z.object({
  type: z.literal('Expense'),
  category: z.enum(categories)
})
const investmentSchema = z.object({
  type: z.literal('Investment')
})
const savingSchema = z.object({
  type: z.literal('Saving')
})

const schema = z.intersection(
  z.discriminatedUnion('type', [incomeSchema, expenseSchema, investmentSchema, savingSchema]),
  defaultSchema
)

const form = ref()
const isLoading = ref(false)
const supabase = useSupabaseClient()
const toast = useToast()

const save = async () => {
  if (form.value.errors.length) return

  isLoading.value = true
  try {
    const { error } = await supabase.from('transactions')
      .upsert({ ...state.value })

    if (!error) {
      toast.add({
        'title': 'Transaction saved',
        'icon': 'i-heroicons-check-circle'
      })
      isOpen.value = false
      emit('saved')
      return
    }

    throw error
  } catch (e) {
    toast.add({
      title: 'Transaction not saved',
      description: e.message,
      icon: 'i-heroicons-exclamation-circle',
      color: 'red'
    })
  } finally {
    isLoading.value = false
  }
}

const initialState = {
  type: undefined,
  amount: 0,
  created_at: undefined,
  description: undefined,
  category: undefined
}
const state = ref({
  ...initialState
})
const resetForm = () => {
  Object.assign(state.value, initialState)
  form.value.clear()
}

const isOpen = computed({
  get: () => props.modelValue,
  set: (value) => {
    if (!value) resetForm()
    emit('update:modelValue', value)
  }
})
</script>
```

> components/transaction.vue

```vue
<template>
  <div class="grid grid-cols-3 py-4 border-b border-gray-200 dark:border-gray-800 text-gray-900 dark:text-gray-100">
    <div class="flex items-center justify-between space-x-4 col-span-2">
      <div class="flex items-center space-x-1">
        <UIcon :name="icon" :class="[iconColor]" />
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
          <UButton color="white" variant="ghost" trailing-icon="i-heroicons-ellipsis-horizontal" :loading="isLoading" />
        </UDropdown>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  transaction: Object
})
const emit = defineEmits(['deleted'])
const isIncome = computed(() => props.transaction.type === 'Income')
const icon = computed(
  () => isIncome.value ? 'i-heroicons-arrow-up-right' : 'i-heroicons-arrow-down-left'
)
const iconColor = computed(
  () => isIncome.value ? 'text-green-600' : 'text-red-600'
)

const { currency } = useCurrency(props.transaction.amount)

const isLoading = ref(false)
const toast = useToast()
const supabase = useSupabaseClient()

const deleteTransaction = async () => {
  isLoading.value = true

  try {
    await supabase.from('transactions')
      .delete()
      .eq('id', props.transaction.id)
    toast.add({
      title: 'Transaction deleted',
      icon: 'i-heroicons-check-circle',
    })
    emit('deleted', props.transaction.id)
  } catch (error) {
    toast.add({
      title: 'Transaction deleted',
      icon: 'i-heroicons-exclamation-circle',
    })
  } finally {
    isLoading.value = false
  }
}

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
      click: deleteTransaction
    }
  ]
]
</script>
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
const { amount } = toRefs(props)
const trendingUp = computed(
  () => props.amount >= props.lastAmount
)
const icon = computed(
  () => trendingUp.value ? 'i-heroicons-arrow-trending-up' : 'i-heroicons-arrow-trending-down'
)
const { currency } = useCurrency(amount)

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
    <Trend color="green" title="Income" :amount="incomeTotal" :last-amount="prevIncomeTotal" :loading="pending" />
    <Trend color="red" title="Expense" :amount="expenseTotal" :last-amount="prevExpenseTotal" :loading="pending" />
    <Trend color="green" title="Investments" :amount="4000" :last-amount="3000" :loading="pending" />
    <Trend color="red" title="Saving" :amount="4000" :last-amount="4100" :loading="pending" />
  </section>

  <section class="flex justify-between mb-10">
    <div>
      <h2 class="text-2xl font-extrabold">Transactions</h2>
      <div class="text-gray-500 dark:text-gray-400">
        You have {{ incomeCount }} incomes and {{ expenseCount }} expenses this period
      </div>
    </div>
    <div>
      <TransactionModal v-model="isOpen" @saved="refresh()" />
      <UButton icon="i-heroicons-plus-circle" color="white" variant="solid" label="Add" @click="isOpen = true" />
    </div>
  </section>

  <section v-if="!pending">
    <div v-for="(transactionsOnDay, date) in byDate" :key="date" class="mb-10">
      <DailyTransactionSummary :date="date" :transactions="transactionsOnDay" />
      <Transaction v-for="transaction in transactionsOnDay" :key="transaction.id" :transaction="transaction"
        @deleted="refresh()" />
    </div>
  </section>
  <section v-else>
    <USkeleton class="h-8 w-full mb-2" v-for="i in 4" :key="i" />
  </section>
</template>

<script setup>
import { transactionViewOptions } from '~/constants'

const selectedView = ref(transactionViewOptions[1])
const isOpen = ref(false)
const { current, previous } = useSelectedTimePeriod(selectedView)

const { pending, refresh, transactions: {
  incomeCount,
  expenseCount,
  incomeTotal,
  expenseTotal,
  grouped: {
    byDate
  }
} } = useFetchTransactions(current)
await refresh()

const { refresh: refreshPrevious, transactions: {
  incomeTotal: prevIncomeTotal,
  expenseTotal: prevExpenseTotal,
} } = useFetchTransactions(previous)
// await refreshPrevious()
</script>
```
