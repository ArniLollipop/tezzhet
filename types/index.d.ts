export declare global {
	interface IBanner {
		id: number;
		title: string;
		image: string;
		link_id: number;
		is_shop: boolean;
	}

	interface Pagination<Some> {
		count: number;
		next: string | null;
		previous: string | null;
		results: Some[] | [];
	}

	interface IWeather {
		is_weather: boolean;
		icon: string;
	}

	interface ICategory {
		id: number;
		category_image: string | null;
		category_name: string | null;
		slug: string | null;
	}

	interface IRestaurant {
		address: string;
		background: string;
		cost: number;
		description: string;
		discount: {
			date_end: string;
			image: string;
			percent: number;
			rest_or_shop_name: string;
			title: string;
		};
		enabled: boolean;
		id: number;
		image: string;
		is_working: boolean;
		latitude: number;
		longitude: number;
		name: string;
		rating: number;
		time_from: string;
		time_to: string;
		user: number;
		category: Pick<ICategory, "category_name">[];
	}

	interface INews {
		date_published: string;
		description: string;
		description_kaz: string;
		id: number;
		image: string;
		title: string;
		title_kaz: string;
	}
}
