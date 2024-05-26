import { pages } from '$lib/Pages.svelte';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = (async ({ params }) => {
  const page = pages.get<'setlist'>(params.tab);

  if (!page) {
    error(404, {
      message: `No page with ID ${params.tab} found`
    });
  }

  return {
    id: page.id,
  };
}) satisfies PageLoad;
