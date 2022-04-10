import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 3, text: 'Months learning'},
  { number: 12, text: 'in Weeks', },
  { number: 89, text: 'in Days', },
  { number: "24.38%", text: 'of the Year', }
];

const Acomplishments = () => (
  <Section>
    <SectionDivider />
    <br />
    <br />
    <br />
    <SectionTitle>Generation Learning Records</SectionTitle>
      <Boxes>
        {data.map((card, Index) => (
          <Box key={Index}>
            <BoxNum>{card.number}+</BoxNum>
            <BoxText>{card.text}</BoxText>
          </Box>
        ))}
      </Boxes>
  </Section>
);

export default Acomplishments;
