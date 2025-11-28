<script setup>
import {ref} from 'vue';
import {useRouter} from 'vue-router';
import ListItem from "../components/ListItem.vue";

const router = useRouter();

const newItem = ref('');
const items = ref([]);

const addItem = () => {
  if (newItem.value.trim() !== '') {
    items.value.push({
      id: Date.now(),
      name: newItem.value,
      bought: false
    });
    newItem.value = '';
  }
};

const toggleBought = (item) => {
  item.bought = !item.bought;
};

const handleLogOut = () => {
  router.push('/login');
}
</script>

<template>
  <div class="min-h-screen bg-gray-950 text-white p-8">
    <!-- Header -->
    <header class="mb-8 flex justify-center items-center gap-4">
      <i class="material-icons !text-[40px] text-orange-500">production_quantity_limits</i>
      <h1 class="text-3xl font-bold text-white">We ran out of...</h1>


      <button class="absolute top-5 right-5 cursor-pointer" @click="handleLogOut">
        <i class="material-icons !text-[40px] text-orange-500">logout</i>
      </button>
    </header>

    <div class="max-w-md mx-auto bg-gray-900 rounded-2xl shadow-xl border border-gray-800 p-6">
      <!-- Add Item Section -->
      <div class="flex gap-2 mb-6">
        <input
            v-model="newItem"
            @keyup.enter="addItem"
            type="text"
            placeholder="What ran out?"
            class="flex-1 border border-gray-700 bg-gray-800 text-white placeholder-gray-500 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200"
        />
        <button
            @click="addItem"
            class="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-lg transition duration-200 shadow-lg hover:shadow-orange-500/30 font-semibold"
        >
          Add
        </button>
      </div>

      <!-- List of Items -->
      <div class="space-y-3">
        <h2 class="text-xl font-semibold text-gray-300 mb-4">Shopping List</h2>

        <div v-if="items.length === 0" class="text-gray-500 text-center py-4">
          List is empty!
        </div>

        <ListItem
            v-for="item in items"
            :key="item.id"
            :name="item.name"
            :bought="item.bought"
            @click="toggleBought(item)"
        />
      </div>
    </div>
  </div>
</template>