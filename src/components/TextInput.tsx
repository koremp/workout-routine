import {
  Box,
  Typography,
  TextField,
} from '@mui/material';

const TextInput = ({ label }: { label: string }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography>{label}</Typography>
      <TextField label={label} />
    </Box>
  );
};

export default TextInput;