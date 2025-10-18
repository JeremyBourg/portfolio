import { fail } from "@sveltejs/kit";

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();

		const name = data.get('name');
		const email = data.get('email');
		const message = data.get('message');

		if (!name || !email || !message ) {
			return fail(400, { name, email, message, missing: true });
		}

		return { success: true };
	},
};
