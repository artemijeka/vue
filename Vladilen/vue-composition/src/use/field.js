import {ref} from 'vue'

export function useField(field) {
  const valid = ref(true)
  const value = ref(field.value)
  
  return {value, valid}
}