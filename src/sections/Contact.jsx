import { useState } from 'react';
import { Icon } from '../components/ui/Icon';
import { LogoMark } from '../components/brand/Logo';
import { site } from '../config/site';
import './Contact.css';

function ContactLink({ href, icon, label, value }) {
  return (
    <a className="contact-link" href={href} target="_blank" rel="noopener noreferrer">
      <span className="contact-link__icon">
        <Icon name={icon} size={22} />
      </span>
      <span className="contact-link__text">
        <span className="contact-link__label mono">{label}</span>
        <span className="contact-link__value">{value}</span>
      </span>
      <Icon name="arrow" size={20} className="contact-link__arrow" />
    </a>
  );
}

/** E-mail exibido como texto copiável (links mailto nem sempre funcionam). */
function CopyEmail({ email }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(document.getElementById('contato-email'));
      selection.removeAllRanges();
      selection.addRange(range);
    }
  };

  return (
    <div className="contact-link contact-link--static">
      <span className="contact-link__icon">
        <Icon name="mail" size={22} />
      </span>
      <span className="contact-link__text">
        <span className="contact-link__label mono">e-mail</span>
        <span id="contato-email" className="contact-link__value contact-link__value--sm">
          {email}
        </span>
      </span>
      <button type="button" className="copy-button" onClick={copy} aria-live="polite">
        <Icon name={copied ? 'check' : 'copy'} size={16} />
        {copied ? 'Copiado' : 'Copiar'}
      </button>
    </div>
  );
}

export function Contact() {
  const { contact } = site;

  return (
    <section id="contato" className="contact">
      <div className="contact__inner container">
        <div className="contact__copy">
          <span className="contact__path mono">~/elitech/contato</span>
          <h2 className="contact__title">
            Tem uma ideia?
            <br />
            Vamos tirar do papel.
          </h2>
          <p className="contact__lead">Atendemos {site.region}. Respondemos rápido pelo WhatsApp e pelo Instagram.</p>
          <div className="contact__seal" aria-hidden="true">
            <LogoMark size={96} />
          </div>
        </div>

        <div className="contact__links">
          <ContactLink href={contact.whatsappUrl} icon="whatsapp" label="whatsapp" value={contact.phoneLabel} />
          <ContactLink
            href={contact.instagramUrl}
            icon="instagram"
            label="instagram"
            value={contact.instagramHandle}
          />
          <CopyEmail email={contact.email} />
        </div>
      </div>
    </section>
  );
}
