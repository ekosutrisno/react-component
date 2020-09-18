const dataRouter = {
   // activePath: props.location.pathname,

   generalSubItems: [
      {
         path: '/button', /* path is used as id to check which NavItem is active basically */
         name: 'button',
         css: 'fa fa-fw fa-home',
         label: 'Button',
         key: 1 /* Key is required, else console throws error. Does this please you Mr. Browser?! */
      },
      {
         path: '/icon',
         name: 'icon',
         css: 'fa fa-fw fa-clock',
         label: 'Icon',
         key: 2
      },
      {
         path: '/button',
         name: 'typography',
         css: 'fas fa-hashtag',
         label: 'Typography',
         key: 3
      },
      {
         path: '/card',
         name: 'card',
         css: 'fas fa-hashtag',
         label: 'CardsView',
         key: 4
      },
      {
         path: '/card-code',
         name: 'card-code',
         css: 'fas fa-hashtag',
         label: 'Card Code',
         key: 5
      },
   ],
   layoutSubItems: [
      {
         path: 'devider/', /* path is used as id to check which NavItem is active basically */
         name: 'devider',
         css: 'fa fa-fw fa-home',
         label: 'Devider',
         key: 6 /* Key is required, else console throws error. Does this please you Mr. Browser?! */
      },
      {
         path: '/grid',
         name: 'grid',
         css: 'fa fa-fw fa-clock',
         label: 'Grid',
         key: 7
      },
      {
         path: '/layout',
         name: 'layout',
         css: 'fas fa-hashtag',
         label: 'Layout',
         key: 8
      },
      {
         path: '/space',
         name: 'space',
         css: 'fas fa-hashtag',
         label: 'Space',
         key: 9
      },
   ],
   navigationSubItems: [
      {
         path: '/affix', /* path is used as id to check which NavItem is active basically */
         name: 'affix',
         css: 'fa fa-fw fa-home',
         label: 'Affix',
         key: 10 /* Key is required, else console throws error. Does this please you Mr. Browser?! */
      },
      {
         path: '/breadcrumb',
         name: 'breadcrumb',
         css: 'fa fa-fw fa-clock',
         label: 'Breadcrumb',
         key: 11
      },
      {
         path: '/dropdown',
         name: 'dropdown',
         css: 'fas fa-hashtag',
         label: 'Dropdown',
         key: 12
      },
      {
         path: '/menu',
         name: 'menu',
         css: 'fas fa-hashtag',
         label: 'Menu',
         key: 13
      },
      {
         path: '/pagination',
         name: 'pagination',
         css: 'fa fa-fw fa-clock',
         label: 'Pagination',
         key: 14
      },
      {
         path: '/pageHeader',
         name: 'pageheader',
         css: 'fas fa-hashtag',
         label: 'Page Header',
         key: 15
      },
      {
         path: '/steps',
         name: 'steps',
         css: 'fas fa-hashtag',
         label: 'Steps',
         key: 16
      },
   ],
   dataEntrySubItems: [
      {
         path: '/autoComplete', /* path is used as id to check which NavItem is active basically */
         name: 'autoComplete',
         css: 'fa fa-fw fa-home',
         label: 'Auto Complete',
         key: 17 /* Key is required, else console throws error. Does this please you Mr. Browser?! */
      },
      {
         path: '/checbox',
         name: 'checkbox',
         css: 'fa fa-fw fa-clock',
         label: 'Checkbox',
         key: 18
      },
      {
         path: '/cascader',
         name: 'cascader',
         css: 'fas fa-hashtag',
         label: 'Cascader',
         key: 19
      },
      {
         path: '/datePicker',
         name: 'datePicker',
         css: 'fas fa-hashtag',
         label: 'Date Picker',
         key: 20
      },
      {
         path: '/form',
         name: 'form',
         css: 'fa fa-fw fa-clock',
         label: 'Form',
         key: 21
      },
      {
         path: '/inputNumber',
         name: 'inputNumber',
         css: 'fas fa-hashtag',
         label: 'Input Number',
         key: 22
      },
      {
         path: '/input',
         name: 'input',
         css: 'fas fa-hashtag',
         label: 'Input',
         key: 23
      },
      {
         path: '/mentions',
         name: 'mentions',
         css: 'fa fa-fw fa-clock',
         label: 'Mentions',
         key: 24
      },
      {
         path: '/rate',
         name: 'rate',
         css: 'fas fa-hashtag',
         label: 'Rate',
         key: 25
      },
      {
         path: '/radio',
         name: 'radio',
         css: 'fas fa-hashtag',
         label: 'Radio',
         key: 26
      },
      {
         path: '/switch',
         name: 'switch',
         css: 'fa fa-fw fa-clock',
         label: 'Switch',
         key: 27
      },
      {
         path: '/slider',
         name: 'slider',
         css: 'fas fa-hashtag',
         label: 'Slider',
         key: 28
      },
      {
         path: '/select',
         name: 'select',
         css: 'fas fa-hashtag',
         label: 'Select',
         key: 29
      },
      {
         path: '/treeSelect',
         name: 'treeSelect',
         css: 'fas fa-hashtag',
         label: 'Tree Select',
         key: 30
      },
      {
         path: '/transfer',
         name: 'transfer',
         css: 'fas fa-hashtag',
         label: 'Transfer',
         key: 31
      },
      {
         path: '/timePicker',
         name: 'timePicker',
         css: 'fa fa-fw fa-clock',
         label: 'Time Picker',
         key: 32
      },
      {
         path: '/upload',
         name: 'upload',
         css: 'fas fa-hashtag',
         label: 'Upload',
         key: 33
      },
   ],
   defaultSubInto: [
      {
         path: '/introduction',
         name: 'introduction',
         css: 'fa fa-fw fa-info',
         label: 'Introduction',
         key: 34
      },
      {
         path: '/installation',
         name: 'installation',
         css: 'fas fa-gear',
         label: 'Installation',
         key: 35
      },
      {
         path: '/config',
         name: 'config',
         css: 'fas fa-question',
         label: 'Config',
         key: 36
      },
   ],
   otherItems: [
      {
         path: '/anchor',
         name: 'anchor',
         css: 'fa fa-fw fa-info',
         label: 'Anchor',
         key: 37
      },
      {
         path: '/back-top',
         name: 'backtop',
         css: 'fas fa-gear',
         label: 'Back top',
         key: 38
      },
      {
         path: '/config-provider',
         name: 'configprovider',
         css: 'fas fa-question',
         label: 'Config provider',
         key: 39
      },
      {
         path: '/design',
         name: 'design',
         css: 'fas fa-question',
         label: 'Design',
         key: 40
      },
   ]
};
export default dataRouter;