import React from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

const SearchField = ({ onSearch }) => {
  const handleSearch = (event) => {
    // Call the onSearch callback with the entered value
    onSearch(event.target.value);
  };

  return (
    
      <TextField
      sx={{
        background:'white',
        borderRadius:4,
        marginTop:1,
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#CACACA'
            },
            '&:hover fieldset': {
              borderColor: '#007AFF'
            },
            '&.Mui-focused hover': {
              borderColor: '#007AFF'
            },
            '&.Mui-focused fieldset': {
              borderColor: '007AFF'
            }
          },
        
        '& legend': { display: 'none' }, '& fieldset': { top: 0 },
      }}
    //   sx={{ '& legend': { display: 'none' }, '& fieldset': { top: 0 },}} 
        label="Search"
        variant="outlined"
        size="small"
        fullWidth
        // onChange={handleSearch}
        InputProps={{
          endAdornment: (
            <IconButton type="submit" aria-label="search">
              <SearchIcon />
            </IconButton>
          ),
        }}
      />
 
  );
};

export default SearchField;
