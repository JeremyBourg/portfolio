import {posts} from './data.js';

export function load() {
	return {
		summaries: posts.map((post) => ({
			slug: post.slug,
			title: post.title,
			thumbnail: post.thumbnail,
			skills: post.skills,
			subject: post.subject,
			summary: post.summary,
			sections: post.sections
		}))
	}
}
