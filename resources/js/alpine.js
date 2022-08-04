import Alpine from "alpinejs";
import mask from "@alpinejs/mask";

Alpine.magic("clipboard", () => {
    return (subject) => navigator.clipboard.writeText(subject);
});

Alpine.plugin(mask);

window.Alpine = Alpine;
Alpine.start();
