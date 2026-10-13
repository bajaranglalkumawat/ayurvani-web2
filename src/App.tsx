import { useEffect, useState, type FormEvent } from 'react'
import {
  ArrowDown,
  ArrowRight,
  Check,
  ChevronDown,
  Heart,
  Leaf,
  Menu,
  MessageCircle,
  ShieldCheck,
  Sprout,
  X,
} from 'lucide-react'

const herbPhotos = [
  'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=900&q=85',
]

const concerns = [
  'कुछ ध्वनियों का उच्चारण साफ़ न कर पाना?',
  'बोलते समय जीभ का दाँतों के बीच आना?',
  'मुश्किल शब्द बोलने से बचना?',
  'Class presentation के समय झिझकना?',
  'दोस्तों के सामने बोलने में संकोच?',
  'बोलने को लेकर confidence कम महसूस करना?',
]

const benefits = [
  {
    icon: '🧠',
    title: 'Brain Wellness Support',
    description:
      'Brain के overall wellness को support करने के लिए selected Ayurvedic herbs।',
  },
  {
    icon: '⚡',
    title: 'Nervous System Support',
    description:
      'Nervous System के सामान्य functioning और wellness को support करने में सहायता।',
  },
  {
    icon: '🎯',
    title: 'Focus & Mental Wellness',
    description:
      'Focus और overall mental wellness को support करने वाली पारंपरिक Ayurvedic herbs।',
  },
  {
    icon: '🌿',
    title: 'Daily Wellness',
    description:
      'Regular routine के साथ बच्चे की overall Brain & Nervous System Wellness पर ध्यान देने में सहायता।',
  },
]

const herbs = [
  {
    name: 'Brahmi',
    description:
      'Brain और cognitive wellness के लिए पारंपरिक रूप से उपयोग की जाने वाली herb।',
  },
  {
    name: 'Shankhpushpi',
    description:
      'Mental wellness और cognitive support के लिए Ayurveda में पारंपरिक उपयोग।',
  },
  {
    name: 'Ashwagandha',
    description:
      'Stress management और nervous system wellness के support के लिए पारंपरिक रूप से उपयोग की जाती है।',
  },
  {
    name: 'Jatamansi',
    description:
      'Mental wellness और calming support के लिए Ayurveda में पारंपरिक उपयोग।',
  },
]

const faqs = [
  {
    question: 'क्या AyurVani हकलापन के लिए solution है?',
    answer:
      'AyurVani को हकलापन से जुड़ी daily wellness और communication routine के लिए Ayurvedic herbal support solution के रूप में तैयार किया गया है। इसमें Brahmi, Shankhpushpi, Ashwagandha और Jatamansi जैसी herbs हैं, जिनका Ayurveda में brain, cognitive, mental और nervous-system wellness के लिए पारंपरिक उपयोग होता रहा है।',
  },
  {
    question: 'क्या AyurVani हकलापन को ठीक करता है?',
    answer:
      'AyurVani को हकलापन के लिए supportive Ayurvedic solution के रूप में use किया जाता है। हर बच्चे का हकलापन अलग होता है, इसलिए किसी बच्चे के लिए 100% cure या guaranteed result का दावा नहीं किया जा सकता।',
  },
  {
    question: 'AyurVani में कौन-कौन सी herbs हैं?',
    answer: 'Brahmi, Shankhpushpi, Ashwagandha और Jatamansi।',
  },
  {
    question: 'क्या AyurVani के साथ speech practice जरूरी है?',
    answer:
      'हाँ। बच्चे को बिना pressure के बोलने का समय देना, उसकी बात पूरी सुनना और relaxed speech practice करना daily routine का महत्वपूर्ण हिस्सा है।',
  },
  {
    question: 'क्या हकलापन बच्चे की गलती है?',
    answer:
      'नहीं। हकलापन बच्चे की गलती नहीं है। उसे डाँटना या उसका मजाक बनाना सही तरीका नहीं है।',
  },
]

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string
  title: string
  description?: string
}) {
  return (
    <div className="section-heading">
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [formMessage, setFormMessage] = useState('')

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>(
      '.section, .hero-photo, .hero-content, .closing-section',
    )

    if (!('IntersectionObserver' in window)) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -36px 0px' },
    )

    sections.forEach((section) => {
      section.classList.add('reveal-on-scroll')
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    if (!form.reportValidity()) return
    setFormMessage(
      'जानकारी सही है, लेकिन इस वेबसाइट पर अभी order submit नहीं होता। कोई order place नहीं हुआ है।',
    )
  }

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <>
      <a className="skip-link" href="#main">
        मुख्य सामग्री पर जाएँ
      </a>
      <div className="site-shell">
        <header className="topbar">
          <a className="brand" href="#home" aria-label="AyurVani — होम">
            <span className="brand-mark">
              <Sprout size={20} strokeWidth={1.7} />
            </span>
            <span>AyurVani</span>
          </a>
          <button
            type="button"
            className="menu-toggle"
            aria-label={menuOpen ? 'मेन्यू बंद करें' : 'मेन्यू खोलें'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
          <nav className={menuOpen ? 'navigation navigation-open' : 'navigation'}>
            <a href="#support" onClick={closeMenu}>
              हमारा तरीका
            </a>
            <a href="#routine" onClick={closeMenu}>
              Daily routine
            </a>
            <a href="#faq" onClick={closeMenu}>
              सवाल-जवाब
            </a>
            <a className="nav-cta" href="#order" onClick={closeMenu}>
              Order details <ArrowRight size={14} />
            </a>
          </nav>
        </header>

        <main id="main">
          <section className="hero" id="home">
            <div className="hero-photo">
              <img
                className="hero-image-main"
                src={`${import.meta.env.BASE_URL}images/child-speaking.jpg`}
                alt="बोलते समय परेशानी महसूस कर रहे बच्चे की तस्वीर"
                fetchPriority="high"
              />
              <img
                className="hero-image-poster"
                src={`${import.meta.env.BASE_URL}images/parent-child-guidance.jpg`}
                alt="बच्चे के साथ बातचीत करती माँ और speech support से जुड़ी जानकारी"
                fetchPriority="high"
              />
              <img
                className="hero-image-language"
                src={`${import.meta.env.BASE_URL}images/speech-language-support.avif`}
                alt="कक्षा में शब्दों के साथ अभ्यास करता बच्चा"
                fetchPriority="high"
              />
              <span className="photo-label">
                <Leaf size={13} /> बच्चों की बात, ध्यान से सुनें
              </span>
            </div>
            <div className="hero-content">
              <span className="hero-kicker">
                <Sprout size={15} /> एक gentle, supportive routine
              </span>
              <h1>क्या आपका बच्चा भी बोलते समय हकलाता है?</h1>
              <div className="speech-bubbles" aria-label="बच्चे के बोलने के उदाहरण">
                <span>“म-म-मेरा नाम…”</span>
                <span>“पा-पा-पानी…”</span>
              </div>
              <p className="hero-intro">
                बच्चा मन में पूरी बात जानता है, बस शब्द बोलते समय हकलाहट होने लगती है।
              </p>
              <p className="hero-story">
                हर बार जब बच्चा हकलापन के डर से बोलने से पहले रुकता है, तब माँ-बाप के मन में एक सवाल जरूर आता है—
              </p>
              <blockquote>“मेरा बच्चा कब बिना झिझक अपनी बात कह पाएगा?”</blockquote>
              <p className="hero-note">
                अगर आपके बच्चे को भी बोलते समय हकलापन, शब्द दोहराने या रुकने की परेशानी होती है, तो उसके हकलापन को समझना और सही support देना जरूरी है।
              </p>
              <a className="button button-primary" href="#support">
                अपने बच्चे के लिए AyurVani जानें <ArrowDown size={16} />
              </a>
              <span className="hero-caption">
                Daily speech & wellness routine के लिए Ayurvedic Herbal Support
              </span>
            </div>
          </section>

          <section className="section concerns-section">
            <SectionHeading
              eyebrow="The Real Impact · पहले, बच्चे को सुनें"
              title="बोलने की परेशानी हर बच्चे में अलग दिख सकती है"
              description="कुछ बच्चों को शब्दों या खास ध्वनियों के उच्चारण में कठिनाई होती है, कुछ बोलते समय अटकते हैं या लोगों के सामने बोलने से झिझकते हैं। हर बच्चे का अनुभव अलग होता है।"
            />
            <ul className="concern-list">
              {concerns.map((concern) => (
                <li key={concern}>
                  <Check size={15} aria-hidden="true" />
                  <span>{concern}</span>
                </li>
              ))}
            </ul>
            <div className="support-quote">
              <MessageCircle size={19} />
              <p>
                बच्चे की बात को धैर्य से सुनें
                <span>बोलने में कठिनाई बच्चे की गलती नहीं है। उसे बिना दबाव के अपनी बात पूरी करने का समय दें।</span>
              </p>
            </div>
          </section>

          <section className="section support-section" id="support">
            <SectionHeading
              eyebrow="🌿 AyurVani"
              title="हकलापन के लिए Ayurvedic Herbal Support"
              description="प्रस्तुत है — AyurVani"
            />
            <p className="body-copy">
              AyurVani को बच्चों की हकलापन और daily communication routine के लिए Ayurvedic herbal support के रूप में तैयार किया गया है। इसमें ऐसी herbs शामिल हैं जिनका Ayurveda में पारंपरिक रूप से brain, cognitive, mental और nervous-system wellness के लिए उपयोग किया जाता रहा है।
            </p>
            <p className="mini-heading">AyurVani के साथ एक simple routine:</p>
            <div className="routine-chips">
              <span>🌿 Ayurvedic Herbal Support</span>
              <span>🗣️ Daily Speech Practice</span>
              <span>❤️ Parent Support</span>
              <span>📋 Regular Progress Check</span>
            </div>
            <div className="purpose-note">
              <Heart size={18} />
              <p>
                <strong>हमारा उद्देश्य</strong>
                <span>हकलापन को लेकर बच्चे पर pressure बढ़ाना नहीं, बल्कि उसकी daily routine में supportive care जोड़ना है।</span>
              </p>
            </div>
          </section>

          <section className="section benefits-section">
            <SectionHeading
              eyebrow="04. HOW IT WORKS"
              title="AYURVANI कैसे Support करता है?"
              description="Selected Ayurvedic herbs के साथ एक सरल daily wellness routine।"
            />
            <div className="benefit-list">
              {benefits.map((benefit) => (
                <article className="benefit-card" key={benefit.title}>
                  <span className="benefit-icon">{benefit.icon}</span>
                  <div>
                    <h3>{benefit.title}</h3>
                    <p>{benefit.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="section herbs-section">
            <SectionHeading
              eyebrow="पारंपरिक जड़ी-बूटियाँ"
              title="AyurVani में क्या है?"
              description="चार herbs, एक simple Ayurvedic herbal daily routine।"
            />
            <div className="herb-grid">
              {herbs.map((herb, index) => (
                <article className="herb-card" key={herb.name}>
                  <div className="herb-photo">
                    <img
                      src={herbPhotos[index]}
                      alt="हरी पत्तियों और प्राकृतिक वनस्पति की तस्वीर"
                      loading="lazy"
                    />
                    <span aria-hidden="true">🌿</span>
                  </div>
                  <div className="herb-card-copy">
                    <h3>{herb.name}</h3>
                    <p>{herb.description}</p>
                  </div>
                </article>
              ))}
            </div>
            <p className="herb-summary">
              Brahmi <span>+</span> Shankhpushpi <span>+</span> Ashwagandha <span>+</span> Jatamansi
            </p>
          </section>

          <section className="section daily-section" id="routine">
            <SectionHeading
              eyebrow="छोटे कदम, रोज़"
              title="AyurVani के साथ Daily Hakalapan Support Routine"
            />
            <div className="day-timeline">
              <article className="day-step">
                <span className="day-icon">🌅</span>
                <div>
                  <span className="day-label">सुबह</span>
                  <h3>Healthy Breakfast</h3>
                  <p>AyurVani — label के अनुसार</p>
                </div>
              </article>
              <article className="day-step">
                <span className="day-icon">🗣️</span>
                <div>
                  <span className="day-label">दिन में</span>
                  <h3>10–15 मिनट relaxed speech practice</h3>
                  <p>बच्चे को बिना बीच में रोके अपनी बात पूरी करने दें।</p>
                </div>
              </article>
              <article className="day-step">
                <span className="day-icon">🌇</span>
                <div>
                  <span className="day-label">शाम</span>
                  <h3>Family conversation</h3>
                  <p>Reading / storytelling के साथ थोड़ा शांत समय।</p>
                </div>
              </article>
              <article className="day-step">
                <span className="day-icon">🌙</span>
                <div>
                  <span className="day-label">रात</span>
                  <h3>आराम का समय</h3>
                  <p>Relaxed bedtime routine और पर्याप्त आराम।</p>
                </div>
              </article>
            </div>
          </section>

          <section className="section guidance-section">
            <SectionHeading
              eyebrow="👨‍⚕️ Professional Guidance"
              title="हकलापन में Professional Guidance"
              description="हर बच्चे का हकलापन अलग होता है। इसलिए बच्चे की age, हकलापन का pattern और communication difficulty को समझना जरूरी है।"
            />
            <div className="guidance-layout">
              <figure className="doctor-card">
                <img
                  src={`${import.meta.env.BASE_URL}images/doctor-guidance.jpg`}
                  alt="स्वास्थ्य पेशेवर की सांकेतिक stock photo"
                  loading="lazy"
                />
                <figcaption>सांकेतिक तस्वीर · यह AyurVani से जुड़े किसी डॉक्टर या सेवा का दावा नहीं है।</figcaption>
              </figure>
              <div className="progress-card">
                <h3>Weekly Progress Check</h3>
                {[
                  ['Week 1', 'Routine Start'],
                  ['Week 2', 'Speech Pattern Review'],
                  ['Week 3', 'Routine Follow-up'],
                  ['Week 4', 'Progress Review'],
                ].map(([week, label]) => (
                  <div className="progress-row" key={week}>
                    <span>{week}</span>
                    <span className="progress-line" />
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </div>
            <p className="guidance-note">
              यदि बच्चे को बोलने या शब्दों के उच्चारण में लगातार कठिनाई हो, तो Speech-Language Pathologist या Pediatrician से सलाह लें। AyurVani को केवल supportive routine के रूप में देखें।
            </p>
          </section>

          <section className="section journey-section">
            <SectionHeading
              eyebrow="हर बच्चे की journey अलग होती है"
              title="हकलापन से Confidence की ओर"
            />
            <div className="journey-grid">
              <article className="journey-card journey-before">
                <span className="journey-label">पहले</span>
                <p className="journey-speech">“म-म-मेरा…”</p>
                <span>हकलापन</span>
                <ArrowDown size={16} />
                <span>शब्दों में रुकावट</span>
                <ArrowDown size={16} />
                <span>बोलने में झिझक</span>
              </article>
              <article className="journey-card journey-after">
                <span className="journey-label">Routine के साथ</span>
                <p className="journey-speech">“मैं अपनी बात कह सकता हूँ।”</p>
                <span>Daily Practice</span>
                <ArrowDown size={16} />
                <span>Positive Communication</span>
                <ArrowDown size={16} />
                <span>Supportive Routine</span>
                <ArrowDown size={16} />
                <span>Better Confidence</span>
              </article>
            </div>
            <p className="journey-disclaimer">
              <ShieldCheck size={17} />
              हम guaranteed cure का दावा नहीं करते। हमारा focus है: हकलापन को समझना + सही support + consistent routine.
            </p>
          </section>

          <section className="section transparency-section">
            <SectionHeading
              eyebrow="भरोसा क्यों करें?"
              title="बच्चे के लिए Product चुनते समय Quality सबसे जरूरी है"
              description="Clear Ingredients • Quality Manufacturing • Transparent Information"
            />
            <div className="transparency-note">
              <ShieldCheck size={19} />
              <p>
                <strong>सही जानकारी, साफ़-साफ़</strong>
                <span>किसी actual license, certification, customer review या result का दावा यहाँ नहीं किया गया है। Product details और प्रमाण उपलब्ध होने पर ही उनकी पुष्टि करें।</span>
              </p>
            </div>
          </section>

          <section className="section offer-section">
            <SectionHeading
              eyebrow="🎁 Special Parent Offer"
              title="AyurVani के साथ पाएं"
              description="बच्चे की daily routine के लिए supportive resources।"
            />
            <ul className="offer-list">
              <li><span>🌿</span><span><strong>AyurVani Herbal Support</strong></span></li>
              <li><span>🎁</span><span><strong>FREE Diet Chart</strong><small>बच्चे की daily routine के लिए simple diet guidance।</small></span></li>
              <li><span>🗣️</span><span><strong>Speech Practice Routine</strong><small>घर पर relaxed speech practice के लिए simple routine।</small></span></li>
              <li><span>📋</span><span><strong>Weekly Progress Report</strong><small>बच्चे की routine और progress को track करने के लिए।</small></span></li>
              <li><span>🚚</span><span><strong>Home Delivery</strong></span></li>
              <li><span>🔒</span><span><strong>Secure Order</strong></span></li>
            </ul>
            <a className="button button-primary offer-cta" href="#order">
              अभी AyurVani Order करें <ArrowRight size={16} />
            </a>
          </section>

          <section className="section order-section" id="order">
            <SectionHeading
              eyebrow="Order Now"
              title="अपने बच्चे के लिए AyurVani मंगाएँ"
              description="सिर्फ 2 जानकारी भरें"
            />
            <form className="order-form" onSubmit={handleSubmit}>
              <label htmlFor="name">आपका नाम</label>
              <input id="name" name="name" autoComplete="name" placeholder="अपना नाम" required />
              <label htmlFor="phone">मोबाइल नंबर</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                inputMode="numeric"
                autoComplete="tel"
                pattern="[0-9]{10}"
                minLength={10}
                maxLength={10}
                placeholder="10 Digit Mobile Number"
                aria-describedby="phone-hint"
                required
              />
              <span className="field-hint" id="phone-hint">कृपया 10 अंकों का मोबाइल नंबर भरें।</span>
              <button className="button button-primary form-button" type="submit">
                अभी Order करें <ArrowRight size={16} />
              </button>
              <p className="privacy-note">
                <ShieldCheck size={15} /> आपकी जानकारी सुरक्षित रखी जाएगी।
              </p>
              {formMessage && (
                <p className="form-message" role="status">{formMessage}</p>
              )}
            </form>
          </section>

          <section className="section faq-section" id="faq">
            <SectionHeading
              eyebrow="FAQ"
              title="हकलापन और AyurVani से जुड़े सवाल"
            />
            <div className="faq-list">
              {faqs.map((faq, index) => (
                <details className="faq-item" key={faq.question}>
                  <summary>
                    <span><b>{index + 1}.</b> {faq.question}</span>
                    <ChevronDown size={17} aria-hidden="true" />
                  </summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>

          <section className="closing-section">
            <span className="closing-mark"><Heart size={20} /></span>
            <span className="eyebrow">अंतिम संदेश</span>
            <h2>बच्चे के हकलापन को नजरअंदाज न करें</h2>
            <p>आज बच्चा सिर्फ शब्दों में अटक रहा है। कल वही हकलापन उसके confidence और communication को भी प्रभावित कर सकता है।</p>
            <p>उसे डराने की जरूरत नहीं।<br />उसे समझने की जरूरत है।<br />उसे समय देने की जरूरत है।<br />और उसकी daily routine को सही support देने की जरूरत है।</p>
            <strong className="closing-brand"><Sprout size={19} /> AyurVani</strong>
            <span className="closing-caption">हकलापन के लिए Ayurvedic Herbal Daily Support</span>
            <a className="button button-light" href="#order">
              अभी AyurVani Order करें <ArrowRight size={16} />
            </a>
          </section>
        </main>

        <footer className="footer">
          <p className="footer-brand"><Sprout size={16} /> AyurVani</p>
          <div className="footer-disclaimer">
            <strong>Disclaimer</strong>
            <p>
              यह जानकारी सामान्य wellness education के लिए है, medical advice, diagnosis या treatment का विकल्प नहीं। हकलापन के लिए AyurVani के guaranteed cure या result का दावा नहीं किया जाता। चिंता बनी रहे, बढ़े या बोलने में बहुत struggle हो, तो qualified Speech-Language Pathologist या healthcare professional से सलाह लें। Product का उपयोग label और qualified professional की सलाह के अनुसार करें।
            </p>
          </div>
          <a href="#home" className="back-to-top">वापस ऊपर जाएँ ↑</a>
        </footer>
      </div>
    </>
  )
}

export default App
