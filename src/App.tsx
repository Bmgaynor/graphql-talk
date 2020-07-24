import React from 'react';
import { Deck, Slide, Heading, Image, FlexBox, Box, FullScreen, Progress, TemplateFn } from 'spectacle';
import colorPalettes from 'nice-color-palettes'

const colorPaletteNum = Math.round(Math.random() * 100)
const colorPalette = colorPalettes[colorPaletteNum]
console.log(`colorPaletteNum: ${colorPaletteNum}`)
console.log(`colorPalette: ${colorPalette.toString()}`)
const theme = {
  colors: {
    primary: colorPalette[0],
    secondary: colorPalette[1],
    tertiary: colorPalette[2],
    quartenary: colorPalette[3]
  }
};

const template: TemplateFn = () => (
  <FlexBox
    justifyContent="space-between"
    position="absolute"
    bottom={0}
    width={1}
  >
    <Box padding="1em">
      <Progress size={10} color='white' />
    </Box>
  </FlexBox>
);


const App: React.FC = () => {
  return (
    <Deck theme={theme} template={template}>
      <Slide>
        <Heading>Hey</Heading>
      </Slide>
      <Slide>
        <Heading>HOooo</Heading>
        <Image src='./graph-talk/images/AutoCompleteSchema.png'></Image>
      </Slide>
    </Deck>
  );
}

export default App;
