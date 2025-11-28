<script setup>
import {ref} from 'vue';
import { register } from "@/services/auth";

const name = ref('');
const email = ref('');
const password = ref('');
const showPassword = ref(false);

const handleSignUp = async () => {
  try {
    await register(email.value, password.value, name.value);
    // popup de sucesso
  } catch (err) {
    alert(err.message);
  }
};
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-950 text-white p-4">
    <div class="w-full max-w-md bg-gray-900 rounded-2xl shadow-xl border border-gray-800 p-8">
      <div class="mb-8 text-center">
        <h1 class="text-3xl font-bold text-white mb-2">Create Account</h1>
      </div>

      <form @submit.prevent="handleSignUp" class="space-y-6">
<!--        <div>
          <label for="name" class="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
          <input
              type="text"
              id="name"
              v-model="name"
              class="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200"
              placeholder="John Doe"
              required
          />
        </div>-->

        <div>
          <label for="email" class="block text-sm font-medium text-gray-300 mb-2">Email</label>
          <input
              type="email"
              id="email"
              v-model="email"
              class="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200"
              placeholder="you@example.com"
              required
          />
        </div>

        <div>
          <div class="flex items-center justify-between mb-2">
            <label for="password" class="block text-sm font-medium text-gray-300">Password</label>
          </div>
          <div class="relative">
            <input
                :type="showPassword ? 'text' : 'password'"
                id="password"
                v-model="password"
                class="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200 pr-10"
                placeholder="••••••••"
                required
            />
            <button
                type="button"
                @click="showPassword = !showPassword"
                class="absolute inset-y-0 right-0 flex items-center px-3 text-gray-400 hover:text-white focus:outline-none"
            >
              <i class="material-icons text-xl">{{ showPassword ? 'visibility' : 'visibility_off' }}</i>
            </button>
          </div>
        </div>

        <button
            type="submit"
            class="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 rounded-lg transition duration-200 shadow-lg hover:shadow-orange-500/30"
        >
          Create Account
        </button>
      </form>

      <p class="mt-8 text-center text-sm text-gray-400">
        Already have an account?
        <a href="/login" class="font-medium text-indigo-400 hover:text-indigo-300 transition duration-200">Sign In</a>
      </p>
    </div>
  </div>
</template>