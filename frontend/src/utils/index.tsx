import { format, formatDistance, subDays } from 'date-fns';

export const strapiDate = (date: string, distance = false) => {
	if (distance) {
		return formatDistance(subDays(new Date(), 0), new Date(date));
	} else {
		return format(new Date(date), 'd LLLL, yyyy');
	}
};
