import {
    Box,
    Button,
    Chip,
    Container,
    makeStyles,
    TextField,
    Typography,
  } from '@material-ui/core'
  import Autocomplete from '@material-ui/lab/Autocomplete'
  
  import React from 'react'
  
  const useStyle = makeStyles({
    popupIndicator: {
      display: 'none',
    },
    root: {
      borderRadius: 0,
    },
    input: {
      width: 'auto !important',
    },
  })
  
  const handleDelete = () => {
    console.info('You clicked the delete icon.')
  }
  
  function Languages() {
    const classes = useStyle()
    return (
      <Container style={{ marginTop: '20px', overflow: 'auto' }}>
        <Typography style={{ fontWeight: 'bold' }}>Languages</Typography>
        <Autocomplete
          classes={{
            popupIndicator: classes.popupIndicator,
            input: classes.input,
          }}
          multiple
          disableClearable
          id="tags-outlined"
          options={languages}
          getOptionLabel={(option) => option.name}
          filterSelectedOptions
          style={{ background: 'red' }}
          ChipProps={{
            size: 'small',
            variant: 'outlined',
            classes: {
              root: classes.root,
            },
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="outlined"
              placeholder="Enter a language"
              style={{ background: 'white' }}
            />
          )}
        />
        <Box m={2}></Box>
        <Button
          onClick={handleDelete}
          variant="contained"
          color="primary"
          style={{ textTransform: 'none', fontWeight: 'bold' }}
        >
          Clear Languages
        </Button>
      </Container>
    )
  }
  
  export default Languages
  
  // Use below function to filter https://stackoverflow.com/a/44313087/711609
  // @ts-ignore
  // function filterByValue(string:string) {
    // return languages.filter((o) =>
      // Object.keys(o).some((k) =>
      // @ts-ignore
        // o[k].toLowerCase().includes(string.toLowerCase()),
      // ),
    // )
  // }

const languages = [
  { id:"af", nativeName:"Afrikaans", name:"Afrikaans" },
  { id:"bn", nativeName:"???????????????",     name:"Bengali" },
  { id:"ca", nativeName:"Catal??",   name:"Catalan" },
  { id:"cs", nativeName:"??e??tina",  name:"Czech" },
  { id:"da", nativeName:"Dansk",    name:"Danish" },
  { id:"de", nativeName:"Deutsch",  name:"German" },
  { id:"el", nativeName:"????????????????", name:"Greek" },
  { id:"en", nativeName:"English",  name:"English" },
  { id:"es", nativeName:"Espa??ol",  name:"Spanish" },
  { id:"fi", nativeName:"Suomi",    name:"Finnish" },
  { id:"fil",nativeName:"Filipino", name:"Filipino" },
  { id:"fr", nativeName:"Fran??ais", name:"French" },
  { id:"hi", nativeName:"??????????????????",      name:"Hindi" },
  { id:"hu", nativeName:"Magyar",   name:"Hungarian" },
  { id:"id", nativeName:"Bahasa Indonesia", name:"Indonesian" },
  { id:"it", nativeName:"Italiano", name:"Italian" },
  { id:"ja", nativeName:"?????????",    name:"Japanese" },
  { id:"ko", nativeName:"?????????",     name:"Korean" },
  { id:"ms", nativeName:"Bahasa Malaysia", name:"Malay" },
  { id:"nb", nativeName:"Norsk-Bokm??l", name:"Norwegian" },
  { id:"nl", nativeName:"Nederlands", name:"Dutch" },
  { id:"pl", nativeName:"Polski",    name:"Polish" },
  { id:"pt", nativeName:"Portugu??s", name:"Portuguese" },
  { id:"ro", nativeName:"Rom??n??",    name:"Romanian" },
  { id:"ru", nativeName:"??????????????",   name:"Russian" },
  { id:"sl", nativeName:"Sloven????ina", name:"Slovenian" },
  { id:"sq", nativeName:"Shqip",     name:"Albanian" },
  { id:"sv", nativeName:"Svenska",   name:"Swedish" },
  { id:"sw", nativeName:"Kiswahili", name:"Swahili" },
  { id:"th", nativeName:"?????????????????????",   name:"Thai" },
  { id:"tr", nativeName:"T??rk??e",    name:"Turkish" },
  { id:"uk", nativeName:"????????????????????", name:"Ukranian" },
  { id:"vi", nativeName:"Ti???ng Vi???t", name:"Vietnamese" },
  { id:"zh", nativeName:"??????(??????)",  name:"Chinese" }
]
