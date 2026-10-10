/**
 * Dados institucionais da EliTech.
 * Alterar aqui atualiza navbar, hero, contato e rodapé de uma vez.
 */
const PHONE_DIGITS = '5521971268667';

export const site = Object.freeze({
  name: 'EliTech',
  legalName: 'EliTech Tecnologia e Segurança',
  tagline: 'Você imagina, nós desenvolvemos.',
  city: 'Maricá, RJ',
  region: 'Maricá e região',

  contact: {
    phoneLabel: '(21) 97126-8667',
    whatsappUrl: `https://wa.me/${PHONE_DIGITS}?text=${encodeURIComponent(
      'Olá, EliTech! Vim pelo site e gostaria de um orçamento.',
    )}`,
    instagramHandle: '@elitech.dev',
    instagramUrl: 'https://www.instagram.com/elitech.dev/',
    email: 'elisson.brito.contato@gmail.com',
  },
});
