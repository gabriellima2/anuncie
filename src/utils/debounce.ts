let timer: NodeJS.Timeout;

export function debounce(callback: () => void, ms: number) {
	clearTimeout(timer);
	timer = setTimeout(callback, ms);
}
