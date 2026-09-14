import { INSTAGRAM_URL, WHATSAPP_URL } from './config/constants';
import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Páginas',
      links: [
        {
          text: 'Home',
          href: getPermalink('/'),
        },
        {
          text: 'Portfólio',
          href: getPermalink('/servicos/portfolio'),
        },
        // {
        //   text: 'SaaS1',
        //   href: getPermalink('/homes/saas'),
        // },
        // {
        //   text: 'Startup',
        //   href: getPermalink('/homes/startup'),
        // },
        // {
        //   text: 'Mobile App',
        //   href: getPermalink('/homes/mobile-app'),
        // },
        // {
        //   text: 'Personal',
        //   href: getPermalink('/homes/personal'),
        // },
      ],
    },
    // {
    //   text: 'Pages',
    //   links: [
    //     {
    //       text: 'Features (Anchor Link)',
    //       href: getPermalink('/#features'),
    //     },
    //     {
    //       text: 'Services',
    //       href: getPermalink('/services'),
    //     },
    //     {
    //       text: 'Pricing',
    //       href: getPermalink('/pricing'),
    //     },
    //     {
    //       text: 'About us',
    //       href: getPermalink('/about'),
    //     },
    //     {
    //       text: 'Contact',
    //       href: getPermalink('/contact'),
    //     },
    //     {
    //       text: 'Terms',
    //       href: getPermalink('/terms'),
    //     },
    //     {
    //       text: 'Privacy policy',
    //       href: getPermalink('/privacy'),
    //     },
    //     {
    //       text: 'Projeto Elétrico Residencial',
    //       href: getPermalink('/projeto-eletrico-residencial'),
    //     },
    //   ],
    // },
    // {
    //   text: 'Landing',
    //   links: [
    //     {
    //       text: 'Lead Generation',
    //       href: getPermalink('/landing/lead-generation'),
    //     },
    //     {
    //       text: 'Long-form Sales',
    //       href: getPermalink('/landing/sales'),
    //     },
    //     {
    //       text: 'Click-Through',
    //       href: getPermalink('/landing/click-through'),
    //     },
    //     {
    //       text: 'Product Details (or Services)',
    //       href: getPermalink('/landing/product'),
    //     },
    //     {
    //       text: 'Coming Soon or Pre-Launch',
    //       href: getPermalink('/landing/pre-launch'),
    //     },
    //     {
    //       text: 'Subscription',
    //       href: getPermalink('/landing/subscription'),
    //     },
    //   ],
    // },
    // {
    //   text: 'Blog',
    //   links: [
    //     {
    //       text: 'Blog List',
    //       href: getBlogPermalink(),
    //     },
    //     {
    //       text: 'Article',
    //       href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
    //     },
    //     {
    //       text: 'Article (with MDX)',
    //       href: getPermalink('markdown-elements-demo-post', 'post'),
    //     },
    //     {
    //       text: 'Category Page',
    //       href: getPermalink('tutorials', 'category'),
    //     },
    //     {
    //       text: 'Tag Page',
    //       href: getPermalink('astro', 'tag'),
    //     },
    //   ],
    // },
    // {
    //   text: 'Widgets',
    //   href: '#',
    // },
  ],
  actions: [{
          variant: 'primary',
          text: 'WhatsApp',
          href: WHATSAPP_URL,
          icon: 'tabler:brand-whatsapp',
          target: '_blank'
        },],
};

export const footerData = {
  links: [
    {
      title: '',
      links: [
        { text: 'Contato', href: '#' },
        { text: 'Portfólio', href: '#' },
        { text: 'Política de Privacidade', href: getPermalink('/privacy') },
      ],
    },
    
  ],
  // secondaryLinks: [
  //   { text: 'Política de Privacidade', href: getPermalink('/privacy') },
   
  // ],
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: INSTAGRAM_URL },
    { ariaLabel: 'WhatsApp', icon: 'tabler:brand-whatsapp', href: WHATSAPP_URL },
    // { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    // { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    // { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  ],
  footNote: `
    <a class="text-blue-600 underline dark:text-muted" href=""> Brok Soluções Elétricas</a> · Todos os direitos reservados.
  `,
};
