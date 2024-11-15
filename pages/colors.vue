<template>
    <input 
        type="text" 
        v-model="searchQuery" 
        placeholder="Search by hex code"
        class="w-full max-w-md px-4 py-2 border dark:border-gray-900 border-gray-100 shadow-gray-100 dark:shadow-gray-800 shadow-lg bg-white dark:bg-black/30 rounded-full focus:outline-none placeholder:text-gray-300 my-6" 
    />

    <div class="py-3 text-lg inter ">If you see any missing color, you can add and mention on your PRs but dont change existing colors before checking all the components using it.</div>

    <div v-if="Object.keys(filteredColors).length === 0" class=" text-7xl text-gray-200 py-8">
        No colors found matching your search.
    </div>

    <div v-else class="w-full flex flex-wrap">
        <div class="w-full my-6">
            <div class="flex flex-wrap gap-6">
                <div v-for="(color, name) in filteredColors[currentMode]" :key="name">
                    <div 
                        :style="{ backgroundColor: color }"
                        class="flex p-2 justify-end border items-end w-20 h-20 border-gray-100 dark:border-opacity-10"
                    >
                    </div>
                    <div class="w-20 my-3 inter tracking-tight">{{ name }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import colors from '../data/colors.json' with { type: 'json' };
import { ref, computed } from 'vue';

interface ColorSet {
    [key: string]: string;
}

interface Colors {
    [key: string]: ColorSet;
}

const colorMode = useColorMode();
const searchQuery = ref('');

const currentMode = computed(() => colorMode.value === 'dark' ? 'dark' : 'light');

const filteredColors = computed(() => {
    const result: Colors = {};
    const currentTheme = colors[currentMode.value];
    
    if (!searchQuery.value) {
        result[currentMode.value] = currentTheme;
        return result;
    }

    const filteredSet: ColorSet = {};
    for (const [name, color] of Object.entries(currentTheme)) {
        if (color.toLowerCase().includes(searchQuery.value.toLowerCase())) {
            filteredSet[name] = color;
        }
    }
    
    if (Object.keys(filteredSet).length > 0) {
        result[currentMode.value] = filteredSet;
    }
    
    return result;
});
</script>