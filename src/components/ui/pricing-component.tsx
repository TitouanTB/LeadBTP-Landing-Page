import { useState } from "react"
import { Calendar, Check } from "lucide-react"

export default function PricingCards() {
  const [proFast, setProFast] = useState(false)

  const DarkCheckIcon = ({ className = "" }: { className?: string }) => (
    <div className={cn("flex items-center justify-center rounded-full bg-[#4F46E5] p-0.5", className)}>
      <Check className="w-3 h-3 text-white" strokeWidth={3} />
    </div>
  )

  const ToggleSwitch = ({
    enabled,
    onChange,
    isDark = false,
  }: {
    enabled: boolean
    onChange: (v: boolean) => void
    isDark?: boolean
  }) => (
    <div className="flex items-center gap-3">
      <button
        type="button"
        onClick={() => onChange(!enabled)}
        className={[
          "relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ease-in-out focus:outline-none",
          "ring-1 ring-inset",
          enabled
            ? "bg-[#4F46E5] ring-[#4F46E5]"
            : "bg-neutral-800 ring-neutral-700",
        ].join(" ")}
        aria-pressed={enabled}
        aria-label="Toggle priority setup"
      >
        <span
          className={[
            "inline-block h-4 w-4 transform rounded-full transition-transform duration-200 ease-in-out",
            enabled ? "translate-x-6" : "translate-x-1",
            "bg-white shadow-sm",
          ].join(" ")}
        />
      </button>
      <span className="text-sm text-neutral-400">
        Mise en service prioritaire (48h)
      </span>
    </div>
  )

  const proFeatures = [
    "Landing page ultra-optimisée",
    "Système de relances automatiques",
    "Tableau de bord de suivi",
    "Support prioritaire 24/7",
    "Intégration WhatsApp Business",
    "Paiements en ligne sécurisés",
    "Statistiques de conversion",
    "Formation personnalisée"
  ]

  return (
    <div className="w-full py-12">
      <div className="flex flex-col items-center mb-12 text-center">
        <div className="inline-flex items-center rounded-full border border-[#4F46E5]/30 bg-[#4F46E5]/10 px-4 py-1.5 text-xs font-bold text-[#4F46E5] uppercase tracking-widest mb-4">
          Offre de Lancement
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900 mb-4 font-serif">
          Un prix unique, <span className="text-[#4F46E5]">tout inclus.</span>
        </h2>
        <p className="text-neutral-600 max-w-2xl text-lg">
          Pas de frais cachés. Pas d'abonnement complexe. Juste LeadBTP au service de votre croissance.
        </p>
      </div>

      <div className="max-w-[550px] mx-auto">
        {/* Dark (Pro) Card - glassy with unique border/outline */}
        <div
          className={[
            "rounded-[2.5rem] p-2",
            "bg-neutral-900/95 backdrop-blur-xl",
            "border border-neutral-800",
            "shadow-[0_24px_80px_-15px_rgba(79,70,229,0.3)]",
            "ring-1 ring-inset ring-white/10",
          ].join(" ")}
        >
          <div
            className={[
              "rounded-[2rem] p-8 md:p-12 mb-2",
              "bg-neutral-900/50 backdrop-blur-sm",
              "border border-neutral-800",
              "ring-1 ring-inset ring-white/5",
            ].join(" ")}
          >
            <div className="mb-8 flex items-center justify-between">
              <div>
                <h2 className="text-4xl font-bold tracking-tight text-white mb-2">LeadBTP Pro+</h2>
                <p className="text-neutral-400 text-base leading-relaxed">
                  Le système complet pour dominer votre marché local.
                </p>
              </div>
              <span className="inline-flex items-center rounded-full border border-[#4F46E5] bg-[#4F46E5]/20 px-4 py-1 text-xs font-bold text-[#4F46E5] backdrop-blur uppercase tracking-wider">
                Recommandé
              </span>
            </div>

            <div className="flex items-baseline mb-10">
              <span className="text-7xl font-bold tracking-tighter text-white">499€</span>
              <span className="text-neutral-500 text-xl ml-2">/mois</span>
            </div>

            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-3 text-emerald-400 text-sm font-bold bg-emerald-400/10 w-fit px-3 py-1 rounded-full">
                <Check className="w-4 h-4" />
                Free trial de 14 jours
              </div>
              <div className="flex items-center gap-3 text-indigo-400 text-sm font-bold bg-indigo-400/10 w-fit px-3 py-1 rounded-full">
                <Check className="w-4 h-4" />
                Satisfait ou remboursé sous 30 jours
              </div>
            </div>

            <button
              className={[
                "w-full rounded-2xl font-bold text-lg py-5",
                "bg-[#4F46E5] text-white",
                "hover:bg-[#4F46E5]/90 transition-all duration-300",
                "flex items-center justify-center gap-3",
                "shadow-[0_10px_30px_-10px_rgba(79,70,229,0.6)]",
                "ring-1 ring-inset ring-white/20 hover:scale-[1.02] active:scale-[0.98]",
              ].join(" ")}
            >
              Démarrer maintenant
              <Calendar className="w-5 h-5 text-white/70" />
            </button>
          </div>

          <div
            className={[
              "px-8 pb-10 pt-8",
              "bg-neutral-900/40 backdrop-blur-sm rounded-[2rem]",
              "border border-neutral-800",
              "ring-1 ring-inset ring-white/5",
            ].join(" ")}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-8 mb-10">
              {proFeatures.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <DarkCheckIcon className="w-5 h-5 flex-shrink-0" />
                  <span className="text-neutral-300 text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>
            <div className="pt-6 border-t border-neutral-800">
              <ToggleSwitch enabled={proFast} onChange={setProFast} isDark />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

import { cn } from "@/lib/utils"
