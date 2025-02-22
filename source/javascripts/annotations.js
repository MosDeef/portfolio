import { annotate, annotationGroup } from "https://unpkg.com/rough-notation?module";

export function applyAnnotations() {
  const title = document.querySelector(".title");
  const shake = document.querySelector(".shake");
  const yours = document.querySelector(".yours");

  if (title && shake && yours) {
    const a1 = annotate(title, { type: "highlight", color: "orange" });
    const a2 = annotate(shake, { type: "highlight", color: "yellow", padding: 7 });
    const a3 = annotate(yours, { type: "underline", color: "teal", padding: 7 });

    const ag = annotationGroup([a1, a2, a3]);
    ag.show();
  }
}
