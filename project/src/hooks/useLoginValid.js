export const blurHandler = (evt, email, setEmail, password, setPassword) => {
  switch(evt.target.name) {
    case 'email':
      setEmail({...email, dirty: true});
      break
    case 'password':
      setPassword({...password, dirty: true});
      break
    default:
  }
};

export const focusHandler = (
  evt,
  email,
  setEmail,
  password,
  setPassword) => {
  switch(evt.target.name) {
    case 'email':
      setEmail({...email, dirty: false});
      break
    case 'password':
      setPassword({...password, dirty: false});
      break
    default:
  }
};

export const emailHandler = (evt, email, setEmail) => {
  const re = /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!re.test(String(evt.target.value).toLowerCase())) {
    setEmail({...email, error: 'Некорректный емейл'});
    if (!evt.target.value) {
      setEmail({...email, error: 'Емейл не может быть пустым'});
    }
  } else {
      setEmail({...email, error: '', login: evt.target.value});
    }
};

export const passwordHandler = (evt, password, setPassword) => {
  if (evt.target.value.length < 8) {
    setPassword({...password, error: 'Пароль должен быть длиннее 8 символов'});
    if (!evt.target.value) {
      setPassword({...password, error: 'Пароль не может быть пустым'});
    }
  } else if (evt.target.value.match(/[а-яА-ЯЁё]/ig) !== null) {
      setPassword({...password, error: 'Не используйте кириллицу'});
    } else {
        setPassword({...password, error: ''});
      }
};
