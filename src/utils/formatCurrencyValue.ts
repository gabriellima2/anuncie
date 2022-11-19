export function formatCurrencyValue(value: string) {
	return Number(value.replace(/,/g, "."));
}
