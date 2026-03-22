import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Check, 
  ArrowRight, 
  MessageSquare, 
  Phone, 
  Smartphone, 
  BarChart3, 
  Layout, 
  ChevronDown, 
  Send,
  Zap,
  Clock,
  ShieldCheck,
  Star,
  X
} from 'lucide-react';

// --- New UI Components ---
import { NavBar, navItems } from './components/ui/tubelight-navbar';
import FeatureCarousel from './components/ui/feature-carousel';
import PricingCards from './components/ui/pricing-component';
import { 
  HoverSlider, 
  HoverSliderImage, 
  HoverSliderImageWrap, 
  TextStaggerHover, 
  SLIDES 
} from './components/ui/animated-slideshow';

const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (!message.trim()) return;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/yournumber?text=${encodedMessage}`, '_blank');
    setMessage('');
    setIsOpen(false);
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-4">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              className="w-[350px] bg-white rounded-3xl shadow-2xl overflow-hidden border border-neutral-100"
            >
              <div className="bg-[#25D366] p-6 text-white">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                      <MessageSquare size={24} fill="currentColor" />
                    </div>
                    <div>
                      <div className="font-bold text-lg">LeadBTP Support</div>
                      <div className="text-xs opacity-80 flex items-center gap-1">
                        <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                        En ligne maintenant
                      </div>
                    </div>
                  </div>
                  <button onClick={() => setIsOpen(false)} className="hover:bg-black/10 p-1 rounded-full transition-colors">
                    <X size={20} />
                  </button>
                </div>
                <p className="text-sm font-medium leading-relaxed">
                  "Commencez, demandez votre accès instantané. On vous répond en moins de 5 minutes."
                </p>
              </div>
              
              <div className="p-6 bg-neutral-50 min-h-[150px] flex flex-col justify-end">
                <div className="bg-white p-4 rounded-2xl rounded-bl-none shadow-sm mb-4 text-sm text-neutral-600 border border-neutral-100">
                  Bonjour ! Comment pouvons-nous vous aider à développer votre activité aujourd'hui ?
                </div>
                <div className="relative">
                  <input 
                    type="text" 
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Tapez votre message..."
                    className="w-full bg-white border border-neutral-200 rounded-xl py-3 pl-4 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-[#25D366] transition-all"
                  />
                  <button 
                    onClick={handleSend}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-[#25D366] hover:bg-neutral-100 rounded-lg transition-colors"
                  >
                    <Send size={18} />
                  </button>
                </div>
              </div>
              
              <div className="p-4 bg-white border-t border-neutral-100 flex items-center justify-center">
                <button 
                  onClick={handleSend}
                  className="text-[#25D366] font-bold text-sm uppercase tracking-widest hover:underline"
                >
                  Démarrez avec nous
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="bg-[#25D366] text-white p-5 rounded-full shadow-[0_10px_40px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform active:scale-95 flex items-center justify-center group relative overflow-hidden"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <MessageSquare size={28} fill="currentColor" />
          </motion.div>
          {!isOpen && (
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white animate-bounce" />
          )}
        </button>
      </div>
    </>
  );
};

const Hero = () => (
  <section className="relative pt-60 pb-40 overflow-hidden min-h-screen flex flex-col items-center justify-center text-center">
    {/* Background Image - Using the provided sunset/cloud image */}
    <div className="absolute inset-0 z-0">
      <img 
        src="https://images.unsplash.com/photo-1470252649358-969623d6910f?auto=format&fit=crop&q=80&w=2000" 
        alt="Hero Background" 
        className="w-full h-full object-cover opacity-30"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-bg-lead/90 via-transparent to-bg-lead"></div>
    </div>

    <div className="max-w-6xl mx-auto px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="inline-block mb-8 px-6 py-2 rounded-full bg-indigo-lead/5 border border-indigo-lead/10 text-indigo-lead font-bold text-sm tracking-widest uppercase">
          Le futur du BTP est ici
        </div>
        <h1 className="title-serif text-7xl md:text-9xl lg:text-[10rem] mb-12 text-gradient">
          Plus aucun lead perdu.<br />Même sous une dalle.
        </h1>
        <p className="text-2xl md:text-3xl text-neutral-600 mb-16 max-w-3xl mx-auto leading-tight font-medium">
          LeadBTP récupère vos appels manqués, relance vos devis et vous livre un site qui convertit — pendant que vous faites ce que vous faites de mieux.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-10">
          <button className="btn-primary flex flex-col items-center gap-1 text-xl px-12 group">
            <div className="flex items-center gap-4">
              Démarrer maintenant <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </div>
            <span className="text-[10px] uppercase tracking-[0.2em] opacity-70 font-bold">Free trial de 14 jours</span>
          </button>
          <a href="#how-it-works" className="text-neutral-900 font-bold text-xl flex flex-col items-center gap-1 group">
            <div className="flex items-center gap-2">
              <span className="border-b-2 border-indigo-lead/30 group-hover:border-indigo-lead transition-all pb-1">Voir comment ça marche</span>
            </div>
            <span className="text-[10px] uppercase tracking-[0.2em] opacity-40 font-bold">Sans engagement</span>
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

const ReassuranceBar = () => (
  <section className="py-32 relative">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            icon: <Clock size={32} />,
            title: "Site livré en 7 jours",
            desc: "Pas dans 3 mois. On est aussi rapides que vous sur un chantier urgent."
          },
          {
            icon: <Zap size={32} />,
            title: "SMS Appel Manqué en 60s",
            desc: "Même dans une tranchée. Le client se sent pris en charge instantanément."
          },
          {
            icon: <ShieldCheck size={32} />,
            title: "Zéro configuration",
            desc: "On s'occupe de tout. Vous n'avez aucun logiciel complexe à apprendre."
          }
        ].map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className="glass-card rounded-[40px] p-10 flex flex-col gap-6 hover:bg-white/80"
          >
            <div className="w-16 h-16 rounded-2xl bg-indigo-lead/10 flex items-center justify-center text-indigo-lead">
              {item.icon}
            </div>
            <div>
              <h3 className="text-2xl font-serif font-extrabold mb-3">{item.title}</h3>
              <p className="text-neutral-500 font-medium leading-relaxed">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Problem = () => (
  <section className="py-60 relative">
    <div className="max-w-7xl mx-auto px-6">
      <div className="mb-32 text-center max-w-4xl mx-auto">
        <h2 className="title-serif text-7xl md:text-8xl mb-10 text-gradient">Vous perdez des chantiers sans le savoir.</h2>
        <p className="text-3xl text-neutral-400 font-serif italic">Et le pire, c'est que vous le savez un peu quand même.</p>
      </div>

      <div className="grid lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-7 space-y-12">
          {[
            {
              num: "01",
              title: "L'appel manqué",
              desc: "Vous êtes en train de poser du carrelage. Votre téléphone sonne. Vous décrochez pas — vous avez les mains dans le ciment. Le client, lui, il a Google. Il rappelle le suivant. Ce chantier, c'était 4 800 €. Il est parti en 40 secondes."
            },
            {
              num: "02",
              title: "Le devis fantôme",
              desc: "Vous envoyez un devis. Bien détaillé. Bien chiffré. Silence. Vous vous dites \"je vais relancer\". Trois semaines plus tard, vous y pensez sous la douche. Trop tard — il a signé avec quelqu'un qui a juste relancé."
            },
            {
              num: "03",
              title: "Le site invisible",
              desc: "Votre site existe. Techniquement. Il a été fait par le cousin d'un ami en 2019. Il charge en 8 secondes. Les gens arrivent, ils repartent. Personne ne vous contacte via ce site. Et vous le savez."
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="glass-card rounded-[48px] p-12 flex flex-col md:flex-row gap-10 items-start group"
            >
              <div className="text-6xl font-serif italic text-indigo-lead/20 group-hover:text-indigo-lead/40 transition-colors shrink-0">
                {item.num}
              </div>
              <div>
                <h3 className="text-4xl font-serif font-extrabold mb-6">{item.title}</h3>
                <p className="text-xl text-neutral-600 leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="lg:col-span-5 lg:sticky lg:top-40">
          <div className="glass-card rounded-[48px] p-12 bg-indigo-lead text-white overflow-hidden relative group">
            <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-center group-hover:scale-110 transition-transform duration-1000"></div>
            <div className="relative z-10">
              <h3 className="text-4xl font-serif font-extrabold mb-8 leading-tight">Le coût de l'inaction est plus élevé que vous ne le pensez.</h3>
              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="text-5xl font-black text-white/40">74%</div>
                  <p className="text-lg font-bold leading-tight">des clients n'attendent pas que vous rappeliez.</p>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-5xl font-black text-white/40">3x</div>
                  <p className="text-lg font-bold leading-tight">plus de chances de signer en relançant à J+3.</p>
                </div>
              </div>
              <button className="mt-12 w-full bg-white text-indigo-lead py-5 rounded-xl font-black text-xl hover:bg-neutral-100 transition-colors">
                Calculer mes pertes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Solution = () => (
  <section id="how-it-works" className="py-60 bg-white relative overflow-hidden">
    {/* Background Image - Using the provided meadow/sky image */}
    <div className="absolute inset-0 z-0 opacity-5">
      <img 
        src="https://images.unsplash.com/photo-1534088568595-a066f7104211?auto=format&fit=crop&q=80&w=2000" 
        alt="Solution Background" 
        className="w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />
    </div>

    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="mb-40 max-w-4xl">
        <h2 className="title-serif text-7xl md:text-8xl mb-10 text-gradient">LeadBTP s'en occupe à votre place.</h2>
        <p className="text-3xl text-neutral-500 leading-tight font-medium">Pas de formation. Pas de logiciel à apprendre. Juste un système qui tourne pendant que vous êtes sur le toit.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-16">
        {[
          {
            num: "01",
            title: "Votre site, opérationnel en 7 jours",
            desc: "On vous construit un site pensé pour convertir des leads BTP — pas pour faire joli dans un portfolio d'agence. Si vous avez déjà un site, on l'optimise sans tout casser."
          },
          {
            num: "02",
            title: "Chaque appel devient une conversation",
            desc: "Dès qu'un appel n'est pas décroché, le client reçoit un SMS en moins de 60 secondes. La conversation démarre. Le chantier ne part plus chez le voisin."
          },
          {
            num: "03",
            title: "Vos devis se relancent tout seuls",
            desc: "J+3, J+7, J+14. Trois messages. Zéro effort. Vous voyez en temps réel combien d'euros ont été récupérés grâce à ces relances automatiques."
          }
        ].map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className="relative group"
          >
            <div className="text-[12rem] font-serif font-black text-indigo-lead/5 absolute -top-24 -left-8 select-none group-hover:text-indigo-lead/10 transition-colors">
              {item.num}
            </div>
            <div className="relative z-10">
              <h3 className="text-3xl font-serif font-extrabold mb-6 leading-tight">{item.title}</h3>
              <p className="text-neutral-500 leading-relaxed text-xl font-medium">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const OurWork = () => (
  <section id="our-work" className="py-60 bg-[#FAFAF8] relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <HoverSlider className="min-h-[600px] place-content-center">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-20">
          <div className="flex flex-col space-y-6 lg:w-1/2">
            <div className="inline-flex items-center rounded-full border border-[#4F46E5]/30 bg-[#4F46E5]/10 px-4 py-1.5 text-xs font-bold text-[#4F46E5] uppercase tracking-widest w-fit">
              Nos Réalisations
            </div>
            <h2 className="title-serif text-6xl md:text-8xl mb-10 text-gradient leading-tight">
              Des sites qui<br />génèrent du cash.
            </h2>
            <div className="flex flex-col space-y-4">
              {SLIDES.map((slide, index) => (
                <TextStaggerHover
                  key={slide.title}
                  index={index}
                  className="cursor-pointer text-3xl md:text-5xl font-serif font-extrabold uppercase tracking-tighter"
                  text={slide.title}
                />
              ))}
            </div>
            <div className="pt-10">
              <button className="btn-primary px-10 py-5 text-lg">
                Demander mon site personnalisé
              </button>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="relative aspect-[4/3] w-full max-w-[600px] mx-auto">
              <div className="absolute inset-0 bg-[#4F46E5]/5 rounded-[3rem] -rotate-3"></div>
              <HoverSliderImageWrap className="rounded-[2.5rem] shadow-2xl border-8 border-white overflow-hidden relative z-10">
                {SLIDES.map((slide, index) => (
                  <div key={slide.id} className="size-full">
                    <HoverSliderImage
                      index={index}
                      imageUrl={slide.imageUrl}
                      src={slide.imageUrl}
                      alt={slide.title}
                      className="size-full object-cover"
                      loading="eager"
                      decoding="async"
                    />
                  </div>
                ))}
              </HoverSliderImageWrap>
              
              <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-[2rem] shadow-xl z-20 hidden md:block border border-neutral-100">
                <div className="flex items-center gap-4 mb-2">
                  <div className="flex -space-x-3">
                    {[1,2,3].map(i => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-neutral-200 overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" />
                      </div>
                    ))}
                  </div>
                  <div className="text-sm font-bold text-neutral-900">+450 artisans</div>
                </div>
                <div className="text-xs text-neutral-400 font-bold uppercase tracking-widest">Satisfaits par nos designs</div>
              </div>
            </div>
          </div>
        </div>
      </HoverSlider>
    </div>
  </section>
);

const Features = () => (
  <section id="features" className="py-60 bg-bg-lead">
    <div className="max-w-7xl mx-auto px-6">
      <div className="mb-32 text-center">
        <div className="inline-flex items-center rounded-full border border-[#4F46E5]/30 bg-[#4F46E5]/10 px-4 py-1.5 text-xs font-bold text-[#4F46E5] uppercase tracking-widest mb-6">
          Fonctionnalités Clés
        </div>
        <h2 className="title-serif text-7xl md:text-9xl mb-10 text-gradient">L'arsenal complet.</h2>
        <p className="text-2xl text-neutral-400 font-serif italic max-w-2xl mx-auto">Tout ce dont vous avez besoin pour ne plus jamais rater un chantier.</p>
      </div>
      
      <FeatureCarousel />
      
      <div className="mt-32 flex flex-col items-center gap-8">
        <div className="flex items-center gap-10 text-neutral-400 font-black text-xs uppercase tracking-[0.3em]">
          <div className="flex items-center gap-2">
            <ShieldCheck size={16} />
            Satisfait ou remboursé 30j
          </div>
          <div className="flex items-center gap-2">
            <Zap size={16} />
            Free trial 14j
          </div>
        </div>
        <button className="btn-primary px-12 py-6 text-2xl shadow-2xl shadow-indigo-lead/40">
          Démarrez votre essai gratuit
        </button>
      </div>
    </div>
  </section>
);

const SocialProof = () => (
  <section className="py-60 relative overflow-hidden bg-white">
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="text-center mb-40">
        <h2 className="title-serif text-7xl md:text-8xl mb-10 text-gradient">Ils ont arrêté de perdre des leads.</h2>
        <p className="text-2xl text-neutral-400 font-serif italic">Témoignages réels d'artisans qui ont franchi le pas.</p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-12">
        {[
          {
            quote: "Franchement j'étais sceptique. Premier mois : 2 chantiers récupérés sur des appels que j'aurais ratés. Le système s'est payé 9 fois.",
            author: "Sébastien M.",
            role: "Plombier-chauffagiste, Lyon",
            offset: "md:mt-20"
          },
          {
            quote: "J'avais un site depuis 2018. Personne ne contactait via. Maintenant le formulaire reçoit 3-4 demandes par semaine. C'est le jour et la nuit.",
            author: "Karim B.",
            role: "Électricien, Marseille",
            offset: ""
          },
          {
            quote: "Ce qui m'a convaincu c'est le dashboard. C'est pas '42 visiteurs'. C'est '3 chantiers récupérés, valeur estimée 14 000 €'.",
            author: "Thomas D.",
            role: "Couvreur, Nantes",
            offset: "md:mt-40"
          }
        ].map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className={item.offset}
          >
            <div className="glass-card rounded-[48px] p-12 relative hover:scale-[1.02] transition-transform">
              <div className="absolute -top-8 left-12 w-16 h-16 bg-indigo-lead rounded-2xl flex items-center justify-center text-white shadow-2xl shadow-indigo-lead/40 rotate-3">
                <Star size={28} fill="currentColor" />
              </div>
              <p className="text-2xl mb-12 leading-relaxed italic text-neutral-700 font-serif">
                "{item.quote}"
              </p>
              <div className="flex items-center gap-6 border-t border-neutral-100 pt-8">
                <div className="w-14 h-14 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-400 font-black text-xl">
                  {item.author[0]}
                </div>
                <div>
                  <div className="font-black text-xl text-neutral-900">{item.author}</div>
                  <div className="text-sm text-neutral-500 font-bold uppercase tracking-wider">{item.role}</div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Pricing = () => (
  <section id="pricing" className="py-60 relative bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <PricingCards />
      
      <div className="mt-20 flex flex-col items-center gap-6">
        <div className="flex items-center gap-3 text-neutral-400 font-bold text-sm uppercase tracking-widest">
          <ShieldCheck size={20} className="text-[#4F46E5]/40" />
          Paiement sécurisé par Stripe
        </div>
        <p className="text-neutral-400 italic text-xl font-serif max-w-2xl mx-auto text-center">
          "Un seul chantier récupéré couvre généralement 3 à 10 mois d'abonnement. Le calcul est vite fait."
        </p>
      </div>
    </div>
  </section>
);

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="glass-card rounded-[32px] overflow-hidden mb-8 border-white/50">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-10 flex items-center justify-between text-left hover:bg-white/50 transition-colors group"
      >
        <span className="text-2xl font-extrabold pr-8">{question}</span>
        <div className={`w-14 h-14 rounded-2xl bg-neutral-100 flex items-center justify-center transition-all duration-500 shrink-0 ${isOpen ? 'rotate-180 bg-indigo-lead text-white shadow-xl shadow-indigo-lead/30' : 'group-hover:bg-neutral-200'}`}>
          <ChevronDown size={28} />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="p-10 pt-0 text-xl text-neutral-500 leading-relaxed font-medium border-t border-neutral-50 mt-4">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => (
  <section className="py-60 bg-white">
    <div className="max-w-5xl mx-auto px-6">
      <div className="text-center mb-40">
        <h2 className="title-serif text-7xl md:text-8xl mb-10 text-gradient">Questions fréquentes.</h2>
        <p className="text-2xl text-neutral-400 font-serif italic">Tout ce que vous devez savoir avant de commencer.</p>
      </div>
      <div className="space-y-4">
        <FAQItem 
          question="J'ai déjà un site, ça marche quand même ?" 
          answer="Oui — on ne touche pas à votre site si vous y tenez. On y branche notre système de capture et nos automations par-dessus. Vous gardez votre site, vous gagnez tout le reste. C'est souvent la solution préférée de nos clients qui ont investi dans un site récemment."
        />
        <FAQItem 
          question="Combien de temps pour que ça soit en place ?" 
          answer="7 jours ouvrés. On vous envoie un questionnaire de 15 minutes au départ. C'est la seule chose qu'on vous demande de faire. Le reste, c'est nous. On s'occupe du design, du copywriting, et de la configuration technique."
        />
        <FAQItem 
          question="C'est compliqué à utiliser au quotidien ?" 
          answer="L'interface ressemble à WhatsApp. Si vous savez envoyer un message sur votre téléphone, vous savez utiliser LeadBTP. Les automations tournent seules en arrière-plan — vous n'avez rien à gérer manuellement."
        />
        <FAQItem 
          question="Et si ça ne rapporte rien le premier mois ?" 
          answer="On vous rembourse intégralement. On est tellement confiants dans notre système qu'on prend tout le risque à notre charge. Si vous ne récupérez pas au moins un lead ou une relance, on ne mérite pas votre argent."
        />
        <FAQItem 
          question="Vous travaillez avec quels types d'artisans ?" 
          answer="Plombiers, électriciens, carreleurs, peintres, maçons, couvreurs, menuisiers, chauffagistes. Si vous avez un téléphone sur le chantier et des devis à envoyer, LeadBTP est fait pour vous. On connaît les problématiques spécifiques de chaque métier du bâtiment."
        />
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="relative py-40 overflow-hidden">
    {/* Background Image - Using the provided night/cloud image */}
    <div className="absolute inset-0 z-0">
      <img 
        src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=2000" 
        alt="Footer Background" 
        className="w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-indigo-lead/95 backdrop-blur-md"></div>
    </div>

    <div className="max-w-7xl mx-auto px-6 relative z-10 text-white">
      <div className="flex flex-col md:flex-row items-center justify-between gap-20 mb-32">
        <div className="text-6xl font-serif font-extrabold tracking-tighter">LeadBTP</div>
        <div className="flex flex-wrap justify-center items-center gap-16 text-xl font-black uppercase tracking-widest">
          <a href="#" className="hover:text-white/70 transition-colors">Mentions légales</a>
          <a href="#" className="hover:text-white/70 transition-colors">Confidentialité</a>
          <a href="https://wa.me/yournumber" className="bg-white text-indigo-lead px-10 py-4 rounded-full hover:bg-neutral-100 transition-all shadow-2xl">Contact WhatsApp</a>
        </div>
      </div>
      <div className="pt-16 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-10 text-white/40 font-bold text-lg">
        <p>© 2026 LeadBTP. Tous droits réservés.</p>
        <p className="flex items-center gap-3">
          Propulsé par l'IA pour les artisans du bâtiment
          <Zap size={20} className="text-white/20" />
        </p>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen">
      <NavBar items={navItems} />
      <Hero />
      <ReassuranceBar />
      <Problem />
      <Solution />
      <OurWork />
      <Features />
      <SocialProof />
      <Pricing />
      <FAQ />
      <Footer />
      <WhatsAppWidget />
    </div>
  );
}
