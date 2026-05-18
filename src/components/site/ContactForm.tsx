import { useState, type FormEvent } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    setStatus("submitting");
    setError(null);

    try {
      const response = await fetch("https://formspree.io/f/maqkylpb", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        const payload = await response.json().catch(() => null);
        setStatus("error");
        setError(
          payload?.errors?.[0]?.message ??
            "Something went wrong. Please try again.",
        );
      }
    } catch {
      setStatus("error");
      setError("Network error. Please try again.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-xl space-y-6" noValidate>
      <div className="space-y-2">
        <label
          htmlFor="contact-name"
          className="block text-[11px] uppercase tracking-[0.24em] text-muted-foreground"
        >
          Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          maxLength={100}
          className="w-full border-0 border-b border-foreground/30 bg-transparent px-0 py-2 text-base text-foreground placeholder:text-muted-foreground/60 focus:border-foreground focus:outline-none focus:ring-0"
        />
      </div>
      <div className="space-y-2">
        <label
          htmlFor="contact-email"
          className="block text-[11px] uppercase tracking-[0.24em] text-muted-foreground"
        >
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          maxLength={255}
          className="w-full border-0 border-b border-foreground/30 bg-transparent px-0 py-2 text-base text-foreground placeholder:text-muted-foreground/60 focus:border-foreground focus:outline-none focus:ring-0"
        />
      </div>
      <div className="space-y-2">
        <label
          htmlFor="contact-message"
          className="block text-[11px] uppercase tracking-[0.24em] text-muted-foreground"
        >
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          maxLength={2000}
          className="w-full resize-none border-0 border-b border-foreground/30 bg-transparent px-0 py-2 text-base text-foreground placeholder:text-muted-foreground/60 focus:border-foreground focus:outline-none focus:ring-0"
        />
      </div>

      <div className="flex items-center gap-6 pt-2">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex items-center gap-2 border-b border-foreground pb-1 text-sm tracking-wide text-foreground transition-opacity hover:opacity-70 disabled:opacity-50"
        >
          {status === "submitting" ? "Sending…" : "Send"}
          <span aria-hidden>→</span>
        </button>
        {status === "success" && (
          <span className="text-sm text-muted-foreground">
            Thanks — I&apos;ll be in touch shortly.
          </span>
        )}
        {status === "error" && error && (
          <span className="text-sm text-destructive">{error}</span>
        )}
      </div>
    </form>
  );
}