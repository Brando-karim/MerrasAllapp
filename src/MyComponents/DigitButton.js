import React from 'react';
import { ACTIONS } from './calculatrice'; // Assurez-vous d'importer ACTIONS correctement

function DigitButton({ digit, dispatch }) {
  return (
    <button
      onClick={() =>
        dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })
      }
    >
      {digit}
    </button>
  );
}

export default DigitButton;
