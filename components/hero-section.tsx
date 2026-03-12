import { HeroSvg } from "./hero-svg"

export function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-16">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-secondary px-4 py-2 rounded-full text-sm text-muted-foreground mb-8">
          <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
          Now in public beta
        </div>
        
        <div className="mb-12">
          <HeroSvg />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-balance">
          Build something extraordinary
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-pretty">
          The complete platform for teams to build, deploy, and scale modern applications. 
          Stop configuring and start innovating.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#" 
            className="w-full sm:w-auto bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Start for free
          </a>
          <a 
            href="#" 
            className="w-full sm:w-auto border border-border px-8 py-3 rounded-lg font-medium hover:bg-secondary transition-colors"
          >
            View documentation
          </a>
        </div>
      </div>
    </section>
  )
}
