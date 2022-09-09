<template>
    <div>
        <label v-if="!textarea" class="custom-field">
            <input @keyup="emitData" v-model="inputData" :type="inputType" :class="[borderClass, bgColorClass]">
            <div class="placeholder" :class="{'removePlaceholder': removePlaceholder}">
                <fa v-if="magnifyIcon" icon="fa-solid fa-magnifying-glass"></fa> <span>{{ placeholder }}</span>
            </div>
        </label>
        <textarea :class="[bgColorClass]" :placeholder="placeholder" v-else v-model="inputData" @keyup="emitData"></textarea>
    </div>    
</template>

<script>
export default {
    props: {
        inputType: {
            default: 'text',
            type: String,
            /* Could be 'text', 'email', 'password' or 'number' */
        },
        placeholder: {
            type: String,
            default: 'placeholder'
            /* Also works for textarea */
        },
        magnifyIcon: {
            type: Boolean,
            default: false,
            /* Adds font awesome magnifying glass icon before the placeholder text */
        },
        margin: {
            type: Boolean,
            default: true,
            /* Also works for textarea */
        },
        bgColor: {
            type: String,
            default: 'white',
            /* options are 'white' or 'grey' */
            /* Also works for textarea */
        },
        textarea: {
            type: Boolean,
            default: false,
        }
    },
    data() {
        return {
            inputData: '',
        }
    },
    computed: {
        borderClass() {
            if (this.margin) {
                return 'with-border'
            } else {
                return 'no-border'
            }
        },
        bgColorClass() {
            if (this.bgColor === 'white') {
                return 'bg-white'
            } else if (this.bgColor === 'grey') {
                return 'bg-grey'
            }
        },
        removePlaceholder() {
            if (this.inputData) {
                return true;
            }
        }
    },
    methods: {
        emitData() {
            this.$emit('emit-data', this.inputData)
        }
    }
}
</script>

<style scoped>

*, *::before, *::after {
  box-sizing: border-box;
}
.custom-field {
    font-size: .95rem;
    position: relative;
}

.custom-field input {
    padding: 1.1rem;
    border-radius: 3px;
    width: 100%;
    font-size: 1rem;
    outline: none;
}

.no-border {
    border-style: none;
}

.with-border {
    border: 1px solid grey;
}

.bg-white {
    background: white;
}

.bg-grey {
    background: rgba(128, 128, 128, 0.07);
}


.custom-field .placeholder {
    position: absolute;
    left: .5rem;
    bottom: 50%;
    top: 2px;
    transform: translateY(-50%);
    width: calc(100% - 24px);
    color: rgba(128, 128, 128);
    white-space: nowrap;
    text-overflow: ellipsis;
}

.custom-field input:focus+.placeholder
 {
    display: none;
}
.custom-field input:focus+.placeholder-campground {
    display: none;
}

.placeholder>span {
    margin-left: 0.5rem;
}

.removePlaceholder {
    display: none;
}

textarea {
    resize: none;
    border: none;
    outline: none; /* removes blue glow when in focus */
    overflow: auto; /* IE puts a vertical scrollbar by default on all textareas. Using 'auto' will add it in case they are needed */
    padding: 1.5rem;

    /* Typography */
    font-size: 1rem;
    color: grey;
    line-height: 1.5;

    /* Responsive */
    width: 100%;
    height: 10rem;
    max-width: 500px;
}
</style>

