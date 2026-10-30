/**
 * Dados pessoais do portfólio.
 * Alterar aqui atualiza navbar, hero, contato e rodapé de uma vez.
 */
const PHONE_DIGITS = '5521971268667';

export const site = Object.freeze({
  name: 'Élisson Brito',
  fullName: 'Élisson Jorge de Brito Conceição',
  role: 'Dados, backend e produtos digitais',
  tagline: 'Transformo papel e planilha em sistema e painel.',
  city: 'Maricá, RJ',
  handle: 'elisson',

  contact: {
    linkedinHandle: 'in/elissonjbrito',
    linkedinUrl: 'https://www.linkedin.com/in/elissonjbrito/',
    githubHandle: '@elissonjbrito',
    githubUrl: 'https://github.com/elissonjbrito',
    phoneLabel: '(21) 97126-8667',
    whatsappUrl: `https://wa.me/${PHONE_DIGITS}?text=${encodeURIComponent(
      'Olá, Élisson! Vi seu portfólio e gostaria de conversar.',
    )}`,
    email: 'elisson.brito.contato@gmail.com',
  },
});
