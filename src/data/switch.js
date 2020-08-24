import ButtonsView from '../pages/ButtonsView';
import CardsView from '../pages/CardsView';
import ButtonContentView from '../components/contents/ButtonContentView';

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
   ]
};
export default dataSwitch;