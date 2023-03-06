import Head from 'next/head'
import styled from 'styled-components'
import Link from "next/link";
import { useRouter } from "next/router";

import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

import Image from 'next/image'
import Glasses from '../../public/images/glasses.png'
import Sunglasses1 from '../../public/images/sunglasses1.png'
import Sunglasses2 from '../../public/images/sunglasses2.png'
import Sunglasses3 from '../../public/images/sunglasses3.png'

import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';

import TextField from '@mui/material/TextField';

import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  width: auto;
  color: #000000;
  background: #F3F8FE;
  
  justify-content: center;
  align-items: center;

  padding: 8rem 1.5rem;
  `
const SubContainer = styled.div`
  color: #000000;
  background: #F3F8FE;
  width: 100%;
  // max-width: 20rem;
  
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

const ContentText = styled.div`
  color: #000000;  
  font-size: 1.125rem;
  font-weight: 400;
  text-align: left;
  
  padding: 0rem 0 1rem 0;
  margin-top: 1rem;
`;

const ImageIcon = styled.div`
    // padding: 2rem;
    // padding-left: 0;
    padding-top: 2rem;
    align-items: center;

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
  
  const [hover, setHover] = React.useState(-1);
  
  const [twoDQuestion1, setTwoDQuestion1] = React.useState("");
  const [twoDQuestion2, setTwoDQuestion2] = React.useState("");
  const [twoDQuestion3, setTwoDQuestion3] = React.useState("");
  const [twoDQuestion4, setTwoDQuestion4] = React.useState("");
  
  const [twoDQuestion5, setTwoDQuestion5] = React.useState(0);
  
  const [twoDQuestion6, setTwoDQuestion6] = React.useState("");
  
  const [correct, setCorrect] = React.useState(false);
  
  const [data, setData] = React.useState([]);
  
  const handleQ1 = (value) => {
    setTwoDQuestion1(value);
  }
  
  const handleQ2 = (value) => {
    setTwoDQuestion2(value);
  }
  
  const handleQ3 = (value) => {
    setTwoDQuestion3(value);
  }
  
  const handleQ4 = (value) => {
    setTwoDQuestion4(value);
  }
  
  const handleQ5 = (value) => {
    setTwoDQuestion5(value);
  }
  
  const handleQ6 = (event) => {
    setTwoDQuestion6(event.target.value);
  }
  
  React.useEffect(() => {
    if (
      twoDQuestion1 != "" & 
      twoDQuestion2 != "" &
      twoDQuestion3 != "" & 
      twoDQuestion4 != "" & 
      twoDQuestion5 != 0
    ) {
      setData([oldData[0], oldData[1], twoDQuestion1, twoDQuestion2, twoDQuestion3, twoDQuestion4, twoDQuestion5, twoDQuestion6])
      setCorrect(true);
    }
  }, [twoDQuestion1, twoDQuestion2, twoDQuestion3, twoDQuestion4, twoDQuestion5, twoDQuestion6, correct])
  
  
  React.useEffect(() => {
    // console.log(data);
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
          <h1 style={{fontSize:"1.5rem", paddingBottom:"1rem"}}>Product Scenario</h1>
          
          <ContentText>
            The story, all names, characters, and incidents portrayed in this
            example are fictitious. No identification with actual persons
            (living or deceased), places, buildings, and products is intended or
            should be inferred.
          </ContentText>

          <ContentText>
            Our company, ClearSight Inc., is testing a new product design for
            our sunglasses lineup. We will show you the current design, then ask you for feedback.
          </ContentText>

            <ImageIcon>
              <Image
                src={Sunglasses1}
                alt="sunglasses"
                width={400}
                height={250}
              />
            </ImageIcon>
            
            <ImageIcon>
              <Image
                src={Sunglasses2}
                alt="sunglasses"
                width={400}
                height={180}
              />
            </ImageIcon>
            
            <ImageIcon>
              <Image
                src={Sunglasses3}
                alt="sunglasses"
                width={400}
                height={180}
              />
            </ImageIcon>
        
            <QuestionContainer>
            <ContentText>The design of the sunglasses appeals to me.</ContentText>
            
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="age"
              >
                <FormControlLabel value="5" control={<Radio />} label="Strongly Agree" onClick={()=>handleQ1(5)}/>
                <FormControlLabel value="4" control={<Radio />} label="Agree" onClick={()=>handleQ1(4)}/>
                <FormControlLabel value="3" control={<Radio />} label="Neither Agree nor Disagree" onClick={()=>handleQ1(3)}/>
                <FormControlLabel value="2" control={<Radio />} label="Disagree" onClick={()=>handleQ1(2)}/>
                <FormControlLabel value="1" control={<Radio />} label="Strongly Disagree" onClick={()=>handleQ1(1)}/>
              </RadioGroup>
            </FormControl>
          </QuestionContainer>
          
          <QuestionContainer>
            <ContentText>The sunglasses stands out from the other brands available in the market.</ContentText>
            
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="age"
              >
                <FormControlLabel value="5" control={<Radio />} label="Strongly Agree" onClick={()=>handleQ2(5)}/>
                <FormControlLabel value="4" control={<Radio />} label="Agree" onClick={()=>handleQ2(4)}/>
                <FormControlLabel value="3" control={<Radio />} label="Neither Agree nor Disagree" onClick={()=>handleQ2(3)}/>
                <FormControlLabel value="2" control={<Radio />} label="Disagree" onClick={()=>handleQ2(2)}/>
                <FormControlLabel value="1" control={<Radio />} label="Strongly Disagree" onClick={()=>handleQ2(1)}/>
              </RadioGroup>
            </FormControl>
          </QuestionContainer>

          <QuestionContainer>
            <ContentText>Based on the image, the quality of the sunglasses is good.</ContentText>
            
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="age"
              >
                <FormControlLabel value="5" control={<Radio />} label="Strongly Agree" onClick={()=>handleQ3(5)}/>
                <FormControlLabel value="4" control={<Radio />} label="Agree" onClick={()=>handleQ3(4)}/>
                <FormControlLabel value="3" control={<Radio />} label="Neither Agree nor Disagree" onClick={()=>handleQ3(3)}/>
                <FormControlLabel value="2" control={<Radio />} label="Disagree" onClick={()=>handleQ3(2)}/>
                <FormControlLabel value="1" control={<Radio />} label="Strongly Disagree" onClick={()=>handleQ3(1)}/>
              </RadioGroup>
            </FormControl>
          </QuestionContainer>
          
          <QuestionContainer>
            <ContentText>I would buy the sunglasses if it were available in the market.</ContentText>
            
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="age"
              >
                <FormControlLabel value="5" control={<Radio />} label="Strongly Agree" onClick={()=>handleQ4(5)}/>
                <FormControlLabel value="4" control={<Radio />} label="Agree" onClick={()=>handleQ4(4)}/>
                <FormControlLabel value="3" control={<Radio />} label="Neither Agree nor Disagree" onClick={()=>handleQ4(3)}/>
                <FormControlLabel value="2" control={<Radio />} label="Disagree" onClick={()=>handleQ4(2)}/>
                <FormControlLabel value="1" control={<Radio />} label="Strongly Disagree" onClick={()=>handleQ4(1)}/>
              </RadioGroup>
            </FormControl>
          </QuestionContainer>
          
          <QuestionContainer>
            <ContentText>
              On a scale of 1 - 10, how useful are the provided visualisations in
              helping you to answer the above 4 questions? For example, does the 
              visualisations provide enough information in helping you decide whether 
              you should buy it (irregardless of whether yes or no)?
            </ContentText>


            <Box
              sx={{
                width: 350,
                display: "flex",
                alignItems: "center",
              }}
            >
              <Rating
                name="hover-feedback"
                value={twoDQuestion5}
                max={10}
                size="large"
                getLabelText={getLabelText}
                onChange={(event, newValue) => {
                  handleQ5(newValue);
                }}
                onChangeActive={(event, newHover) => {
                  setHover(newHover);
                }}
                emptyIcon={
                  <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                }
              />
              {twoDQuestion5 !== null && (
                <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : twoDQuestion5]}</Box>
              )}
            </Box>
          </QuestionContainer>

          <QuestionContainer>
            <ContentText>Comments (Optional)</ContentText>

            <TextField
              id="outlined-multiline-static"
              label="E.g. The sunglasses is nice, but not my style."
              multiline
              rows={4}
              fullWidth
              onChange={(event)=>handleQ6(event)}
            />
          </QuestionContainer>

          <br />
          <br />
          
          { 
          correct 
          ?
          <Link style={{ textDecoration: "none" }}
            href={{
              pathname: "survey-3",
              query: data, // the data
            }}
        
          >
            <Button variant="contained" endIcon={<ArrowForwardIcon />}>
              Next
            </Button>
          </Link>
          :
          <Button disabled variant="contained" onClick={()=>handleClick()} endIcon={<ArrowForwardIcon />}>
            Next
          </Button>
        }
        </SubContainer>
      </MainContainer>
    </>
  );
}