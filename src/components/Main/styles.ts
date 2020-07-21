import styled from 'styled-components';
import { ArrowBack } from 'styled-icons/material';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: min(601px, 100%); /* menor valor entre os 2 */

  /* @media () */

  background: red;
`;

export const Header = styled.div``;

export const BackIcon = styled(ArrowBack)``;

export const ProfileInfo = styled.div``;
