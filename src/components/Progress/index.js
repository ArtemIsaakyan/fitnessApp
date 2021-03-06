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
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
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
import CircularProgress from '@mui/material/CircularProgress';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './Progress.scss';
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function Progress() {
  const [users, setUsers] = React.useState([]);
  const [progress, setProgress] = React.useState([]);
  const [res, setRes] = React.useState('');
  const [user, selectUser] = React.useState('default');
  const [weight, setWeight] = React.useState('');
  const [date, setDate] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const [usersResponse, progressResponse] = await Promise.all([
          axios.get('https://618101ae8bfae60017adfd5e.mockapi.io/users'),
          axios.get('https://618101ae8bfae60017adfd5e.mockapi.io/progress'),
        ]);
        setIsLoading(false);
        setUsers(usersResponse.data);
        setProgress(progressResponse.data);
      } catch (error) {
        alert('???????????? ?????? ?????????????? ????????????');
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
          date: `${date}`.slice(3, 10),
        })
        .then(function () {
          alert('???????????? ??????????????????????');
          document.location.reload();
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      alert('???? ?????? ???????? ??????????????????!');
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
      if (resultProgress.length > 0) {
        setRes(resultProgress);
      } else {
        alert('????????????: ?????? ???????????? ?????? ???????????????????????? ??????????????????');
      }
    } else {
      alert('????????????: ???? ???? ?????????????? ????????????????????????');
    }
  }

  var options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };
  if (res) {
    const labels = res.map((val) => val.date);

    var data = {
      labels,
      datasets: [
        {
          label: '??????',
          data: res.map((val) => val.weight),
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
      ],
    };
  }

  return (
    <React.Fragment>
      <h2 className="header-creator">????????????????</h2>
      {isLoading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <CircularProgress />
        </Box>
      ) : (
        <div className="block">
          <Box sx={{ maxWidth: 240 }} className="blocks">
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">?????????????? ????????????????????????</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={user}
                label="?????????????? ????????????????????????"
                onChange={handleChange}>
                <MenuItem value="default" selected>
                  ?????????????? ????????????????????????
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
                <Mui.InputLabel id="demo-simple-select-label">??????</Mui.InputLabel>
                <Mui.Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={weight}
                  label="??????"
                  onChange={handleChangeWeight}>
                  <Mui.MenuItem value={40}>40????</Mui.MenuItem>
                  <Mui.MenuItem value={41}>41????</Mui.MenuItem>
                  <Mui.MenuItem value={42}>42????</Mui.MenuItem>
                  <Mui.MenuItem value={43}>43????</Mui.MenuItem>
                  <Mui.MenuItem value={44}>44????</Mui.MenuItem>
                  <Mui.MenuItem value={45}>45????</Mui.MenuItem>
                  <Mui.MenuItem value={46}>46????</Mui.MenuItem>
                  <Mui.MenuItem value={47}>47????</Mui.MenuItem>
                  <Mui.MenuItem value={48}>48????</Mui.MenuItem>
                  <Mui.MenuItem value={49}>49????</Mui.MenuItem>
                  <Mui.MenuItem value={50}>50????</Mui.MenuItem>
                  <Mui.MenuItem value={51}>51????</Mui.MenuItem>
                  <Mui.MenuItem value={52}>52????</Mui.MenuItem>
                  <Mui.MenuItem value={53}>53????</Mui.MenuItem>
                  <Mui.MenuItem value={54}>54????</Mui.MenuItem>
                  <Mui.MenuItem value={55}>55????</Mui.MenuItem>
                  <Mui.MenuItem value={56}>56????</Mui.MenuItem>
                  <Mui.MenuItem value={57}>57????</Mui.MenuItem>
                  <Mui.MenuItem value={58}>58????</Mui.MenuItem>
                  <Mui.MenuItem value={59}>59????</Mui.MenuItem>
                  <Mui.MenuItem value={60}>60????</Mui.MenuItem>
                  <Mui.MenuItem value={61}>61????</Mui.MenuItem>
                  <Mui.MenuItem value={62}>62????</Mui.MenuItem>
                  <Mui.MenuItem value={63}>63????</Mui.MenuItem>
                  <Mui.MenuItem value={64}>64????</Mui.MenuItem>
                  <Mui.MenuItem value={65}>65????</Mui.MenuItem>
                  <Mui.MenuItem value={66}>66????</Mui.MenuItem>
                  <Mui.MenuItem value={67}>67????</Mui.MenuItem>
                  <Mui.MenuItem value={68}>68????</Mui.MenuItem>
                  <Mui.MenuItem value={69}>69????</Mui.MenuItem>
                  <Mui.MenuItem value={70}>70????</Mui.MenuItem>
                  <Mui.MenuItem value={71}>71????</Mui.MenuItem>
                  <Mui.MenuItem value={72}>72????</Mui.MenuItem>
                  <Mui.MenuItem value={73}>73????</Mui.MenuItem>
                  <Mui.MenuItem value={74}>74????</Mui.MenuItem>
                  <Mui.MenuItem value={75}>75????</Mui.MenuItem>
                  <Mui.MenuItem value={76}>76????</Mui.MenuItem>
                  <Mui.MenuItem value={77}>77????</Mui.MenuItem>
                  <Mui.MenuItem value={78}>78????</Mui.MenuItem>
                  <Mui.MenuItem value={79}>79????</Mui.MenuItem>
                  <Mui.MenuItem value={80}>80????</Mui.MenuItem>
                  <Mui.MenuItem value={81}>81????</Mui.MenuItem>
                  <Mui.MenuItem value={82}>82????</Mui.MenuItem>
                  <Mui.MenuItem value={83}>83????</Mui.MenuItem>
                  <Mui.MenuItem value={84}>84????</Mui.MenuItem>
                  <Mui.MenuItem value={85}>85????</Mui.MenuItem>
                  <Mui.MenuItem value={86}>86????</Mui.MenuItem>
                  <Mui.MenuItem value={87}>87????</Mui.MenuItem>
                  <Mui.MenuItem value={88}>88????</Mui.MenuItem>
                  <Mui.MenuItem value={89}>89????</Mui.MenuItem>
                  <Mui.MenuItem value={90}>90????</Mui.MenuItem>
                  <Mui.MenuItem value={91}>91????</Mui.MenuItem>
                  <Mui.MenuItem value={92}>92????</Mui.MenuItem>
                  <Mui.MenuItem value={93}>93????</Mui.MenuItem>
                  <Mui.MenuItem value={94}>94????</Mui.MenuItem>
                  <Mui.MenuItem value={95}>95????</Mui.MenuItem>
                  <Mui.MenuItem value={96}>96????</Mui.MenuItem>
                  <Mui.MenuItem value={97}>97????</Mui.MenuItem>
                  <Mui.MenuItem value={98}>98????</Mui.MenuItem>
                  <Mui.MenuItem value={99}>99????</Mui.MenuItem>
                  <Mui.MenuItem value={100}>100????</Mui.MenuItem>
                  <Mui.MenuItem value={101}>101????</Mui.MenuItem>
                  <Mui.MenuItem value={102}>102????</Mui.MenuItem>
                  <Mui.MenuItem value={103}>103????</Mui.MenuItem>
                  <Mui.MenuItem value={104}>104????</Mui.MenuItem>
                  <Mui.MenuItem value={105}>105????</Mui.MenuItem>
                  <Mui.MenuItem value={106}>106????</Mui.MenuItem>
                  <Mui.MenuItem value={107}>107????</Mui.MenuItem>
                  <Mui.MenuItem value={108}>108????</Mui.MenuItem>
                  <Mui.MenuItem value={109}>109????</Mui.MenuItem>
                  <Mui.MenuItem value={110}>110????</Mui.MenuItem>
                  <Mui.MenuItem value={111}>111????</Mui.MenuItem>
                  <Mui.MenuItem value={112}>112????</Mui.MenuItem>
                  <Mui.MenuItem value={113}>113????</Mui.MenuItem>
                  <Mui.MenuItem value={114}>114????</Mui.MenuItem>
                  <Mui.MenuItem value={115}>115????</Mui.MenuItem>
                  <Mui.MenuItem value={116}>116????</Mui.MenuItem>
                  <Mui.MenuItem value={117}>117????</Mui.MenuItem>
                  <Mui.MenuItem value={118}>118????</Mui.MenuItem>
                  <Mui.MenuItem value={119}>119????</Mui.MenuItem>
                  <Mui.MenuItem value={120}>120????</Mui.MenuItem>
                </Mui.Select>
              </Mui.FormControl>
            </Mui.Box>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DesktopDatePicker
                label="?????????????? ????????"
                value={date}
                minDate={new Date('2017-01-01')}
                onChange={handleChangeDate}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </Box>

          <Stack className="buttons" direction="row" spacing={2}>
            <Button variant="contained" onClick={() => saveProgress()}>
              ??????????????????
            </Button>
            <Button variant="contained" onClick={() => createBar(user)}>
              ???????????????????? ????????????????
            </Button>
          </Stack>
        </div>
      )}
      {res && (
        <React.Fragment>
          <h1 className="titleTable">?????????????????????? ??????????????????????????</h1>
          <Bar className="chart" type="bar" options={options} data={data} />
        </React.Fragment>
      )}
      {res && (
        <TableContainer component={Paper}>
          <h1 className="titleTable">??????????????</h1>
          <Table sx={{ minWidth: 400 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">????????</TableCell>
                <TableCell align="center">??????</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {res.map((row) => (
                <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell align="center" component="th" scope="row">
                    {row.date}
                  </TableCell>
                  <TableCell align="center">{row.weight}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </React.Fragment>
  );
}
