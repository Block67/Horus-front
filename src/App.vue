<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <Header />

  <section class="bg-white dark:bg-gray-900">
    <div class="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
      <div class="mr-auto place-self-center lg:col-span-7">
        <h1
          class="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
          Sécurité et transparence grâce à HORUS</h1>
        <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Nous
          croyons en un écosystème crypto sûr, accessible et digne de confiance pour tous les utilisateurs en
          aidant la communauté à se protéger en signalant les adresses cryptographiques et les numéros de
          téléphone suspects.</p>
      </div>
      <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
        <img src="../src/assets/images/fraudalert.png" alt="hero image">
      </div>
    </div>
  </section>
  <div class="container mx-auto px-4 sm:px-4">
    <div class="py-8">
      <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4">
        <div class="inline-block w-full shadow-md rounded-lg overflow-x-auto">
          <div class="overflow-x-auto">
            <table class="w-full leading-normal">
              <thead>
                <tr>
                  <th
                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-middle text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Adresse cryptographiques
                  </th>
                  <th
                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-middle text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Numéro de téléphone
                  </th>
                  <th
                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-middle text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Plateforme d'investissement
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm text-center">
                   
                  </td>
                  <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm text-center">
                    
                  </td>
                  <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm text-center">
                    
                  </td>
                </tr>
                <tr>
                  <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm text-center">
                    
                  </td>
                  <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm text-center">
                    
                  </td>
                  <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm text-center">
                    
                  </td>
                </tr>
                <tr>
                  <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm text-center">
                   
                  </td>
                  <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm text-center">
                    
                  </td>
                  <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm text-center">
                    
                  </td>
                </tr>
                <tr>
                  <td class="px-5 py-5 bg-white text-sm text-center">
                    
                  </td>
                  <td class="px-5 py-5 bg-white text-sm text-center">
                    
                  </td>
                  <td class="px-5 py-5 bg-white text-sm text-center">
                   
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
  <section class="bg-gray-50 dark:bg-gray-800">
    <div class="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
      <!-- Row -->
      <div class="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
        <div class="text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 class="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">Investissez sans risque de victimisation</h2>
          <p class="mb-8 font-light lg:text-xl">Contribuez à la lutte contre les fraudes en partageant vos
            signalements et en aidant la communauté..</p>
          <!-- List -->
          <ul role="list" class="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700">
            <li class="flex space-x-3">
              <!-- Icon -->
              <svg class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="#f9be00" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"></path>
              </svg>
              <span class="text-base font-medium leading-tight text-gray-900 dark:text-white">Prenez des
                décisions éclairées grâce à nos vérifications minutieuses d'adresses, de numéros de
                téléphone et les jetons cryptographiques.</span>
            </li>
            <li class="flex space-x-3">
              <!-- Icon -->
              <svg class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="#f9be00" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"></path>
              </svg>
              <span class="text-base font-medium leading-tight text-gray-900 dark:text-white">Obtenez des
                informations fiables sur une adresse crypto, un jeton ou un numéro de téléphone en quelques
                clics.</span>
            </li>
            <li class="flex space-x-3">
              <!-- Icon -->
              <svg class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="#f9be00" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"></path>
              </svg>
              <span class="text-base font-medium leading-tight text-gray-900 dark:text-white">Assurez-vous
                que chaque transaction est sécurisée en vérifiant la fiabilité des adresses et numéros
                de téléphone.</span>
            </li>
          </ul>
        </div>
        <img class="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex" src="../src/assets/images/Analyze-cuate.svg"
          alt="dashboard feature image">
      </div>
      <!-- Row -->
      <div class="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
        <img class="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex" src="../src/assets/images/scamalert.png"
          alt="feature image 2">
        <div class="text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 class="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">We invest in
            the world’s potential</h2>
          <p class="mb-8 font-light lg:text-xl">Nous comprenons les défis auxquels vous pourriez être confrontés. C'est
            pourquoi nous mettons à votre disposition des outils de vérification et des mécanismes de signalement pour
            vous protéger contre les tentatives de scams.</p>
          <!-- List -->
          <ul role="list" class="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700">
            <li class="flex space-x-3">
              <!-- Icon -->
              <svg class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="#f9be00" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"></path>
              </svg>
              <span class="text-base font-medium leading-tight text-gray-900 dark:text-white">Plateforme d'Investissement
              </span>
            </li>
            <li class="flex space-x-3">
              <!-- Icon -->
              <svg class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="#f9be00" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"></path>
              </svg>
              <span class="text-base font-medium leading-tight text-gray-900 dark:text-white">Rugpulls</span>
            </li>
            <li class="flex space-x-3">
              <!-- Icon -->
              <svg class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="#f9be00" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"></path>
              </svg>
              <span class="text-base font-medium leading-tight text-gray-900 dark:text-white">Ponzi DeFi</span>
            </li>
            <li class="flex space-x-3">
              <!-- Icon -->
              <svg class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="#f9be00" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"></path>
              </svg>
              <span class="text-base font-medium leading-tight text-gray-900 dark:text-white">Phishing</span>
            </li>
            <li class="flex space-x-3">
              <!-- Icon -->
              <svg class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="#f9be00" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"></path>
              </svg>
              <span class="text-base font-medium leading-tight text-gray-900 dark:text-white">Honeypots</span>
            </li>
          </ul>
          <p class="font-light lg:text-xl">Deliver great service experiences fast - without the complexity of
            traditional ITSM solutions.</p>
        </div>
      </div>
    </div>
  </section>
  <section class="bg-white dark:bg-gray-900">
    <div
      class="items-center max-w-screen-xl px-4 py-8 mx-auto lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:py-24 lg:px-6">
      <div class="col-span-2 mb-8">
        <h2 class="mt-3 mb-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-3xl dark:text-white">
          Statistiques</h2>
        <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">Nous sommes fiers de fournir à notre communauté
          des informations précises sur les statistiques des arnaques enregistrées sur notre plateforme, afin de renforcer
          la sensibilisation et de promouvoir un écosystème crypto plus sûr pour tous les utilisateurs.</p>
      </div>
      <div class="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
        <div>
          <svg class="w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 dark:text-purple-500" fill="#f9be00"
            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
              d="M2 5a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm14 1a1 1 0 11-2 0 1 1 0 012 0zM2 13a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2zm14 1a1 1 0 11-2 0 1 1 0 012 0z"
              clip-rule="evenodd"></path>
          </svg>

          <h3 class="mb-2 text-2xl font-bold dark:text-white">99.99% uptime</h3>
          <p class="font-light text-gray-500 dark:text-gray-400">For Landwind, with zero maintenance downtime
          </p>
        </div>
        <div>
          <svg class="w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 dark:text-purple-500" fill="#f9be00"
            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z">
            </path>
          </svg>

          <h3 class="mb-2 text-2xl font-bold dark:text-white">600M+ Users</h3>
          <p class="font-light text-gray-500 dark:text-gray-400">Trusted by over 600 milion users around the
            world</p>
        </div>
        <div>
          <svg class="w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 dark:text-purple-500" fill="#f9be00"
            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z"
              clip-rule="evenodd"></path>
          </svg>
          <h3 class="mb-2 text-2xl font-bold dark:text-white">100+ countries</h3>
          <p class="font-light text-gray-500 dark:text-gray-400">Have used Landwind to create functional
            websites</p>
        </div>
        <div>
          <svg class="w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 dark:text-purple-500" fill="#f9be00"
            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z">
            </path>
          </svg>
          <h3 class="mb-2 text-2xl font-bold dark:text-white">5+ Million</h3>
          <p class="font-light text-gray-500 dark:text-gray-400">Transactions per day</p>
        </div>
      </div>
    </div>
  </section>

  <section class="bg-white dark:bg-gray-900">
    <div class="max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6">
      <div class="max-w-screen-md mx-auto mb-8 text-center lg:mb-12">
        <h2 class="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">Sécurité et
          Transparence</h2>
        <p class="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400"> Utilisez notre API pour
          surveiller les arnaques potentielles et assurer la sécurité de vos transactions.</p>
      </div>
      <div class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
        <!-- Pricing Card -->
        <div
          class="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
          <h3 class="mb-4 text-2xl font-semibold">Gratuit</h3>
          <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">Gratuit pour tous les utilisateurs.</p>
          <div class="flex items-baseline justify-center my-8">
            <span class="mr-2 text-5xl font-extrabold">0$</span>
            <span class="text-gray-500 dark:text-gray-400">/Mois</span>
          </div>
          <!-- List -->
          <ul role="list" class="mb-8 space-y-4 text-left">
            <li class="flex items-center space-x-3">
              <!-- Icon -->
              <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor"
                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"></path>
              </svg>
              <span>Vérification d'Adresses Crypto</span>
            </li>
            <li class="flex items-center space-x-3">
              <!-- Icon -->
              <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor"
                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"></path>
              </svg>
              <span>Vérification de Numéros de Téléphone</span>
            </li>
            <li class="flex items-center space-x-3">
              <!-- Icon -->
              <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor"
                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"></path>
              </svg>
              <span>Statistiques Basiques</span>
            </li>
            <li class="flex items-center space-x-3">
              <!-- Icon -->
              <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor"
                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"></path>
              </svg>
              <span>Signalement d'arnaque</span>
            </li>
            <li class="flex items-center space-x-3">
              <!-- Icon -->
              <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor"
                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"></path>
              </svg>
              <span>Free updates: <span class="font-semibold">6 Mois</span></span>
            </li>
          </ul>
          <a href="#"
            class="text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-purple-900"
            style="background-color: #f9be00;">Commencer</a>

        </div>
        <!-- Pricing Card -->
        <div
          class="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
          <h3 class="mb-4 text-2xl font-semibold">Standard</h3>
          <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">Service de paiements et groupe communautaire</p>
          <div class="flex items-baseline justify-center my-8">
            <span class="mr-2 text-5xl font-extrabold">28.99$</span>
            <span class="text-gray-500 dark:text-gray-400" dark:text-gray-400>/Mois</span>
          </div>
          <!-- List -->
          <ul role="list" class="mb-8 space-y-4 text-left">
            <li class="flex items-center space-x-3">
              <!-- Icon -->
              <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor"
                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"></path>
              </svg>
              <span>Toutes les fonctionnalités du Plan Gratuit</span>
            </li>
            <li class="flex items-center space-x-3">
              <!-- Icon -->
              <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor"
                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"></path>
              </svg>
              <span>Statistiques Avancées</span>
            </li>
            <li class="flex items-center space-x-3">
              <!-- Icon -->
              <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor"
                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"></path>
              </svg>
              <span>Alertes Personnalisées</span>
            </li>
            <li class="flex items-center space-x-3">
              <!-- Icon -->
              <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor"
                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"></path>
              </svg>
              <span>Historique de Signalement: <span class="font-semibold">50/jours</span></span>
            </li>
            <li class="flex items-center space-x-3">
              <!-- Icon -->
              <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor"
                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"></path>
              </svg>
              <span>Support Prioritaire: <span class="font-semibold">01/Mois</span></span>
            </li>
          </ul>
          <a href="#"
            class="text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-purple-900"
            style="background-color: #f9be00;">Commencer</a>

        </div>
        <!-- Pricing Card -->
        <div
          class="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
          <h3 class="mb-4 text-2xl font-semibold">Plan Premium </h3>
          <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">Entreprises FinTech et organisations de cybersécurité </p>
          <div class="flex items-baseline justify-center my-8">
            <span class="mr-2 text-5xl font-extrabold">58.99$</span>
            <span class="text-gray-500 dark:text-gray-400">/Mois</span>
          </div>
          <!-- List -->
          <ul role="list" class="mb-8 space-y-4 text-left">
            <li class="flex items-center space-x-3">
              <!-- Icon -->
              <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor"
                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"></path>
              </svg>
              <span>Toutes les fonctionnalités du Plan Standard</span>
            </li>
            <li class="flex items-center space-x-3">
              <!-- Icon -->
              <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor"
                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"></path>
              </svg>
              <span>Accès Illimité aux Statistiques</span>
            </li>
            <li class="flex items-center space-x-3">
              <!-- Icon -->
              <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor"
                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"></path>
              </svg>
              <span>Alertes Avancées </span>
            </li>
            <li class="flex items-center space-x-3">
              <!-- Icon -->
              <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor"
                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"></path>
              </svg>
              <span>Rapports de Surveillance</span>
            </li>
            <li class="flex items-center space-x-3">
              <!-- Icon -->
              <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor"
                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"></path>
              </svg>
              <span>Assistance Téléphonique</span>
            </li>
            <li class="flex items-center space-x-3">
              <!-- Icon -->
              <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor"
                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"></path>
              </svg>
              <span>Formation VIP</span>
            </li>
          </ul>
          <a href="#"
            class="text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-purple-900"
            style="background-color: #f9be00;">Commencer</a>

        </div>
      </div>
    </div>
  </section>
  <section class="bg-white dark:bg-gray-900">
    <div class="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-24 lg:px-6 ">
      <h2
        class="mb-6 text-3xl font-extrabold tracking-tight text-center text-gray-900 lg:mb-8 lg:text-3xl dark:text-white">
        FAQ</h2>
      <div class="max-w-screen-md mx-auto">
        <div id="accordion-flush" data-accordion="collapse"
          data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
          data-inactive-classes="text-gray-500 dark:text-gray-400">
          <h3 id="accordion-flush-heading-1">
            <button type="button"
              class="flex items-center justify-between w-full py-5 font-medium text-left text-gray-900 bg-white border-b border-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
              data-accordion-target="#accordion-flush-body-1" aria-expanded="true" aria-controls="accordion-flush-body-1">
              <span>Qu'est-ce que HORUS ?</span>
              <svg data-accordion-icon="" class="w-6 h-6 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"></path>
              </svg>
            </button>
          </h3>
          <div id="accordion-flush-body-1" class="" aria-labelledby="accordion-flush-heading-1">
            <div class="py-5 border-b border-gray-200 dark:border-gray-700">
              <p class="mb-2 text-gray-500 dark:text-gray-400">HORUS est une plateforme dédiée à la lutte
                contre les arnaques dans l'écosystème des cryptomonnaies en Afrique francophone. Elle
                permet aux utilisateurs de signaler les activités suspectes, de vérifier la fiabilité
                des adresses crypto et des numéros de téléphone, et de contribuer à un écosystème plus
                sûr.</p>
            </div>
          </div>
          <h3 id="accordion-flush-heading-2">
            <button type="button"
              class="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
              data-accordion-target="#accordion-flush-body-2" aria-expanded="false"
              aria-controls="accordion-flush-body-2">
              <span>HORUS peut être utilisé dans le cadre d’un programme AML ?</span>
              <svg data-accordion-icon="" class="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"></path>
              </svg>
            </button>
          </h3>
          <div id="accordion-flush-body-2" class="hidden" aria-labelledby="accordion-flush-heading-2">
            <div class="py-5 border-b border-gray-200 dark:border-gray-700">
              <p class="mb-2 text-gray-500 dark:text-gray-400">
                Oui. HORUS fournit des outils d’évaluation des risques en temps réel, des
                capacités de surveillance et de filtrage des transactions pour répondre aux exigences
                réglementaires et peut être calibré conformément aux politiques et procédures de risque
                de votre entreprise ou lié à votre investissement.</p>
            </div>
          </div>
          <h3 id="accordion-flush-heading-3">
            <button type="button"
              class="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
              data-accordion-target="#accordion-flush-body-3" aria-expanded="false"
              aria-controls="accordion-flush-body-3">
              <span>HORUS peut vérifier la fiabilité d'une adresse crypto ou d'un numéro de téléphone
                ?</span>
              <svg data-accordion-icon="" class="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"></path>
              </svg>
            </button>
          </h3>
          <div id="accordion-flush-body-3" class="hidden" aria-labelledby="accordion-flush-heading-3">
            <div class="py-5 border-b border-gray-200 dark:border-gray-700">
              <p class="mb-2 text-gray-500 dark:text-gray-400">Absolument, HORUS offre une fonction de
                vérification qui vous permet de vérifier la fiabilité d'une adresse crypto ou d'un
                numéro de téléphone avant de réaliser une transaction.</p>
            </div>
          </div>
          <h3 id="accordion-flush-heading-4">
            <button type="button"
              class="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
              data-accordion-target="#accordion-flush-body-4" aria-expanded="false"
              aria-controls="accordion-flush-body-4">
              <span>Comment puis-je signaler une arnaque sur HORUS ?</span>
              <svg data-accordion-icon="" class="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"></path>
              </svg>
            </button>
          </h3>
          <div id="accordion-flush-body-4" class="hidden" aria-labelledby="accordion-flush-heading-4">
            <div class="py-5 border-b border-gray-200 dark:border-gray-700">
              <p class="mb-2 text-gray-500 dark:text-gray-400">Pour signaler une arnaque sur HORUS,
                utilisez notre formulaire de signalement en fournissant les détails pertinents. Vos
                signalements aident à prévenir d'autres utilisateurs des activités frauduleuses.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="bg-gray-50 dark:bg-gray-800">
    <div class="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
      <div class="max-w-screen-sm mx-auto text-center">
        <h2 class="mb-4 text-3xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">
          Start your free trial today</h2>
        <p class="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">Rejoignez-nous dans notre mission de
          prévention des arnaques. Ensemble, nous pouvons créer une communauté crypto résiliente et éclairée en Afrique
          francophone</p>
        <a href="#"
          class="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800" style="background-color: #f9be00;">Signaler</a>
      </div>
    </div>
  </section>
  <Footer />
</template>

<style scoped></style>
