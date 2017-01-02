import { ACTIVITY_UPDATE } from '../constants/actionTypes';
import { DRAW } from '../constants/modes';

export default function release(Dispatcher, Store) {
  switch (Store.getMode()) {

    case DRAW:
      Dispatcher.dispatch({
        type: ACTIVITY_UPDATE,
        inProgress: false,
      });
      break;

  }
}
