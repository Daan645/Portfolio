export function activateHtmlTags(button: HTMLElement, tags: HTMLElement[]) {
	button.addEventListener('click', () => {
		tags.forEach((tag) => tag.classList.add('html-tags-rain'));
	});
}
