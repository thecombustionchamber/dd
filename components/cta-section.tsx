export function CtaSection() {
  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
          Ready to build something extraordinary?
        </h2>
        <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
          Join thousands of teams already shipping faster with our platform. 
          Start free, scale when you&apos;re ready.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#" 
            className="w-full sm:w-auto bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Get started for free
          </a>
          <a 
            href="#" 
            className="w-full sm:w-auto text-muted-foreground hover:text-foreground transition-colors font-medium"
          >
            Talk to sales
          </a>
        </div>
      </div>
    </section>
  )
}
