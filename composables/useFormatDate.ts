export const useFormatDate = (dateStr: string) => {
	const [year, month, day] = dateStr.split("-");
	const monthIndex = parseInt(month) - 1;
	const formattedDate = `${parseInt(day)} ${useI18n().t(`months.${monthIndex}`)} ${parseInt(year)}`;

	return formattedDate;
};
