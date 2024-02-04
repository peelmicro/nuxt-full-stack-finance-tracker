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
