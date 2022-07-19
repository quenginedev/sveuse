<script>
	import "../app.css";
	import useNavigation from "../hooks/use-navigation";
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';

	const { searchedPaths, searchQuery, clearSearchQuery } = useNavigation()
</script>

<div class="drawer drawer-mobile" data-theme="coffee">
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle"/>
  <div class="drawer-content flex flex-col">
    <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Menu</label>
    <div class="flex justify-center">
      <div class="w-full max-w-screen-lg">
        <slot/>
      </div>
    </div>
  </div>
  <div class="drawer-side ">
    <label for="my-drawer-2" class="drawer-overlay"></label>
    <div class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content gap-5 bg-base-300 rounded-r-2xl">
      <h1 class="font-bold text-3xl">SvelteUse</h1>
      <div class="input w-full max-w-xs flex flex-row items-center">
        <input bind:value={$searchQuery} type="text" placeholder="Search"
               class="flex-grow bg-transparent focus:outline-none"/>
        <button on:click={clearSearchQuery} class="btn btn-sm">X</button>
      </div>
      <div class="">
        <h2 class="font-bold">Actions</h2>
        <ul>
          {#each $searchedPaths.filter(path => path.type === 'action') as { route, name }}
            <li class="font-semibold"><a href={route}>{name}</a></li>
          {/each}
        </ul>
      </div>
      <div class="flex flex-col gap-3">
        <h2 class="font-bold">Hooks</h2>
        {#each $searchedPaths.filter(path => path.type === 'hook') as { route, name }}
          <button
              class="btn w-full capitalize btn-primary"
              class:btn-primary={$page.url.pathname === route}
              on:click={() => goto(route)}>{name}</button>
        {/each}
      </div>
    </div>

  </div>
</div>