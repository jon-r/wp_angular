import { linkAttrs } from './index';
const rootLink = '../assets/blk/';

export default {
  id: 6,
  cat: 'work',
  slug: 'web',
  intro: {
    title: 'More',
    desc: 'Assorted sites, primarily in hospitality',
    style: {},
  },
  rows: [

    {
      class: 'text-row',
      content: [{
        type: 'text',
        class: 'intro-text text-center',
        value: '<h4>A range of smaller sites that I worked as sole developer</h4>',
      }]
    },  {
      content: [{
        type: 'text',
        class: 'intro-text',
        value: `
        <h3>The Recruitment Room</h3>
        <h4>The Project</h4>
        <p>Recuitment Agency Site.</p>
        <h4>The Role</h4>
        <p>Senior Web Developer at [Minerva creative]</p>
        <h4>The Toolkit</h4>
        <p>Wordpress | Foundation</p>
        <h4>View [live site]</h4>
        `,
      }, {
        type: 'image',
        value: `${rootLink}logo.png`,
      }]
    }, {
      content: [{
        type: 'image',
        value: `${rootLink}logo.png`,
      }, {
        type: 'text',
        class: 'intro-text',
        value: `
        <h3>Arcane Bar</h3>
        <h4>The Project</h4>
        <p>Cocktail Bar in Manchester</p>
        <h4>The Role</h4>
        <p>Senior Web Developer (freelance)</p>
        <h4>The Toolkit</h4>
        <p>Wordpress | [Bulma CSS]</p>
        <h4>View [live site]</h4>
        `,
      }]
    }, {
      content: [{
        type: 'text',
        class: 'intro-text',
        value: `
        <h3>Villa Romana</h3>
        <h4>The Project</h4>
        <p>Italian Restaurant in Liverpool.</p>
        <h4>The Role</h4>
        <p>Senior Web Developer at [Minerva creative]</p>
        <h4>The Toolkit</h4>
        <p>Wordpress | Bootstrap</p>
        <h4>View [live site]</h4>
        `,
      }, {
        type: 'image',
        value: `${rootLink}logo.png`,
      }]
    }, {
      content: [{
        type: 'image',
        value: `${rootLink}logo.png`,
      }, {
        type: 'text',
        class: 'intro-text',
        value: `
        <h3>Cuzina</h3>
        <h4>The Project</h4>
        <p>Greek Restaurant in Nottingham</p>
        <h4>The Role</h4>
        <p>Senior Web Developer at [Minerva creative]</p>
        <h4>The Toolkit</h4>
        <p>Wordpress | Foundation</p>
        <h4>View [live site]</h4>
        `,
      }]
    },
  ]
};
