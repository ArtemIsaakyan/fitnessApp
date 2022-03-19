import React from 'react';
import axios from 'axios';
import classNames from 'classnames';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import './Calculate.scss';

export default function Calcualte({ userId }) {
  const [concluison, setConcluison] = React.useState('');
  const [recomendedCalories, setRecomendedCalories] = React.useState('');
  const [reciveExercises, setReciveExercises] = React.useState(''); // получаем выборку из exercises
  const [exercises, setExercises] = React.useState(''); // получаем массив с упражнениями для занятий в зале
  const [active, setActive] = React.useState('');
  const [status, setStatus] = React.useState(false);
  const [homeExercises, setHomeExercises] = React.useState(''); // получаем массив со всеми упражнениями для занятий дома
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);

  const handleClick1 = () => {
    setOpen1(!open1);
  };

  const handleClick2 = () => {
    setOpen2(!open2);
  };

  const handleClick3 = () => {
    setOpen3(!open3);
  };

  function selectUser() {
    if (userId === 'default') {
      alert('Ошибка: вы не выбрали пользователя');
    } else {
      let requestUsers = axios.get(
        `https://618101ae8bfae60017adfd5e.mockapi.io/users/?id=${userId}`,
      );
      requestUsers
        .then(function (response) {
          calculateIMT(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }

  React.useEffect(() => {
    async function fetchData() {
      try {
        const [exercisesResponse, homeExercisesResponse] = await Promise.all([
          axios.get('https://618101ae8bfae60017adfd5e.mockapi.io/newExercises'),
          axios.get('https://618101ae8bfae60017adfd5e.mockapi.io/homeExercises'),
        ]);
        setExercises(exercisesResponse.data);
        setHomeExercises(homeExercisesResponse.data);
      } catch (error) {
        alert('Ошибка при запросе данных');
        console.error(error);
      }
    }
    fetchData();
  }, []);
  function calculateIMT(data) {
    // формула по расчету СТЕПЕНИ ОЖИРЕНИЯ
    let valueIMT = data[0].weight / Math.pow(data[0].height / 100, 2);
    // формула по расчету ПОТРЕБЛЕНИЯ КАЛОРИЙ
    if (data[0].sex === 'm') {
      let BMR = 88.36 + 13.4 * data[0].weight + 4.8 * data[0].height - 5.7 * data[0].age;
      if (data[0].physicalActivity === 'noActivity') {
        setRecomendedCalories(BMR * 1.2);
      } else if (data[0].physicalActivity === 'lowActivity') {
        setRecomendedCalories(BMR * 1.375);
      } else if (data[0].physicalActivity === 'mediumActivity') {
        setRecomendedCalories(BMR * 1.55);
      } else if (data[0].physicalActivity === 'highActivity') {
        setRecomendedCalories(BMR * 1.725);
      }
    } else {
      let BMR = 447.6 + 9.2 * data[0].weight + 3.1 * data[0].height - 4.3 * data[0].age;
      if (data[0].physicalActivity === 'noActivity') {
        setRecomendedCalories(BMR * 1.2);
      } else if (data[0].physicalActivity === 'lowActivity') {
        setRecomendedCalories(BMR * 1.375);
      } else if (data[0].physicalActivity === 'mediumActivity') {
        setRecomendedCalories(BMR * 1.55);
      } else if (data[0].physicalActivity === 'highActivity') {
        setRecomendedCalories(BMR * 1.725);
      }
    }

    if (data[0]['opportunity'] === 'gym') {
      if (valueIMT <= 16) {
        setConcluison('Выраженный дефицит массы тела');
        setReciveExercises(exercises[0]['Выраженный дефицит массы тела']);
      } else if (valueIMT > 18.5 && valueIMT <= 25) {
        setConcluison('Норма');
        setReciveExercises(exercises[0]['Норма']);
      } else if (valueIMT > 25 && valueIMT <= 30) {
        setConcluison('Избыточная масса тела (предожирение)');
        setReciveExercises(exercises[0]['Избыточная масса тела (предожирение)']);
      } else if (valueIMT > 30 && valueIMT <= 35) {
        setConcluison('Ожирение первой степени');
        setReciveExercises(exercises[0]['Ожирение первой степени']);
      } else if (valueIMT > 35 && valueIMT <= 40) {
        setConcluison('Ожирение второй степени');
        setReciveExercises(exercises[0]['Ожирение второй степени']);
      } else if (valueIMT > 40) {
        setConcluison('Ожирение третьей степени (морбидное)');
        setReciveExercises(exercises[0]['Ожирение третьей степени (морбидное)']);
      }
    } else if (data[0]['opportunity'] === 'home') {
      if (valueIMT <= 16) {
        setConcluison('Выраженный дефицит массы тела');
        setReciveExercises(homeExercises[0]['Выраженный дефицит массы тела']);
      } else if (valueIMT > 18.5 && valueIMT <= 25) {
        setConcluison('Норма');
        setReciveExercises(homeExercises[0]['Норма']);
      } else if (valueIMT > 25 && valueIMT <= 30) {
        setConcluison('Избыточная масса тела (предожирение)');
        setReciveExercises(homeExercises[0]['Избыточная масса тела (предожирение)']);
      } else if (valueIMT > 30 && valueIMT <= 35) {
        setConcluison('Ожирение первой степени');
        setReciveExercises(homeExercises[0]['Ожирение первой степени']);
      } else if (valueIMT > 35 && valueIMT <= 40) {
        setConcluison('Ожирение второй степени');
        setReciveExercises(homeExercises[0]['Ожирение второй степени']);
      } else if (valueIMT > 40) {
        setConcluison('Ожирение третьей степени (морбидное)');
        setReciveExercises(homeExercises[0]['Ожирение третьей степени (морбидное)']);
      }
    }
  }
  function btnShowImage(id, st) {
    setActive(id);
    setStatus(!st);
  }

  return (
    <React.Fragment>
      <Stack className="calcualteBtn" direction="row" spacing={2}>
        <Button variant="contained" color="success" onClick={() => selectUser()}>
          Создать
        </Button>
      </Stack>

      <div className="info_block">
        {concluison && <div>Расчёт индекса массы тела: {concluison} </div>}
        {recomendedCalories && (
          <div>Суточная норма калорий: {recomendedCalories.toFixed(0)} ккал</div>
        )}
      </div>
      <div className="mobile">
        {concluison && (
          <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', margin: '0 auto' }}
            component="nav"
            aria-labelledby="nested-list-subheader">
            <ListItemButton onClick={handleClick1}>
              <ListItemText primary="Тренировка №1" />
              {open1 ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open1} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 0, display: 'block' }}>
                  {reciveExercises &&
                    reciveExercises['first_day'].map((item) => (
                      <React.Fragment>
                        <ListItemButton>
                          <ListItemText primary={item.name} />
                        </ListItemButton>
                        <Collapse in={true} timeout="auto" unmountOnExit>
                          <List component="div" disablePadding>
                            <ListItemButton
                              sx={{ display: 'flex', justifyContent: 'space-between' }}>
                              <div className="block-left">
                                <ListItemText primary={`Подходы: ${item.approaches}`} />
                                <ListItemText primary={`Повторения: ${item.repetitions}`} />
                              </div>
                              {item.id === active && status ? (
                                <Button
                                  variant="outlined"
                                  color="error"
                                  onClick={() => btnShowImage(item.id, status)}>
                                  СКРЫТЬ
                                </Button>
                              ) : (
                                <div className="buttons-block">
                                  <Button
                                    variant="outlined"
                                    color="success"
                                    className="buttonImage"
                                    onClick={() => btnShowImage(item.id, status)}>
                                    нагрузка
                                  </Button>
                                  <a className="video" href={`${item.video}`}>
                                    ВИДЕО
                                  </a>
                                </div>
                              )}
                            </ListItemButton>
                            <div
                              className={classNames(
                                'image',
                                item.id,
                                item.id === active
                                  ? status && {
                                      active: status ? status : status,
                                    }
                                  : null,
                              )}>
                              <img src={`Assets/images/${item.image}.png`} alt={item.image} />
                            </div>
                          </List>
                        </Collapse>
                      </React.Fragment>
                    ))}
                </ListItemButton>
              </List>
            </Collapse>
          </List>
        )}
        {concluison && (
          <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', margin: '0 auto' }}
            component="nav"
            aria-labelledby="nested-list-subheader">
            <ListItemButton onClick={handleClick2}>
              <ListItemText primary="Тренировка №2" />
              {open2 ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open2} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 0, display: 'block' }}>
                  {reciveExercises &&
                    reciveExercises['second_day'].map((item) => (
                      <React.Fragment>
                        <ListItemButton>
                          <ListItemText primary={item.name} />
                        </ListItemButton>
                        <Collapse in={true} timeout="auto" unmountOnExit>
                          <List component="div" disablePadding>
                            <ListItemButton
                              sx={{ display: 'flex', justifyContent: 'space-between' }}>
                              <div className="block-left">
                                <ListItemText primary={`Подходы: ${item.approaches}`} />
                                <ListItemText primary={`Повторения: ${item.repetitions}`} />
                              </div>
                              {item.id === active && status ? (
                                <Button
                                  variant="outlined"
                                  color="error"
                                  onClick={() => btnShowImage(item.id, status)}>
                                  СКРЫТЬ
                                </Button>
                              ) : (
                                <div className="buttons-block">
                                  <Button
                                    variant="outlined"
                                    color="success"
                                    className="buttonImage"
                                    onClick={() => btnShowImage(item.id, status)}>
                                    нагрузка
                                  </Button>
                                  <a className="video" href={`${item.video}`}>
                                    ВИДЕО
                                  </a>
                                </div>
                              )}
                            </ListItemButton>
                            <div
                              className={classNames(
                                'image',
                                item.id,
                                item.id === active
                                  ? status && {
                                      active: status ? status : status,
                                    }
                                  : null,
                              )}>
                              <img src={`Assets/images/${item.image}.png`} alt={item.image} />
                            </div>
                          </List>
                        </Collapse>
                      </React.Fragment>
                    ))}
                </ListItemButton>
              </List>
            </Collapse>
          </List>
        )}
        {concluison && (
          <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', margin: '0 auto' }}
            component="nav"
            aria-labelledby="nested-list-subheader">
            <ListItemButton onClick={handleClick3}>
              <ListItemText primary="Тренировка №3" />
              {open3 ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open3} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 0, display: 'block' }}>
                  {reciveExercises &&
                    reciveExercises['third_day'].map((item) => (
                      <React.Fragment>
                        <ListItemButton>
                          <ListItemText primary={item.name} />
                        </ListItemButton>
                        <Collapse in={true} timeout="auto" unmountOnExit>
                          <List component="div" disablePadding>
                            <ListItemButton
                              sx={{ display: 'flex', justifyContent: 'space-between' }}>
                              <div className="block-left">
                                <ListItemText primary={`Подходы: ${item.approaches}`} />
                                <ListItemText primary={`Повторения: ${item.repetitions}`} />
                              </div>
                              {item.id === active && status ? (
                                <Button
                                  variant="outlined"
                                  color="error"
                                  onClick={() => btnShowImage(item.id, status)}>
                                  СКРЫТЬ
                                </Button>
                              ) : (
                                <div className="buttons-block">
                                  <Button
                                    variant="outlined"
                                    color="success"
                                    className="buttonImage"
                                    onClick={() => btnShowImage(item.id, status)}>
                                    нагрузка
                                  </Button>
                                  <a className="video" href={`${item.video}`}>
                                    ВИДЕО
                                  </a>
                                </div>
                              )}
                            </ListItemButton>
                            <div
                              className={classNames(
                                'image',
                                item.id,
                                item.id === active
                                  ? status && {
                                      active: status ? status : status,
                                    }
                                  : null,
                              )}>
                              <img src={`Assets/images/${item.image}.png`} alt={item.image} />
                            </div>
                          </List>
                        </Collapse>
                      </React.Fragment>
                    ))}
                </ListItemButton>
              </List>
            </Collapse>
          </List>
        )}
      </div>
    </React.Fragment>
  );
}
