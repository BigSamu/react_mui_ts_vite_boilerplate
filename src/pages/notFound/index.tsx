import { Stack, styled } from '@mui/material';

const Wrapper = styled('div')`
  text-align: center;
`;

function NotFound() {
  return (
    <Stack>
      <Wrapper>
        <h1>Page Not Found</h1>
      </Wrapper>
    </Stack>
  );
}

export default NotFound;
