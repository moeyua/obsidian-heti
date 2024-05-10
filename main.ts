import { MarkdownView, Plugin } from "obsidian";

export default class ObsidianHeti extends Plugin {
	async onload() {
		// styles in style.css
		this.addLayoutChangeListener();
	}

	onunload() {}

	addLayoutChangeListener() {
		this.registerEvent(
			this.app.workspace.on("active-leaf-change", () => {
				this.applyStyles();
			})
		);
	}

	applyStyles() {
		const markdownView =
			this.app.workspace.getActiveViewOfType(MarkdownView);
		if (!markdownView) return;
		const contentView = markdownView.contentEl;
		contentView.classList.add("heti");
	}
}
