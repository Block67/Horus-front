<template>
    <form>
      <div class="space-y-6">
        <div>
          <label for="votre_pays" class="block text-sm font-medium leading-5 text-gray-900">Votre Pays</label>
          <input id="votre_pays" name="votre_pays" type="text" class="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
  
        <div>
          <label for="adresse_crypto" class="block text-sm font-medium leading-5 text-gray-900">Adresse Crypto</label>
          <input id="adresse_crypto" name="adresse_crypto" type="text" class="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
  
        <div>
          <label for="montant" class="block text-sm font-medium leading-5 text-gray-900">Montant</label>
          <input id="montant" name="montant" type="number" class="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
  
        <div>
          <label for="date" class="block text-sm font-medium leading-5 text-gray-900">Date</label>
          <input id="date" name="date" type="date" class="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
  
        <div>
          <label for="hash_transaction" class="block text-sm font-medium leading-5 text-gray-900">Hash Transaction</label>
          <input id="hash_transaction" name="hash_transaction" type="text" class="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
  
        <div>
          <label for="photo" class="block text-sm font-medium leading-5 text-gray-900">Photo</label>
          <input id="photo" name="photo" type="file" class="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
  
        <div>
          <label for="description" class="block text-sm font-medium leading-5 text-gray-900">Description</label>
          <textarea id="description" name="description" rows="3" class="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></textarea>
        </div>
  
        <div class="flex justify-end">
          <button type="submit" class="inline-flex items-center px-4 py-2 bg-indigo-600 border border-transparent rounded-md font-semibold text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 hover:bg-indigo-500 active:bg-indigo-700">
            Save
          </button>
        </div>
      </div>
    </form>
  </template>
  