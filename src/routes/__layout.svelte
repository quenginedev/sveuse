<script>
    import "../app.css";
    import {useNavigation} from "../utils/hooks/useNavigation";
    import {page} from '$app/stores'
    import {fade} from "svelte/transition";

    const {
        currentPath,
        hooks,
        navigateTo
    } = useNavigation()
</script>

<div class="drawer drawer-mobile" data-theme="coffee">
    <input id="my-drawer-2" type="checkbox" class="drawer-toggle"/>
    <div class="drawer-content flex flex-col">
        <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Menu</label>
        <div class="flex justify-center">
            {#key $page.url.pathname}
                <div in:fade={{delay: 200}} class="w-full max-w-screen-lg">
                    <slot/>
                </div>
            {/key}
        </div>
    </div>
    <div class="drawer-side ">
        <label for="my-drawer-2" class="drawer-overlay"></label>
        <div class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content gap-5 bg-base-300 rounded-r-2xl">
            <a href="/" class="font-bold text-3xl">Sveuse</a>
            <div class="input w-full max-w-xs flex flex-row items-center">
                <input type="text" placeholder="Search"
                       class="flex-grow bg-transparent focus:outline-none"/>
                <button class="btn btn-sm">X</button>
            </div>
            <div class="flex flex-col gap-3">
                {#each hooks as {path, name}}
                    <button
                            class="btn w-full capitalize btn-primary"
                            class:btn-primary={$currentPath === path}
                            on:click={navigateTo(path)}>{name}</button>
                {/each}
            </div>
        </div>
    </div>
</div>