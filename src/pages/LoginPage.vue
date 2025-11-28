<script setup>
import {ref} from 'vue';
import {useRouter} from 'vue-router';
import {login} from "../services/auth.js";

const router = useRouter();

const email = ref('');
const password = ref('');
const rememberMe = ref(false);
const showPassword = ref(false);

const handleLogin = async () => {
  await login(email.value, password.value);
  router.push('/home');
};
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-950 text-white p-4">
    <div class="w-full max-w-md bg-gray-900 rounded-2xl shadow-xl border border-gray-800 p-8">
      <div class="mb-8 text-center">
        <div class="flex justify-center items-center gap-5 mb-4">
          <i class="material-icons !text-[50px] text-orange-500">production_quantity_limits</i>
          <h1 class="text-3xl font-bold text-white mb-2">Ran Out Of</h1>
        </div>
        <p class="text-gray-400">Sign in to your account</p>
      </div>

      <form @submit.prevent="handleLogin" class="space-y-6">
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
            <a href="#" class="text-sm text-indigo-400 hover:text-indigo-300 transition duration-200">Forgot
                  password?</a>
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

            <div class="flex items-center">
              <input
                  id="remember-me"
              type="checkbox"
              v-model="rememberMe"
              class="h-4 w-4 rounded border-gray-700 bg-gray-800 text-indigo-500 focus:ring-indigo-500 focus:ring-offset-gray-900"
          />
          <label for="remember-me" class="ml-2 block text-sm text-gray-300">Remember me</label>
        </div>

        <button
            type="submit"
            class="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 rounded-lg transition duration-200 shadow-lg hover:shadow-orange-500/30"
        >
          Sign In
        </button>
      </form>

      <p class="mt-8 text-center text-sm text-gray-400">
        Don't have an account?
        <a href="/sign-up" class="font-medium text-indigo-400 hover:text-indigo-300 transition duration-200">Sign up</a>
      </p>
    </div>
  </div>
</template>