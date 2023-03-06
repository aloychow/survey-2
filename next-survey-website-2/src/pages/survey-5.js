import Head from 'next/head'
import styled from 'styled-components'
import Link from "next/link";
import axios from 'axios';

import * as React from 'react';
import { useRouter } from "next/router";

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import Checkbox from '@mui/material/Checkbox';

import TextField from '@mui/material/TextField';

import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  width: auto;
  justify-content: center;
  align-items: center;
  color: #000000;
  background: #F3F8FE;
  
  padding: 8rem 1.5rem;
  `
const SubContainer = styled.div`
  width: 100%;
  justify-content: left;
  align-items: left;
  
`;

const QuestionContainer = styled.div`
  width: 100%;
  height: 100%;
  background: #fff;
  padding: 1rem 2rem 1rem 2rem;
  border-radius: 1rem;
  margin: 2rem 0;
`;


const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: auto;
`;

const ContentText = styled.div`
  color: #000000;
  font-size: 1.125rem;
  font-weight: 400;
  text-align: left;
  
  padding: 0rem 0 1rem 0;
  margin-top: 1rem;
`;

const CheckboxText = styled.div`
  font-size: 1.125rem;
  font-weight: 400;
  margin-top: 0.75rem;
  padding-bottom: 0.5rem;
`;

const ImageIcon = styled.div`
    padding: 2rem;
    padding-left: 0;
`;

const labels = {
  0: '0',
  1: '1',
  2: '2',
  3: '3',
  4: '4',
  5: '5',
  6: '6',
  7: '7',
  8: '8',
  9: '9',
  10: '10',
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}



export default function Survey1() {
  
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  
  const [choice1, setChoice1] = React.useState('');
  const [choice2, setChoice2] = React.useState('');
  const [choice3, setChoice3] = React.useState('');
  
  const [select2D_1, setSelect2D_1] = React.useState(false);
  const [select2D_2, setSelect2D_2] = React.useState(false);
  const [select2D_3, setSelect2D_3] = React.useState(false);
  const [select2D_4, setSelect2D_4] = React.useState(false);
  const [select2D_5, setSelect2D_5] = React.useState(false);
  const [select2D_6, setSelect2D_6] = React.useState("");

  const [select3D_1, setSelect3D_1] = React.useState(false);
  const [select3D_2, setSelect3D_2] = React.useState(false);
  const [select3D_3, setSelect3D_3] = React.useState(false);
  const [select3D_4, setSelect3D_4] = React.useState(false);
  const [select3D_5, setSelect3D_5] = React.useState(false);
  const [select3D_6, setSelect3D_6] = React.useState(false);
  const [select3D_7, setSelect3D_7] = React.useState(false);
  const [select3D_8, setSelect3D_8] = React.useState("");
  
  const [selectAR_1, setSelectAR_1] = React.useState(false);
  const [selectAR_2, setSelectAR_2] = React.useState(false);
  const [selectAR_3, setSelectAR_3] = React.useState(false);
  const [selectAR_4, setSelectAR_4] = React.useState(false);
  const [selectAR_5, setSelectAR_5] = React.useState(false);
  const [selectAR_6, setSelectAR_6] = React.useState(false);
  const [selectAR_7, setSelectAR_7] = React.useState(false);
  const [selectAR_8, setSelectAR_8] = React.useState("");
  
  const [noSelectAR_1, setNoSelectAR_1] = React.useState(false);
  const [noSelectAR_2, setNoSelectAR_2] = React.useState(false);
  const [noSelectAR_3, setNoSelectAR_3] = React.useState(false);
  const [noSelectAR_4, setNoSelectAR_4] = React.useState(false);
  const [noSelectAR_5, setNoSelectAR_5] = React.useState(false);
  const [noSelectAR_6, setNoSelectAR_6] = React.useState(false);
  const [noSelectAR_7, setNoSelectAR_7] = React.useState(false);
  const [noSelectAR_8, setNoSelectAR_8] = React.useState(false);
  const [noSelectAR_9, setNoSelectAR_9] = React.useState(false);
  const [noSelectAR_10, setNoSelectAR_10] = React.useState("");

  const [correct, setCorrect] = React.useState(false);
  
  const [data, setData] = React.useState([]);
  
  // Dropdown menus
  
  const handleChange1 = (event) => {
    setChoice1(event.target.value);
  };
  
  const handleChange2 = (event) => {
    setChoice2(event.target.value);
  };
  
  const handleChange3 = (event) => {
    setChoice3(event.target.value);
  };
  
  
  // Selected checkboxes & Open-ended
  
  const handle2DCheckbox1 = () => {
    setSelect2D_1(!select2D_1);
  };
  
  const handle2DCheckbox2 = () => {
    setSelect2D_2(!select2D_2);
  };
  
  const handle2DCheckbox3 = () => {
    setSelect2D_3(!select2D_3);
  };
  
  const handle2DCheckbox4 = () => {
    setSelect2D_4(!select2D_4);
  };
  
  const handle2DCheckbox5 = () => {
    setSelect2D_5(!select2D_5);
  };
  
  const handle2DCheckbox6 = (event) => {
    setSelect2D_6(event.target.value);
  }
  
  
  
  
  
  const handle3DCheckbox1 = () => {
    setSelect3D_1(!select3D_1);
  };
  
  const handle3DCheckbox2 = () => {
    setSelect3D_2(!select3D_2);
  };
  
  const handle3DCheckbox3 = () => {
    setSelect3D_3(!select3D_3);
  };
  
  const handle3DCheckbox4 = () => {
    setSelect3D_4(!select3D_4);
  };
  
  const handle3DCheckbox5 = () => {
    setSelect3D_5(!select3D_5);
  };
  
  const handle3DCheckbox6 = () => {
    setSelect3D_6(!select3D_6);
  };
  
  const handle3DCheckbox7 = () => {
    setSelect3D_7(!select3D_7);
  };
  
  const handle3DCheckbox8 = (event) => {
    setSelect3D_8(event.target.value);
  }
  
  
  const handleARCheckbox1 = () => {
    setSelectAR_1(!selectAR_1);
  };
  
  const handleARCheckbox2 = () => {
    setSelectAR_2(!selectAR_2);
  };
  
  const handleARCheckbox3 = () => {
    setSelectAR_3(!selectAR_3);
  };
  
  const handleARCheckbox4 = () => {
    setSelectAR_4(!selectAR_4);
  };
  
  const handleARCheckbox5 = () => {
    setSelectAR_5(!selectAR_5);
  };
  
  const handleARCheckbox6 = () => {
    setSelectAR_6(!selectAR_6);
  };
  
  const handleARCheckbox7 = () => {
    setSelectAR_7(!selectAR_7);
  };
  
  const handleARCheckbox8 = (event) => {
    setSelectAR_8(event.target.value);
  }
  
  
  
  
  
  
  const handleNoARCheckbox1 = () => {
    setNoSelectAR_1(!noSelectAR_1);
  };
  
  const handleNoARCheckbox2 = () => {
    setNoSelectAR_2(!noSelectAR_2);
  };
  
  const handleNoARCheckbox3 = () => {
    setNoSelectAR_3(!noSelectAR_3);
  };
  
  const handleNoARCheckbox4 = () => {
    setNoSelectAR_4(!noSelectAR_4);
  };
  
  const handleNoARCheckbox5 = () => {
    setNoSelectAR_5(!noSelectAR_5);
  };
  
  const handleNoARCheckbox6 = () => {
    setNoSelectAR_6(!noSelectAR_6);
  };
  
  const handleNoARCheckbox7 = () => {
    setNoSelectAR_7(!noSelectAR_7);
  };
  
  const handleNoARCheckbox8 = () => {
    setNoSelectAR_8(!noSelectAR_8);
  };
  
  const handleNoARCheckbox9 = () => {
    setNoSelectAR_9(!noSelectAR_9);
  };
  
  const handleNoARCheckbox10 = (event) => {
    setNoSelectAR_10(event.target.value);
  }
  
  const onSubmit = (event) => {
    
    const datetime = new Date().toLocaleDateString('en-CA')
    const datetime2 = datetime.concat(" 00:00:00")
    
    axios.post(
      'https://sheet.best/api/sheets/c256fd56-d6a5-440b-9ca5-0fcd8e95c451',
      {
        "submission_date": datetime2,
        "age": data[0], "gender": data[1],
        "2D_1": data[2], "2D_2": data[3], "2D_3": data[4], "2D_4": data[5], "2D_5": data[6], "2D_6": data[7],
        "3D_1": data[8], "3D_2": data[9], "3D_3": data[10], "3D_4": data[11], "3D_5": data[12], "3D_6": data[13],
        "AR_1": data[14], "AR_2": data[15], "AR_3": data[16], "AR_4": data[17], "5": data[18], "AR_6": data[19],
        "choice_1": data[20], "choice_2": data[21], "choice_3": data[22],
        "2D_reason_1": data[23], "2D_reason_2": data[24], "2D_reason_3": data[25], "2D_reason_4": data[26], "2D_reason_5": data[27], "2D_reason_6": data[28],
        "3D_reason_1": data[29], "3D_reason_2": data[30], "3D_reason_3": data[31], "3D_reason_4": data[32], "3D_reason_5": data[33], "3D_reason_6": data[34], "3D_reason_7": data[35], "3D_reason_8": data[36],
        "AR_reason_1": data[37], "AR_reason_2": data[38], "AR_reason_3": data[39], "AR_reason_4": data[40], "AR_reason_5": data[41], "AR_reason_6": data[42], "AR_reason_7": data[43], "AR_reason_8": data[44],
        "no_AR_reason_1": data[45], "no_AR_reason_2": data[46], "no_AR_reason_3": data[47], "no_AR_reason_4": data[48], "no_AR_reason_5": data[49], "no_AR_reason_6": data[50], "no_AR_reason_7": data[51], "no_AR_reason_8": data[52], "no_AR_reason_9": data[53], "no_AR_reason_10": data[54]
        
      }
    )
      .then(response => {
        console.log(response);
      })
    
  }
  
  

  
  React.useEffect(() => {
    if (choice1 == "2D") {
        if (
          (
            select2D_1 == true ||
            select2D_2 == true ||
            select2D_3 == true ||
            select2D_4 == true ||
            select2D_5 == true ||
            select2D_6 != "" 
          ) &&
          (
            noSelectAR_1== true ||
            noSelectAR_2 == true ||
            noSelectAR_3 == true ||
            noSelectAR_4 == true ||
            noSelectAR_5 == true ||
            noSelectAR_6 == true ||
            noSelectAR_7 == true ||
            noSelectAR_8 == true ||
            noSelectAR_9 == true ||
            noSelectAR_10 != ""
          )
        ) {
            setCorrect(true);
          }
      } else if (choice1 == "3D") {
        if (
          (
            select3D_1 == true ||
            select3D_2 == true ||
            select3D_3 == true ||
            select3D_4 == true ||
            select3D_5 == true ||
            select3D_6 == true ||
            select3D_7 == true ||
            select3D_8 != "" 
          ) &&
          (
            noSelectAR_1== true ||
            noSelectAR_2 == true ||
            noSelectAR_3 == true ||
            noSelectAR_4 == true ||
            noSelectAR_5 == true ||
            noSelectAR_6 == true ||
            noSelectAR_7 == true ||
            noSelectAR_8 == true ||
            noSelectAR_9 == true ||
            noSelectAR_10 != ""
          )
        ) {
            setCorrect(true);
          }
      } else if (choice1 == "AR") {
        if (
          selectAR_1 == true ||
          selectAR_2 == true ||
          selectAR_3 == true ||
          selectAR_4 == true ||
          selectAR_5 == true ||
          selectAR_6 == true ||
          selectAR_7 == true ||
          selectAR_8 != ""
        ) {
          setCorrect(true);
        }
      } else {
        setCorrect(false);
      }
      
      const tempArr = [];
        
      for (let i = 0; i < 20; i++) {
        tempArr.push(oldData[i]);
      }
      
      tempArr.push(
        String(choice1), String(choice2), String(choice3),
        String(select2D_1), String(select2D_2), String(select2D_3), String(select2D_4), String(select2D_5), String(select2D_6),
        String(select3D_1), String(select3D_2), String(select3D_3), String(select3D_4), String(select3D_5), String(select3D_6), String(select3D_7), String(select3D_8),
        String(selectAR_1), String(selectAR_2), String(selectAR_3), String(selectAR_4), String(selectAR_5), String(selectAR_6), String(selectAR_7), String(selectAR_8),
        String(noSelectAR_1), String(noSelectAR_2), String(noSelectAR_3), String(noSelectAR_4), String(noSelectAR_5), String(noSelectAR_6), String(noSelectAR_7), String(noSelectAR_8), String(noSelectAR_9), String(noSelectAR_10)
      )
  
      setData(tempArr);
      
      if (
        choice1 == "" ||
        choice2 == "" ||
        choice3 == "" ||
        choice1 == choice2 ||
        choice2 == choice3 ||
        choice1 == choice3
      ){
        setCorrect(false);
      }

  }, [
    choice1, choice2, choice3, 
    select2D_1, select2D_2, select2D_3, select2D_4, select2D_5, select2D_6,
    select3D_1, select3D_2, select3D_3, select3D_4, select3D_5, select3D_6, select3D_7, select3D_8,
    selectAR_1, selectAR_2, selectAR_3, selectAR_4, selectAR_5, selectAR_6, selectAR_7, selectAR_8,
    noSelectAR_1, noSelectAR_2, noSelectAR_3, noSelectAR_4, noSelectAR_5, noSelectAR_6, noSelectAR_7, noSelectAR_8, noSelectAR_9, noSelectAR_10,
    correct]
  )
  
  React.useEffect(() => {
    console.log(data);
  }, data)
  
  const router = useRouter();
  const oldData = router.query;

  
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainContainer>
        <SubContainer>
          <h1 style={{ fontSize: "1.5rem", paddingBottom: "1rem"}}>Conclusion</h1>
          
          <ContentText>Now that you have seen and tried out 3 different variations of the images, please answer the following questions.</ContentText>
          
          <QuestionContainer>
            <ContentText>Rank the following illustrations in order of preference, 1 being your favourite and 3 being your least favourite.</ContentText>

            <br/>
            
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">(1) Select an option</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={choice1}
                label="Age"
                onChange={handleChange1}
              >
                <MenuItem value={"AR"}>Augmented Reality</MenuItem>
                <MenuItem value={"3D"}>3-Dimensional</MenuItem>
                <MenuItem value={"2D"}>2-Dimensional (Static)</MenuItem>
              </Select>
            </FormControl>
            
            <br/>
            <br/>
            
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">(2) Select an option</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={choice2}
                label="Age"
                onChange={handleChange2}
              >
                <MenuItem value={"AR"}>Augmented Reality</MenuItem>
                <MenuItem value={"3D"}>3-Dimensional</MenuItem>
                <MenuItem value={"2D"}>2-Dimensional (Static)</MenuItem>
              </Select>
            </FormControl>
            
            <br/>
            <br/>
            
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">(3) Select an option</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={choice3}
                label="Age"
                onChange={handleChange3}
              >
                <MenuItem value={"AR"}>Augmented Reality</MenuItem>
                <MenuItem value={"3D"}>3-Dimensional</MenuItem>
                <MenuItem value={"2D"}>2-Dimensional (Static)</MenuItem>
              </Select>
            </FormControl>
            
            <br/>
            <br/>

          </QuestionContainer>
  
    
          {choice1 == "2D" ?
          
            <QuestionContainer>

              <ContentText>(Multiselect) Select all reasons why you chose 2D images as your favourite?</ContentText>
            
              <br />
              
              <CheckboxContainer>
                <Checkbox 
                  checked={select2D_1}
                  onClick={() => handle2DCheckbox1()}
                />
                <CheckboxText>Simple and easy to use</CheckboxText>
              </CheckboxContainer>
              
              <CheckboxContainer>
                <Checkbox 
                  checked={select2D_2}
                  onClick={() => handle2DCheckbox2()}
                />
                <CheckboxText>Provides sufficient information</CheckboxText>
              </CheckboxContainer>
              
              <CheckboxContainer>
                <Checkbox 
                  checked={select2D_3}
                  onClick={() => handle2DCheckbox3()}
                />
                <CheckboxText>Provides an enriching experience</CheckboxText>
              </CheckboxContainer>
              
              <CheckboxContainer>
                <Checkbox 
                  checked={select2D_4}
                  onClick={() => handle2DCheckbox4()}
                />
                <CheckboxText>Provides greater satisfaction</CheckboxText>
              </CheckboxContainer>
              
              <CheckboxContainer>
                <Checkbox 
                  checked={select2D_5}
                  onClick={() => handle2DCheckbox5()}
                />
                <CheckboxText>Greater familiarity with 2D images</CheckboxText>
              </CheckboxContainer>
              
              <br />
              
              <ContentText>
                If your reason is not mentioned, you may write it in the comment box provided. Separate multiple reasons with a comma (,).
              </ContentText>
              
              <TextField
                  id="outlined-multiline-static"
                  label="Write your reason here"
                  multiline
                  rows={4}
                  fullWidth
                  onChange={(event)=>handle2DCheckbox6(event)}
              />
              
            </QuestionContainer>   
            
          : choice1 == "3D" ?
          
            <QuestionContainer>  
              
              <ContentText>(Multiselect) Select all reasons why you chose 3D images as your favourite?</ContentText>
            
              <br />
              
              <CheckboxContainer>
                <Checkbox 
                  checked={select3D_1}
                  onClick={() => handle3DCheckbox1()}
                />
                <CheckboxText>Simple and easy to use</CheckboxText>
              </CheckboxContainer>
              
              <CheckboxContainer>
                <Checkbox 
                  checked={select3D_2}
                  onClick={() => handle3DCheckbox2()}
                />
                <CheckboxText>Provides more useful information</CheckboxText>
              </CheckboxContainer>
              
              <CheckboxContainer>
                <Checkbox 
                  checked={select3D_3}
                  onClick={() => handle3DCheckbox3()}
                />
                <CheckboxText>Provides an enriching experience</CheckboxText>
              </CheckboxContainer>
              
              <CheckboxContainer>
                <Checkbox 
                  checked={select3D_4}
                  onClick={() => handle3DCheckbox4()}
                />
                <CheckboxText>Provides greater engagement and interactivity</CheckboxText>
              </CheckboxContainer>
              
              <CheckboxContainer>
                <Checkbox 
                  checked={select3D_5}
                  onClick={() => handle3DCheckbox5()}
                />
                <CheckboxText>Provides greater satisfaction</CheckboxText>
              </CheckboxContainer>
              
              <CheckboxContainer>
                <Checkbox 
                  checked={select3D_6}
                  onClick={() => handle3DCheckbox6()}
                />
                <CheckboxText>Interesting to use</CheckboxText>
              </CheckboxContainer>
              
              <CheckboxContainer>
                <Checkbox 
                  checked={select3D_7}
                  onClick={() => handle3DCheckbox7()}
                />
                <CheckboxText>Greater immersion</CheckboxText>
              </CheckboxContainer>
                
              <br />
            
              <ContentText>
                If your reason is not mentioned, you may write it in the comment box provided. Separate multiple reasons with a comma (,).
              </ContentText>
              
              <TextField
                id="outlined-multiline-static"
                label="Write your reason here"
                multiline
                rows={4}
                fullWidth
                onChange={(event)=>handle3DCheckbox8(event)}
              />
                  
            </QuestionContainer>
          
          : choice1 == "AR" ?
          
          <QuestionContainer>
        
            <ContentText>(Multiselect) Select all reasons why you choose Augmented Reality as your favourite?</ContentText>
            
            <br />
            
            <CheckboxContainer>
              <Checkbox 
                checked={selectAR_1}
                onClick={() => handleARCheckbox1()}
              />
              <CheckboxText>Simple and easy to use</CheckboxText>
            </CheckboxContainer>
            
            <CheckboxContainer>
              <Checkbox 
                checked={selectAR_2}
                onClick={() => handleARCheckbox2()}
              />
              <CheckboxText>Provides more useful information</CheckboxText>
            </CheckboxContainer>
            
            <CheckboxContainer>
              <Checkbox 
                checked={selectAR_3}
                onClick={() => handleARCheckbox3()}
              />
              <CheckboxText>Provides an enriching experience</CheckboxText>
            </CheckboxContainer>
            
            <CheckboxContainer>
              <Checkbox
                checked={selectAR_4}
                onClick={() => handleARCheckbox4()}
              />
              <CheckboxText>Provides greater engagement and interactivity</CheckboxText>
            </CheckboxContainer>
            
            <CheckboxContainer>
              <Checkbox
                checked={selectAR_5}
                onClick={() => handleARCheckbox5()}
              />
              <CheckboxText>Provides greater satisfaction</CheckboxText>
            </CheckboxContainer>
            
            <CheckboxContainer>
              <Checkbox 
                checked={selectAR_6}
                onClick={() => handleARCheckbox6()}
              />
              <CheckboxText>Interesting to use</CheckboxText>
            </CheckboxContainer>
            
            <CheckboxContainer>
              <Checkbox 
                checked={selectAR_7}
                onClick={() => handleARCheckbox7()}
              />
              <CheckboxText>Greater immersion</CheckboxText>
            </CheckboxContainer>
            
            <br />
            
            <ContentText>
              If your reason is not mentioned, you may write it in the comment box provided. Separate multiple reasons with a comma (,).
            </ContentText>
            
            <TextField
              id="outlined-multiline-static"
              label="Write your reason here"
              multiline
              rows={4}
              fullWidth
              onChange={(event)=>handleARCheckbox8(event)}
            />
        
            </QuestionContainer>  
          
          :
            null
          }
              
          {choice1 == "2D" || choice1 == "3D" ?
            
            <QuestionContainer>
              
              <ContentText>(Multiselect) Select all reasons why you did not choose Augmented Reality as your favourite?</ContentText>
                
                <br />
              

              <CheckboxContainer>
                <Checkbox 
                  checked={noSelectAR_1}
                  onClick={() => handleNoARCheckbox1()}
                />
                <CheckboxText>Difficult to use or control</CheckboxText>
              </CheckboxContainer>
              
              <CheckboxContainer>
                <Checkbox 
                  checked={noSelectAR_2}
                  onClick={() => handleNoARCheckbox2()}
                />
                <CheckboxText>Poor resolution in AR filter</CheckboxText>
              </CheckboxContainer>
              
              <CheckboxContainer>
                <Checkbox 
                  checked={noSelectAR_3}
                  onClick={() => handleNoARCheckbox3()}
                />
                <CheckboxText>Troublesome to use (need to open Instagram/switch on camera)</CheckboxText>
              </CheckboxContainer>
              
              <CheckboxContainer>
                <Checkbox 
                  checked={noSelectAR_4}
                  onClick={() => handleNoARCheckbox4()}
                />
                <CheckboxText>Not true AR (images still visualised on a 2D screen vs wearing an AR headset)</CheckboxText>
              </CheckboxContainer>
              
              <CheckboxContainer>
                <Checkbox 
                  checked={noSelectAR_5}
                  onClick={() => handleNoARCheckbox5()}
                />
                <CheckboxText>Still lacking in many ways (e.g. feel of product, weight, etc.)</CheckboxText>
              </CheckboxContainer>
              
              <CheckboxContainer>
                <Checkbox 
                  checked={noSelectAR_6}
                  onClick={() => handleNoARCheckbox6()}
                />
                <CheckboxText>Too much information provided (cognitive overload)</CheckboxText>
              </CheckboxContainer>
              
              <CheckboxContainer>
                <Checkbox 
                  checked={noSelectAR_7}
                  onClick={() => handleNoARCheckbox7()}
                />
                <CheckboxText>Field of vision is limited</CheckboxText>
              </CheckboxContainer>
              
              <CheckboxContainer>
                <Checkbox 
                  checked={noSelectAR_8}
                  onClick={() => handleNoARCheckbox8()}
                />
                <CheckboxText>Experience is not enhanced</CheckboxText>
              </CheckboxContainer>
              
              <CheckboxContainer>
                <Checkbox 
                  checked={noSelectAR_9}
                  onClick={() => handleNoARCheckbox9()}
                />
                <CheckboxText>Induces headaches or dizziness</CheckboxText>
              </CheckboxContainer>
       
              <br/>
       
              <ContentText>
                If your reason is not mentioned, you may write it in the comment box provided. Separate multiple reasons with a comma (,).
              </ContentText>
              
              <TextField
                  id="outlined-multiline-static"
                  label="Write your reason here"
                  multiline
                  rows={4}
                  fullWidth
                  onChange={(event)=>handleNoARCheckbox10(event)}
                  />
            
          </QuestionContainer>
        
          :

            null    
          
          }


          <br/>

          { 
          correct 
          ?
          <Link style={{ textDecoration: "none" }}
            href={{
              pathname: "finish",
            }} 
          >
            <Button 
              type="submit" onClick={onSubmit}
              variant="contained" endIcon={<ArrowForwardIcon />}>
              Finish
            </Button>
          </Link>
          :
          <Button disabled variant="contained" onClick={()=>handleClick()} endIcon={<ArrowForwardIcon />}>
            Finish
          </Button>
        }
        </SubContainer>
      </MainContainer>
    </>
  );
}
