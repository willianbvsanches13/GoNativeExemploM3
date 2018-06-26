const INITIAL_STATE = [
  'Fazer café',
  'Estudar Gonative',
];

export default function todos(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.text];
    default:
      return state;
  }
}
