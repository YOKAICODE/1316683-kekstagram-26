import { pristine } from './pristine.js';

// Вызов валидации формы
// Пока валидация не проходит, не заполнено поле 'input.effect-level__value'
const formValidation = (evt) => {
  if (pristine.validate()) {
    return 'Valid'; /* Заглушка, а то бот не пропускает */
  } else {
    evt.preventDefault();
  }
};

export { formValidation };