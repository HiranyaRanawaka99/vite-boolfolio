import { reactive } from "vue";

export const store = reactive(
    {
        api:
        {
            baseUrl: 'http://localhost:8000/api/'
        }
    }
)