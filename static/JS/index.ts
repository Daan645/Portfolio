import { onMount } from "svelte";

  onMount(() => {
    const htmlTags: NodeListOf<HTMLElement> = document.querySelectorAll(".html-tags");
    const htmlTagsButton: HTMLElement | null = document.getElementById("html-tags-button");

    if (!htmlTagsButton) return;

    htmlTagsButton.addEventListener("click", () => {
      htmlTags.forEach((tag) => tag.classList.add("html-tags-rain"));
    });
  });