const stats = [
  { value: "10x", label: "faster deployment", company: "Acme Corp" },
  { value: "99.9%", label: "uptime guarantee", company: "TechFlow" },
  { value: "50%", label: "cost reduction", company: "StartupXYZ" },
  { value: "24/7", label: "expert support", company: "Enterprise Co" },
]

export function StatsSection() {
  return (
    <section className="py-20 border-y border-border bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-sm text-muted-foreground mb-12">
          Trusted by teams at leading companies worldwide
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground mb-3">{stat.label}</div>
              <div className="text-xs font-medium text-muted-foreground/60">{stat.company}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
