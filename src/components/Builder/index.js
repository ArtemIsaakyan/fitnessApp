import React from 'react';
import * as Mui from '@material-ui/core';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import axios from 'axios';

import './Builder.scss';

export default function Builder() {
  const [name, setName] = React.useState('');
  const [sex, setSex] = React.useState('');
  const [goal, setGoal] = React.useState('');
  const [days, setDays] = React.useState('');
  const [opportunity, setOpportunity] = React.useState('');
  const [age, setAge] = React.useState('');
  const [height, setHeight] = React.useState('');
  const [weight, setWeight] = React.useState('');
  const [physicalActivity, setPhysicalActivity] = React.useState('');
  const [disease, setDisease] = React.useState({
    back: false,
    neck: false,
    hip: false,
    knee: false,
  });

  const handleChangeName = (event) => {
    setName(event.target.value);
  };
  const handleChangeSex = (event) => {
    setSex(event.target.value);
  };
  const handleChangeGoal = (event) => {
    setGoal(event.target.value);
  };
  const handleChangeAge = (event) => {
    setAge(event.target.value);
  };
  const handleChangeHeight = (event) => {
    setHeight(event.target.value);
  };
  const handleChangeWeight = (event) => {
    setWeight(event.target.value);
  };
  const handleChangeActivity = (event) => {
    setPhysicalActivity(event.target.value);
  };
  const handleChangeDays = (event) => {
    setDays(event.target.value);
  };
  const handleChangeOpportunity = (event) => {
    setOpportunity(event.target.value);
  };

  const handleChangeCheckBox = (event) => {
    setDisease({
      ...disease,
      [event.target.name]: event.target.checked,
    });
  };

  const { neck, back, hip, knee } = disease;
  function save() {
    if (name && age && goal && days && height && weight && sex && physicalActivity) {
      axios
        .post('https://618101ae8bfae60017adfd5e.mockapi.io/users', {
          name: name,
          sex: sex,
          goal: goal,
          days: days,
          age: age,
          height: height,
          weight: weight,
          opportunity: opportunity,
          physicalActivity: physicalActivity,
          disease: disease,
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

  return (
    <React.Fragment>
      <h2 className="header_wrapper">?????????????? ????????????</h2>
      <div className="builder_wrapper">
        <Mui.Box component="form" noValidate autoComplete="off" className="name_field">
          <Mui.TextField
            id="standard-basic"
            label="???????????????? ????????????????????"
            variant="standard"
            value={name}
            onChange={handleChangeName}
          />
        </Mui.Box>
        <Mui.Box sx={{ minWidth: 120 }} className="sex">
          <Mui.FormControl fullWidth>
            <Mui.InputLabel id="demo-simple-select-label">??????</Mui.InputLabel>
            <Mui.Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={sex}
              label="??????"
              onChange={handleChangeSex}>
              <Mui.MenuItem value={'m'}>??</Mui.MenuItem>
              <Mui.MenuItem value={'w'}>??</Mui.MenuItem>
            </Mui.Select>
          </Mui.FormControl>
        </Mui.Box>
        <Mui.Box sx={{ minWidth: 120 }} className="goal">
          <Mui.FormControl fullWidth>
            <Mui.InputLabel id="demo-simple-select-label">????????</Mui.InputLabel>
            <Mui.Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={goal}
              label="????????"
              onChange={handleChangeGoal}>
              <Mui.MenuItem value={'loseWeight'}>????????????????</Mui.MenuItem>
              <Mui.MenuItem value={'gainWeight'}>?????????? ???????????????? ??????????</Mui.MenuItem>
            </Mui.Select>
          </Mui.FormControl>
        </Mui.Box>
        <Mui.Box sx={{ minWidth: 120 }} className="numberOfDays">
          <Mui.FormControl fullWidth>
            <Mui.InputLabel id="demo-simple-select-label">
              ???????????????? ???????????????????? ????????????????????
            </Mui.InputLabel>
            <Mui.Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={days}
              label="????????"
              onChange={handleChangeDays}>
              <Mui.MenuItem value={'twoDays'}>2 ?????? ?? ????????????</Mui.MenuItem>
              <Mui.MenuItem value={'threeDays'}>3 ?????? ?? ????????????</Mui.MenuItem>
            </Mui.Select>
          </Mui.FormControl>
        </Mui.Box>
        <Mui.Box sx={{ minWidth: 120 }} className="opportunity">
          <Mui.FormControl fullWidth>
            <Mui.InputLabel id="demo-simple-select-label">???????????? ???????????????????? ??????????????</Mui.InputLabel>
            <Mui.Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={opportunity}
              label="???????????? ???????????????????? ??????????????"
              onChange={handleChangeOpportunity}>
              <Mui.MenuItem value={'home'}>?? ???????????????? ????????????????</Mui.MenuItem>
              <Mui.MenuItem value={'gym'}>?? ???????????????????? ???????? (?? ??????????????????????)</Mui.MenuItem>
            </Mui.Select>
          </Mui.FormControl>
        </Mui.Box>
        <Mui.Box sx={{ minWidth: 120 }} className="age">
          <Mui.FormControl fullWidth>
            <Mui.InputLabel id="demo-simple-select-label">??????????????</Mui.InputLabel>
            <Mui.Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="??????????????"
              onChange={handleChangeAge}>
              <Mui.MenuItem value={18}>18</Mui.MenuItem>
              <Mui.MenuItem value={19}>19</Mui.MenuItem>
              <Mui.MenuItem value={20}>20</Mui.MenuItem>
              <Mui.MenuItem value={21}>21</Mui.MenuItem>
              <Mui.MenuItem value={22}>22</Mui.MenuItem>
              <Mui.MenuItem value={23}>23</Mui.MenuItem>
              <Mui.MenuItem value={24}>24</Mui.MenuItem>
              <Mui.MenuItem value={25}>25</Mui.MenuItem>
              <Mui.MenuItem value={26}>26</Mui.MenuItem>
              <Mui.MenuItem value={27}>27</Mui.MenuItem>
              <Mui.MenuItem value={28}>28</Mui.MenuItem>
              <Mui.MenuItem value={29}>29</Mui.MenuItem>
              <Mui.MenuItem value={30}>30</Mui.MenuItem>
              <Mui.MenuItem value={31}>31</Mui.MenuItem>
              <Mui.MenuItem value={32}>32</Mui.MenuItem>
              <Mui.MenuItem value={33}>33</Mui.MenuItem>
              <Mui.MenuItem value={34}>34</Mui.MenuItem>
              <Mui.MenuItem value={35}>35</Mui.MenuItem>
              <Mui.MenuItem value={36}>36</Mui.MenuItem>
              <Mui.MenuItem value={37}>37</Mui.MenuItem>
              <Mui.MenuItem value={38}>38</Mui.MenuItem>
              <Mui.MenuItem value={39}>39</Mui.MenuItem>
              <Mui.MenuItem value={40}>40</Mui.MenuItem>
              <Mui.MenuItem value={41}>41</Mui.MenuItem>
              <Mui.MenuItem value={42}>42</Mui.MenuItem>
              <Mui.MenuItem value={43}>43</Mui.MenuItem>
              <Mui.MenuItem value={44}>44</Mui.MenuItem>
              <Mui.MenuItem value={45}>45</Mui.MenuItem>
              <Mui.MenuItem value={46}>46</Mui.MenuItem>
              <Mui.MenuItem value={47}>47</Mui.MenuItem>
              <Mui.MenuItem value={48}>48</Mui.MenuItem>
              <Mui.MenuItem value={49}>49</Mui.MenuItem>
              <Mui.MenuItem value={50}>50</Mui.MenuItem>
              <Mui.MenuItem value={51}>51</Mui.MenuItem>
              <Mui.MenuItem value={52}>52</Mui.MenuItem>
              <Mui.MenuItem value={53}>53</Mui.MenuItem>
              <Mui.MenuItem value={54}>54</Mui.MenuItem>
              <Mui.MenuItem value={55}>55</Mui.MenuItem>
              <Mui.MenuItem value={56}>56</Mui.MenuItem>
              <Mui.MenuItem value={57}>57</Mui.MenuItem>
              <Mui.MenuItem value={58}>58</Mui.MenuItem>
              <Mui.MenuItem value={59}>59</Mui.MenuItem>
              <Mui.MenuItem value={60}>60</Mui.MenuItem>
              <Mui.MenuItem value={51}>61</Mui.MenuItem>
              <Mui.MenuItem value={52}>62</Mui.MenuItem>
              <Mui.MenuItem value={53}>63</Mui.MenuItem>
              <Mui.MenuItem value={54}>64</Mui.MenuItem>
              <Mui.MenuItem value={55}>65</Mui.MenuItem>
              <Mui.MenuItem value={56}>66</Mui.MenuItem>
              <Mui.MenuItem value={57}>67</Mui.MenuItem>
              <Mui.MenuItem value={58}>68</Mui.MenuItem>
              <Mui.MenuItem value={59}>69</Mui.MenuItem>
            </Mui.Select>
          </Mui.FormControl>
        </Mui.Box>
        <Mui.Box sx={{ minWidth: 200 }} className="physical">
          <Mui.FormControl fullWidth>
            <Mui.InputLabel id="demo-simple-select-label">???????????????????? ????????????????????</Mui.InputLabel>
            <Mui.Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={physicalActivity}
              label="???????????????????? ????????????????????"
              onChange={handleChangeActivity}>
              <Mui.MenuItem value={'noActivity'}>?????? ???????????????????? ????????????????</Mui.MenuItem>
              <Mui.MenuItem value={'lowActivity'}>
                ?????????????????? ???????????????? ?????? ?????????????? ???????????? ???????????????????? 1???3 ???????? ?? ????????????
              </Mui.MenuItem>
              <Mui.MenuItem value={'mediumActivity'}>
                ?????????????????????? ?????????????? ???? ???????????????? ???????????????????? 3???5 ?????? ?? ????????????
              </Mui.MenuItem>
              <Mui.MenuItem value={'highActivity'}>
                ???????????????????? ???????????????????????? 6???7 ?????? ?? ????????????
              </Mui.MenuItem>
            </Mui.Select>
          </Mui.FormControl>
        </Mui.Box>
        <Mui.Box sx={{ minWidth: 120 }} className="height">
          <Mui.FormControl fullWidth>
            <Mui.InputLabel id="demo-simple-select-label">????????</Mui.InputLabel>
            <Mui.Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={height}
              label="????????"
              onChange={handleChangeHeight}>
              <Mui.MenuItem value={130}>130????</Mui.MenuItem>
              <Mui.MenuItem value={131}>131????</Mui.MenuItem>
              <Mui.MenuItem value={132}>132????</Mui.MenuItem>
              <Mui.MenuItem value={133}>133????</Mui.MenuItem>
              <Mui.MenuItem value={134}>134????</Mui.MenuItem>
              <Mui.MenuItem value={135}>135????</Mui.MenuItem>
              <Mui.MenuItem value={136}>136????</Mui.MenuItem>
              <Mui.MenuItem value={137}>137????</Mui.MenuItem>
              <Mui.MenuItem value={138}>138????</Mui.MenuItem>
              <Mui.MenuItem value={139}>139????</Mui.MenuItem>
              <Mui.MenuItem value={140}>140????</Mui.MenuItem>
              <Mui.MenuItem value={141}>141????</Mui.MenuItem>
              <Mui.MenuItem value={142}>142????</Mui.MenuItem>
              <Mui.MenuItem value={143}>143????</Mui.MenuItem>
              <Mui.MenuItem value={144}>144????</Mui.MenuItem>
              <Mui.MenuItem value={145}>145????</Mui.MenuItem>
              <Mui.MenuItem value={146}>146????</Mui.MenuItem>
              <Mui.MenuItem value={147}>147????</Mui.MenuItem>
              <Mui.MenuItem value={148}>148????</Mui.MenuItem>
              <Mui.MenuItem value={149}>149????</Mui.MenuItem>
              <Mui.MenuItem value={150}>150????</Mui.MenuItem>
              <Mui.MenuItem value={151}>151????</Mui.MenuItem>
              <Mui.MenuItem value={152}>152????</Mui.MenuItem>
              <Mui.MenuItem value={153}>153????</Mui.MenuItem>
              <Mui.MenuItem value={154}>154????</Mui.MenuItem>
              <Mui.MenuItem value={155}>155????</Mui.MenuItem>
              <Mui.MenuItem value={156}>156????</Mui.MenuItem>
              <Mui.MenuItem value={157}>157????</Mui.MenuItem>
              <Mui.MenuItem value={158}>158????</Mui.MenuItem>
              <Mui.MenuItem value={159}>159????</Mui.MenuItem>
              <Mui.MenuItem value={160}>160????</Mui.MenuItem>
              <Mui.MenuItem value={161}>161????</Mui.MenuItem>
              <Mui.MenuItem value={162}>162????</Mui.MenuItem>
              <Mui.MenuItem value={163}>163????</Mui.MenuItem>
              <Mui.MenuItem value={164}>164????</Mui.MenuItem>
              <Mui.MenuItem value={165}>165????</Mui.MenuItem>
              <Mui.MenuItem value={166}>166????</Mui.MenuItem>
              <Mui.MenuItem value={167}>167????</Mui.MenuItem>
              <Mui.MenuItem value={168}>168????</Mui.MenuItem>
              <Mui.MenuItem value={169}>169????</Mui.MenuItem>
              <Mui.MenuItem value={170}>170????</Mui.MenuItem>
              <Mui.MenuItem value={171}>171????</Mui.MenuItem>
              <Mui.MenuItem value={172}>172????</Mui.MenuItem>
              <Mui.MenuItem value={173}>173????</Mui.MenuItem>
              <Mui.MenuItem value={174}>174????</Mui.MenuItem>
              <Mui.MenuItem value={175}>175????</Mui.MenuItem>
              <Mui.MenuItem value={176}>176????</Mui.MenuItem>
              <Mui.MenuItem value={177}>177????</Mui.MenuItem>
              <Mui.MenuItem value={178}>178????</Mui.MenuItem>
              <Mui.MenuItem value={179}>179????</Mui.MenuItem>
              <Mui.MenuItem value={180}>180????</Mui.MenuItem>
              <Mui.MenuItem value={181}>181????</Mui.MenuItem>
              <Mui.MenuItem value={182}>182????</Mui.MenuItem>
              <Mui.MenuItem value={183}>183????</Mui.MenuItem>
              <Mui.MenuItem value={184}>184????</Mui.MenuItem>
              <Mui.MenuItem value={185}>185????</Mui.MenuItem>
              <Mui.MenuItem value={186}>186????</Mui.MenuItem>
              <Mui.MenuItem value={187}>187????</Mui.MenuItem>
              <Mui.MenuItem value={188}>188????</Mui.MenuItem>
              <Mui.MenuItem value={189}>189????</Mui.MenuItem>
              <Mui.MenuItem value={190}>190????</Mui.MenuItem>
            </Mui.Select>
          </Mui.FormControl>
        </Mui.Box>
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
          <FormGroup>
            <Mui.InputLabel style={{ marginTop: '10px' }} id="demo-simple-select-label">
              ???????????????????????? ????????:
            </Mui.InputLabel>
            <FormControlLabel
              control={<Checkbox checked={neck} onChange={handleChangeCheckBox} name="neck" />}
              label="??????"
            />
            <FormControlLabel
              control={<Checkbox checked={back} onChange={handleChangeCheckBox} name="back" />}
              label="??????????"
            />
            <FormControlLabel
              control={<Checkbox checked={hip} onChange={handleChangeCheckBox} name="hip" />}
              label="??????????????????????????"
            />
            <FormControlLabel
              control={<Checkbox checked={knee} onChange={handleChangeCheckBox} name="knee" />}
              label="????????????"
            />
          </FormGroup>
        </Mui.Box>
      </div>
      <Stack className="saveBtn" direction="row" spacing={2}>
        <Button variant="contained" onClick={() => save()}>
          ??????????????????
        </Button>
      </Stack>
    </React.Fragment>
  );
}
