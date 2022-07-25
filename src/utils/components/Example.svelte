<script>
    import {fade} from 'svelte/transition'

    export let title
    const PAGE = {
        EXAMPLE: 'example',
        HOOK: 'hook',
        COMPONENT: 'component',
        ACTION: 'action',
    }
    const pages = Object.values(PAGE)
    export let currentPage = PAGE.EXAMPLE
    const handleClickPageButton = (page) => () => {
        currentPage = page
    }
</script>

<div class="flex flex-col gap-5 mt-12">
    <h1 class="text-2xl">{title}</h1>
    <div class="flex flex-wrap gap-5">
        {#each pages as page}
            <button
                    class="btn capitalize"
                    class:btn-primary={currentPage===page}
                    on:click={handleClickPageButton(page)}
            >
                {page}
            </button>
        {/each}
    </div>
    {#key currentPage}
        <div in:fade class="bg-base-300 p-5 rounded-lg overflow-scroll">
            {#if currentPage === PAGE.EXAMPLE}
                <slot></slot>
            {:else if currentPage === PAGE.HOOK}
                <slot name="hook">
                    <p>Hook not available</p>
                </slot>
            {:else if currentPage === PAGE.COMPONENT}
                <slot name="component">
                    <p>Component not available</p>
                </slot>
            {:else if currentPage === PAGE.ACTION}
                <slot name="action">
                    <p>Action not available</p>
                </slot>
            {/if}
        </div>
    {/key}
</div>