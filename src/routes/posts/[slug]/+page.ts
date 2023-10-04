import { error } from '@sveltejs/kit';

export const prerender = true;

export async function load({ params }: any) {
	try {
		const post = await import(`../../../posts/${params.slug}.md`);
		return {
			meta: post.metadata,
			slug: params.slug,
			content: post.default
		};
	} catch (e) {
		throw error(404, 'cound not find');
	}
}
