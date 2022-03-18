import * as React from 'react';
import axios from 'axios';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import * as Mui from '@material-ui/core';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import TextField from '@mui/material/TextField';

import './Progress.scss';
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function Progress() {
  const [users, setUsers] = React.useState([]);
  const [progress, setProgress] = React.useState([]);
  const [res, setRes] = React.useState('');
  const [user, selectUser] = React.useState('default');
  const [weight, setWeight] = React.useState('');
  const [date, setDate] = React.useState('');
  React.useEffect(() => {
    async function fetchData() {
      try {
        const [usersResponse, progressResponse] = await Promise.all([
          axios.get('https://618101ae8bfae60017adfd5e.mockapi.io/users'),
          axios.get('https://618101ae8bfae60017adfd5e.mockapi.io/progress'),
        ]);
        setUsers(usersResponse.data);
        setProgress(progressResponse.data);
      } catch (error) {
        alert('Ошибка при запросе данных');
        console.error(error);
      }
    }

    fetchData();
  }, []);
  const handleChange = (event) => {
    selectUser(event.target.value);
  };

  const handleChangeWeight = (event) => {
    setWeight(event.target.value);
  };

  const handleChangeDate = (event) => {
    setDate(event);
  };

  function saveProgress() {
    console.log(user);
    if (user && weight && date) {
      axios
        .post(`https://618101ae8bfae60017adfd5e.mockapi.io/progress`, {
          userId: user,
          weight: weight,
          date: `'${date}'`.slice(0, 16),
        })
        .then(function (response) {
          alert('Данные сохранились');
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      alert('Не все поля заполнены!');
    }
  }
  const resultProgress = [];
  function createBar(user) {
    if (user !== 'default') {
      progress.filter(function (val) {
        if (val.userId === user) {
          return resultProgress.push(val);
        } else {
          return null;
        }
      });
      setRes(resultProgress);
    } else {
      alert('Ошибка: не выбран пользователь!');
    }
  }

  if (res) {
    var options = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Вес',
        },
      },
    };

    const labels = res.map((val) => val.date);

    var data = {
      labels,
      datasets: [
        {
          label: 'вес',
          data: res.map((val) => val.weight),
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
      ],
    };
  }

  return (
    <React.Fragment>
      <h2 className="header-creator">Прогресс</h2>
      <div className="block">
        <Box sx={{ maxWidth: 240 }} className="blocks">
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Выбрать пользователя</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={user}
              label="Выбрать пользователя"
              onChange={handleChange}>
              <MenuItem value="default" selected>
                Выбрать пользователя
              </MenuItem>
              {users.map((val) => (
                <MenuItem key={val.id} value={val.id}>
                  {val.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Mui.Box sx={{ minWidth: 120 }} className="weight">
            <Mui.FormControl fullWidth>
              <Mui.InputLabel id="demo-simple-select-label">Вес</Mui.InputLabel>
              <Mui.Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={weight}
                label="Вес"
                onChange={handleChangeWeight}>
                <Mui.MenuItem value={40}>40кг</Mui.MenuItem>
                <Mui.MenuItem value={41}>41кг</Mui.MenuItem>
                <Mui.MenuItem value={42}>42кг</Mui.MenuItem>
                <Mui.MenuItem value={43}>43кг</Mui.MenuItem>
                <Mui.MenuItem value={44}>44кг</Mui.MenuItem>
                <Mui.MenuItem value={45}>45кг</Mui.MenuItem>
                <Mui.MenuItem value={46}>46кг</Mui.MenuItem>
                <Mui.MenuItem value={47}>47кг</Mui.MenuItem>
                <Mui.MenuItem value={48}>48кг</Mui.MenuItem>
                <Mui.MenuItem value={49}>49кг</Mui.MenuItem>
                <Mui.MenuItem value={50}>50кг</Mui.MenuItem>
                <Mui.MenuItem value={51}>51кг</Mui.MenuItem>
                <Mui.MenuItem value={52}>52кг</Mui.MenuItem>
                <Mui.MenuItem value={53}>53кг</Mui.MenuItem>
                <Mui.MenuItem value={54}>54кг</Mui.MenuItem>
                <Mui.MenuItem value={55}>55кг</Mui.MenuItem>
                <Mui.MenuItem value={56}>56кг</Mui.MenuItem>
                <Mui.MenuItem value={57}>57кг</Mui.MenuItem>
                <Mui.MenuItem value={58}>58кг</Mui.MenuItem>
                <Mui.MenuItem value={59}>59кг</Mui.MenuItem>
                <Mui.MenuItem value={60}>60кг</Mui.MenuItem>
                <Mui.MenuItem value={61}>61кг</Mui.MenuItem>
                <Mui.MenuItem value={62}>62кг</Mui.MenuItem>
                <Mui.MenuItem value={63}>63кг</Mui.MenuItem>
                <Mui.MenuItem value={64}>64кг</Mui.MenuItem>
                <Mui.MenuItem value={65}>65кг</Mui.MenuItem>
                <Mui.MenuItem value={66}>66кг</Mui.MenuItem>
                <Mui.MenuItem value={67}>67кг</Mui.MenuItem>
                <Mui.MenuItem value={68}>68кг</Mui.MenuItem>
                <Mui.MenuItem value={69}>69кг</Mui.MenuItem>
                <Mui.MenuItem value={70}>70кг</Mui.MenuItem>
                <Mui.MenuItem value={71}>71кг</Mui.MenuItem>
                <Mui.MenuItem value={72}>72кг</Mui.MenuItem>
                <Mui.MenuItem value={73}>73кг</Mui.MenuItem>
                <Mui.MenuItem value={74}>74кг</Mui.MenuItem>
                <Mui.MenuItem value={75}>75кг</Mui.MenuItem>
                <Mui.MenuItem value={76}>76кг</Mui.MenuItem>
                <Mui.MenuItem value={77}>77кг</Mui.MenuItem>
                <Mui.MenuItem value={78}>78кг</Mui.MenuItem>
                <Mui.MenuItem value={79}>79кг</Mui.MenuItem>
                <Mui.MenuItem value={80}>80кг</Mui.MenuItem>
                <Mui.MenuItem value={81}>81кг</Mui.MenuItem>
                <Mui.MenuItem value={82}>82кг</Mui.MenuItem>
                <Mui.MenuItem value={83}>83кг</Mui.MenuItem>
                <Mui.MenuItem value={84}>84кг</Mui.MenuItem>
                <Mui.MenuItem value={85}>85кг</Mui.MenuItem>
                <Mui.MenuItem value={86}>86кг</Mui.MenuItem>
                <Mui.MenuItem value={87}>87кг</Mui.MenuItem>
                <Mui.MenuItem value={88}>88кг</Mui.MenuItem>
                <Mui.MenuItem value={89}>89кг</Mui.MenuItem>
                <Mui.MenuItem value={90}>90кг</Mui.MenuItem>
                <Mui.MenuItem value={91}>91кг</Mui.MenuItem>
                <Mui.MenuItem value={92}>92кг</Mui.MenuItem>
                <Mui.MenuItem value={93}>93кг</Mui.MenuItem>
                <Mui.MenuItem value={94}>94кг</Mui.MenuItem>
                <Mui.MenuItem value={95}>95кг</Mui.MenuItem>
                <Mui.MenuItem value={96}>96кг</Mui.MenuItem>
                <Mui.MenuItem value={97}>97кг</Mui.MenuItem>
                <Mui.MenuItem value={98}>98кг</Mui.MenuItem>
                <Mui.MenuItem value={99}>99кг</Mui.MenuItem>
                <Mui.MenuItem value={100}>100кг</Mui.MenuItem>
                <Mui.MenuItem value={101}>101кг</Mui.MenuItem>
                <Mui.MenuItem value={102}>102кг</Mui.MenuItem>
                <Mui.MenuItem value={103}>103кг</Mui.MenuItem>
                <Mui.MenuItem value={104}>104кг</Mui.MenuItem>
                <Mui.MenuItem value={105}>105кг</Mui.MenuItem>
                <Mui.MenuItem value={106}>106кг</Mui.MenuItem>
                <Mui.MenuItem value={107}>107кг</Mui.MenuItem>
                <Mui.MenuItem value={108}>108кг</Mui.MenuItem>
                <Mui.MenuItem value={109}>109кг</Mui.MenuItem>
                <Mui.MenuItem value={110}>110кг</Mui.MenuItem>
                <Mui.MenuItem value={111}>111кг</Mui.MenuItem>
                <Mui.MenuItem value={112}>112кг</Mui.MenuItem>
                <Mui.MenuItem value={113}>113кг</Mui.MenuItem>
                <Mui.MenuItem value={114}>114кг</Mui.MenuItem>
                <Mui.MenuItem value={115}>115кг</Mui.MenuItem>
                <Mui.MenuItem value={116}>116кг</Mui.MenuItem>
                <Mui.MenuItem value={117}>117кг</Mui.MenuItem>
                <Mui.MenuItem value={118}>118кг</Mui.MenuItem>
                <Mui.MenuItem value={119}>119кг</Mui.MenuItem>
                <Mui.MenuItem value={120}>120кг</Mui.MenuItem>
              </Mui.Select>
            </Mui.FormControl>
          </Mui.Box>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopDatePicker
              label="Выбрать дату"
              value={date}
              minDate={new Date('2017-01-01')}
              onChange={handleChangeDate}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Box>

        <Stack className="buttons" direction="row" spacing={2}>
          <Button variant="contained" onClick={() => saveProgress()}>
            Сохранить
          </Button>
          <Button variant="contained" onClick={() => createBar(user)}>
            Посмотреть прогресс
          </Button>
        </Stack>
      </div>
      {res && <Line options={options} data={data} />}
    </React.Fragment>
  );
}
