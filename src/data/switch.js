import ButtonsView from '../pages/ButtonsView';
import CardsView from '../pages/CardsView';
import ButtonContentView from '../components/contents/ButtonContentView';
import ButtonMultiSelectView from '../components/contents/ButtonMultiSelectView';
import AffixView from '../components/contents/AffixView';
import OtherView from '../components/contents/OtherView';

const dataSwitch = {
   routerD: [
      {
         path: '/button',
         component: ButtonsView,
         key: 1
      },
      {
         path: '/icon',
         component: CardsView,
         key: 2
      },
      {
         path: '/card',
         component: ButtonContentView,
         key: 3
      },
      {
         path: '/card-code',
         component: ButtonMultiSelectView,
         key: 4
      },
      {
         path: '/affix',
         component: AffixView,
         key: 5
      },
      {
         path: '/anchor',
         component: OtherView,
         key: 6
      },
   ]
};
export default dataSwitch;