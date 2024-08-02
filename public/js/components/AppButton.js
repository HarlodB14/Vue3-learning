export default {
    template: `
        <button class="bg-gray-500 text-white py-2 px-4 rounded disabled:cursor-not-allowed" disabled="processing">
            <slot/>
        </button>
    `,

    props: {
        type: {
            type: String,
            default: 'primary'
        }
    },

    data() {
        return {
            Processing: true
        }
    }
}

