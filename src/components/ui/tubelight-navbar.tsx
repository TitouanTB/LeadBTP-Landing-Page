"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { LucideIcon, Home, AlertCircle, CheckCircle2, Zap, MessageSquare, CreditCard } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
}

export function NavBar({ items, className }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0].name)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div
      className={cn(
        "fixed top-0 left-1/2 -translate-x-1/2 z-50 w-full max-w-7xl px-4 pt-6",
        className,
      )}
    >
      <div className="flex items-center justify-between bg-white/60 border border-white/20 backdrop-blur-2xl py-2 px-3 sm:px-4 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.05)] ring-1 ring-inset ring-white/40">
        <div className="flex items-center gap-1 sm:gap-2">
          {items.map((item) => {
            const Icon = item.icon
            const isActive = activeTab === item.name

            return (
              <a
                key={item.name}
                href={item.url}
                onClick={() => setActiveTab(item.name)}
                className={cn(
                  "relative cursor-pointer text-[13px] font-bold px-4 py-2 rounded-full transition-all duration-300 uppercase tracking-wider",
                  "text-neutral-600 hover:text-[#4F46E5]",
                  isActive && "text-[#4F46E5]",
                )}
              >
                <span className="hidden lg:inline">{item.name}</span>
                <span className="lg:hidden">
                  <Icon size={18} strokeWidth={2.5} />
                </span>
                {isActive && (
                  <motion.div
                    layoutId="lamp"
                    className="absolute inset-0 w-full bg-[#4F46E5]/5 rounded-full -z-10"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  >
                    <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-8 h-1 bg-[#4F46E5] rounded-t-full">
                      <div className="absolute w-12 h-6 bg-[#4F46E5]/20 rounded-full blur-md -top-2 -left-2" />
                      <div className="absolute w-8 h-6 bg-[#4F46E5]/20 rounded-full blur-md -top-1" />
                      <div className="absolute w-4 h-4 bg-[#4F46E5]/20 rounded-full blur-sm top-0 left-2" />
                    </div>
                  </motion.div>
                )}
              </a>
            )
          })}
        </div>

        <div className="flex items-center gap-2">
          <a 
            href="#pricing" 
            className="hidden sm:flex items-center gap-2 bg-[#4F46E5] text-white px-5 py-2.5 rounded-full text-[13px] font-bold uppercase tracking-widest hover:bg-[#4F46E5]/90 transition-all shadow-[0_4px_12px_rgba(79,70,229,0.3)] hover:scale-105 active:scale-95"
          >
            Démarrer
            <Zap size={14} fill="currentColor" />
          </a>
        </div>
      </div>
    </div>
  )
}

export const navItems = [
  { name: 'Accueil', url: '#hero', icon: Home },
  { name: 'Problème', url: '#problem', icon: AlertCircle },
  { name: 'Solution', url: '#solution', icon: CheckCircle2 },
  { name: 'Fonctions', url: '#features', icon: Zap },
  { name: 'Avis', url: '#testimonials', icon: MessageSquare },
  { name: 'Tarifs', url: '#pricing', icon: CreditCard }
]
